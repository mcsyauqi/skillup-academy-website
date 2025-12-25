"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, UserCheck, Bell, Mail, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
  {
    icon: Database,
    title: "Informasi yang Kami Kumpulkan",
    content: [
      "Informasi akun: nama, email, nomor telepon, dan foto profil",
      "Informasi pembayaran: detail kartu kredit (diproses secara aman melalui payment gateway)",
      "Data penggunaan: kursus yang diakses, progress pembelajaran, dan interaksi dengan platform",
      "Informasi perangkat: jenis browser, sistem operasi, dan alamat IP",
      "Cookies dan teknologi pelacakan serupa",
    ],
  },
  {
    icon: Eye,
    title: "Bagaimana Kami Menggunakan Informasi",
    content: [
      "Menyediakan dan meningkatkan layanan pembelajaran",
      "Memproses transaksi dan mengirim konfirmasi",
      "Mengirim pembaruan kursus dan rekomendasi yang dipersonalisasi",
      "Berkomunikasi tentang produk, layanan, dan promosi",
      "Menganalisis penggunaan untuk meningkatkan pengalaman pengguna",
      "Mencegah penipuan dan menjaga keamanan platform",
    ],
  },
  {
    icon: UserCheck,
    title: "Berbagi Informasi",
    content: [
      "Instruktur: nama dan komentar Anda dalam diskusi kursus",
      "Penyedia layanan: payment gateway, hosting, dan analytics",
      "Mitra bisnis: hanya dengan persetujuan Anda",
      "Otoritas hukum: jika diwajibkan oleh hukum",
      "Kami TIDAK menjual data pribadi Anda kepada pihak ketiga",
    ],
  },
  {
    icon: Shield,
    title: "Keamanan Data",
    content: [
      "Enkripsi SSL/TLS untuk semua transmisi data",
      "Penyimpanan data terenkripsi di server yang aman",
      "Akses data dibatasi hanya untuk karyawan yang memerlukan",
      "Audit keamanan berkala dan pengujian penetrasi",
      "Kepatuhan terhadap standar PCI-DSS untuk data pembayaran",
    ],
  },
  {
    icon: Lock,
    title: "Hak Anda",
    content: [
      "Mengakses data pribadi yang kami simpan tentang Anda",
      "Memperbaiki informasi yang tidak akurat",
      "Menghapus akun dan data Anda (hak untuk dilupakan)",
      "Menolak pemrosesan data untuk pemasaran",
      "Meminta portabilitas data dalam format yang dapat dibaca mesin",
      "Menarik persetujuan kapan saja",
    ],
  },
  {
    icon: Bell,
    title: "Cookies dan Pelacakan",
    content: [
      "Cookies esensial: diperlukan untuk fungsi dasar situs",
      "Cookies analitik: membantu kami memahami penggunaan situs",
      "Cookies preferensi: mengingat pengaturan Anda",
      "Cookies pemasaran: digunakan untuk iklan yang relevan",
      "Anda dapat mengatur preferensi cookies melalui browser Anda",
    ],
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

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Shield className="mx-auto h-16 w-16 text-primary" />
            <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Kebijakan Privasi
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Kami berkomitmen untuk melindungi privasi dan data pribadi Anda
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400">
              <Calendar className="h-4 w-4" />
              <span>Terakhir diperbarui: 1 Desember 2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <Card>
              <CardContent className="p-6 sm:p-8">
                <p className="text-slate-600 leading-relaxed">
                  Selamat datang di SkillUp Academy. Kebijakan Privasi ini menjelaskan bagaimana kami
                  mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi Anda ketika
                  Anda menggunakan platform pembelajaran online kami. Dengan menggunakan layanan kami,
                  Anda menyetujui praktik yang dijelaskan dalam kebijakan ini.
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Kami memahami pentingnya privasi Anda dan berkomitmen untuk menjaga kepercayaan yang
                  Anda berikan kepada kami. Kebijakan ini berlaku untuk semua layanan SkillUp Academy,
                  termasuk situs web, aplikasi mobile, dan layanan terkait lainnya.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-3xl space-y-6"
          >
            {sections.map((section, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card>
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <section.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {section.content.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-8 max-w-3xl"
          >
            <Card>
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-slate-900">Retensi Data</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Kami menyimpan informasi pribadi Anda selama akun Anda aktif atau selama
                  diperlukan untuk menyediakan layanan kepada Anda. Setelah akun dihapus, kami akan
                  menghapus atau menganonimkan data Anda dalam waktu 90 hari, kecuali jika kami
                  diwajibkan menyimpannya lebih lama untuk keperluan hukum atau bisnis yang sah.
                </p>

                <h2 className="mt-8 text-xl font-semibold text-slate-900">Anak di Bawah Umur</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Layanan kami tidak ditujukan untuk anak di bawah usia 13 tahun. Kami tidak dengan
                  sengaja mengumpulkan informasi pribadi dari anak-anak. Jika Anda adalah orang tua
                  atau wali dan mengetahui bahwa anak Anda telah memberikan informasi kepada kami,
                  silakan hubungi kami.
                </p>

                <h2 className="mt-8 text-xl font-semibold text-slate-900">Perubahan Kebijakan</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan
                  signifikan akan diberitahukan melalui email atau pemberitahuan di platform kami.
                  Penggunaan berkelanjutan atas layanan kami setelah perubahan berlaku menunjukkan
                  persetujuan Anda terhadap kebijakan yang diperbarui.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-8 max-w-3xl"
          >
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <h2 className="text-xl font-semibold text-slate-900">Hubungi Kami</h2>
                </div>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan
                  hak privasi Anda, silakan hubungi kami:
                </p>
                <ul className="mt-4 space-y-2 text-slate-600">
                  <li><strong>Email:</strong> privacy@skillupacademy.com</li>
                  <li><strong>Alamat:</strong> Jl. Sudirman No. 123, Jakarta Selatan 12190</li>
                  <li><strong>Telepon:</strong> +62 21 1234 5678</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
