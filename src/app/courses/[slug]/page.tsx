"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  Users,
  Clock,
  PlayCircle,
  BookOpen,
  Award,
  Globe,
  Calendar,
  CheckCircle2,
  Play,
  ChevronDown,
  Share2,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { courses } from "@/lib/data";
import { formatPrice, formatDuration, formatNumber, cn } from "@/lib/utils";

const curriculum = [
  {
    title: "Getting Started",
    lessons: [
      { title: "Welcome to the Course", duration: 5, preview: true },
      { title: "Course Overview & Resources", duration: 10, preview: true },
      { title: "Setting Up Your Environment", duration: 15, preview: false },
    ],
  },
  {
    title: "Core Fundamentals",
    lessons: [
      { title: "Understanding the Basics", duration: 25, preview: false },
      { title: "Key Concepts Explained", duration: 30, preview: false },
      { title: "Hands-on Practice", duration: 45, preview: false },
      { title: "Common Mistakes to Avoid", duration: 20, preview: false },
    ],
  },
  {
    title: "Advanced Techniques",
    lessons: [
      { title: "Deep Dive into Advanced Topics", duration: 40, preview: false },
      { title: "Real-World Applications", duration: 35, preview: false },
      { title: "Best Practices & Optimization", duration: 30, preview: false },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Overview", duration: 15, preview: false },
      { title: "Building Your Project", duration: 60, preview: false },
      { title: "Project Review & Next Steps", duration: 20, preview: false },
    ],
  },
];

export default function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const course = courses.find((c) => c.slug === slug) || courses[0];

  const totalLessons = curriculum.reduce((acc, section) => acc + section.lessons.length, 0);
  const totalDuration = curriculum.reduce(
    (acc, section) =>
      acc + section.lessons.reduce((a, l) => a + l.duration, 0),
    0
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Content */}
            <div className="lg:col-span-2">
              {/* Breadcrumb */}
              <nav className="mb-6 flex items-center gap-2 text-sm text-slate-400">
                <Link href="/courses" className="hover:text-white">
                  Kursus
                </Link>
                <span>/</span>
                <Link
                  href={`/courses?category=${course.category.slug}`}
                  className="hover:text-white"
                >
                  {course.category.name}
                </Link>
              </nav>

              {/* Badges */}
              <div className="mb-4 flex flex-wrap gap-2">
                {course.isBestseller && <Badge variant="bestseller">Bestseller</Badge>}
                {course.isNew && <Badge variant="new">New</Badge>}
                <Badge variant="outline" className="border-white/30 text-white">
                  {course.level}
                </Badge>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                {course.title}
              </h1>

              {/* Description */}
              <p className="mt-4 text-lg text-slate-300">{course.description}</p>

              {/* Stats */}
              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-amber text-amber" />
                  <span className="font-bold">{course.rating}</span>
                  <span className="text-slate-400">
                    ({formatNumber(course.reviews)} ulasan)
                  </span>
                </div>
                <div className="flex items-center gap-1 text-slate-300">
                  <Users className="h-5 w-5" />
                  <span>{formatNumber(course.students)} siswa</span>
                </div>
                <div className="flex items-center gap-1 text-slate-300">
                  <Calendar className="h-5 w-5" />
                  <span>Diperbarui {course.updatedAt}</span>
                </div>
                <div className="flex items-center gap-1 text-slate-300">
                  <Globe className="h-5 w-5" />
                  <span>English</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="mt-6 flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={course.instructor.avatar} />
                  <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm text-slate-400">Dibuat oleh</p>
                  <Link
                    href={`/instructors/${course.instructor.slug}`}
                    className="font-medium hover:text-primary"
                  >
                    {course.instructor.name}
                  </Link>
                </div>
              </div>
            </div>

            {/* Right - Course Card (Desktop) */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <Card className="overflow-hidden shadow-2xl">
                  {/* Video Preview */}
                  <div className="relative aspect-video">
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <Button
                        size="lg"
                        className="gap-2 bg-white/90 text-slate-900 hover:bg-white"
                      >
                        <Play className="h-5 w-5" />
                        Pratinjau Kursus
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Price */}
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-slate-900">
                        {formatPrice(course.price)}
                      </span>
                      {course.originalPrice && (
                        <>
                          <span className="text-lg text-slate-400 line-through">
                            {formatPrice(course.originalPrice)}
                          </span>
                          <Badge variant="success">
                            {Math.round(
                              (1 - course.price / course.originalPrice) * 100
                            )}
                            % off
                          </Badge>
                        </>
                      )}
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-6 space-y-3">
                      <Button className="w-full" size="lg">
                        Daftar Sekarang
                      </Button>
                      <Button variant="outline" className="w-full" size="lg">
                        <Heart className="mr-2 h-4 w-4" />
                        Tambah ke Wishlist
                      </Button>
                    </div>

                    <p className="mt-4 text-center text-sm text-slate-500">
                      Jaminan uang kembali 30 hari
                    </p>

                    <Separator className="my-6" />

                    {/* Course Includes */}
                    <div className="space-y-3">
                      <h4 className="font-semibold">Kursus ini mencakup:</h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-center gap-2">
                          <PlayCircle className="h-4 w-4 text-primary" />
                          {formatDuration(course.duration)} konten video
                        </li>
                        <li className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          {course.lessons} pelajaran
                        </li>
                        <li className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary" />
                          Sertifikat penyelesaian
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          Akses selamanya
                        </li>
                      </ul>
                    </div>

                    {/* Share */}
                    <div className="mt-6 flex items-center justify-center gap-4">
                      <Button variant="ghost" size="sm">
                        <Share2 className="mr-2 h-4 w-4" />
                        Bagikan
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile CTA Bar */}
      <div className="sticky top-16 z-40 border-b bg-white p-4 shadow-sm lg:hidden">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold">{formatPrice(course.price)}</span>
            {course.originalPrice && (
              <span className="ml-2 text-sm text-slate-400 line-through">
                {formatPrice(course.originalPrice)}
              </span>
            )}
          </div>
          <Button>Daftar Sekarang</Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="lg:max-w-3xl">
          <Tabs defaultValue="overview">
            <TabsList className="mb-8">
              <TabsTrigger value="overview">Ringkasan</TabsTrigger>
              <TabsTrigger value="curriculum">Kurikulum</TabsTrigger>
              <TabsTrigger value="instructor">Instruktur</TabsTrigger>
              <TabsTrigger value="reviews">Ulasan</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              {/* What you'll learn */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold">Yang akan Anda pelajari</h2>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {course.topics.map((topic, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
                        <span className="text-slate-600">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Course content summary */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold">Konten Kursus</h2>
                  <div className="mt-4 flex flex-wrap gap-6 text-sm text-slate-600">
                    <span>{curriculum.length} bagian</span>
                    <span>{totalLessons} pelajaran</span>
                    <span>{formatDuration(totalDuration)} total durasi</span>
                  </div>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold">Persyaratan</h2>
                  <ul className="mt-4 space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Tidak perlu pengalaman sebelumnya - kami mulai dari dasar
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Komputer dengan akses internet
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Antusiasme untuk belajar dan berkembang
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Description */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold">Deskripsi</h2>
                  <div className="mt-4 space-y-4 text-slate-600">
                    <p>{course.description}</p>
                    <p>
                      Kursus komprehensif ini akan membawa Anda dari pemula hingga mahir,
                      mencakup semua konsep penting dan keterampilan praktis yang Anda butuhkan
                      untuk sukses dalam karier Anda.
                    </p>
                    <p>
                      Di akhir kursus ini, Anda akan memiliki kepercayaan diri dan pengetahuan
                      untuk menerapkan apa yang telah Anda pelajari ke proyek dunia nyata dan membawa
                      keterampilan Anda ke tingkat selanjutnya.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="curriculum">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-bold">Kurikulum Kursus</h2>
                    <span className="text-sm text-slate-500">
                      {totalLessons} pelajaran • {formatDuration(totalDuration)}
                    </span>
                  </div>

                  <Accordion type="multiple" className="w-full">
                    {curriculum.map((section, sectionIndex) => (
                      <AccordionItem key={sectionIndex} value={`section-${sectionIndex}`}>
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center gap-4">
                            <span className="font-semibold">{section.title}</span>
                            <span className="text-sm text-slate-500">
                              {section.lessons.length} pelajaran
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2">
                            {section.lessons.map((lesson, lessonIndex) => (
                              <li
                                key={lessonIndex}
                                className="flex items-center justify-between rounded-lg p-3 hover:bg-slate-50"
                              >
                                <div className="flex items-center gap-3">
                                  <PlayCircle className="h-5 w-5 text-slate-400" />
                                  <span>{lesson.title}</span>
                                  {lesson.preview && (
                                    <Badge variant="outline" className="text-xs">
                                      Preview
                                    </Badge>
                                  )}
                                </div>
                                <span className="text-sm text-slate-500">
                                  {lesson.duration}:00
                                </span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="instructor">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={course.instructor.avatar} />
                      <AvatarFallback className="text-2xl">
                        {course.instructor.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <Link
                        href={`/instructors/${course.instructor.slug}`}
                        className="text-xl font-bold hover:text-primary"
                      >
                        {course.instructor.name}
                      </Link>
                      <p className="text-slate-600">{course.instructor.title}</p>

                      <div className="mt-4 flex flex-wrap gap-6 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-amber text-amber" />
                          <span>{course.instructor.rating} rating</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-slate-400" />
                          <span>{formatNumber(course.instructor.students)} siswa</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4 text-slate-400" />
                          <span>{course.instructor.courses} kursus</span>
                        </div>
                      </div>

                      <p className="mt-4 text-slate-600">{course.instructor.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <Card>
                <CardContent className="p-6">
                  {/* Rating Summary */}
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-amber">{course.rating}</div>
                      <div className="mt-2 flex justify-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-5 w-5",
                              i < Math.floor(course.rating)
                                ? "fill-amber text-amber"
                                : "text-slate-200"
                            )}
                          />
                        ))}
                      </div>
                      <p className="mt-1 text-sm text-slate-500">
                        {formatNumber(course.reviews)} ulasan
                      </p>
                    </div>

                    <div className="flex-1 space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center gap-3">
                          <span className="w-12 text-sm">{rating} stars</span>
                          <Progress
                            value={rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 7 : 3}
                            className="h-2 flex-1"
                          />
                          <span className="w-10 text-sm text-slate-500">
                            {rating === 5 ? "70%" : rating === 4 ? "20%" : rating === 3 ? "7%" : "3%"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator className="my-8" />

                  {/* Sample Reviews */}
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border-b pb-6 last:border-0">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarFallback>S{i}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold">Student {i}</h4>
                              <span className="text-sm text-slate-500">2 weeks ago</span>
                            </div>
                            <div className="mt-1 flex gap-1">
                              {Array.from({ length: 5 }).map((_, j) => (
                                <Star key={j} className="h-4 w-4 fill-amber text-amber" />
                              ))}
                            </div>
                            <p className="mt-2 text-slate-600">
                              Kursus yang sangat bagus! Instruktur menjelaskan semuanya dengan jelas
                              dan proyeknya benar-benar membantu memperkuat pemahaman saya.
                              Sangat direkomendasikan untuk siapa saja yang ingin meningkatkan keterampilan mereka.
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="mt-6 w-full">
                    Muat Lebih Banyak Ulasan
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
