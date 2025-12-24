"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Users, BookOpen, Linkedin, Twitter, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { instructors } from "@/lib/data";
import { formatNumber } from "@/lib/utils";

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
