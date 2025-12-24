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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
