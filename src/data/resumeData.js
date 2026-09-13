export const resumeData = {
  personal: {
    name: "Nahyan Yasir Ibtee",
    preferredName: "Nahyan",
    title: "Junior Frontend Developer",
    subtitle: "CSE Undergrad at RUET · Crafting High-Performance & Minimalist Web Experiences",
    status: "Available for Frontend Developer roles",
    location: "Mirpur-1, Dhaka, Bangladesh",
    email: "ibtee555@gmail.com",
    formEndpoint: "4c98d85275b04a6d1a3ee356e7a81cd3",
    phone: "+8801988662950",
    avatar: '/profile.jpg',
    github: "https://github.com/ibtee12",
    linkedin: "https://www.linkedin.com/in/nahyan-ibtee/",
    liveDemo: "https://xyz-care.vercel.app",
    bio: "A passionate Computer Science & Engineering student at RUET in my 3rd year with hands-on experience building full-stack web applications. I specialize in modern frontend engineering with React, Next.js, and sleek responsive CSS, turning complex product logic into clean, intuitive, and accessible user interfaces.",
  },
  stats: [
    { label: "Education", value: "RUET CSE '22" },
    { label: "Core Stack", value: "React & Next.js" },
    { label: "Specialty", value: "Clean, Responsive UI" },
    { label: "Location", value: "Dhaka, Bangladesh" },
  ],
  projects: [
    {
      id: "matrix-math-care",
      title: "Matrix Math Care",
      badge: "Full-Stack EdTech",
      period: "Recent Project",
      liveUrl: "https://xyz-care.vercel.app",
      githubUrl: "https://github.com/ibtee12/xyz-care",
      summary:
        "A full-stack online coaching and learning management platform that connects students, teachers, and administrators with structured course delivery, timed live classes, and transparent performance analytics.",
      features: [
        {
          title: "Role-Based Portals",
          desc: "Dedicated interactive dashboards for Students, Teachers, and Admins with tailored access controls.",
        },
        {
          title: "Course Learning & Timed Live Classes",
          desc: "Video lessons with auto-progress tracking, bookmarks, and secure live class countdown join-windows.",
        },
        {
          title: "Performance Analytics & Quizzes",
          desc: "Timed quizzes with instant evaluation, review modes, highest-mark tracking, and bulk CSV marksheet imports.",
        },
        {
          title: "Communication Suite",
          desc: "Real-time teacher-student chat with image uploads, threaded forum, and in-app/email alerts.",
        },
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST API", "Real-Time Chat"],
      colorAccent: "#3b82f6",
    },
    {
      id: "digital-life-lessons",
      title: "Digital Life Lessons",
      badge: "Editorial & Mindset Platform",
      period: "Recent Project",
      liveUrl: "https://digital-life-lessons-client-side.vercel.app/",
      clientGithubUrl: "https://github.com/ibtee12/digital-life-lessons-client-side-.git",
      serverGithubUrl: "https://github.com/ibtee12/digital-life-lessons-server-side-.git",
      summary:
        "A modern editorial wisdom-sharing and mindset journaling platform where users write, publish, explore categorized life lessons, track consistency, and unlock premium lessons via Stripe-powered VIP memberships.",
      features: [
        {
          title: "Interactive Editorial Experience",
          desc: "Reader view featuring reading scroll progress, animated reactions, threaded discussions, and in-browser PDF export.",
        },
        {
          title: "Journaling Dashboard & Heatmap",
          desc: "Personal workspace with a 20-week activity heatmap, Recharts weekday analytics, and full CRUD lesson management.",
        },
        {
          title: "VIP Role System & Stripe",
          desc: "Free vs. Lifetime VIP tiering with glowing aura badges and secure Stripe checkout for locked premium wisdom.",
        },
        {
          title: "Admin Moderation Panel",
          desc: "Administrative dashboard with stacked ratio metrics, user permissions, and flagged content review queue.",
        },
      ],
      tech: ["React", "Stripe API", "Recharts", "Node.js", "Express", "MongoDB", "Tailwind CSS", "PDF Export"],
      colorAccent: "#10b981",
    },
  ],
  skillCategories: [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend & DB" },
    { id: "tools", label: "Tools & Deploy" },
    { id: "cs", label: "Languages & Data" },
    { id: "soft", label: "Interpersonal" },
  ],
  skills: [
    { name: "React", category: "frontend", level: "Advanced", featured: true },
    { name: "Next.js", category: "frontend", level: "Proficient", featured: true },
    { name: "JavaScript (ES6+)", category: "frontend", level: "Advanced", featured: true },
    { name: "HTML5 / Semantic Web", category: "frontend", level: "Expert", featured: false },
    { name: "CSS3 / Modern CSS", category: "frontend", level: "Advanced", featured: false },
    { name: "Tailwind CSS", category: "frontend", level: "Advanced", featured: true },
    { name: "DaisyUI", category: "frontend", level: "Proficient", featured: false },

    { name: "MongoDB", category: "backend", level: "Proficient", featured: true },
    { name: "SQL", category: "backend", level: "Proficient", featured: false },
    { name: "Node.js / Express", category: "backend", level: "Proficient", featured: false },
    { name: "REST APIs", category: "backend", level: "Advanced", featured: false },

    { name: "Git", category: "tools", level: "Advanced", featured: false },
    { name: "GitHub", category: "tools", level: "Advanced", featured: true },
    { name: "Vercel", category: "tools", level: "Proficient", featured: false },
    { name: "Render", category: "tools", level: "Proficient", featured: false },

    { name: "C", category: "cs", level: "Proficient", featured: false },
    { name: "C++", category: "cs", level: "Proficient", featured: false },
    { name: "Python", category: "cs", level: "Proficient", featured: false },
    { name: "NumPy", category: "cs", level: "Intermediate", featured: false },
    { name: "Pandas", category: "cs", level: "Intermediate", featured: false },
    { name: "Matplotlib", category: "cs", level: "Intermediate", featured: false },

    { name: "Public Speaking", category: "soft", level: "Interpersonal", featured: false },
    { name: "Team Collaboration", category: "soft", level: "Interpersonal", featured: false },
    { name: "People Management", category: "soft", level: "Interpersonal", featured: false },
    { name: "English Communication", category: "soft", level: "Interpersonal", featured: false },
  ],
  education: [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Rajshahi University of Engineering & Technology (RUET)",
      duration: "2022 – Present",
      stage: "RUET CSE '22 Series (3rd Year)",
      location: "Rajshahi, Bangladesh",
      description:
        "Enrolled in core computer science curriculum covering Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Software Engineering, and Operating Systems.",
      badges: ["CSE Major", "RUET CSE '22", "3rd Year"],
    },
  ],
};
