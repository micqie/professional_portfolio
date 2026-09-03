import { chromium } from 'playwright'

const browser = await chromium.launch({
  headless: true,
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
})

const errors = []
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })
page.on('console', (message) => message.type() === 'error' && errors.push(message.text()))
page.on('pageerror', (error) => errors.push(error.message))

await page.goto('http://127.0.0.1:4173', { waitUntil: 'networkidle' })

const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'credentials', 'contact']
for (const id of sectionIds) {
  if (!(await page.locator(`#${id}`).count())) throw new Error(`Missing section: ${id}`)
}
if ((await page.locator('.technology-item').count()) !== 26) throw new Error('Technology marquee is incomplete')
if ((await page.locator('.technology-track').evaluate((element) => getComputedStyle(element).animationName)) !== 'technology-scroll') {
  throw new Error('Technology marquee animation is not active')
}
const aboutCardsFollowContent = await page.locator('.about-grid').evaluate((grid) => {
  const heading = grid.querySelector('.section-heading').getBoundingClientRect()
  const copy = grid.querySelector('.about-copy').getBoundingClientRect()
  const cards = grid.querySelector('.interest-grid').getBoundingClientRect()
  return cards.top >= Math.max(heading.bottom, copy.bottom)
})
if (!aboutCardsFollowContent) throw new Error('About cards are not positioned beneath the main content')

if ((await page.getByRole('button', { name: /view project details/i }).count()) !== 5) {
  throw new Error('Expected five project detail buttons')
}
if ((await page.getByRole('link', { name: /visit .* live site/i }).count()) !== 2) {
  throw new Error('Expected live-site links on the two hosted project cards')
}
const portfolioImages = page.locator('.project-card img, .portrait-frame img, .credential-gallery img')
for (let index = 0; index < await portfolioImages.count(); index += 1) {
  const portfolioImage = portfolioImages.nth(index)
  await portfolioImage.scrollIntoViewIfNeeded()
  await portfolioImage.evaluate((image) => image.complete || new Promise((resolve) => image.addEventListener('load', resolve, { once: true })))
  if (!(await portfolioImage.evaluate((image) => image.naturalWidth > 0))) {
    throw new Error(`Portfolio image failed to load: ${await portfolioImage.getAttribute('src')}`)
  }
}

const firstProject = page.getByRole('button', { name: /view project details/i }).first()
await firstProject.click()
const dialog = page.getByRole('dialog')
await dialog.waitFor({ state: 'visible' })
if ((await page.locator('body').evaluate((element) => element.style.overflow)) !== 'hidden') {
  throw new Error('Opening the project modal did not lock page scrolling')
}
await page.keyboard.press('Shift+Tab')
if (!(await page.locator('.project-gallery').evaluate((element) => element === document.activeElement))) {
  throw new Error('Reverse focus did not wrap to the final modal control')
}
await page.keyboard.press('Tab')
if (!(await page.locator('.modal-close').evaluate((element) => element === document.activeElement))) {
  throw new Error('Focus escaped the modal instead of wrapping to close')
}
await page.keyboard.press('Escape')
await dialog.waitFor({ state: 'detached' })
if (!(await firstProject.evaluate((element) => element === document.activeElement))) {
  throw new Error('Focus did not return to the selected project button')
}
await firstProject.click()
await dialog.waitFor({ state: 'visible' })
await page.locator('.modal-backdrop').click({ position: { x: 5, y: 5 } })
await dialog.waitFor({ state: 'detached' })

const invalidExternalLinks = await page.locator('a[href^="http"]').evaluateAll((links) =>
  links.filter((link) => link.target !== '_blank' || !link.rel.includes('noopener') || !link.rel.includes('noreferrer')).map((link) => link.href),
)
if (invalidExternalLinks.length) throw new Error(`Unsafe external links: ${invalidExternalLinks.join(', ')}`)
if (await page.getByRole('link', { name: /repository/i }).count()) throw new Error('Unavailable repository links were rendered')
if (await page.getByRole('link', { name: /view résumé/i }).count()) throw new Error('Unavailable résumé was rendered as a link')

for (const [title, expectedUrl] of [
  ['Library Monitoring System', 'https://coc-studentinfo.net/library/attendance/'],
  ['Game Dev Portal', 'https://micqie.github.io/gamedev_portal/'],
]) {
  await page.locator('.project-card').filter({ hasText: title }).getByRole('button', { name: /view project details/i }).click()
  const liveLink = page.getByRole('link', { name: /live project/i })
  if ((await liveLink.getAttribute('href')) !== expectedUrl) throw new Error(`Incorrect live URL for ${title}`)
  if ((await liveLink.getAttribute('target')) !== '_blank') throw new Error(`Live URL for ${title} does not open in a new tab`)
  await page.keyboard.press('Escape')
  await dialog.waitFor({ state: 'detached' })
}

await page.setViewportSize({ width: 390, height: 844 })
await page.reload({ waitUntil: 'networkidle' })
const hasHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth)
if (hasHorizontalOverflow) throw new Error('Mobile layout has horizontal overflow')
const menuButton = page.locator('.menu-toggle')
await menuButton.waitFor({ state: 'visible' })
await menuButton.click()
if ((await menuButton.getAttribute('aria-expanded')) !== 'true') throw new Error('Mobile menu did not open')
await page.keyboard.press('Escape')
if ((await menuButton.getAttribute('aria-expanded')) !== 'false') throw new Error('Mobile menu did not close with Escape')
if (!(await menuButton.evaluate((element) => element === document.activeElement))) throw new Error('Mobile menu focus was not restored')
await menuButton.click()
await page.getByRole('link', { name: 'Contact', exact: true }).click()
if (!page.url().endsWith('#contact')) throw new Error('Mobile section link did not navigate to Contact')
const contactTop = await page.locator('#contact').evaluate((element) => element.getBoundingClientRect().top)
const headerHeight = await page.locator('.site-header').evaluate((element) => element.getBoundingClientRect().height)
if (contactTop < headerHeight) throw new Error('Mobile navigation positions sections beneath the sticky header')

if (errors.length) throw new Error(`Browser console errors:\n${errors.join('\n')}`)
console.log('Browser checks passed: desktop and mobile layouts, 8 section anchors, 5 project dialogs, verified live URLs, Escape/focus return, safe links, and zero console errors.')
await browser.close()
