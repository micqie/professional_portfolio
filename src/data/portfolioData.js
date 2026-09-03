export const profile = {
  name: 'Micah D. Lago',
  initials: 'ML',
  title: 'Information Technology Student and Aspiring Software Developer',
  shortTitle: 'Information Technology Student',
  program: 'Bachelor of Science in Information Technology',
  level: '4th-Year College Student',
  graduation: 'Expected Graduation: 2027',
  email: 'midu.lago.coc@phinmaed.com',
  phone: '+63 965 915 3090',
  phoneHref: '+639659153090',
  github: 'https://github.com/micqie',
  linkedin: 'https://www.linkedin.com/in/micah-dusil-lago-223998340/',
  currentPortfolio: 'https://micqie.github.io/profile/',
  summary: 'I am a fourth-year Information Technology student with practical experience in developing web-based systems, database-driven applications, mobile applications, and user-focused interfaces. I enjoy solving real-world problems using technology and have worked with PHP, JavaScript, MySQL, Flutter, and related development tools. I am seeking professional opportunities where I can apply my academic knowledge, contribute to meaningful projects, and continuously develop my skills as an IT professional.',
  about: 'I am a fourth-year BSIT student interested in software development, database systems, UI/UX, and practical information systems. My academic and practical work includes management systems, QR-code attendance solutions, appointment systems, clinic records, grading systems, and a cross-platform learning application.',
  // Replace this path if you add an updated professional photo later.
  photo: '/profilepic.png',
  // Add `resume: '/resume/micah-lago-resume.pdf'` after placing the real PDF in public/resume.
  resume: null,
}

export const navItems = [
  ['Home', 'home'], ['About', 'about'], ['Skills', 'skills'], ['Experience', 'experience'],
  ['Projects', 'projects'], ['Education', 'education'], ['Credentials', 'credentials'], ['Contact', 'contact'],
]

export const skills = [
  { group: 'Programming Languages', items: ['PHP', 'JavaScript', 'Python', 'Java', 'Dart'] },
  { group: 'Frontend & Frameworks', items: ['HTML', 'CSS', 'Bootstrap', 'Flutter', 'Axios'] },
  { group: 'Database & Backend', items: ['MySQL', 'PDO', 'REST-style APIs'] },
  { group: 'Development Tools', items: ['Git', 'GitHub'] },
  { group: 'Areas of Knowledge', items: ['Software Development', 'Database Management', 'UI/UX Design'] },
  { group: 'Professional Skills', items: ['Work Ethics', 'Teamwork and Collaboration', 'Problem-Solving', 'Adaptability', 'Trainability'] },
]

export const experience = {
  position: 'Library Monitoring System Developer',
  organization: 'PHINMA – Cagayan de Oro College Library',
  period: 'April 2025 – Present',
  type: 'Practical student-development experience',
  description: 'Developed a web-based Library Monitoring System to automate visitor attendance using QR-code scanning.',
  responsibilities: [
    'Led the system’s development, testing, and maintenance.',
    'Implemented QR-code-based visitor time-in and time-out monitoring.',
    'Managed attendance information through a centralized database.',
    'Continuously improved the system according to user requirements.',
  ],
}

// Add real screenshot paths, repository URLs, and live URLs to the matching project only when available.
export const projects = [
  {
    title: 'Father & Sons Music Academy Management System', category: 'Capstone Project', period: '2025–2026',
    technologies: ['PHP', 'PDO API', 'HTML', 'Bootstrap', 'CSS', 'Vanilla JavaScript', 'Axios', 'MySQL', 'Git'],
    objective: 'Develop a web-based system that centralizes and improves the management of a multi-branch music academy.',
    contributions: ['QR-code-based attendance', 'Lesson-session tracking', 'Student and instructor management', 'Scheduling management', 'Payment-record management', 'Multi-branch operations'],
    outcome: 'Produced a centralized capstone system designed to support the academy’s administrative and lesson-management processes.',
    screenshots: [
      { src: '/assets/fas/fas2.png', alt: 'Father & Sons Music Academy public website home page on desktop', caption: 'Public website — desktop home page' },
      { src: '/assets/fas/phone1.png', alt: 'Father & Sons Music Academy public website home page on mobile', caption: 'Public website — mobile home page' },
      { src: '/assets/fas/phone2.png', alt: 'Father & Sons Music Academy courses page on mobile', caption: 'Public website — mobile courses page' },
      { src: '/assets/fas/student1.png', alt: 'Father & Sons Music Academy student performance dashboard in dark mode', caption: 'Student dashboard — dark mode' },
      { src: '/assets/fas/student2.png', alt: 'Father & Sons Music Academy student performance dashboard in light mode', caption: 'Student dashboard — light mode' },
    ],
    repository: null, liveUrl: null,
  },
  {
    title: 'Library Monitoring System', category: 'Student Development Project', period: 'April 3, 2025 – December 9, 2025, developed on and off',
    technologies: ['PHP', 'PDO API', 'HTML', 'Bootstrap', 'CSS', 'Axios', 'Vanilla JavaScript', 'MySQL', 'Git'],
    objective: 'Automate library visitor attendance and replace manual visitor monitoring with a QR-code-based system.',
    contributions: ['QR-code visitor identification', 'Automated time-in recording', 'Time-out monitoring', 'Centralized attendance database', 'Visitor-record management'],
    outcome: 'Created a centralized system that supports more organized library attendance monitoring.',
    screenshots: [
      { src: '/assets/library/Screenshot 2026-06-26 232111.png', alt: 'Library Monitoring System login page', caption: 'Library login page' },
      { src: '/assets/library/Screenshot 2026-06-26 232528.png', alt: 'Library Monitoring System departments and courses management screen', caption: 'Departments and courses management' },
      { src: '/assets/library/Screenshot 2026-06-26 232922.png', alt: 'Library Monitoring System student visit history screen', caption: 'Student library visit history' },
      { src: '/assets/library/Screenshot 2026-06-26 232951.png', alt: 'Library Monitoring System QR code displayed on mobile', caption: 'Mobile QR-code view' },
    ],
    repository: null, liveUrl: 'https://coc-studentinfo.net/library/attendance/',
  },
  {
    title: 'Game Dev Portal', category: 'Game Development', period: null,
    technologies: ['HTML', 'CSS', 'Vanilla JavaScript'],
    objective: 'Provide an online portal where visitors can access and play browser-based games.',
    contributions: ['Browser-based game access', 'Online game launching', 'GitHub Pages hosting'],
    outcome: 'Published a GitHub Pages portal where visitors can play the games online.',
    screenshots: [
      { src: '/assets/gamedev/gamedev.png', alt: 'Game Dev Portal home page with featured game and game catalog', caption: 'Game portal — home and catalog' },
      { src: '/assets/gamedev/gamedev2.png', alt: 'Game Dev Portal desktop catalog showing browser games', caption: 'Desktop game catalog' },
      { src: '/assets/gamedev/gamedev3.png', alt: 'Pandesal Bomber game detail page in the Game Dev Portal', caption: 'Game detail and play page' },
      { src: '/assets/gamedev/phoneview_1.png', alt: 'Game Dev Portal game catalog on mobile', caption: 'Mobile game catalog' },
      { src: '/assets/gamedev/phoneview_2.png', alt: 'Game Dev Portal game detail page on mobile', caption: 'Mobile game detail' },
    ],
    repository: null, liveUrl: 'https://micqie.github.io/gamedev_portal/',
  },
  {
    title: 'McStuffin’s Clinic Recording System', category: 'Academic Project', period: 'September 2, 2025 – October 30, 2025',
    technologies: ['PHP', 'PDO API', 'HTML', 'Bootstrap', 'CSS', 'Axios', 'Vanilla JavaScript', 'MySQL', 'Git'],
    objective: 'Create a clinic management system for organizing patient information and clinic operations.',
    contributions: ['Role-based user access', 'Patient-record management', 'Consultation records', 'Laboratory requests and results', 'Medicine-supply monitoring', 'User management'],
    outcome: 'Developed a functional academic system that centralizes important clinic records and processes.',
    screenshots: [
      { src: '/assets/clinic/Screenshot 2026-06-28 214320.png', alt: 'McStuffin’s Clinic public home page', caption: 'Clinic public home page' },
      { src: '/assets/clinic/Screenshot 2026-06-28 221420.png', alt: 'McStuffin’s Clinic lab results management screen', caption: 'Lab results management' },
      { src: '/assets/clinic/Screenshot 2026-06-28 221524.png', alt: 'McStuffin’s Clinic patient queue management screen', caption: 'Patient queue management' },
      { src: '/assets/clinic/Screenshot 2026-06-28 221618.png', alt: 'McStuffin’s Clinic final receipt screen', caption: 'Payment receipt workflow' },
      { src: '/assets/clinic/Screenshot 2026-06-28 221711.png', alt: 'McStuffin’s Clinic patient appointments screen', caption: 'Patient appointment history' },
    ],
    repository: null, liveUrl: null,
  },
  {
    title: 'Learning Management App', category: 'Academic Project', period: 'February 2, 2025 – February 18, 2025',
    technologies: ['Flutter', 'Dart'],
    objective: 'Develop a cross-platform learning application for students.',
    contributions: ['Access to learning materials', 'Student activities', 'Learning-progress tracking', 'Cross-platform interface'],
    outcome: 'Created a student-focused mobile application prototype for accessing and monitoring learning activities.',
    screenshots: [
      { src: '/assets/learning_app/Screenshot 2026-06-28 174310.png', alt: 'Learning Management App welcome screen', caption: 'Application welcome screen' },
      { src: '/assets/learning_app/Screenshot 2026-06-28 174222.png', alt: 'Learning Management App course progress screen', caption: 'Course progress and lessons' },
      { src: '/assets/learning_app/Screenshot 2026-06-28 174251.png', alt: 'Learning Management App computer fundamentals dictionary', caption: 'Learning dictionary' },
      { src: '/assets/learning_app/Screenshot 2026-06-28 174143.png', alt: 'Learning Management App student profile screen', caption: 'Student profile and topics' },
    ],
    repository: null, liveUrl: null,
  },
]

export const education = {
  degree: 'Bachelor of Science in Information Technology', school: 'PHINMA – Cagayan de Oro College',
  period: '2023 – Expected 2027', status: 'Currently a 4th-Year BSIT Student',
}

export const credentials = [
  {
    type: 'Credential', title: 'Programming Contest Champion', organization: 'COC IT Days', period: 'October 2025',
    description: 'Champion in a team-based programming competition.',
    evidence: 'Team Certificate of Programming Contest Champion, COC IT Days 2025.',
    images: [
      { src: '/assets/cert.jpe', alt: 'Programming Contest Team Category Champion certificate and medal from COC IT Days 2025', caption: 'Team champion certificate and medal' },
    ],
  },
  {
    type: 'Activity', title: 'Foundation Day Photobooth Team Member', organization: 'COC Foundation Day', period: 'August 2025',
    description: 'Assisted in testing the Foundation Day Photobooth application.', evidence: null,
    images: [
      { src: '/assets/foundation/photobooth.png', alt: 'Foundation Day photobooth team operating the application', caption: 'Photobooth application testing' },
      { src: '/assets/foundation/photobooth2.png', alt: 'Foundation Day photobooth in use during the event', caption: 'Photobooth event setup' },
      { src: '/assets/foundation/photobooth3.png', alt: 'Foundation Day photobooth output featuring the team', caption: 'Foundation Day photobooth output' },
    ],
  },
]
