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
    name: "Design",
    icon: "Palette",
    description: "UI/UX, Graphic Design, Product Design",
    courseCount: 48,
    color: "#8B5CF6",
  },
  {
    id: "2",
    slug: "development",
    name: "Development",
    icon: "Code",
    description: "Web, Mobile, Software Development",
    courseCount: 72,
    color: "#6366F1",
  },
  {
    id: "3",
    slug: "marketing",
    name: "Marketing",
    icon: "TrendingUp",
    description: "Digital Marketing, SEO, Social Media",
    courseCount: 35,
    color: "#10B981",
  },
  {
    id: "4",
    slug: "business",
    name: "Business",
    icon: "Briefcase",
    description: "Entrepreneurship, Management, Strategy",
    courseCount: 29,
    color: "#F59E0B",
  },
  {
    id: "5",
    slug: "data",
    name: "Data Science",
    icon: "BarChart3",
    description: "Analytics, Machine Learning, AI",
    courseCount: 41,
    color: "#EC4899",
  },
  {
    id: "6",
    slug: "personal-development",
    name: "Personal Development",
    icon: "Target",
    description: "Productivity, Leadership, Communication",
    courseCount: 24,
    color: "#14B8A6",
  },
];

export const instructors: Instructor[] = [
  {
    id: "1",
    slug: "sarah-johnson",
    name: "Sarah Johnson",
    title: "Senior UX Designer at Google",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "With over 10 years of experience in UX design, Sarah has worked with Fortune 500 companies to create user-centered digital experiences. She's passionate about teaching design thinking and user research methodologies.",
    students: 15420,
    courses: 8,
    rating: 4.9,
    reviews: 2341,
    specialties: ["UX Design", "User Research", "Design Systems"],
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
    bio: "Michael is a software engineer with expertise in React, Node.js, and cloud architecture. He has built scalable applications for startups and enterprises alike.",
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
    title: "Digital Marketing Director",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Emily has helped 100+ brands grow their online presence through data-driven marketing strategies. She specializes in SEO, content marketing, and growth hacking.",
    students: 18930,
    courses: 6,
    rating: 4.9,
    reviews: 2156,
    specialties: ["SEO", "Content Marketing", "Analytics"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "4",
    slug: "david-kim",
    name: "David Kim",
    title: "Data Scientist at Netflix",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "David brings complex data science concepts to life through practical, hands-on projects. His teaching style makes machine learning accessible to beginners.",
    students: 12840,
    courses: 5,
    rating: 4.8,
    reviews: 1923,
    specialties: ["Python", "Machine Learning", "Data Visualization"],
    social: {
      linkedin: "https://linkedin.com",
    },
  },
];

export const courses: Course[] = [
  {
    id: "1",
    slug: "complete-ux-design-masterclass",
    title: "Complete UX Design Masterclass 2024",
    description: "Master UX design from scratch. Learn user research, wireframing, prototyping, and design systems used by top tech companies.",
    shortDescription: "Learn UX design from industry experts",
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
    updatedAt: "December 2024",
    topics: ["User Research", "Wireframing", "Prototyping", "Figma", "Design Systems", "Usability Testing"],
    features: ["40 hours of video", "Downloadable resources", "Certificate of completion", "Lifetime access"],
  },
  {
    id: "2",
    slug: "react-nextjs-complete-guide",
    title: "React & Next.js - The Complete Guide",
    description: "Build modern, production-ready web applications with React 18 and Next.js 14. Learn hooks, server components, and best practices.",
    shortDescription: "Modern React development with Next.js",
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
    updatedAt: "December 2024",
    topics: ["React 18", "Next.js 14", "TypeScript", "Server Components", "API Routes", "Deployment"],
    features: ["60 hours of video", "Real-world projects", "Certificate of completion", "Lifetime access"],
  },
  {
    id: "3",
    slug: "digital-marketing-bootcamp",
    title: "Digital Marketing Bootcamp 2024",
    description: "Learn SEO, social media marketing, Google Ads, and content strategy. Build a complete digital marketing skill set from scratch.",
    shortDescription: "Complete digital marketing training",
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
    updatedAt: "December 2024",
    topics: ["SEO", "Google Ads", "Social Media", "Content Marketing", "Email Marketing", "Analytics"],
    features: ["30 hours of video", "Marketing templates", "Certificate of completion", "Lifetime access"],
  },
  {
    id: "4",
    slug: "python-data-science-ml",
    title: "Python for Data Science & Machine Learning",
    description: "Master Python programming for data analysis, visualization, and machine learning. Build real ML models with hands-on projects.",
    shortDescription: "Data science with Python",
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
    topics: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Data Visualization"],
    features: ["70 hours of video", "Jupyter notebooks", "Certificate of completion", "Lifetime access"],
  },
  {
    id: "5",
    slug: "figma-ui-design",
    title: "Figma UI Design: From Zero to Hero",
    description: "Master Figma for modern UI design. Learn components, auto-layout, prototyping, and design handoff workflows.",
    shortDescription: "Complete Figma course for designers",
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
    updatedAt: "December 2024",
    topics: ["Figma Basics", "Components", "Auto-layout", "Prototyping", "Design Systems", "Collaboration"],
    features: ["20 hours of video", "Design files", "Certificate of completion", "Lifetime access"],
  },
  {
    id: "6",
    slug: "nodejs-backend-development",
    title: "Node.js Backend Development",
    description: "Build scalable backend systems with Node.js, Express, and MongoDB. Learn authentication, APIs, and deployment.",
    shortDescription: "Server-side JavaScript mastery",
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
    topics: ["Node.js", "Express", "MongoDB", "REST APIs", "Authentication", "Deployment"],
    features: ["46 hours of video", "Project files", "Certificate of completion", "Lifetime access"],
  },
];

export const learningPaths: LearningPath[] = [
  {
    id: "1",
    slug: "become-ux-designer",
    title: "Become a UX Designer",
    description: "A complete learning path to start your career as a UX designer. From fundamentals to portfolio-ready projects.",
    thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=450&fit=crop",
    courses: [courses[0], courses[4]],
    duration: 3600,
    level: "Beginner to Intermediate",
    students: 8450,
    outcome: "UX Designer",
  },
  {
    id: "2",
    slug: "full-stack-developer",
    title: "Full-Stack Web Developer",
    description: "Master both frontend and backend development. Build complete web applications from scratch.",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop",
    courses: [courses[1], courses[5]],
    duration: 6400,
    level: "Beginner to Advanced",
    students: 12340,
    outcome: "Full-Stack Developer",
  },
  {
    id: "3",
    slug: "data-scientist",
    title: "Become a Data Scientist",
    description: "Learn data analysis, machine learning, and AI. Transform data into actionable insights.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
    courses: [courses[3]],
    duration: 4200,
    level: "Intermediate",
    students: 6780,
    outcome: "Data Scientist",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-ux-design-2024",
    title: "The Future of UX Design in 2024: Trends and Predictions",
    excerpt: "Explore the emerging trends shaping the future of user experience design, from AI-powered interfaces to inclusive design practices.",
    content: "",
    thumbnail: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=450&fit=crop",
    author: instructors[0],
    category: "Design",
    publishedAt: "December 20, 2024",
    readTime: 8,
  },
  {
    id: "2",
    slug: "react-server-components-guide",
    title: "A Complete Guide to React Server Components",
    excerpt: "Learn how React Server Components work and how they can improve your application's performance and user experience.",
    content: "",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop",
    author: instructors[1],
    category: "Development",
    publishedAt: "December 18, 2024",
    readTime: 12,
  },
  {
    id: "3",
    slug: "seo-strategies-2024",
    title: "10 SEO Strategies That Actually Work in 2024",
    excerpt: "Discover proven SEO techniques that will help your content rank higher and drive organic traffic to your website.",
    content: "",
    thumbnail: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1e9?w=800&h=450&fit=crop",
    author: instructors[2],
    category: "Marketing",
    publishedAt: "December 15, 2024",
    readTime: 10,
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
    title: "UX Designer at Spotify",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    content: "SkillUp Academy transformed my career. The UX Design course gave me practical skills that I use every day. Within 3 months of completing the course, I landed my dream job!",
    rating: 5,
    course: "Complete UX Design Masterclass",
  },
  {
    id: "2",
    name: "Ryan Park",
    title: "Software Engineer at Microsoft",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    content: "The React & Next.js course is incredibly comprehensive. Michael's teaching style makes complex concepts easy to understand. Best investment in my career!",
    rating: 5,
    course: "React & Next.js - The Complete Guide",
  },
  {
    id: "3",
    name: "Lisa Chen",
    title: "Marketing Manager at Shopify",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    content: "The Digital Marketing Bootcamp exceeded my expectations. I learned practical strategies that helped me increase our company's organic traffic by 150%.",
    rating: 5,
    course: "Digital Marketing Bootcamp 2024",
  },
];

export const pricingPlans = [
  {
    id: "1",
    name: "Free",
    description: "Get started with free courses",
    price: 0,
    period: "forever",
    features: [
      "Access to 20+ free courses",
      "Community forum access",
      "Basic progress tracking",
      "Mobile app access",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    id: "2",
    name: "Pro",
    description: "Perfect for individual learners",
    price: 199000,
    period: "month",
    features: [
      "Access to all 200+ courses",
      "Downloadable resources",
      "Certificates of completion",
      "Priority support",
      "Offline viewing",
      "Project reviews",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    id: "3",
    name: "Team",
    description: "Best for teams and businesses",
    price: 499000,
    period: "user/month",
    features: [
      "Everything in Pro",
      "Team analytics dashboard",
      "Custom learning paths",
      "Admin controls",
      "SSO integration",
      "Dedicated account manager",
      "API access",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];
