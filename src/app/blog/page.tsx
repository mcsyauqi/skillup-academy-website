"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Tag, TrendingUp, Mail, CheckCircle2, Code, Palette, BarChart3, Database, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { blogPosts } from "@/lib/data";

const categories = [
  "Semua",
  "Design",
  "Development",
  "Marketing",
  "Data Science",
  "Karier",
];

const popularCategories = [
  {
    name: "Development",
    icon: Code,
    count: 48,
    color: "from-blue-500 to-cyan-500",
    description: "Pelajari bahasa pemrograman dan framework terbaru",
  },
  {
    name: "Design",
    icon: Palette,
    count: 35,
    color: "from-purple-500 to-pink-500",
    description: "Tips dan trik desain UI/UX dari para ahli",
  },
  {
    name: "Marketing",
    icon: BarChart3,
    count: 42,
    color: "from-green-500 to-emerald-500",
    description: "Strategi marketing digital yang efektif",
  },
  {
    name: "Data Science",
    icon: Database,
    count: 28,
    color: "from-orange-500 to-red-500",
    description: "Analisis data dan machine learning",
  },
  {
    name: "Karier",
    icon: Briefcase,
    count: 31,
    color: "from-indigo-500 to-violet-500",
    description: "Panduan pengembangan karier profesional",
  },
];

const featuredAuthors = [
  {
    name: "Sarah Johnson",
    role: "Senior UX Designer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    articles: 24,
    specialty: "UI/UX Design",
  },
  {
    name: "Michael Chen",
    role: "Full Stack Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    articles: 32,
    specialty: "Web Development",
  },
  {
    name: "Emily Rodriguez",
    role: "Digital Marketing Lead",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    articles: 28,
    specialty: "Marketing Strategy",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge variant="secondary" className="mb-4">
              Sumber Pembelajaran
            </Badge>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Blog SkillUp
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Wawasan, tutorial, dan tips dari para ahli industri untuk membantu Anda
              mengembangkan keterampilan dan memajukan karier Anda.
            </p>

            {/* Search */}
            <div className="mx-auto mt-8 max-w-md">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Cari artikel..."
                  className="bg-white pr-12"
                />
                <Button
                  size="icon"
                  className="absolute right-1 top-1/2 h-9 w-9 -translate-y-1/2"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Categories */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "Semua" ? "default" : "outline"}
                  className="cursor-pointer transition-colors hover:bg-primary hover:text-white"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="border-y bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Kategori Populer
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Jelajahi artikel berdasarkan topik favorit Anda
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
          >
            {popularCategories.map((category) => (
              <motion.div key={category.name} variants={itemVariants}>
                <Link href={`/blog?category=${category.name.toLowerCase()}`}>
                  <Card className="group h-full cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
                        <category.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                        {category.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <Badge variant="secondary">{category.count} artikel</Badge>
                        <ArrowRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href={`/blog/${featuredPost.slug}`}>
              <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="relative aspect-video md:aspect-auto">
                    <Image
                      src={featuredPost.thumbnail}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="flex flex-col justify-center p-6 md:p-8">
                    <Badge variant="secondary" className="w-fit">
                      Unggulan
                    </Badge>
                    <h2 className="mt-4 text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors sm:text-3xl">
                      {featuredPost.title}
                    </h2>
                    <p className="mt-4 text-slate-600">{featuredPost.excerpt}</p>

                    <div className="mt-6 flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={featuredPost.author.avatar} />
                        <AvatarFallback>
                          {featuredPost.author.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-slate-900">
                          {featuredPost.author.name}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <span>{featuredPost.publishedAt}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {featuredPost.readTime} menit baca
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* All Posts */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">Artikel Terbaru</h2>
                <Button variant="outline" className="gap-2">
                  Lihat Semua
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 grid gap-6 sm:grid-cols-2"
              >
            {[...otherPosts, ...blogPosts].map((post, index) => (
              <motion.div key={`${post.id}-${index}`} variants={itemVariants}>
                <Link href={`/blog/${post.slug}`}>
                  <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute left-3 top-3">
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="line-clamp-2 text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-slate-600">
                        {post.excerpt}
                      </p>

                      <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={post.author.avatar} />
                            <AvatarFallback>
                              {post.author.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <span>{post.author.name}</span>
                        </div>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime} menit
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

              {/* Load More */}
              <div className="mt-12 text-center">
                <Button variant="outline" size="lg">
                  Muat Lebih Banyak Artikel
                </Button>
              </div>
            </div>

            {/* Sidebar - Popular Articles */}
            <div className="space-y-8">
              {/* Most Popular */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold text-slate-900">
                      Artikel Terpopuler
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 5).map((post, index) => (
                      <Link key={post.id} href={`/blog/${post.slug}`}>
                        <div className="group flex gap-3 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-slate-900 line-clamp-2 group-hover:text-primary transition-colors">
                              {post.title}
                            </h4>
                            <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                              <Clock className="h-3 w-3" />
                              {post.readTime} menit baca
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup in Sidebar */}
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold text-slate-900">
                      Newsletter Mingguan
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    Dapatkan artikel terbaru langsung ke email Anda setiap minggu.
                  </p>
                  <Input
                    type="email"
                    placeholder="Email Anda"
                    className="mb-3"
                  />
                  <Button className="w-full" size="sm">
                    Berlangganan
                  </Button>
                  <div className="mt-3 flex items-start gap-2 text-xs text-slate-500">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald mt-0.5" />
                    <span>Gratis, berhenti kapan saja</span>
                  </div>
                </CardContent>
              </Card>

              {/* Topics */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold text-slate-900">
                      Topik Populer
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["React", "JavaScript", "UI Design", "SEO", "Python", "Data Analysis", "Marketing", "Career Tips"].map((topic) => (
                      <Badge key={topic} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Author Spotlight Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Penulis Unggulan
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Kenali para ahli yang berbagi pengetahuan dan pengalaman mereka
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {featuredAuthors.map((author) => (
              <motion.div key={author.name} variants={itemVariants}>
                <Card className="group text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="p-6">
                    <Avatar className="mx-auto h-24 w-24 ring-4 ring-white shadow-xl">
                      <AvatarImage src={author.avatar} />
                      <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="mt-4 text-xl font-semibold text-slate-900">
                      {author.name}
                    </h3>
                    <p className="text-slate-600">{author.role}</p>
                    <Badge variant="secondary" className="mt-3">
                      {author.specialty}
                    </Badge>
                    <div className="mt-4 flex items-center justify-center gap-6 text-sm">
                      <div>
                        <p className="text-2xl font-bold text-primary">{author.articles}</p>
                        <p className="text-slate-500">Artikel</p>
                      </div>
                    </div>
                    <Button variant="outline" className="mt-6 w-full">
                      Lihat Artikel
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl gradient-primary p-8 text-center text-white sm:p-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Berlangganan Newsletter Kami
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Dapatkan artikel terbaru, tutorial, dan sumber pembelajaran
              langsung ke inbox Anda.
            </p>
            <div className="mx-auto mt-8 flex max-w-md gap-3">
              <Input
                type="email"
                placeholder="Masukkan email Anda"
                className="border-white/20 bg-white/10 text-white placeholder:text-white/60"
              />
              <Button className="bg-white text-primary hover:bg-white/90">
                Berlangganan
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
