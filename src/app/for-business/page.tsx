"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  Users,
  TrendingUp,
  Award,
  BarChart3,
  Shield,
  Headphones,
  CheckCircle2,
  Zap,
  Globe,
  Briefcase,
  Heart,
  ShoppingCart,
  Code,
  Star,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { companyLogos } from "@/lib/data";

const features = [
  {
    icon: Users,
    title: "Manajemen Tim",
    description: "Kelola akses tim, tetapkan kursus, dan lacak progres dengan mudah dari dasbor terpusat.",
  },
  {
    icon: BarChart3,
    title: "Analitik & Pelaporan",
    description: "Dapatkan wawasan detail tentang progres pembelajaran tim, keterlibatan, dan pengembangan keterampilan.",
  },
  {
    icon: Award,
    title: "Jalur Pembelajaran Kustom",
    description: "Buat program pembelajaran yang disesuaikan dengan tujuan dan kebutuhan perusahaan Anda.",
  },
  {
    icon: Shield,
    title: "Keamanan Enterprise",
    description: "Integrasi SSO, kepatuhan privasi data, dan keamanan tingkat enterprise.",
  },
  {
    icon: Headphones,
    title: "Dukungan Khusus",
    description: "Dapatkan manajer akun khusus dan dukungan prioritas untuk tim Anda.",
  },
  {
    icon: TrendingUp,
    title: "Pelacakan ROI",
    description: "Ukur dampak pelatihan terhadap kinerja karyawan dan hasil bisnis.",
  },
];

const benefits = [
  "Akses ke 200+ kursus profesional",
  "Jalur pembelajaran kustom untuk tim Anda",
  "Analitik dan pelaporan terperinci",
  "SSO & keamanan enterprise",
  "Manajer akun khusus",
  "Dukungan prioritas",
  "Diskon volume",
  "Akses API",
];

const roiStats = [
  { label: "Peningkatan Produktivitas", value: "40%", icon: TrendingUp },
  { label: "Penghematan Biaya Pelatihan", value: "60%", icon: Target },
  { label: "Tingkat Retensi Karyawan", value: "85%", icon: Users },
  { label: "ROI Rata-rata", value: "320%", icon: BarChart3 },
];

const industries = [
  { name: "Teknologi & Startup", icon: Code, color: "from-blue-500 to-cyan-500" },
  { name: "E-Commerce", icon: ShoppingCart, color: "from-purple-500 to-pink-500" },
  { name: "Layanan Kesehatan", icon: Heart, color: "from-green-500 to-emerald-500" },
  { name: "Keuangan & Perbankan", icon: Briefcase, color: "from-amber-500 to-orange-500" },
  { name: "Pendidikan", icon: Award, color: "from-indigo-500 to-violet-500" },
  { name: "Manufaktur", icon: Globe, color: "from-red-500 to-pink-500" },
];

const caseStudies = [
  {
    company: "TechCorp Indonesia",
    logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=100&fit=crop",
    industry: "Technology",
    employees: "250+",
    challenge: "Kesenjangan keterampilan teknis yang signifikan dalam tim engineering",
    solution: "Implementasi jalur pembelajaran Full Stack Development untuk 80 engineers",
    results: [
      "40% peningkatan delivery speed",
      "85% completion rate",
      "15 promosi internal dalam 6 bulan",
    ],
  },
  {
    company: "Retail Nusantara",
    logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&h=100&fit=crop",
    industry: "Retail",
    employees: "500+",
    challenge: "Tim marketing membutuhkan upskilling di digital marketing",
    solution: "Program pelatihan Digital Marketing untuk 120 staff marketing",
    results: [
      "3x peningkatan engagement online",
      "50% penurunan customer acquisition cost",
      "ROI 400% dalam 8 bulan",
    ],
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

export default function ForBusinessPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-4">
                <Building2 className="mr-1 h-3 w-3" />
                Solusi Enterprise
              </Badge>

              <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl lg:text-6xl">
                Tingkatkan Keterampilan Tim Anda dengan{" "}
                <span className="gradient-text">SkillUp untuk Bisnis</span>
              </h1>

              <p className="mt-6 text-lg text-slate-600">
                Transformasi tenaga kerja Anda dengan platform pembelajaran enterprise kami.
                Berikan tim Anda akses ke kursus kelas dunia, lacak progres mereka,
                dan ukur dampaknya pada bisnis Anda.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="xl">Minta Demo</Button>
                <Button variant="outline" size="xl">
                  Hubungi Sales
                </Button>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <p className="text-3xl font-bold text-slate-900">500+</p>
                  <p className="text-sm text-slate-600">Klien enterprise</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">94%</p>
                  <p className="text-sm text-slate-600">Tingkat penyelesaian</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">4.8/5</p>
                  <p className="text-sm text-slate-600">Skor kepuasan</p>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="shadow-2xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900">
                    Mulai Hari Ini
                  </h2>
                  <p className="mt-2 text-slate-600">
                    Isi formulir dan kami akan segera menghubungi Anda.
                  </p>

                  <form className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium text-slate-700">
                          Nama Depan
                        </label>
                        <Input className="mt-1" placeholder="John" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-700">
                          Nama Belakang
                        </label>
                        <Input className="mt-1" placeholder="Smith" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700">
                        Email Kantor
                      </label>
                      <Input
                        className="mt-1"
                        type="email"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700">
                        Nama Perusahaan
                      </label>
                      <Input className="mt-1" placeholder="Acme Inc." />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700">
                        Ukuran Tim
                      </label>
                      <select className="mt-1 flex h-11 w-full rounded-lg border border-input bg-white px-4 py-2 text-sm">
                        <option>1-10 karyawan</option>
                        <option>11-50 karyawan</option>
                        <option>51-200 karyawan</option>
                        <option>201-500 karyawan</option>
                        <option>500+ karyawan</option>
                      </select>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Minta Demo
                    </Button>
                  </form>

                  <p className="mt-4 text-center text-xs text-slate-500">
                    Dengan mengirim, Anda setuju dengan Ketentuan dan Kebijakan Privasi kami.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="border-y bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-slate-500">
            DIPERCAYA OLEH PERUSAHAAN TERKEMUKA
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="flex h-12 w-28 items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
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
              ROI & Hasil Terukur
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Investasi pelatihan yang memberikan dampak nyata pada bisnis Anda
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {roiStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                    <p className="mt-4 text-4xl font-bold text-slate-900">{stat.value}</p>
                    <p className="mt-2 text-slate-600">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600">
              Berdasarkan data dari 500+ perusahaan klien kami
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Semua yang Anda Butuhkan untuk Melatih Tim Anda
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Platform enterprise kami menyediakan semua alat yang Anda butuhkan untuk
              mengelola, melacak, dan mengoptimalkan perjalanan pembelajaran tim Anda.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Mengapa Memilih SkillUp untuk Bisnis?
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Bergabunglah dengan ratusan perusahaan yang mempercayai SkillUp Academy untuk mengembangkan
                tenaga kerja mereka dan mendorong pertumbuhan bisnis.
              </p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" className="mt-8">
                Mulai Sekarang
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop"
                  alt="Analytics Dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-lg font-semibold text-white">
                    Dasbor Analitik Real-time
                  </p>
                  <p className="text-sm text-white/80">
                    Lacak progres pembelajaran tim Anda
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-16">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Siap Mentransformasi Tim Anda?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Jadwalkan demo yang dipersonalisasi dan lihat bagaimana SkillUp untuk Bisnis dapat
            membantu organisasi Anda berkembang.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="xl"
              className="bg-white text-primary hover:bg-white/90"
            >
              Minta Demo
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Hubungi Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
