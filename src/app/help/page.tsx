"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  User,
  CreditCard,
  BookOpen,
  Settings,
  MessageCircle,
  Mail,
  Phone,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const helpCategories = [
  {
    icon: User,
    title: "Akun & Profil",
    description: "Pengaturan akun, password, dan profil",
    articles: 12,
  },
  {
    icon: CreditCard,
    title: "Pembayaran & Tagihan",
    description: "Metode pembayaran, invoice, dan refund",
    articles: 8,
  },
  {
    icon: BookOpen,
    title: "Kursus & Pembelajaran",
    description: "Akses kursus, sertifikat, dan progres",
    articles: 15,
  },
  {
    icon: Settings,
    title: "Teknis & Troubleshooting",
    description: "Masalah teknis, video, dan aplikasi",
    articles: 10,
  },
];

const faqs = [
  {
    question: "Bagaimana cara membuat akun di SkillUp Academy?",
    answer: "Untuk membuat akun, klik tombol 'Daftar' di halaman utama. Isi formulir dengan email dan password Anda, atau daftar menggunakan akun Google/Facebook. Setelah itu, verifikasi email Anda untuk mengaktifkan akun.",
  },
  {
    question: "Bagaimana cara mengakses kursus yang sudah dibeli?",
    answer: "Setelah pembelian berhasil, kursus akan otomatis muncul di Dashboard Anda. Klik 'Kursus Saya' di menu, lalu pilih kursus yang ingin Anda pelajari. Anda dapat mengakses kursus kapan saja, tanpa batas waktu.",
  },
  {
    question: "Apakah saya bisa mengunduh video kursus?",
    answer: "Ya, pengguna dengan paket Pro atau Team dapat mengunduh video untuk ditonton offline melalui aplikasi mobile kami. Fitur ini tersedia di iOS dan Android.",
  },
  {
    question: "Bagaimana cara mendapatkan sertifikat?",
    answer: "Sertifikat akan otomatis tersedia setelah Anda menyelesaikan semua modul dan kuis dalam kursus. Anda dapat mengunduh sertifikat dari halaman kursus atau Dashboard Anda.",
  },
  {
    question: "Apa kebijakan pengembalian dana?",
    answer: "Kami menawarkan jaminan uang kembali 30 hari untuk semua pembelian kursus. Jika Anda tidak puas dengan kursus, hubungi tim support kami untuk proses refund.",
  },
  {
    question: "Bagaimana cara menghubungi instruktur?",
    answer: "Setiap kursus memiliki fitur diskusi di mana Anda dapat bertanya langsung kepada instruktur. Pertanyaan biasanya dijawab dalam 24-48 jam kerja.",
  },
  {
    question: "Apakah ada diskon untuk pembelian dalam jumlah banyak?",
    answer: "Ya, kami menawarkan diskon khusus untuk pembelian tim atau perusahaan. Hubungi tim enterprise kami di enterprise@skillupacademy.com untuk penawaran khusus.",
  },
  {
    question: "Bagaimana cara mengubah password?",
    answer: "Masuk ke akun Anda, klik profil Anda di pojok kanan atas, pilih 'Pengaturan', lalu klik 'Ubah Password'. Masukkan password lama dan password baru Anda.",
  },
];

const contactOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Tersedia 24/7",
    action: "Mulai Chat",
  },
  {
    icon: Mail,
    title: "Email",
    description: "support@skillupacademy.com",
    action: "Kirim Email",
  },
  {
    icon: Phone,
    title: "Telepon",
    description: "+62 21 1234 5678",
    action: "Hubungi Kami",
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

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-violet-600 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Bagaimana Kami Bisa Membantu?
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Cari jawaban dari pertanyaan yang sering diajukan atau hubungi tim support kami
            </p>
            <div className="relative mt-8">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <Input
                type="search"
                placeholder="Cari artikel bantuan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-14 bg-white pl-12 text-base shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {helpCategories.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{category.description}</p>
                    <p className="mt-3 text-sm text-primary">{category.articles} artikel</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Temukan jawaban untuk pertanyaan umum di bawah ini
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-12 max-w-3xl"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-lg border bg-white px-6"
                >
                  <AccordionTrigger className="text-left text-slate-900 hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Masih Butuh Bantuan?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Tim support kami siap membantu Anda
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-3"
          >
            {contactOptions.map((option, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <option.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{option.title}</h3>
                    <p className="mt-1 text-slate-600">{option.description}</p>
                    <Button className="mt-4">{option.action}</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
