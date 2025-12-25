"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Heart,
  Zap,
  Globe,
  Coffee,
  Laptop,
  GraduationCap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Jakarta / Remote",
    type: "Full-time",
    description: "Bangun pengalaman belajar yang luar biasa dengan React dan Next.js",
  },
  {
    id: 2,
    title: "UX Designer",
    department: "Design",
    location: "Jakarta / Remote",
    type: "Full-time",
    description: "Desain antarmuka yang intuitif untuk jutaan pembelajar",
  },
  {
    id: 3,
    title: "Digital Marketing Manager",
    department: "Marketing",
    location: "Jakarta",
    type: "Full-time",
    description: "Pimpin strategi pemasaran digital untuk pertumbuhan platform",
  },
  {
    id: 4,
    title: "Content Writer",
    department: "Content",
    location: "Remote",
    type: "Full-time",
    description: "Buat konten edukatif yang menginspirasi dan informatif",
  },
  {
    id: 5,
    title: "Customer Success Specialist",
    department: "Support",
    location: "Jakarta",
    type: "Full-time",
    description: "Bantu pembelajar mencapai tujuan mereka dengan dukungan terbaik",
  },
];

const benefits = [
  {
    icon: Laptop,
    title: "Kerja Fleksibel",
    description: "Bekerja dari mana saja dengan jadwal yang fleksibel",
  },
  {
    icon: Heart,
    title: "Asuransi Kesehatan",
    description: "Asuransi kesehatan lengkap untuk Anda dan keluarga",
  },
  {
    icon: GraduationCap,
    title: "Akses Kursus Gratis",
    description: "Akses penuh ke semua kursus di platform kami",
  },
  {
    icon: Coffee,
    title: "Tunjangan Wellness",
    description: "Budget bulanan untuk kesehatan dan kebugaran",
  },
  {
    icon: Zap,
    title: "Pengembangan Karir",
    description: "Program mentoring dan pelatihan berkelanjutan",
  },
  {
    icon: Globe,
    title: "Tim Global",
    description: "Bekerja dengan talenta terbaik dari seluruh dunia",
  },
];

const values = [
  {
    title: "Pembelajaran Tanpa Batas",
    description: "Kami percaya setiap orang berhak mendapat pendidikan berkualitas",
  },
  {
    title: "Inovasi Berkelanjutan",
    description: "Kami terus berinovasi untuk pengalaman belajar terbaik",
  },
  {
    title: "Kolaborasi",
    description: "Kami bekerja sama untuk mencapai tujuan bersama",
  },
  {
    title: "Dampak Nyata",
    description: "Kami fokus pada hasil yang mengubah kehidupan",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-violet-600 to-violet-700 py-20 sm:py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">
              Kami Sedang Merekrut!
            </Badge>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Bergabung dengan Tim Kami
            </h1>
            <p className="mt-6 text-lg text-white/80 sm:text-xl">
              Bantu kami memberdayakan jutaan pembelajar di seluruh dunia.
              Bersama, kita bisa mengubah cara orang belajar dan berkembang.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="xl" className="bg-white text-primary hover:bg-white/90">
                Lihat Lowongan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Pelajari Budaya Kami
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "50+", label: "Karyawan" },
              { value: "15", label: "Negara" },
              { value: "4.8", label: "Rating Glassdoor" },
              { value: "95%", label: "Kepuasan Karyawan" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl font-bold text-primary sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Nilai-Nilai Kami
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Nilai-nilai yang memandu setiap keputusan dan tindakan kami
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Mengapa Bergabung dengan Kami?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Kami menawarkan lingkungan kerja yang mendukung pertumbuhan dan kesejahteraan Anda
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
                    <p className="mt-2 text-slate-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Lowongan Tersedia
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Temukan peran yang sesuai dengan keahlian dan passion Anda
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 space-y-4"
          >
            {jobOpenings.map((job) => (
              <motion.div key={job.id} variants={itemVariants}>
                <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-semibold text-slate-900">{job.title}</h3>
                          <Badge variant="outline">{job.department}</Badge>
                        </div>
                        <p className="mt-1 text-slate-600">{job.description}</p>
                        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <Button className="shrink-0">
                        Lamar Sekarang
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-r from-primary to-violet-600 p-8 text-center sm:p-12"
          >
            <Users className="mx-auto h-12 w-12 text-white/80" />
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              Tidak Menemukan Posisi yang Cocok?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Kirimkan CV Anda dan kami akan menghubungi Anda ketika ada posisi yang sesuai
            </p>
            <Button size="lg" className="mt-6 bg-white text-primary hover:bg-white/90">
              Kirim CV Anda
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
