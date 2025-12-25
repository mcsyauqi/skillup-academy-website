"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Handshake,
  Users,
  Building2,
  GraduationCap,
  TrendingUp,
  Globe,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { companyLogos } from "@/lib/data";

const partnershipTypes = [
  {
    icon: TrendingUp,
    title: "Program Afiliasi",
    description: "Dapatkan komisi dengan merekomendasikan kursus kami kepada audiens Anda",
    benefits: [
      "Komisi hingga 30% per penjualan",
      "Material marketing siap pakai",
      "Dashboard tracking real-time",
      "Pembayaran bulanan tepat waktu",
    ],
  },
  {
    icon: Building2,
    title: "Kemitraan Enterprise",
    description: "Solusi pelatihan korporat untuk meningkatkan kemampuan tim Anda",
    benefits: [
      "Harga khusus untuk volume besar",
      "Learning path custom",
      "Dedicated account manager",
      "Laporan dan analitik detail",
    ],
  },
  {
    icon: GraduationCap,
    title: "Kemitraan Pendidikan",
    description: "Kolaborasi dengan institusi pendidikan untuk kurikulum digital",
    benefits: [
      "Integrasi dengan LMS kampus",
      "Diskon khusus untuk mahasiswa",
      "Sertifikasi terakreditasi",
      "Program magang",
    ],
  },
];

const partnerBenefits = [
  {
    icon: Globe,
    title: "Jangkauan Global",
    description: "Akses ke 50.000+ pembelajar dari 120 negara",
  },
  {
    icon: Award,
    title: "Konten Berkualitas",
    description: "200+ kursus dari instruktur ahli industri",
  },
  {
    icon: TrendingUp,
    title: "Pertumbuhan Bersama",
    description: "Peluang bisnis yang saling menguntungkan",
  },
  {
    icon: Users,
    title: "Dukungan Dedikasi",
    description: "Tim partner success siap membantu Anda",
  },
];

const testimonials = [
  {
    quote: "Kemitraan dengan SkillUp Academy telah membantu kami meningkatkan kemampuan tim engineering sebesar 40%.",
    author: "Rina Wijaya",
    role: "HR Director, Tech Company",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote: "Program afiliasi mereka sangat transparan dan pembayaran selalu tepat waktu. Sangat recommended!",
    author: "Budi Santoso",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-700 py-20 sm:py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">
              Program Kemitraan
            </Badge>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Bermitra dengan Kami
            </h1>
            <p className="mt-6 text-lg text-white/80 sm:text-xl">
              Bergabunglah dengan jaringan mitra kami dan bersama-sama kita
              dapat memberdayakan lebih banyak pembelajar di seluruh dunia.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="xl" className="bg-white text-emerald-600 hover:bg-white/90">
                Jadi Mitra
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="border-b bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-center text-slate-600">Dipercaya oleh perusahaan terkemuka</p>
          <div className="flex flex-wrap items-center justify-center gap-8 grayscale opacity-60">
            {companyLogos.map((company, index) => (
              <div key={index} className="relative h-8 w-24">
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Jenis Kemitraan
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Pilih jenis kemitraan yang sesuai dengan kebutuhan Anda
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-8 lg:grid-cols-3"
          >
            {partnershipTypes.map((type, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100">
                      <type.icon className="h-7 w-7 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{type.title}</h3>
                    <p className="mt-2 text-slate-600">{type.description}</p>
                    <ul className="mt-4 space-y-2">
                      {type.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                          <span className="text-sm text-slate-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700">
                      Daftar Sekarang
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Keuntungan Bermitra
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Nikmati berbagai keuntungan menjadi mitra SkillUp Academy
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {partnerBenefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                      <benefit.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Kata Mitra Kami
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-8 md:grid-cols-2"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <p className="text-lg text-slate-600 italic">"{testimonial.quote}"</p>
                    <div className="mt-6 flex items-center gap-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{testimonial.author}</p>
                        <p className="text-sm text-slate-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <Handshake className="mx-auto h-12 w-12 text-white/80" />
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              Siap Bermitra dengan Kami?
            </h2>
            <p className="mt-4 text-emerald-100">
              Hubungi tim partnership kami untuk mendiskusikan peluang kerjasama
            </p>
            <Button size="lg" className="mt-8 bg-white text-emerald-600 hover:bg-white/90">
              Hubungi Kami
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
