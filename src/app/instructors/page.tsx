"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Users, BookOpen, Linkedin, Twitter, Globe, Code, Palette, BarChart3, CheckCircle2, Award, Target, UserCheck, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { instructors } from "@/lib/data";
import { formatNumber } from "@/lib/utils";

const expertiseAreas = [
  {
    icon: Code,
    title: "Pengembangan Web & Mobile",
    count: 28,
    color: "from-blue-500 to-cyan-500",
    skills: ["React", "Node.js", "Python", "Flutter"],
  },
  {
    icon: Palette,
    title: "Design UI/UX",
    count: 15,
    color: "from-purple-500 to-pink-500",
    skills: ["Figma", "Adobe XD", "Sketch", "Design System"],
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    count: 12,
    color: "from-green-500 to-emerald-500",
    skills: ["SEO", "Social Media", "Analytics", "Content"],
  },
  {
    icon: Award,
    title: "Data Science & AI",
    count: 18,
    color: "from-orange-500 to-red-500",
    skills: ["Machine Learning", "Python", "SQL", "Tableau"],
  },
];

const vettingProcess = [
  {
    step: 1,
    title: "Seleksi Keahlian",
    description: "Calon instruktur harus memiliki minimal 5 tahun pengalaman di bidangnya dan portofolio yang solid.",
    icon: Target,
  },
  {
    step: 2,
    title: "Verifikasi Kredensial",
    description: "Kami memverifikasi sertifikasi, pengalaman kerja, dan prestasi profesional setiap kandidat.",
    icon: CheckCircle2,
  },
  {
    step: 3,
    title: "Pelatihan Mengajar",
    description: "Instruktur yang lolos seleksi mengikuti pelatihan metodologi pengajaran online yang efektif.",
    icon: GraduationCap,
  },
  {
    step: 4,
    title: "Evaluasi Berkelanjutan",
    description: "Kualitas pengajaran dipantau secara berkala melalui feedback siswa dan review kursus.",
    icon: UserCheck,
  },
];

const instructorStats = [
  { label: "Instruktur Aktif", value: "50+", icon: Users },
  { label: "Rata-rata Pengalaman", value: "8 Tahun", icon: Award },
  { label: "Tingkat Kepuasan", value: "4.8/5", icon: Star },
  { label: "Total Siswa Diajar", value: "50K+", icon: GraduationCap },
];

const studentTestimonials = [
  {
    student: "Andi Prasetyo",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    instructor: "Sarah Chen",
    course: "React & Next.js Complete",
    rating: 5,
    text: "Sarah adalah instruktur terbaik yang pernah saya miliki! Penjelasannya sangat jelas dan mudah dipahami. Sekarang saya bisa membuat aplikasi web profesional.",
  },
  {
    student: "Dewi Kusuma",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    instructor: "Michael Rodriguez",
    course: "UI/UX Design Mastery",
    rating: 5,
    text: "Michael tidak hanya mengajarkan tools, tapi juga mindset design thinking yang sangat berharga. Portofolio saya sekarang jauh lebih baik!",
  },
  {
    student: "Rudi Hartono",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    instructor: "Jennifer Park",
    course: "Digital Marketing Strategy",
    rating: 5,
    text: "Pengalaman praktis Jennifer di industri marketing sangat terasa. Studi kasus yang diajarkan sangat relevan dan applicable.",
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

export default function InstructorsPage() {
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
              Belajar dari yang Terbaik
            </Badge>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Instruktur Ahli Kami
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Belajar dari profesional industri yang membawa pengalaman dunia nyata
              ke setiap pelajaran. Instruktur kami telah bekerja di perusahaan top dan
              bersemangat tentang mengajar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instructor Stats Section */}
      <section className="border-y bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {instructorStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas Section */}
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
              Keahlian Instruktur
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Instruktur kami memiliki keahlian di berbagai bidang teknologi dan bisnis
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {expertiseAreas.map((area) => (
              <motion.div key={area.title} variants={itemVariants}>
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${area.color} shadow-lg`}>
                      <area.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {area.count} Instruktur Ahli
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {area.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {instructors.map((instructor) => (
              <motion.div key={instructor.id} variants={itemVariants}>
                <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    {/* Avatar */}
                    <div className="flex justify-center">
                      <Avatar className="h-32 w-32 ring-4 ring-white shadow-xl">
                        <AvatarImage src={instructor.avatar} />
                        <AvatarFallback className="text-3xl">
                          {instructor.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    {/* Info */}
                    <div className="mt-6 text-center">
                      <Link
                        href={`/instructors/${instructor.slug}`}
                        className="text-xl font-bold text-slate-900 hover:text-primary transition-colors"
                      >
                        {instructor.name}
                      </Link>
                      <p className="mt-1 text-slate-600">{instructor.title}</p>

                      {/* Rating */}
                      <div className="mt-4 flex items-center justify-center gap-1">
                        <Star className="h-5 w-5 fill-amber text-amber" />
                        <span className="font-semibold">{instructor.rating}</span>
                        <span className="text-sm text-slate-500">
                          ({formatNumber(instructor.reviews)} ulasan)
                        </span>
                      </div>

                      {/* Stats */}
                      <div className="mt-4 flex justify-center gap-8">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-slate-900">
                            {formatNumber(instructor.students)}
                          </p>
                          <p className="text-sm text-slate-500">Siswa</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-slate-900">
                            {instructor.courses}
                          </p>
                          <p className="text-sm text-slate-500">Kursus</p>
                        </div>
                      </div>

                      {/* Specialties */}
                      <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {instructor.specialties.map((specialty) => (
                          <Badge key={specialty} variant="outline">
                            {specialty}
                          </Badge>
                        ))}
                      </div>

                      {/* Social */}
                      <div className="mt-6 flex justify-center gap-4">
                        {instructor.social.linkedin && (
                          <a
                            href={instructor.social.linkedin}
                            className="text-slate-400 hover:text-primary transition-colors"
                          >
                            <Linkedin className="h-5 w-5" />
                          </a>
                        )}
                        {instructor.social.twitter && (
                          <a
                            href={instructor.social.twitter}
                            className="text-slate-400 hover:text-primary transition-colors"
                          >
                            <Twitter className="h-5 w-5" />
                          </a>
                        )}
                        {instructor.social.website && (
                          <a
                            href={instructor.social.website}
                            className="text-slate-400 hover:text-primary transition-colors"
                          >
                            <Globe className="h-5 w-5" />
                          </a>
                        )}
                      </div>

                      {/* CTA */}
                      <Link href={`/instructors/${instructor.slug}`}>
                        <Button variant="outline" className="mt-6 w-full">
                          Lihat Profil
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vetting Process Section */}
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
              Cara Instruktur Dipilih
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Kami memiliki proses seleksi yang ketat untuk memastikan hanya instruktur terbaik yang mengajar di platform kami
            </p>
          </motion.div>

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-primary md:left-1/2" />

              {vettingProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative mb-8 flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <Card className="group hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className={`mb-3 flex items-center gap-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                            <step.icon className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-semibold text-slate-900">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-slate-600">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Step number */}
                  <div className="absolute left-8 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-bold text-white shadow-lg md:left-1/2 md:-translate-x-1/2">
                    {step.step}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials Section */}
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
              Apa Kata Siswa Tentang Instruktur Kami
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Testimoni nyata dari siswa yang telah belajar bersama instruktur kami
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {studentTestimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber text-amber" />
                      ))}
                    </div>

                    {/* Testimonial */}
                    <p className="text-slate-700 italic">"{testimonial.text}"</p>

                    {/* Student info */}
                    <div className="mt-6 flex items-center gap-3 border-t pt-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback>{testimonial.student.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-slate-900">{testimonial.student}</p>
                        <p className="text-sm text-slate-500">
                          Kursus: {testimonial.course}
                        </p>
                        <p className="text-xs text-primary">
                          Instruktur: {testimonial.instructor}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Become Instructor CTA */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl gradient-primary p-8 text-center text-white sm:p-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Bagikan Keahlian Anda
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Menjadi instruktur dan jangkau ribuan siswa di seluruh dunia.
              Kami menyediakan semua alat dan dukungan yang Anda butuhkan untuk membuat kursus yang menarik.
            </p>
            <Button
              size="lg"
              className="mt-8 bg-white text-primary hover:bg-white/90"
            >
              Menjadi Instruktur
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
