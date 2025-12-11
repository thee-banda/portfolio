import { computed } from 'vue';

type Lang = 'th' | 'en';

const messages = {
  th: {
    navbar: {
      about: 'เกี่ยวกับ',
      expertise: 'ทักษะ',
      achievements: 'รางวัล',
      work: 'ผลงาน',
      experience: 'ประสบการณ์',
      contact: 'ติดต่อ',
    },
    hero: {
      kicker: 'Junior Developer',
      title: 'สวัสดี ผม Thee Banda',
      subtitle:
        'นักพัฒนาเว็บและแอประดับ Junior โฟกัสบนประสบการณ์ผู้ใช้ ใช้ React, Nuxt และ Flutter พร้อมตั้งใจเรียนรู้และส่งมอบงานที่ลื่นไหล',
      ctaPrimary: 'ดูผลงาน',
      ctaSecondary: 'ติดต่อผม',
      badges: ['เทคท่องเที่ยว', 'Hybrid Apps', 'Data Viz'],
    },
    about: {
      kicker: 'เกี่ยวกับ',
      heading: 'สร้างงานด้วยความตั้งใจและใส่ใจรายละเอียด',
      p1: 'ผม Thee Banda นักพัฒนา DevOps และฟูลสแต็กที่ชอบสร้างประสบการณ์ตั้งแต่ CI/CD ไปจนถึงหน้าจอสุดท้าย',
      p2: 'ตอนนี้อยู่ในระดับ Junior ทำงานได้ดีในทีมที่ให้ความสำคัญกับการออกแบบ รอบปล่อยฟีเจอร์ที่เร็ว และการสื่อสารที่ชัดเจน',
      quote:
        'บางครั้งการทำสิ่งที่เกินตัว ไม่ได้หมายถึงการหลีกเลี่ยงการเรียนรู้\nแต่คือการบอกตัวเองว่า นี่แหละ จุดที่เราอยากไปให้ถึงในอนาคต”',
      availabilityTitle: 'เปิดรับงานฟรีแลนซ์',
      availabilitySub: 'เลือกสรรโครงการ',
      availabilityNote: 'Remote / Hybrid',
    },
    expertise: {
      kicker: 'สิ่งที่ทำ',
      heading: 'ทักษะของผม',
      cards: [
        {
          kicker: 'พัฒนาซอฟต์แวร์',
          title: 'ออกแบบและสร้างระบบที่ยืดหยุ่น',
          copy:
            'คล่องทั้งแนวคิดเชิงฟังก์ชันและ OOP สนใจ DX ที่ช่วยให้ทีมส่งงานได้ไวและมั่นใจ',
          skills: ['TypeScript / JavaScript', 'Python', 'Java', 'Dart', 'Testing & CI'],
        },
        {
          kicker: 'Frontend — React / Vue / Nuxt',
          title: 'อินเทอร์เฟซที่ออกแบบตั้งใจ',
          copy:
            'ประสบการณ์ 5+ ปี สร้าง UI ที่เร็ว เข้าถึงได้ ใส่ใจ motion, theming, และ responsive',
          skills: ['React / Next.js / Nuxt', 'Tailwind / CSS / SCSS', 'Design systems & Storybook', 'Analytics & A/B'],
        },
        {
          kicker: 'Flutter / Mobile',
          title: 'ประสบการณ์ข้ามแพลตฟอร์ม',
          copy:
            'พัฒนาแอป Android/iOS ด้วย Flutter เชื่อม API เรียบร้อย คิดเผื่อออฟไลน์ และออโต้ดีพลอย',
          skills: ['Flutter', 'State management', 'API integration', 'Store deploy & CI/CD'],
        },
      ],
    },
    achievements: {
      kicker: 'การแข่งขัน',
      heading: 'ผลงานการแข่งขัน',
      itemTitle: 'การแข่งขันทักษะระดับอาชีวศึกษา',
      itemMeta: '2025 · VEC Skill Thailand',
      itemNote: '1 รายการ · 2 ระดับ',
      provinceTitle: 'ระดับจังหวัด (สระแก้ว)',
      provinceResult: 'ชนะเลิศอันดับ 1',
      regionTitle: 'ระดับภาคตะวันออกและกรุงเทพมหานคร',
      regionResult: 'อันดับ 4 ของภูมิภาค',
      provinceDetails: {
        title: 'ระดับจังหวัด (สระแก้ว)',
        certificate: '/certificates/province-certificate.jpg',
        details: [
          '🏆 ชนะเลิศอันดับ 1 ในการแข่งขันทักษะระดับอาชีวศึกษา',
          '📅 วันที่แข่งขัน: 15-17 มีนาคม 2025',
          '📍 สถานที่: วิทยาลัยอาชีวศึกษาสระแก้ว',
          '👥 จำนวนผู้เข้าแข่งขัน: 12 คน จาก 6 สถาบัน',
          '💻 สาขาการแข่งขัน: Web Development และ Application Development',
          '⏱️ เวลาการแข่งขัน: 6 ชั่วโมง (3 ชั่วโมงทฤษฎี + 3 ชั่วโมงปฏิบัติ)',
          '🎯 โจทย์การแข่งขัน: พัฒนาเว็บแอปพลิเคชันระบบจัดการร้านค้าออนไลน์',
          '🛠️ เทคโนโลยีที่ใช้: React, Node.js, MongoDB, Tailwind CSS',
          '✨ จุดเด่นของผลงาน: UI/UX ที่ใช้งานง่าย, Responsive Design, Real-time Updates',
          '📊 คะแนนที่ได้รับ: 92/100 (ทฤษฎี 45/50, ปฏิบัติ 47/50)',
          '🎓 ได้รับรางวัลและใบประกาศนียบัตรจากสถาบันอาชีวศึกษา',
          '🌟 ได้รับสิทธิ์เข้าร่วมแข่งขันระดับภูมิภาค',
        ],
      },
      regionDetails: {
        title: 'ระดับภาคตะวันออกและกรุงเทพมหานคร',
        certificate: '/certificates/region-certificate.jpg',
        details: [
          '🥉 อันดับ 4 ของภูมิภาคในการแข่งขันทักษะระดับอาชีวศึกษา',
          '📅 วันที่แข่งขัน: 10-12 เมษายน 2025',
          '📍 สถานที่: วิทยาลัยเทคนิคกรุงเทพ',
          '👥 จำนวนผู้เข้าแข่งขัน: 24 คน จาก 12 จังหวัด',
          '🌐 ระดับการแข่งขัน: ภูมิภาค (ภาคตะวันออกและกรุงเทพมหานคร)',
          '⏱️ เวลาการแข่งขัน: 8 ชั่วโมง (4 ชั่วโมงทฤษฎี + 4 ชั่วโมงปฏิบัติ)',
          '🎯 โจทย์การแข่งขัน: พัฒนาแอปพลิเคชันระบบจองโรงแรมพร้อม Payment Gateway',
          '🛠️ เทคโนโลยีที่ใช้: Next.js, TypeScript, PostgreSQL, Stripe API, Docker',
          '✨ จุดเด่นของผลงาน: Server-Side Rendering, API Integration, Security Best Practices',
          '📊 คะแนนที่ได้รับ: 85/100 (ทฤษฎี 42/50, ปฏิบัติ 43/50)',
          '🤝 ได้รับประสบการณ์การแข่งขันกับผู้เข้าแข่งขันจากหลายจังหวัด',
          '💡 ได้รับคำแนะนำจากคณะกรรมการและผู้เชี่ยวชาญในวงการ',
          '📈 พัฒนาทักษะการทำงานภายใต้ความกดดันและเวลา',
          '🎓 ได้รับใบประกาศนียบัตรและรางวัลจาก VEC Skill Thailand',
        ],
      },
      closeButton: 'ปิด',
      clickHint: 'คลิกเพื่อดูรายละเอียด',
    },
    work: {
      kicker: 'ผลงานที่คัดเลือก',
      heading: 'โปรเจ็กต์ที่เชื่อมผู้ใช้กับผลิตภัณฑ์',
      cta: 'เช็คคิวว่าง →',
      projects: [
        {
          tag: 'เว็บแอป',
          title: 'แพลตฟอร์มท่องเที่ยว/อีเวนต์',
          copy:
            'ประสบการณ์จอง B2C & B2B พร้อมสต็อกเรียลไทม์ แดชบอร์ดลูกค้า และ analytics ด้วย React/Next.js',
          tech: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe', 'SSR'],
        },
        {
          tag: 'Data Visualization',
          title: 'City Insights Dashboard',
          copy:
            'แผนที่อินเทอร์แอคทีฟและการเล่าเรื่องด้วยข้อมูล ปรับให้ใช้งานได้ดีทั้งมือถือและเดสก์ท็อป',
          tech: ['Vue', 'Nuxt', 'Mapbox', 'D3'],
        },
        {
          tag: 'แอปข้ามแพลตฟอร์ม',
          title: 'Telehealth Mobile Suite',
          copy:
            'แอป Flutter สำหรับสื่อสาร นัดหมาย และดูเวชระเบียนแบบออฟไลน์ได้อย่างปลอดภัย',
          tech: ['Flutter', 'Dart', 'REST', 'Firebase'],
        },
      ],
    },
    experience: {
      kicker: 'ประสบการณ์',
      heading: 'เส้นทางอาชีพ',
      roles: [
        {
          title: 'Intern ฝึกงาน (กำลังเปิดรับ)',
          company: 'ตำแหน่งว่าง 2025',
          period: '2025 — รอคุณรับเข้าทีม',
          location: 'Remote / Hybrid',
          copy:
            'ข้อมูลรายละเอียดถูกเบลอไว้ชั่วคราว เพราะกำลังรอให้คุณเป็นคนเปิดไฟเขียวให้เริ่มฝึกงานที่นี่',
          skills: ['DevOps', 'Frontend', 'Flutter', 'CI/CD', 'Design systems'],
        },
      ],
    },
    contact: {
      kicker: 'ติดต่อ',
      heading: 'พูดคุยหรือเริ่มโปรเจ็กต์',
      intro: 'อยากทำงานร่วมกัน มีคำถาม หรือทักทายได้เลย',
      emailLabel: 'อีเมล',
      phoneLabel: 'โทร',
      locationLabel: 'ที่อยู่',
      form: {
        name: 'ชื่อ',
        email: 'อีเมล',
        message: 'ข้อความ',
        submit: 'ส่งข้อความ',
        placeholders: {
          name: 'ชื่อของคุณ',
          email: 'you@example.com',
          message: 'เขียนข้อความ...',
        },
      },
    },
  },
  en: {
    navbar: {
      about: 'About',
      expertise: 'Expertise',
      achievements: 'Achievements',
      work: 'Work',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      kicker: 'Junior Developer',
      title: "Hi, I'm Thee Banda",
      subtitle:
        'Junior frontend & app developer focused on thoughtful experiences with React, Nuxt, and Flutter — pairing clean design systems with reliable delivery while learning fast.',
      ctaPrimary: 'View projects',
      ctaSecondary: 'Get in touch',
      badges: ['Travel Tech', 'Hybrid Apps', 'Data Viz'],
    },
    about: {
      kicker: 'About',
      heading: 'Building with care and curiosity',
      p1: 'I am Thee Banda, a junior DevOps and full-stack developer who loves crafting experiences end-to-end, from CI/CD to the final pixels.',
      p2: 'I thrive in teams that value design thinking, fast iteration, and clear communication as I keep leveling up.',
      quote:
        "Pushing beyond your current limits isn’t avoiding learning — it’s telling yourself, “this is exactly where I want to grow into.”",
      availabilityTitle: 'Available for select freelance projects',
      availabilitySub: 'Pick the right projects',
      availabilityNote: 'Remote / Hybrid',
    },
    expertise: {
      kicker: 'What I do',
      heading: 'My Expertise',
      cards: [
        {
          kicker: 'Software Development',
          title: 'Engineering resilient products',
          copy:
            'Comfortable in functional and OOP styles. I care about architecture and DX that help teams ship quickly.',
          skills: ['TypeScript / JavaScript', 'Python', 'Java', 'Dart', 'Testing & CI'],
        },
        {
          kicker: 'Frontend — React / Vue / Nuxt',
          title: 'Interfaces with intention',
          copy:
            'Five-plus years building performant, accessible UIs with attention to motion, theming, and responsive layouts.',
          skills: ['React / Next.js / Nuxt', 'Tailwind / CSS / SCSS', 'Design systems & Storybook', 'Analytics & A/B'],
        },
        {
          kicker: 'Flutter / Mobile',
          title: 'Cross-platform experiences',
          copy:
            'Shipping Android and iOS apps with Flutter, with clean API integrations, offline-first thinking, and release automation.',
          skills: ['Flutter', 'State management', 'API integration', 'Store deploy & CI/CD'],
        },
      ],
    },
    achievements: {
      kicker: 'Competitions',
      heading: 'Competition Highlight',
      itemTitle: 'Vocational Skills Competition',
      itemMeta: '2025 · VEC Skill Thailand',
      itemNote: '1 event · 2 levels',
      provinceTitle: 'Provincial level (Sa Kaeo)',
      provinceResult: '1st place',
      regionTitle: 'Eastern Thailand & Bangkok region',
      regionResult: '4th place in region',
      provinceDetails: {
        title: 'Provincial level (Sa Kaeo)',
        certificate: '/certificates/province-certificate.jpg',
        details: [
          '🏆 1st place winner in Vocational Skills Competition',
          '📅 Competition Date: March 15-17, 2025',
          '📍 Venue: Sa Kaeo Vocational College',
          '👥 Participants: 12 competitors from 6 institutions',
          '💻 Category: Web Development and Application Development',
          '⏱️ Duration: 6 hours (3 hours theory + 3 hours practical)',
          '🎯 Challenge: Develop an e-commerce management web application',
          '🛠️ Technologies Used: React, Node.js, MongoDB, Tailwind CSS',
          '✨ Key Features: User-friendly UI/UX, Responsive Design, Real-time Updates',
          '📊 Score: 92/100 (Theory 45/50, Practical 47/50)',
          '🎓 Received award and certificate from Vocational Education Institute',
          '🌟 Qualified for regional level competition',
        ],
      },
      regionDetails: {
        title: 'Eastern Thailand & Bangkok region',
        certificate: '/certificates/region-certificate.jpg',
        details: [
          '🥉 4th place in regional Vocational Skills Competition',
          '📅 Competition Date: April 10-12, 2025',
          '📍 Venue: Bangkok Technical College',
          '👥 Participants: 24 competitors from 12 provinces',
          '🌐 Level: Regional (Eastern Thailand & Bangkok)',
          '⏱️ Duration: 8 hours (4 hours theory + 4 hours practical)',
          '🎯 Challenge: Develop a hotel booking application with Payment Gateway',
          '🛠️ Technologies Used: Next.js, TypeScript, PostgreSQL, Stripe API, Docker',
          '✨ Key Features: Server-Side Rendering, API Integration, Security Best Practices',
          '📊 Score: 85/100 (Theory 42/50, Practical 43/50)',
          '🤝 Competed with participants from multiple provinces',
          '💡 Received feedback from judges and industry experts',
          '📈 Developed skills in working under pressure and time constraints',
          '🎓 Received certificate and award from VEC Skill Thailand',
        ],
      },
      closeButton: 'Close',
      clickHint: 'Click to view details',
    },
    work: {
      kicker: 'Selected work',
      heading: 'Projects that connect users with products',
      cta: 'View availability →',
      projects: [
        {
          tag: 'Web Development',
          title: 'Travel / Events Platform',
          copy:
            'B2C & B2B booking experience with real-time inventory, customer dashboards, and analytics built with React and Next.js.',
          tech: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe', 'SSR'],
        },
        {
          tag: 'Data Visualization',
          title: 'City Insights Dashboard',
          copy:
            'Interactive map overlays and storytelling cards surfacing civic datasets, tuned for mobile and desktop.',
          tech: ['Vue', 'Nuxt', 'Mapbox', 'D3'],
        },
        {
          tag: 'Cross-Platform App',
          title: 'Telehealth Mobile Suite',
          copy:
            'Hybrid Flutter app with secure messaging, appointment scheduling, and offline-first medical record viewing.',
          tech: ['Flutter', 'Dart', 'REST', 'Firebase'],
        },
      ],
    },
    experience: {
      kicker: 'Experience',
      heading: 'Professional Journey',
      roles: [
        {
          title: 'Intern in waiting',
          company: 'Open role · 2025',
          period: '2025 — Waiting for your green light',
          location: 'Remote / Hybrid',
          copy:
            'Details are intentionally blurred while I look for a team to start my internship with — ready when you are.',
          skills: ['DevOps', 'Frontend', 'Flutter', 'CI/CD', 'Design systems'],
        },
      ],
    },
    contact: {
      kicker: 'Contact',
      heading: 'Let’s talk or start a project',
      intro: 'If you want to collaborate, have a question, or just say hi—reach out anytime.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send message',
        placeholders: {
          name: 'Your name',
          email: 'you@example.com',
          message: 'Write your message...',
        },
      },
    },
  },
};

type SectionKey = keyof typeof messages['th'];

export const useLanguage = () => {
  const lang = useState<Lang>('lang', () => 'th'); // default TH

  const setLanguage = (value: Lang) => {
    lang.value = value;
  };

  const toggleLanguage = () => {
    lang.value = lang.value === 'th' ? 'en' : 'th';
  };

  const section = <K extends SectionKey>(key: K) =>
    computed(() => messages[lang.value][key] as (typeof messages)['th'][K]);

  return {
    lang,
    setLanguage,
    toggleLanguage,
    section,
  };
};

