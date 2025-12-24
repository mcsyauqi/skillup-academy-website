"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BookOpen,
  Clock,
  Award,
  TrendingUp,
  Play,
  Calendar,
  Bell,
  Settings,
  ChevronRight,
  Trophy,
  Flame,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { courses } from "@/lib/data";
import { formatDuration, formatNumber } from "@/lib/utils";

const enrolledCourses = courses.slice(0, 3).map((course, index) => ({
  ...course,
  progress: [65, 30, 10][index],
  lastAccessed: ["Today", "Yesterday", "3 days ago"][index],
  nextLesson: ["Building Components", "API Integration", "Introduction"][index],
}));

const stats = [
  {
    icon: BookOpen,
    label: "Kursus dalam Progres",
    value: "3",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Clock,
    label: "Jam Belajar",
    value: "47",
    color: "text-violet",
    bgColor: "bg-violet/10",
  },
  {
    icon: Award,
    label: "Sertifikat Diperoleh",
    value: "2",
    color: "text-emerald",
    bgColor: "bg-emerald/10",
  },
  {
    icon: Flame,
    label: "Streak Hari",
    value: "12",
    color: "text-amber",
    bgColor: "bg-amber/10",
  },
];

const achievements = [
  { icon: Trophy, title: "Kursus Pertama Selesai", earned: true },
  { icon: Flame, title: "Streak 7 Hari", earned: true },
  { icon: Target, title: "Skor Kuis Sempurna", earned: false },
  { icon: Award, title: "Pembelajar Top 10%", earned: false },
];

const upcomingLessons = [
  { title: "Pola React Lanjutan", time: "10:00 AM", course: "React & Next.js" },
  { title: "Metode Riset Pengguna", time: "2:00 PM", course: "UX Design" },
  { title: "Praktik Terbaik SEO", time: "4:00 PM", course: "Digital Marketing" },
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

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 ring-4 ring-white shadow-lg">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  Selamat datang kembali, John!
                </h1>
                <p className="text-slate-600">
                  Siap melanjutkan pembelajaran? Anda sedang dalam streak 12 hari!
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className={`rounded-xl p-3 ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">
                      {stat.value}
                    </p>
                    <p className="text-sm text-slate-500">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Continue Learning */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Lanjutkan Belajar</CardTitle>
                <Link href="/courses">
                  <Button variant="ghost" size="sm" className="gap-1">
                    Lihat Semua
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent className="space-y-4">
                {enrolledCourses.map((course) => (
                  <div
                    key={course.id}
                    className="flex gap-4 rounded-lg border p-4 transition-colors hover:bg-slate-50"
                  >
                    <div className="relative h-24 w-36 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={course.thumbnail}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 line-clamp-1">
                        {course.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        Selanjutnya: {course.nextLesson}
                      </p>
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">
                            {course.progress}% selesai
                          </span>
                          <span className="text-slate-500">
                            {course.lastAccessed}
                          </span>
                        </div>
                        <Progress value={course.progress} className="mt-2 h-2" />
                      </div>
                    </div>
                    <Link href={`/courses/${course.slug}`}>
                      <Button>Lanjutkan</Button>
                    </Link>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Learning Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Aktivitas Pembelajaran</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="week">
                  <TabsList>
                    <TabsTrigger value="week">Minggu Ini</TabsTrigger>
                    <TabsTrigger value="month">Bulan Ini</TabsTrigger>
                    <TabsTrigger value="year">Tahun Ini</TabsTrigger>
                  </TabsList>
                  <TabsContent value="week" className="mt-4">
                    <div className="flex items-end justify-between gap-2 h-40">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                        (day, index) => {
                          const heights = [60, 80, 40, 100, 70, 30, 90];
                          return (
                            <div
                              key={day}
                              className="flex flex-1 flex-col items-center gap-2"
                            >
                              <div
                                className="w-full rounded-t-lg bg-primary/20"
                                style={{ height: `${heights[index]}%` }}
                              >
                                <div
                                  className="w-full rounded-t-lg bg-primary transition-all duration-500"
                                  style={{ height: `${heights[index] * 0.7}%` }}
                                />
                              </div>
                              <span className="text-xs text-slate-500">{day}</span>
                            </div>
                          );
                        }
                      )}
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-6 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded bg-primary" />
                        <span>Selesai</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded bg-primary/20" />
                        <span>Target</span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="month" className="mt-4">
                    <div className="flex h-40 items-center justify-center text-slate-500">
                      Grafik aktivitas bulanan
                    </div>
                  </TabsContent>
                  <TabsContent value="year" className="mt-4">
                    <div className="flex h-40 items-center justify-center text-slate-500">
                      Grafik aktivitas tahunan
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Today's Schedule */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Jadwal Hari Ini
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingLessons.map((lesson, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg border p-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Play className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-slate-900 line-clamp-1">
                        {lesson.title}
                      </p>
                      <p className="text-sm text-slate-500">{lesson.course}</p>
                    </div>
                    <Badge variant="outline">{lesson.time}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-amber" />
                  Pencapaian
                </CardTitle>
                <Button variant="ghost" size="sm">
                  Lihat Semua
                </Button>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 rounded-lg p-3 ${
                      achievement.earned ? "bg-amber/10" : "bg-slate-50"
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                        achievement.earned
                          ? "bg-amber text-white"
                          : "bg-slate-200 text-slate-400"
                      }`}
                    >
                      <achievement.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p
                        className={`font-medium ${
                          achievement.earned ? "text-slate-900" : "text-slate-400"
                        }`}
                      >
                        {achievement.title}
                      </p>
                      <p className="text-xs text-slate-500">
                        {achievement.earned ? "Diperoleh" : "Terkunci"}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recommended Courses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-emerald" />
                  Rekomendasi untuk Anda
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {courses.slice(3, 5).map((course) => (
                  <Link key={course.id} href={`/courses/${course.slug}`}>
                    <div className="flex gap-3 rounded-lg p-2 transition-colors hover:bg-slate-50">
                      <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={course.thumbnail}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-slate-900 line-clamp-2 text-sm">
                          {course.title}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          {course.instructor.name}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
                <Link href="/courses">
                  <Button variant="outline" className="w-full">
                    Jelajahi Semua Kursus
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
