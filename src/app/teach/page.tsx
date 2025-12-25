"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Users,
  DollarSign,
  Globe,
  Video,
  Award,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Play,
  Lightbulb,
  Upload,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { instructors } from "@/lib/data";

const benefits = [
  {
    icon: Users,
    title: "Jangkau Jutaan Pembelajar",
    description: "Bagikan keahlian Anda dengan pembelajar dari seluruh dunia",
  },
  {
    icon: DollarSign,
    title: "Hasilkan Pendapatan",
    description: "Dapatkan pendapatan dari setiap kursus yang Anda buat",
  },
  {
    icon: Globe,
    title: "Dampak Global",
    description: "Bantu orang di seluruh dunia meningkatkan keterampilan mereka",
  },
  {
    icon: BarChart3,
    title: "Analitik Detail",
    description: "Pantau performa kursus dengan dashboard komprehensif",
  },
];

const howItWorks = [
  {
    step: 1,
    icon: Lightbulb,
    title: "Rencanakan Kursus",
    description: "Pilih topik yang Anda kuasai dan rencanakan struktur kurikulum",
  },
  {
    step: 2,
    icon: Video,
    title: "Buat Konten",
    description: "Rekam video, buat materi, dan susun kuis untuk pembelajar",
  },
  {
    step: 3,
    icon: Upload,
    title: "Upload & Review",
    description: "Upload kursus Anda dan tim kami akan melakukan review kualitas",
  },
  {
    step: 4,
    icon: Rocket,
    title: "Publikasi & Raih Penghasilan",
    description: "Kursus Anda tayang dan Anda mulai mendapatkan penghasilan",
  },
];

const requirements = [
  "Keahlian mendalam di bidang yang akan diajarkan",
  "Kemampuan komunikasi yang baik",
  "Kamera dan mikrofon berkualitas baik",
  "Komitmen untuk membuat konten berkualitas",
  "Waktu minimal 2-4 jam per minggu",
];

const stats = [
  { value: "Rp 50jt+", label: "Rata-rata Penghasilan Instruktur Top/Bulan" },
  { value: "10.000+", label: "Instruktur Aktif" },
  { value: "5jt+", label: "Pembelajar Terjangkau" },
  { value: "120+", label: "Negara" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TeachPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-500 to-amber-600 py-20 sm:py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">
                Jadi Instruktur
              </Badge>
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                Bagikan Keahlian Anda dengan Dunia
              </h1>
              <p className="mt-6 text-lg text-white/80 sm:text-xl">
                Jadilah instruktur di SkillUp Academy dan bantu jutaan orang
                belajar keterampilan baru sambil menghasilkan pendapatan.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="xl" className="bg-white text-amber-600 hover:bg-white/90">
                  Mulai Mengajar
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Play className="mr-2 h-5 w-5" />
                  Tonton Video
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=600&fit=crop"
                  alt="Instruktur mengajar"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl font-bold text-amber-600 sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
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
              Mengapa Mengajar di SkillUp Academy?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Bergabunglah dengan ribuan instruktur yang telah sukses di platform kami
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
                      <benefit.icon className="h-7 w-7 text-amber-600" />
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

      {/* How It Works Section */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Cara Kerjanya
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              4 langkah mudah untuk mulai mengajar dan menghasilkan
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {howItWorks.map((step, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-xl font-bold text-white">
                      {step.step}
                    </div>
                    <step.icon className="mx-auto mb-2 h-8 w-8 text-amber-600" />
                    <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                  </CardContent>
                </Card>
                {index < 3 && (
                  <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                    <ArrowRight className="h-6 w-6 text-slate-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Persyaratan Instruktur
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Untuk menjaga kualitas konten, kami memiliki beberapa persyaratan dasar:
              </p>
              <ul className="mt-6 space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                    <span className="text-slate-600">{req}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="mt-8 bg-amber-600 hover:bg-amber-700">
                Daftar Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop"
                  alt="Pembuatan kursus"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instructor Testimonials */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Instruktur Sukses Kami
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Bergabunglah dengan instruktur-instruktur hebat yang telah mengajar di platform kami
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {instructors.slice(0, 4).map((instructor, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
                      <Image
                        src={instructor.avatar}
                        alt={instructor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-4 font-semibold text-slate-900">{instructor.name}</h3>
                    <p className="text-sm text-slate-600">{instructor.title}</p>
                    <div className="mt-3 flex items-center justify-center gap-4 text-sm text-slate-500">
                      <span>{instructor.courses} kursus</span>
                      <span>{instructor.students.toLocaleString()} siswa</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-600 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <Award className="mx-auto h-12 w-12 text-white/80" />
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              Siap Memulai Perjalanan Mengajar Anda?
            </h2>
            <p className="mt-4 text-amber-100">
              Daftar sekarang dan mulai membuat dampak positif bagi jutaan pembelajar
            </p>
            <Button size="lg" className="mt-8 bg-white text-amber-600 hover:bg-white/90">
              Daftar Sebagai Instruktur
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
