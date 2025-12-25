"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Users,
  MessageCircle,
  Calendar,
  Award,
  Zap,
  Globe,
  Heart,
  ArrowRight,
  Play,
  BookOpen,
  Coffee,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const communityStats = [
  { value: "50.000+", label: "Anggota Aktif" },
  { value: "500+", label: "Grup Diskusi" },
  { value: "1.000+", label: "Event Setiap Bulan" },
  { value: "120+", label: "Negara" },
];

const features = [
  {
    icon: MessageCircle,
    title: "Forum Diskusi",
    description: "Bertanya, berdiskusi, dan berbagi pengalaman dengan sesama pembelajar",
  },
  {
    icon: Calendar,
    title: "Event & Webinar",
    description: "Ikuti event eksklusif, workshop, dan webinar dari para ahli industri",
  },
  {
    icon: Users,
    title: "Grup Studi",
    description: "Bergabung dengan grup studi berdasarkan minat dan tujuan karir Anda",
  },
  {
    icon: Award,
    title: "Leaderboard & Badge",
    description: "Dapatkan pengakuan atas kontribusi dan pencapaian Anda di komunitas",
  },
  {
    icon: Zap,
    title: "Mentoring",
    description: "Terhubung dengan mentor berpengalaman untuk bimbingan karir",
  },
  {
    icon: Globe,
    title: "Networking Global",
    description: "Bangun jaringan profesional dengan pembelajar dari seluruh dunia",
  },
];

const upcomingEvents = [
  {
    title: "Workshop: Membangun Portfolio Data Science",
    date: "28 Desember 2024",
    time: "19:00 WIB",
    type: "Workshop",
    attendees: 234,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
  },
  {
    title: "Webinar: Tren AI 2025",
    date: "30 Desember 2024",
    time: "14:00 WIB",
    type: "Webinar",
    attendees: 512,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=225&fit=crop",
  },
  {
    title: "Meetup: Jakarta Developer Community",
    date: "5 Januari 2025",
    time: "18:30 WIB",
    type: "Meetup",
    attendees: 89,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=225&fit=crop",
  },
];

const topContributors = [
  {
    name: "Budi Santoso",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    points: 12450,
    badge: "Expert",
    specialty: "Web Development",
  },
  {
    name: "Siti Rahayu",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    points: 10280,
    badge: "Expert",
    specialty: "Data Science",
  },
  {
    name: "Ahmad Wijaya",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    points: 9150,
    badge: "Pro",
    specialty: "UI/UX Design",
  },
  {
    name: "Dewi Lestari",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    points: 8720,
    badge: "Pro",
    specialty: "Digital Marketing",
  },
];

const discussions = [
  {
    title: "Tips Interview untuk Fresh Graduate di Bidang Tech",
    author: "Rina Kusuma",
    replies: 45,
    views: 1230,
    category: "Karir",
  },
  {
    title: "Rekomendasi Learning Path untuk Menjadi Full Stack Developer",
    author: "Fajar Nugroho",
    replies: 32,
    views: 890,
    category: "Pembelajaran",
  },
  {
    title: "Bagaimana Cara Membangun Portfolio yang Menarik?",
    author: "Maya Putri",
    replies: 28,
    views: 756,
    category: "Portfolio",
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

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-700 py-20 sm:py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">
                <Heart className="mr-1 h-3 w-3" /> Komunitas Pembelajar
              </Badge>
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                Belajar Bersama, Tumbuh Bersama
              </h1>
              <p className="mt-6 text-lg text-white/80 sm:text-xl">
                Bergabung dengan komunitas pembelajar terbesar di Indonesia. Diskusi,
                kolaborasi, dan networking dengan 50.000+ profesional dari berbagai bidang.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="xl" className="bg-white text-purple-600 hover:bg-white/90">
                  Gabung Komunitas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Play className="mr-2 h-5 w-5" />
                  Lihat Aktivitas
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
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                  alt="Komunitas belajar"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -left-8 top-1/4 rounded-lg bg-white p-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                    <Users className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Online sekarang</p>
                    <p className="font-semibold text-slate-900">2,340 anggota</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {communityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl font-bold text-purple-600 sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Fitur Komunitas
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Berbagai fitur untuk mendukung perjalanan belajar Anda
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                      <feature.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                    <p className="mt-2 text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-between gap-4 sm:flex-row"
          >
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Event Mendatang
              </h2>
              <p className="mt-2 text-lg text-slate-600">
                Jangan lewatkan event-event menarik dari komunitas
              </p>
            </div>
            <Button variant="outline" className="gap-2">
              Lihat Semua Event
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {upcomingEvents.map((event, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-video">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute left-3 top-3 bg-purple-600">
                      {event.type}
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-slate-900 line-clamp-2">{event.title}</h3>
                    <div className="mt-3 flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <span>{event.time}</span>
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-sm text-slate-500">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} akan hadir</span>
                    </div>
                    <Button className="mt-4 w-full bg-purple-600 hover:bg-purple-700">
                      Daftar Sekarang
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Top Contributors */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Kontributor Teratas
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Anggota komunitas yang paling aktif membantu sesama pembelajar
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {topContributors.map((contributor, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="relative mx-auto h-20 w-20">
                      <Avatar className="h-20 w-20 ring-4 ring-purple-100">
                        <AvatarImage src={contributor.avatar} />
                        <AvatarFallback>{contributor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="mt-4 font-semibold text-slate-900">{contributor.name}</h3>
                    <Badge variant="outline" className="mt-2">
                      {contributor.badge}
                    </Badge>
                    <p className="mt-2 text-sm text-slate-500">{contributor.specialty}</p>
                    <div className="mt-3 flex items-center justify-center gap-1 text-purple-600">
                      <Sparkles className="h-4 w-4" />
                      <span className="font-semibold">{contributor.points.toLocaleString()} poin</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Discussions */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-between gap-4 sm:flex-row"
          >
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Diskusi Populer
              </h2>
              <p className="mt-2 text-lg text-slate-600">
                Topik yang sedang hangat dibicarakan di komunitas
              </p>
            </div>
            <Button variant="outline" className="gap-2">
              Lihat Forum
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 space-y-4"
          >
            {discussions.map((discussion, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="transition-all duration-300 hover:shadow-md">
                  <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{discussion.category}</Badge>
                      </div>
                      <h3 className="mt-2 font-semibold text-slate-900 hover:text-purple-600">
                        {discussion.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">oleh {discussion.author}</p>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{discussion.replies} balasan</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{discussion.views} views</span>
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
      <section className="bg-purple-600 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <Coffee className="mx-auto h-12 w-12 text-white/80" />
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              Siap Bergabung dengan Komunitas?
            </h2>
            <p className="mt-4 text-purple-100">
              Mulai berinteraksi dengan ribuan pembelajar dan profesional dari berbagai bidang
            </p>
            <Button size="lg" className="mt-8 bg-white text-purple-600 hover:bg-white/90">
              Gabung Sekarang - Gratis!
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
