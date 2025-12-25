"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Target,
  Heart,
  Users,
  Sparkles,
  Globe,
  Award,
  BookOpen,
  TrendingUp,
  Zap,
  CheckCircle2,
  GraduationCap,
  Shield,
  Rocket,
  Star,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { stats, instructors } from "@/lib/data";
import { formatNumber } from "@/lib/utils";

const values = [
  {
    icon: Heart,
    title: "Semangat untuk Belajar",
    description: "Kami percaya setiap orang berhak mendapatkan akses ke pendidikan berkualitas yang dapat mengubah hidup mereka.",
  },
  {
    icon: Target,
    title: "Keunggulan",
    description: "Kami mempertahankan standar tertinggi dalam kualitas kursus dan pengalaman pembelajaran.",
  },
  {
    icon: Users,
    title: "Komunitas",
    description: "Kami membina komunitas yang mendukung dimana pembelajar saling membantu untuk berkembang.",
  },
  {
    icon: Sparkles,
    title: "Inovasi",
    description: "Kami terus meningkatkan platform kami dengan teknologi dan metode pengajaran terbaru.",
  },
];

const milestones = [
  { year: "2019", event: "SkillUp Academy didirikan" },
  { year: "2020", event: "Mencapai 10.000 siswa" },
  { year: "2021", event: "Meluncurkan aplikasi mobile" },
  { year: "2022", event: "Ekspansi ke solusi enterprise" },
  { year: "2023", event: "50.000+ siswa di seluruh dunia" },
  { year: "2024", event: "200+ kursus, 50+ instruktur" },
];

const team = [
  {
    name: "Alex Thompson",
    role: "CEO & Co-Founder",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "Maya Patel",
    role: "CTO & Co-Founder",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  {
    name: "James Wilson",
    role: "Head of Content",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Sarah Lee",
    role: "Head of Community",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

const whyChooseUs = [
  {
    icon: GraduationCap,
    title: "Instruktur Ahli Bersertifikat",
    description: "Belajar dari profesional industri dengan pengalaman dunia nyata dan rekam jejak yang terbukti.",
  },
  {
    icon: Zap,
    title: "Pembelajaran Praktis",
    description: "Proyek langsung dan latihan praktis yang mempersiapkan Anda untuk pekerjaan sesungguhnya.",
  },
  {
    icon: Shield,
    title: "Sertifikasi Terverifikasi",
    description: "Dapatkan sertifikat yang diakui industri untuk meningkatkan kredibilitas profesional Anda.",
  },
  {
    icon: Users,
    title: "Komunitas Aktif",
    description: "Bergabung dengan ribuan pembelajar dan dapatkan dukungan dari komunitas yang solid.",
  },
  {
    icon: Rocket,
    title: "Jalur Karier Jelas",
    description: "Program pembelajaran terstruktur yang dirancang untuk memajukan karier Anda.",
  },
  {
    icon: CheckCircle2,
    title: "Jaminan Kepuasan",
    description: "Jaminan uang kembali 30 hari jika Anda tidak puas dengan pembelajaran Anda.",
  },
];

const companyPartners = [
  { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=100&fit=crop" },
  { name: "Microsoft", logo: "https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?w=200&h=100&fit=crop" },
  { name: "Amazon", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&h=100&fit=crop" },
  { name: "Meta", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=100&fit=crop" },
  { name: "Apple", logo: "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=200&h=100&fit=crop" },
  { name: "Netflix", logo: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=200&h=100&fit=crop" },
];

const awards = [
  {
    year: "2024",
    title: "Platform Pembelajaran Online Terbaik",
    organization: "Indonesia Education Awards",
    icon: Award,
  },
  {
    year: "2023",
    title: "Inovasi Teknologi Pendidikan Terbaik",
    organization: "Tech Innovation Summit",
    icon: Star,
  },
  {
    year: "2023",
    title: "Pilihan Pengguna Terbaik",
    organization: "EdTech Choice Awards",
    icon: Trophy,
  },
  {
    year: "2022",
    title: "Startup Pendidikan Terbaik",
    organization: "Startup Indonesia Awards",
    icon: Rocket,
  },
];

const animatedStats = [
  { label: "Siswa Aktif", value: 52847, suffix: "+", icon: Users },
  { label: "Kursus Tersedia", value: 235, suffix: "+", icon: BookOpen },
  { label: "Tingkat Kepuasan", value: 98, suffix: "%", icon: Star },
  { label: "Negara", value: 45, suffix: "+", icon: Globe },
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

// Animated Counter Component
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
    >
      <span className="text-4xl font-bold text-slate-900 sm:text-5xl">
        {count.toLocaleString()}{suffix}
      </span>
    </motion.div>
  );
}

// Animated Statistics Section Component
function AnimatedStatsSection() {
  return (
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
            Statistik Kami
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Angka-angka yang menunjukkan komitmen kami terhadap keunggulan dan dampak
            yang kami buat dalam dunia pendidikan online.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {animatedStats.map((stat, index) => (
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
                  <div className="mt-4">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    <p className="mt-2 text-slate-600">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
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
              Kisah Kami
            </Badge>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Memberdayakan Pembelajar untuk{" "}
              <span className="gradient-text">Meraih Impian Mereka</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              SkillUp Academy didirikan dengan misi sederhana: membuat
              pendidikan berkualitas tinggi dapat diakses oleh semua orang, di mana saja. Kami
              percaya bahwa pembelajaran harus menarik, praktis, dan
              transformatif.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <Users className="mx-auto h-8 w-8 text-primary" />
              <p className="mt-2 text-3xl font-bold text-slate-900">
                {formatNumber(stats.students)}+
              </p>
              <p className="text-slate-600">Siswa</p>
            </div>
            <div className="text-center">
              <BookOpen className="mx-auto h-8 w-8 text-primary" />
              <p className="mt-2 text-3xl font-bold text-slate-900">
                {stats.courses}+
              </p>
              <p className="text-slate-600">Kursus</p>
            </div>
            <div className="text-center">
              <Globe className="mx-auto h-8 w-8 text-primary" />
              <p className="mt-2 text-3xl font-bold text-slate-900">
                {stats.countries}+
              </p>
              <p className="text-slate-600">Negara</p>
            </div>
            <div className="text-center">
              <Award className="mx-auto h-8 w-8 text-primary" />
              <p className="mt-2 text-3xl font-bold text-slate-900">
                {stats.completionRate}%
              </p>
              <p className="text-slate-600">Tingkat Penyelesaian</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Misi Kami
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Kami dalam misi untuk mendemokratisasi pendidikan dan membantu jutaan
                orang memperoleh keterampilan yang mereka butuhkan untuk sukses di ekonomi
                modern.
              </p>
              <p className="mt-4 text-slate-600">
                Baik Anda ingin beralih karier, mempelajari keterampilan baru, atau
                maju dalam peran Anda saat ini, SkillUp Academy menyediakan
                kursus dan dukungan yang Anda butuhkan untuk mencapai tujuan Anda.
              </p>
              <p className="mt-4 text-slate-600">
                Platform kami menggabungkan kursus video yang dipimpin ahli dengan proyek
                langsung, kuis, dan komunitas yang mendukung untuk memastikan Anda tidak
                hanya belajar tetapi juga menerapkan apa yang telah Anda pelajari.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
                <div className="flex h-full items-center justify-center">
                  <TrendingUp className="h-32 w-32 text-primary/40" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Mengapa Memilih Kami
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Kami menawarkan pengalaman pembelajaran yang komprehensif dan berkualitas tinggi
              yang membedakan kami dari platform lainnya.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {whyChooseUs.map((reason) => (
              <motion.div key={reason.title} variants={itemVariants}>
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                      <reason.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-slate-600">{reason.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Nilai-Nilai Kami
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Nilai-nilai inti ini memandu semua yang kami lakukan di SkillUp Academy.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((value) => (
              <motion.div key={value.title} variants={itemVariants}>
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-4 font-semibold text-slate-900">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Animated Statistics Section */}
      <AnimatedStatsSection />

      {/* Timeline */}
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
              Perjalanan Kami
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Dari ide kecil menjadi platform pembelajaran global.
            </p>
          </motion.div>

          <div className="relative mx-auto mt-12 max-w-3xl">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-slate-200" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-8 flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  }`}
                >
                  <span className="text-lg font-bold text-primary">
                    {milestone.year}
                  </span>
                  <p className="text-slate-600">{milestone.event}</p>
                </div>
                <div className="absolute left-1/2 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-primary">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Partners Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Mitra Perusahaan
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Dipercaya oleh perusahaan-perusahaan terkemuka untuk melatih tenaga kerja mereka.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6"
          >
            {companyPartners.map((company, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center justify-center"
              >
                <div className="group relative h-20 w-full overflow-hidden rounded-lg bg-slate-50 p-4 transition-all duration-300 hover:shadow-lg">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <p className="text-slate-600">
              Dan banyak perusahaan lainnya yang mempercayai kami untuk pengembangan karyawan mereka.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Kenali Tim Kami
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Orang-orang bersemangat di balik SkillUp Academy.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {team.map((member) => (
              <motion.div key={member.name} variants={itemVariants}>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Avatar className="mx-auto h-24 w-24">
                      <AvatarImage src={member.image} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="mt-4 font-semibold text-slate-900">
                      {member.name}
                    </h3>
                    <p className="text-sm text-slate-600">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
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
              Penghargaan & Pengakuan
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Prestasi kami dalam industri teknologi pendidikan telah diakui oleh
              berbagai organisasi dan komunitas.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {awards.map((award, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group h-full border-2 transition-all duration-300 hover:border-amber hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber/20 to-yellow-500/20 group-hover:from-amber/30 group-hover:to-yellow-500/30 transition-colors">
                      <award.icon className="h-8 w-8 text-amber" />
                    </div>
                    <Badge variant="outline" className="mt-4">
                      {award.year}
                    </Badge>
                    <h3 className="mt-3 font-semibold text-slate-900">
                      {award.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {award.organization}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber/10 to-yellow-500/10 px-6 py-3"
            >
              <Trophy className="h-5 w-5 text-amber" />
              <span className="text-slate-700">
                Dan masih banyak penghargaan lainnya yang telah kami raih
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-primary py-16">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Bergabung dengan Komunitas Pembelajaran Kami
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Mulai perjalanan pembelajaran Anda hari ini dan bergabunglah dengan ribuan pembelajar
            yang sedang mentransformasi karier mereka.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="xl"
              className="bg-white text-primary hover:bg-white/90"
            >
              Mulai Belajar Gratis
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Lihat Kursus
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
