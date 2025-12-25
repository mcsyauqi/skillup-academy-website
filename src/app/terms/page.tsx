"use client";

import { motion } from "framer-motion";
import { FileText, AlertCircle, CheckCircle, XCircle, Scale, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
  {
    title: "1. Ketentuan Umum",
    content: "Dengan mengakses dan menggunakan platform SkillUp Academy, Anda menyetujui untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan ketentuan ini, mohon untuk tidak menggunakan layanan kami.\\n\\nPlatform ini menyediakan layanan pembelajaran online termasuk kursus video, materi pembelajaran, kuis, dan sertifikat.",
  },
  {
    title: "2. Pendaftaran Akun",
    content: "Untuk mengakses sebagian besar fitur platform kami, Anda perlu membuat akun. Anda bertanggung jawab untuk memberikan informasi yang akurat, menjaga kerahasiaan password, dan memberitahu kami jika terjadi penggunaan tidak sah.",
  },
  {
    title: "3. Pembelian dan Pembayaran",
    content: "Semua pembelian kursus bersifat final setelah pembayaran berhasil diproses. Harga yang ditampilkan sudah termasuk pajak yang berlaku. Kami menerima kartu kredit, transfer bank, dan dompet digital.",
  },
  {
    title: "4. Kebijakan Pengembalian Dana",
    content: "Kami menawarkan jaminan uang kembali 30 hari untuk pembelian kursus individual, dengan syarat Anda telah menyelesaikan kurang dari 30% konten kursus.",
  },
  {
    title: "5. Hak Kekayaan Intelektual",
    content: "Semua konten di platform kami dilindungi oleh hak cipta. Anda tidak diperbolehkan menyalin, mendistribusikan, atau menjual kembali konten tanpa izin.",
  },
  {
    title: "6. Kode Etik",
    content: "Sebagai pengguna, Anda setuju untuk menghormati pengguna lain, tidak memposting konten berbahaya, dan tidak mencoba meretas platform.",
  },
  {
    title: "7. Sertifikat",
    content: "Sertifikat diberikan setelah menyelesaikan semua persyaratan kursus. Sertifikat menunjukkan penyelesaian kursus dan bukan merupakan gelar akademik.",
  },
  {
    title: "8. Batasan Tanggung Jawab",
    content: "Platform disediakan sebagaimana adanya. Kami tidak menjamin layanan akan selalu tersedia tanpa gangguan.",
  },
  {
    title: "9. Penyelesaian Sengketa",
    content: "Sengketa akan diselesaikan melalui negosiasi, mediasi, atau arbitrase sesuai hukum Indonesia.",
  },
  {
    title: "10. Perubahan Ketentuan",
    content: "Kami berhak mengubah ketentuan ini. Perubahan akan diberitahukan minimal 30 hari sebelum berlaku.",
  },
];

const highlights = [
  {
    icon: CheckCircle,
    title: "Yang Anda Dapatkan",
    items: [
      "Akses selamanya ke kursus",
      "Sertifikat penyelesaian",
      "Jaminan uang kembali 30 hari",
      "Update konten gratis",
      "Akses komunitas",
    ],
    color: "green",
  },
  {
    icon: XCircle,
    title: "Yang Tidak Diperbolehkan",
    items: [
      "Membagikan akun",
      "Menyalin konten",
      "Menjual kembali akses",
      "Melanggar hak cipta",
      "Menggunakan bot",
    ],
    color: "red",
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

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <FileText className="mx-auto h-16 w-16 text-primary" />
            <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Syarat dan Ketentuan
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Ketentuan penggunaan platform SkillUp Academy
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400">
              <Calendar className="h-4 w-4" />
              <span>Terakhir diperbarui: 1 Desember 2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <div className="mb-8 rounded-lg bg-amber-50 border border-amber-200 p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-amber-800">Ringkasan Penting</p>
                  <p className="mt-1 text-sm text-amber-700">
                    Pastikan Anda membaca dokumen lengkap di bawah ini.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {highlights.map((highlight, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <highlight.icon
                        className={"h-5 w-5 " + (highlight.color === "green" ? "text-green-600" : "text-red-600")}
                      />
                      <h3 className="font-semibold text-slate-900">{highlight.title}</h3>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {highlight.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className={"mt-2 h-1.5 w-1.5 shrink-0 rounded-full " + (highlight.color === "green" ? "bg-green-500" : "bg-red-500")} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
                    <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
                    <p className="mt-4 text-slate-600 leading-relaxed">{section.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-8 max-w-3xl"
          >
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <Scale className="h-6 w-6 text-primary" />
                  <h2 className="text-xl font-semibold text-slate-900">Pertanyaan Hukum</h2>
                </div>
                <p className="mt-4 text-slate-600">
                  Hubungi tim legal kami di legal@skillupacademy.com
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
