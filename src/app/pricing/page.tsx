"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { pricingPlans } from "@/lib/data";
import { formatPrice, cn } from "@/lib/utils";

const faqs = [
  {
    question: "Bisakah saya mengganti paket nanti?",
    answer: "Ya, Anda dapat meningkatkan atau menurunkan paket Anda kapan saja. Perubahan akan tercermin dalam siklus penagihan berikutnya.",
  },
  {
    question: "Apakah ada uji coba gratis?",
    answer: "Ya, paket Pro dilengkapi dengan uji coba gratis 7 hari. Anda tidak akan dikenakan biaya sampai uji coba berakhir.",
  },
  {
    question: "Metode pembayaran apa yang Anda terima?",
    answer: "Kami menerima semua kartu kredit utama, kartu debit, dan metode pembayaran populer termasuk GoPay, OVO, dan transfer bank.",
  },
  {
    question: "Bisakah saya mendapatkan pengembalian dana?",
    answer: "Ya, kami menawarkan jaminan uang kembali 30 hari untuk semua paket berbayar. Tanpa pertanyaan.",
  },
  {
    question: "Apakah Anda menawarkan diskon untuk siswa?",
    answer: "Ya! Siswa dengan email .edu yang valid bisa mendapatkan diskon 50% untuk paket Pro.",
  },
  {
    question: "Bagaimana penagihan tim bekerja?",
    answer: "Paket tim ditagih per pengguna per bulan. Anda dapat menambah atau menghapus anggota tim kapan saja.",
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

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

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
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Harga yang Sederhana dan Transparan
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Pilih paket yang tepat untuk Anda. Semua paket termasuk akses
              ke komunitas dan dukungan kami.
            </p>

            {/* Billing toggle */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <span
                className={cn(
                  "text-sm font-medium",
                  !isAnnual ? "text-slate-900" : "text-slate-500"
                )}
              >
                Bulanan
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={cn(
                  "relative h-6 w-12 rounded-full transition-colors",
                  isAnnual ? "bg-primary" : "bg-slate-200"
                )}
              >
                <div
                  className={cn(
                    "absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-transform",
                    isAnnual ? "translate-x-7" : "translate-x-1"
                  )}
                />
              </button>
              <span
                className={cn(
                  "text-sm font-medium",
                  isAnnual ? "text-slate-900" : "text-slate-500"
                )}
              >
                Tahunan
              </span>
              <Badge variant="success">Hemat 20%</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 lg:grid-cols-3"
          >
            {pricingPlans.map((plan) => (
              <motion.div key={plan.id} variants={itemVariants}>
                <Card
                  className={cn(
                    "relative h-full",
                    plan.popular &&
                      "border-2 border-primary shadow-lg ring-4 ring-primary/10"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="gradient-primary border-0 px-4 py-1 text-white">
                        Paling Populer
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>

                    <div className="mt-4">
                      <span className="text-4xl font-bold text-slate-900">
                        {plan.price === 0
                          ? "Gratis"
                          : formatPrice(isAnnual ? plan.price * 10 : plan.price)}
                      </span>
                      {plan.price > 0 && (
                        <span className="text-slate-500">/{plan.period === "month" ? "bulan" : plan.period}</span>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={cn(
                        "mt-8 w-full",
                        plan.popular ? "" : "bg-slate-900 hover:bg-slate-800"
                      )}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Enterprise CTA */}
          <div className="mt-12 rounded-2xl bg-slate-900 p-8 text-center text-white sm:p-12">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Butuh solusi kustom?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Kami menawarkan paket enterprise kustom dengan fitur lanjutan, dukungan
              khusus, dan harga fleksibel untuk tim besar.
            </p>
            <Button
              size="lg"
              className="mt-6 bg-white text-slate-900 hover:bg-white/90"
            >
              Hubungi Sales
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Punya pertanyaan? Kami punya jawabannya.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mt-12 max-w-3xl space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {faq.question}
                        </h3>
                        <p className="mt-2 text-slate-600">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-dashed border-emerald p-8 text-center sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald/10">
              <Check className="h-8 w-8 text-emerald" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-slate-900">
              Jaminan Uang Kembali 30 Hari
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              Coba paket berbayar apa pun tanpa risiko. Jika Anda tidak sepenuhnya puas
              dalam 30 hari pertama, kami akan mengembalikan pembayaran Anda. Tanpa pertanyaan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
