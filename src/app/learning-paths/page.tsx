"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Clock,
  Users,
  BookOpen,
  ArrowRight,
  Target,
  TrendingUp,
  Award,
  CheckCircle2,
  Lightbulb,
  Rocket,
  Star,
  Play,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { learningPaths } from "@/lib/data";
import { formatDuration, formatNumber } from "@/lib/utils";

const benefits = [
  {
    icon: Target,
    title: "Pembelajaran Terstruktur",
    description: "Ikuti jalur yang dikurasi oleh para ahli industri",
  },
  {
    icon: TrendingUp,
    title: "Fokus pada Karier",
    description: "Bangun keterampilan yang benar-benar dicari pemberi kerja",
  },
  {
    icon: Award,
    title: "Kredensial Terverifikasi",
    description: "Dapatkan sertifikat yang diakui oleh perusahaan top",
  },
];

const whyLearningPaths = [
  {
    icon: Target,
    title: "Roadmap yang Jelas",
    description: "Tidak perlu bingung harus belajar apa. Kami sudah menyusun urutan pembelajaran yang optimal untuk mencapai tujuan karier Anda.",
  },
  {
    icon: Lightbulb,
    title: "Hemat Waktu & Biaya",
    description: "Dapatkan bundel kursus dengan harga lebih hemat dibanding membeli satuan. Plus, Anda fokus pada yang benar-benar penting.",
  },
  {
    icon: CheckCircle2,
    title: "Proyek Portfolio",
    description: "Setiap jalur mencakup proyek nyata yang bisa Anda tunjukkan kepada calon pemberi kerja.",
  },
  {
    icon: Rocket,
    title: "Bimbingan Karier",
    description: "Akses ke mentor dan coach yang membantu Anda menerapkan keterampilan di dunia kerja.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Pilih Jalur Anda",
    description: "Pilih jalur pembelajaran berdasarkan tujuan karier dan minat Anda",
    icon: Target,
  },
  {
    step: 2,
    title: "Belajar Step-by-Step",
    description: "Ikuti kursus secara berurutan dengan proyek praktis di setiap tahap",
    icon: Play,
  },
  {
    step: 3,
    title: "Raih Sertifikat",
    description: "Selesaikan jalur dan dapatkan sertifikat terverifikasi untuk karier Anda",
    icon: Award,
  },
];

const successStories = [
  {
    name: "Rina Wijaya",
    role: "Full Stack Developer di Tokopedia",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    path: "Full Stack Web Development",
    story: "Jalur pembelajaran Full Stack membawa saya dari nol coding sampai dapat kerja di startup unicorn. Proyek-proyeknya sangat membantu saat interview!",
    duration: "6 bulan",
  },
  {
    name: "Budi Santoso",
    role: "UI/UX Designer di Gojek",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    path: "UI/UX Design Professional",
    story: "Dari graphic designer jadi UX designer. Jalur ini memberikan fondasi yang kuat dan portofolio yang impressive. Sekarang saya lead designer!",
    duration: "4 bulan",
  },
  {
    name: "Siti Nurhaliza",
    role: "Data Analyst di Shopee",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    path: "Data Science & Analytics",
    story: "Jalur Data Science membantu saya career switch dari accounting ke data analyst. Mentornya sangat supportive dan materinya up-to-date!",
    duration: "5 bulan",
  },
];

const comingSoonPaths = [
  {
    title: "AI & Machine Learning Engineer",
    description: "Kuasai AI, deep learning, dan deployment model ML",
    icon: Rocket,
    launchDate: "Q2 2024",
    features: ["TensorFlow", "PyTorch", "MLOps", "Computer Vision"],
  },
  {
    title: "Cloud Architecture & DevOps",
    description: "Menjadi expert dalam cloud infrastructure dan CI/CD",
    icon: Rocket,
    launchDate: "Q2 2024",
    features: ["AWS", "Docker", "Kubernetes", "Terraform"],
  },
  {
    title: "Blockchain Development",
    description: "Bangun aplikasi decentralized dan smart contracts",
    icon: Rocket,
    launchDate: "Q3 2024",
    features: ["Solidity", "Web3.js", "DeFi", "NFTs"],
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

export default function LearningPathsPage() {
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
              Pembelajaran Fokus Karier
            </Badge>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Jalur Pembelajaran
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Bundel kursus yang dikurasi untuk membantu Anda menguasai keterampilan baru dan
              memajukan karier Anda. Setiap jalur mencakup beberapa kursus yang saling melengkapi.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 grid gap-6 sm:grid-cols-3"
          >
            {benefits.map((benefit) => (
              <motion.div key={benefit.title} variants={itemVariants}>
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-4 font-semibold text-slate-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Learning Paths Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Mengapa Memilih Jalur Pembelajaran
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Jalur pembelajaran memberikan pengalaman belajar yang lebih terstruktur dan efektif
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {whyLearningPaths.map((reason) => (
              <motion.div key={reason.title} variants={itemVariants}>
                <Card className="h-full group hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <reason.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">{reason.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Cara Kerjanya
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Mulai perjalanan pembelajaran Anda dalam 3 langkah mudah
            </p>
          </motion.div>

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="grid gap-8 md:grid-cols-3">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  <Card className="h-full text-center">
                    <CardContent className="p-6">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-2xl font-bold text-white shadow-lg">
                        {step.step}
                      </div>
                      <div className="mt-4 flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-primary/10">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-slate-600">{step.description}</p>
                    </CardContent>
                  </Card>
                  {/* Arrow */}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 text-primary">
                      <ArrowRight className="h-8 w-8" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {learningPaths.map((path, index) => (
              <motion.div key={path.id} variants={itemVariants}>
                <Card className="overflow-hidden">
                  <div className="grid gap-6 md:grid-cols-3">
                    {/* Thumbnail */}
                    <div className="relative aspect-video md:aspect-auto">
                      <Image
                        src={path.thumbnail}
                        alt={path.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:bg-gradient-to-t" />
                      <div className="absolute bottom-4 left-4 md:hidden">
                        <Badge variant="bestseller">{path.outcome}</Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:col-span-2 md:py-8">
                      <div className="hidden md:block">
                        <Badge variant="bestseller">{path.outcome}</Badge>
                      </div>

                      <h2 className="mt-2 text-2xl font-bold text-slate-900">
                        {path.title}
                      </h2>
                      <p className="mt-2 text-slate-600">{path.description}</p>

                      {/* Stats */}
                      <div className="mt-4 flex flex-wrap gap-6 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          <span>{path.courses.length} kursus</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{formatDuration(path.duration)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{formatNumber(path.students)} terdaftar</span>
                        </div>
                        <Badge variant="outline">{path.level}</Badge>
                      </div>

                      {/* Courses preview */}
                      <div className="mt-6">
                        <p className="text-sm font-medium text-slate-700">
                          Kursus yang termasuk:
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {path.courses.map((course) => (
                            <Badge key={course.id} variant="secondary">
                              {course.title}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-6 flex gap-4">
                        <Link href={`/learning-paths/${path.slug}`}>
                          <Button className="gap-2">
                            Mulai Jalur Pembelajaran
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button variant="outline">Pelajari Lebih Lanjut</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Kisah Sukses Alumni
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Lihat bagaimana jalur pembelajaran kami mengubah karier mereka
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {successStories.map((story, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber text-amber" />
                      ))}
                    </div>
                    <p className="text-slate-700 italic">"{story.story}"</p>

                    <div className="mt-6 flex items-center gap-3 border-t pt-4">
                      <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                        <AvatarImage src={story.avatar} />
                        <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-slate-900">{story.name}</p>
                        <p className="text-sm text-slate-600">{story.role}</p>
                        <div className="mt-1 flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {story.path}
                          </Badge>
                          <span className="flex items-center gap-1 text-xs text-slate-500">
                            <Clock className="h-3 w-3" />
                            {story.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Paths Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge variant="secondary" className="mb-4">Segera Hadir</Badge>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Jalur Pembelajaran Baru
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Kami terus mengembangkan jalur pembelajaran baru untuk teknologi terkini
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {comingSoonPaths.map((path, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full relative overflow-hidden group">
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="secondary" className="bg-amber/90 text-white">
                      {path.launchDate}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                      <path.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">
                      {path.title}
                    </h3>
                    <p className="mt-2 text-slate-600">{path.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {path.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="outline" className="mt-6 w-full group-hover:bg-primary group-hover:text-white transition-colors">
                      Beri Tahu Saya
                    </Button>
                  </CardContent>
                  <div className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-lg" />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Tidak yakin jalur mana yang harus dipilih?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Ikuti penilaian cepat kami untuk mendapatkan rekomendasi yang dipersonalisasi berdasarkan
            tujuan dan tingkat pengalaman Anda.
          </p>
          <Button size="lg" className="mt-8 bg-white text-slate-900 hover:bg-white/90">
            Ikuti Penilaian Karier
          </Button>
        </div>
      </section>
    </div>
  );
}
