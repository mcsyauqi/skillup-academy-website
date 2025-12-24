export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  instructor: Instructor;
  category: Category;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: number; // in minutes
  lessons: number;
  students: number;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  isBestseller?: boolean;
  isNew?: boolean;
  updatedAt: string;
  topics: string[];
  features: string[];
}

export interface Instructor {
  id: string;
  slug: string;
  name: string;
  title: string;
  avatar: string;
  bio: string;
  students: number;
  courses: number;
  rating: number;
  reviews: number;
  specialties: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  icon: string;
  description: string;
  courseCount: number;
  color: string;
}

export interface LearningPath {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  courses: Course[];
  duration: number;
  level: string;
  students: number;
  outcome: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  author: Instructor;
  category: string;
  publishedAt: string;
  readTime: number;
}

export const categories: Category[] = [
  {
    id: "1",
    slug: "design",
    name: "Desain",
    icon: "Palette",
    description: "UI/UX, Desain Grafis, Desain Produk",
    courseCount: 48,
    color: "#8B5CF6",
  },
  {
    id: "2",
    slug: "development",
    name: "Pengembangan",
    icon: "Code",
    description: "Web, Mobile, Pengembangan Software",
    courseCount: 72,
    color: "#6366F1",
  },
  {
    id: "3",
    slug: "marketing",
    name: "Pemasaran",
    icon: "TrendingUp",
    description: "Digital Marketing, SEO, Media Sosial",
    courseCount: 35,
    color: "#10B981",
  },
  {
    id: "4",
    slug: "business",
    name: "Bisnis",
    icon: "Briefcase",
    description: "Kewirausahaan, Manajemen, Strategi",
    courseCount: 29,
    color: "#F59E0B",
  },
  {
    id: "5",
    slug: "data",
    name: "Data Science",
    icon: "BarChart3",
    description: "Analitik, Machine Learning, AI",
    courseCount: 41,
    color: "#EC4899",
  },
  {
    id: "6",
    slug: "personal-development",
    name: "Pengembangan Diri",
    icon: "Target",
    description: "Produktivitas, Kepemimpinan, Komunikasi",
    courseCount: 24,
    color: "#14B8A6",
  },
];

export const instructors: Instructor[] = [
  {
    id: "1",
    slug: "sarah-johnson",
    name: "Sarah Johnson",
    title: "Senior UX Designer di Google",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Dengan pengalaman lebih dari 10 tahun di bidang desain UX, Sarah telah bekerja dengan perusahaan Fortune 500 untuk menciptakan pengalaman digital yang berpusat pada pengguna. Ia sangat antusias mengajarkan design thinking dan metodologi riset pengguna.",
    students: 15420,
    courses: 8,
    rating: 4.9,
    reviews: 2341,
    specialties: ["UX Design", "Riset Pengguna", "Design Systems"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "2",
    slug: "michael-chen",
    name: "Michael Chen",
    title: "Full-Stack Developer & Tech Lead",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Michael adalah software engineer dengan keahlian di React, Node.js, dan arsitektur cloud. Ia telah membangun aplikasi yang scalable untuk startup maupun perusahaan besar.",
    students: 23150,
    courses: 12,
    rating: 4.8,
    reviews: 3872,
    specialties: ["React", "Node.js", "System Design"],
    social: {
      linkedin: "https://linkedin.com",
      website: "https://example.com",
    },
  },
  {
    id: "3",
    slug: "emily-rodriguez",
    name: "Emily Rodriguez",
    title: "Direktur Digital Marketing",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Emily telah membantu 100+ brand meningkatkan kehadiran online mereka melalui strategi pemasaran berbasis data. Ia ahli di bidang SEO, content marketing, dan growth hacking.",
    students: 18930,
    courses: 6,
    rating: 4.9,
    reviews: 2156,
    specialties: ["SEO", "Content Marketing", "Analitik"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "4",
    slug: "david-kim",
    name: "David Kim",
    title: "Data Scientist di Netflix",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "David menyajikan konsep data science yang kompleks menjadi mudah dipahami melalui proyek-proyek praktis. Gaya mengajarnya membuat machine learning dapat diakses oleh pemula.",
    students: 12840,
    courses: 5,
    rating: 4.8,
    reviews: 1923,
    specialties: ["Python", "Machine Learning", "Visualisasi Data"],
    social: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "5",
    slug: "jessica-wang",
    name: "Jessica Wang",
    title: "Product Manager di Meta",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
    bio: "Jessica memiliki pengalaman 8+ tahun di product management di perusahaan teknologi terkemuka. Ia mengajarkan keterampilan PM praktis dan framework yang digunakan di Silicon Valley.",
    students: 11250,
    courses: 4,
    rating: 4.9,
    reviews: 1678,
    specialties: ["Strategi Produk", "Agile", "User Stories"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "6",
    slug: "alex-turner",
    name: "Alex Turner",
    title: "Mobile Developer & Ahli iOS",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    bio: "Alex adalah ahli pengembangan mobile dengan aplikasi yang ditampilkan di App Store. Ia ahli di Swift, SwiftUI, dan pengembangan cross-platform.",
    students: 9870,
    courses: 6,
    rating: 4.8,
    reviews: 1432,
    specialties: ["iOS", "Swift", "React Native"],
    social: {
      linkedin: "https://linkedin.com",
      website: "https://example.com",
    },
  },
  {
    id: "7",
    slug: "maria-santos",
    name: "Maria Santos",
    title: "Konsultan Strategi Bisnis",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Maria telah memberikan konsultasi kepada perusahaan Fortune 500 tentang strategi bisnis dan transformasi digital. Ia membawa pendidikan setara MBA ke pembelajar online.",
    students: 14320,
    courses: 7,
    rating: 4.9,
    reviews: 2156,
    specialties: ["Strategi Bisnis", "Kepemimpinan", "Konsultasi"],
    social: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "8",
    slug: "kevin-nguyen",
    name: "Kevin Nguyen",
    title: "Cloud Architect di AWS",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Kevin adalah arsitek solusi AWS bersertifikat dengan keahlian di infrastruktur cloud, DevOps, dan arsitektur serverless.",
    students: 16780,
    courses: 9,
    rating: 4.8,
    reviews: 2543,
    specialties: ["AWS", "DevOps", "Kubernetes"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
];

export const courses: Course[] = [
  {
    id: "1",
    slug: "complete-ux-design-masterclass",
    title: "Masterclass UX Design Lengkap 2024",
    description: "Kuasai desain UX dari nol. Pelajari riset pengguna, wireframing, prototyping, dan design systems yang digunakan perusahaan teknologi terkemuka.",
    shortDescription: "Belajar desain UX dari ahli industri",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop",
    instructor: instructors[0],
    category: categories[0],
    level: "Beginner",
    duration: 2400,
    lessons: 156,
    students: 15420,
    rating: 4.9,
    reviews: 2341,
    price: 1299000,
    originalPrice: 2499000,
    isBestseller: true,
    updatedAt: "Desember 2024",
    topics: ["Riset Pengguna", "Wireframing", "Prototyping", "Figma", "Design Systems", "Usability Testing"],
    features: ["40 jam video", "Materi dapat diunduh", "Sertifikat kelulusan", "Akses selamanya"],
  },
  {
    id: "2",
    slug: "react-nextjs-complete-guide",
    title: "React & Next.js - Panduan Lengkap",
    description: "Bangun aplikasi web modern siap produksi dengan React 18 dan Next.js 14. Pelajari hooks, server components, dan praktik terbaik.",
    shortDescription: "Pengembangan React modern dengan Next.js",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
    instructor: instructors[1],
    category: categories[1],
    level: "Intermediate",
    duration: 3600,
    lessons: 248,
    students: 23150,
    rating: 4.8,
    reviews: 3872,
    price: 1499000,
    originalPrice: 2999000,
    isBestseller: true,
    updatedAt: "Desember 2024",
    topics: ["React 18", "Next.js 14", "TypeScript", "Server Components", "API Routes", "Deployment"],
    features: ["60 jam video", "Proyek nyata", "Sertifikat kelulusan", "Akses selamanya"],
  },
  {
    id: "3",
    slug: "digital-marketing-bootcamp",
    title: "Bootcamp Digital Marketing 2024",
    description: "Pelajari SEO, social media marketing, Google Ads, dan strategi konten. Bangun kemampuan digital marketing lengkap dari nol.",
    shortDescription: "Pelatihan digital marketing lengkap",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    instructor: instructors[2],
    category: categories[2],
    level: "Beginner",
    duration: 1800,
    lessons: 120,
    students: 18930,
    rating: 4.9,
    reviews: 2156,
    price: 999000,
    originalPrice: 1999000,
    isNew: true,
    updatedAt: "Desember 2024",
    topics: ["SEO", "Google Ads", "Media Sosial", "Content Marketing", "Email Marketing", "Analitik"],
    features: ["30 jam video", "Template marketing", "Sertifikat kelulusan", "Akses selamanya"],
  },
  {
    id: "4",
    slug: "python-data-science-ml",
    title: "Python untuk Data Science & Machine Learning",
    description: "Kuasai pemrograman Python untuk analisis data, visualisasi, dan machine learning. Bangun model ML nyata dengan proyek langsung.",
    shortDescription: "Data science dengan Python",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
    instructor: instructors[3],
    category: categories[4],
    level: "Intermediate",
    duration: 4200,
    lessons: 280,
    students: 12840,
    rating: 4.8,
    reviews: 1923,
    price: 1699000,
    originalPrice: 3299000,
    isBestseller: true,
    updatedAt: "November 2024",
    topics: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Visualisasi Data"],
    features: ["70 jam video", "Jupyter notebooks", "Sertifikat kelulusan", "Akses selamanya"],
  },
  {
    id: "5",
    slug: "figma-ui-design",
    title: "Desain UI Figma: Dari Nol Sampai Mahir",
    description: "Kuasai Figma untuk desain UI modern. Pelajari komponen, auto-layout, prototyping, dan alur kerja design handoff.",
    shortDescription: "Kursus Figma lengkap untuk desainer",
    thumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=450&fit=crop",
    instructor: instructors[0],
    category: categories[0],
    level: "Beginner",
    duration: 1200,
    lessons: 85,
    students: 9840,
    rating: 4.9,
    reviews: 1456,
    price: 799000,
    originalPrice: 1499000,
    isNew: true,
    updatedAt: "Desember 2024",
    topics: ["Dasar Figma", "Komponen", "Auto-layout", "Prototyping", "Design Systems", "Kolaborasi"],
    features: ["20 jam video", "File desain", "Sertifikat kelulusan", "Akses selamanya"],
  },
  {
    id: "6",
    slug: "nodejs-backend-development",
    title: "Pengembangan Backend Node.js",
    description: "Bangun sistem backend yang scalable dengan Node.js, Express, dan MongoDB. Pelajari autentikasi, API, dan deployment.",
    shortDescription: "Kuasai JavaScript sisi server",
    thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=450&fit=crop",
    instructor: instructors[1],
    category: categories[1],
    level: "Intermediate",
    duration: 2800,
    lessons: 195,
    students: 14520,
    rating: 4.7,
    reviews: 2134,
    price: 1399000,
    originalPrice: 2799000,
    updatedAt: "November 2024",
    topics: ["Node.js", "Express", "MongoDB", "REST APIs", "Autentikasi", "Deployment"],
    features: ["46 jam video", "File proyek", "Sertifikat kelulusan", "Akses selamanya"],
  },
];

export const learningPaths: LearningPath[] = [
  {
    id: "1",
    slug: "become-ux-designer",
    title: "Menjadi UX Designer",
    description: "Jalur pembelajaran lengkap untuk memulai karir sebagai UX designer. Dari dasar hingga proyek siap portofolio.",
    thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=450&fit=crop",
    courses: [courses[0], courses[4]],
    duration: 3600,
    level: "Pemula hingga Menengah",
    students: 8450,
    outcome: "UX Designer",
  },
  {
    id: "2",
    slug: "full-stack-developer",
    title: "Full-Stack Web Developer",
    description: "Kuasai pengembangan frontend dan backend. Bangun aplikasi web lengkap dari nol.",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop",
    courses: [courses[1], courses[5]],
    duration: 6400,
    level: "Pemula hingga Lanjutan",
    students: 12340,
    outcome: "Full-Stack Developer",
  },
  {
    id: "3",
    slug: "data-scientist",
    title: "Menjadi Data Scientist",
    description: "Pelajari analisis data, machine learning, dan AI. Ubah data menjadi insight yang dapat ditindaklanjuti.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
    courses: [courses[3]],
    duration: 4200,
    level: "Menengah",
    students: 6780,
    outcome: "Data Scientist",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-ux-design-2024",
    title: "Masa Depan Desain UX di 2024: Tren dan Prediksi",
    excerpt: "Jelajahi tren yang muncul membentuk masa depan desain pengalaman pengguna, dari antarmuka berbasis AI hingga praktik desain inklusif.",
    content: "",
    thumbnail: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=450&fit=crop",
    author: instructors[0],
    category: "Desain",
    publishedAt: "20 Desember 2024",
    readTime: 8,
  },
  {
    id: "2",
    slug: "react-server-components-guide",
    title: "Panduan Lengkap React Server Components",
    excerpt: "Pelajari cara kerja React Server Components dan bagaimana mereka dapat meningkatkan performa dan pengalaman pengguna aplikasi Anda.",
    content: "",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop",
    author: instructors[1],
    category: "Pengembangan",
    publishedAt: "18 Desember 2024",
    readTime: 12,
  },
  {
    id: "3",
    slug: "seo-strategies-2024",
    title: "10 Strategi SEO yang Benar-Benar Berhasil di 2024",
    excerpt: "Temukan teknik SEO yang terbukti membantu konten Anda peringkat lebih tinggi dan mendorong traffic organik ke website Anda.",
    content: "",
    thumbnail: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1e9?w=800&h=450&fit=crop",
    author: instructors[2],
    category: "Pemasaran",
    publishedAt: "15 Desember 2024",
    readTime: 10,
  },
  {
    id: "4",
    slug: "python-machine-learning-beginners",
    title: "Memulai Machine Learning dengan Python",
    excerpt: "Pengenalan ramah pemula tentang konsep machine learning dan cara mengimplementasikannya menggunakan Python dan library populer.",
    content: "",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=450&fit=crop",
    author: instructors[3],
    category: "Data Science",
    publishedAt: "12 Desember 2024",
    readTime: 15,
  },
  {
    id: "5",
    slug: "remote-work-productivity-tips",
    title: "15 Tips Produktivitas untuk Pekerja Remote",
    excerpt: "Maksimalkan produktivitas Anda saat bekerja dari rumah dengan strategi terbukti dari profesional remote yang sukses.",
    content: "",
    thumbnail: "https://images.unsplash.com/photo-1585974738771-84483dd9f89f?w=800&h=450&fit=crop",
    author: instructors[2],
    category: "Karir",
    publishedAt: "10 Desember 2024",
    readTime: 7,
  },
  {
    id: "6",
    slug: "figma-design-systems",
    title: "Membangun Design System yang Scalable di Figma",
    excerpt: "Pelajari cara membuat dan memelihara design system yang dapat berkembang di seluruh tim dan produk menggunakan fitur canggih Figma.",
    content: "",
    thumbnail: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&h=450&fit=crop",
    author: instructors[0],
    category: "Desain",
    publishedAt: "8 Desember 2024",
    readTime: 11,
  },
];

export const stats = {
  students: 50000,
  courses: 200,
  instructors: 50,
  countries: 120,
  completionRate: 94,
  satisfaction: 4.8,
};

export const testimonials = [
  {
    id: "1",
    name: "Amanda Torres",
    title: "UX Designer di Spotify",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    content: "SkillUp Academy mengubah karir saya. Kursus UX Design memberi saya keterampilan praktis yang saya gunakan setiap hari. Dalam 3 bulan setelah menyelesaikan kursus, saya mendapat pekerjaan impian!",
    rating: 5,
    course: "Masterclass UX Design Lengkap",
  },
  {
    id: "2",
    name: "Ryan Park",
    title: "Software Engineer di Microsoft",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    content: "Kursus React & Next.js sangat komprehensif. Gaya mengajar Michael membuat konsep kompleks mudah dipahami. Investasi terbaik untuk karir saya!",
    rating: 5,
    course: "React & Next.js - Panduan Lengkap",
  },
  {
    id: "3",
    name: "Lisa Chen",
    title: "Marketing Manager di Shopify",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    content: "Bootcamp Digital Marketing melebihi ekspektasi saya. Saya belajar strategi praktis yang membantu meningkatkan traffic organik perusahaan kami sebesar 150%.",
    rating: 5,
    course: "Bootcamp Digital Marketing 2024",
  },
];

export const companyLogos = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/320px-Microsoft_logo_%282012%29.svg.png",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png",
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/320px-Meta_Platforms_Inc._logo.svg.png",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/160px-Apple_logo_black.svg.png",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/320px-Netflix_2015_logo.svg.png",
  },
];

export const pricingPlans = [
  {
    id: "1",
    name: "Gratis",
    description: "Mulai dengan kursus gratis",
    price: 0,
    period: "selamanya",
    features: [
      "Akses ke 20+ kursus gratis",
      "Akses forum komunitas",
      "Pelacakan progres dasar",
      "Akses aplikasi mobile",
    ],
    cta: "Mulai Gratis",
    popular: false,
  },
  {
    id: "2",
    name: "Pro",
    description: "Sempurna untuk pembelajar individu",
    price: 199000,
    period: "bulan",
    features: [
      "Akses ke semua 200+ kursus",
      "Materi dapat diunduh",
      "Sertifikat kelulusan",
      "Dukungan prioritas",
      "Tonton offline",
      "Review proyek",
    ],
    cta: "Coba Pro Gratis",
    popular: true,
  },
  {
    id: "3",
    name: "Tim",
    description: "Terbaik untuk tim dan bisnis",
    price: 499000,
    period: "pengguna/bulan",
    features: [
      "Semua fitur Pro",
      "Dashboard analitik tim",
      "Jalur belajar kustom",
      "Kontrol admin",
      "Integrasi SSO",
      "Account manager khusus",
      "Akses API",
    ],
    cta: "Hubungi Sales",
    popular: false,
  },
];
