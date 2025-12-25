"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Newspaper,
  Download,
  Mail,
  Calendar,
  ExternalLink,
  FileText,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pressReleases = [
  {
    id: 1,
    title: "SkillUp Academy Mencapai 50.000 Pembelajar Aktif",
    date: "20 Desember 2024",
    excerpt: "Platform e-learning SkillUp Academy berhasil mencapai milestone 50.000 pembelajar aktif dari 120 negara.",
    category: "Milestone",
  },
  {
    id: 2,
    title: "Peluncuran Fitur Jalur Pembelajaran Baru",
    date: "15 Desember 2024",
    excerpt: "Fitur baru memungkinkan pembelajar mengikuti kurikulum terstruktur untuk mencapai tujuan karir spesifik.",
    category: "Produk",
  },
  {
    id: 3,
    title: "Kemitraan Strategis dengan 50+ Perusahaan Fortune 500",
    date: "10 Desember 2024",
    excerpt: "SkillUp Academy menjalin kerjasama dengan perusahaan-perusahaan terkemuka untuk program pelatihan korporat.",
    category: "Kemitraan",
  },
  {
    id: 4,
    title: "SkillUp Academy Raih Penghargaan Best EdTech Platform 2024",
    date: "5 Desember 2024",
    excerpt: "Diakui sebagai platform edukasi teknologi terbaik di Asia Tenggara oleh EdTech Awards.",
    category: "Penghargaan",
  },
];

const brandAssets = [
  {
    icon: ImageIcon,
    title: "Logo & Identitas",
    description: "Logo dalam berbagai format dan panduan penggunaan",
    action: "Unduh Logo Kit",
  },
  {
    icon: FileText,
    title: "Fact Sheet",
    description: "Informasi penting tentang perusahaan dan statistik",
    action: "Unduh Fact Sheet",
  },
  {
    icon: ImageIcon,
    title: "Foto & Screenshot",
    description: "Koleksi foto produk dan tim untuk keperluan media",
    action: "Unduh Media Kit",
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

export default function PressPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge className="mb-4 bg-primary/20 text-primary">Ruang Pers</Badge>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Berita & Media
            </h1>
            <p className="mt-6 text-lg text-slate-300 sm:text-xl">
              Informasi resmi, press release, dan aset brand untuk keperluan media dan pers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="border-b bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Tentang SkillUp Academy
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                SkillUp Academy adalah platform e-learning terkemuka yang menyediakan kursus berkualitas tinggi
                dalam keterampilan digital, bisnis, dan teknologi. Didirikan dengan misi memberdayakan
                pembelajar di seluruh dunia, kami telah membantu lebih dari 50.000 profesional
                meningkatkan karir mereka melalui pendidikan yang dapat diakses dan terjangkau.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-4">
                {[
                  { value: "50.000+", label: "Pembelajar" },
                  { value: "200+", label: "Kursus" },
                  { value: "120", label: "Negara" },
                  { value: "2020", label: "Didirikan" },
                ].map((stat, index) => (
                  <div key={index} className="text-center sm:text-left">
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Press Release Terbaru
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Berita dan pengumuman resmi dari SkillUp Academy
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 space-y-4"
          >
            {pressReleases.map((release) => (
              <motion.div key={release.id} variants={itemVariants}>
                <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="outline">{release.category}</Badge>
                          <span className="flex items-center gap-1 text-sm text-slate-500">
                            <Calendar className="h-4 w-4" />
                            {release.date}
                          </span>
                        </div>
                        <h3 className="mt-2 text-lg font-semibold text-slate-900">
                          {release.title}
                        </h3>
                        <p className="mt-2 text-slate-600">{release.excerpt}</p>
                      </div>
                      <Button variant="outline" className="shrink-0 gap-2">
                        Baca Selengkapnya
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Assets Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Aset Brand
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Unduh logo, foto, dan materi media resmi kami
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-3"
          >
            {brandAssets.map((asset, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <asset.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{asset.title}</h3>
                    <p className="mt-2 text-slate-600">{asset.description}</p>
                    <Button variant="outline" className="mt-4 gap-2">
                      <Download className="h-4 w-4" />
                      {asset.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Media Contact Section */}
      <section className="bg-slate-900 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <Mail className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              Kontak Media
            </h2>
            <p className="mt-4 text-slate-300">
              Untuk pertanyaan media, wawancara, atau informasi lebih lanjut, silakan hubungi tim PR kami.
            </p>
            <div className="mt-8 space-y-2">
              <p className="text-white">
                <strong>Email:</strong> press@skillupacademy.com
              </p>
              <p className="text-white">
                <strong>Telepon:</strong> +62 21 1234 5678
              </p>
            </div>
            <Button size="lg" className="mt-8">
              Hubungi Tim PR
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
