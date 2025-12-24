import Link from "next/link";
import {
  GraduationCap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  courses: [
    { name: "Semua Kursus", href: "/courses" },
    { name: "Desain", href: "/courses?category=design" },
    { name: "Pengembangan", href: "/courses?category=development" },
    { name: "Pemasaran", href: "/courses?category=marketing" },
    { name: "Data Science", href: "/courses?category=data" },
    { name: "Bisnis", href: "/courses?category=business" },
  ],
  company: [
    { name: "Tentang Kami", href: "/about" },
    { name: "Karir", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Pers", href: "/press" },
    { name: "Mitra", href: "/partners" },
  ],
  resources: [
    { name: "Jalur Pembelajaran", href: "/learning-paths" },
    { name: "Untuk Bisnis", href: "/for-business" },
    { name: "Jadi Instruktur", href: "/teach" },
    { name: "Pusat Bantuan", href: "/help" },
    { name: "Komunitas", href: "/community" },
  ],
  legal: [
    { name: "Kebijakan Privasi", href: "/privacy" },
    { name: "Syarat Layanan", href: "/terms" },
    { name: "Kebijakan Cookie", href: "/cookies" },
    { name: "Kebijakan Pengembalian", href: "/refunds" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold text-white">
                Berlangganan newsletter kami
              </h3>
              <p className="mt-1 text-slate-400">
                Dapatkan info kursus terbaru dan tips belajar langsung ke email Anda.
              </p>
            </div>
            <div className="flex w-full max-w-md gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <Input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="border-slate-700 bg-slate-800 pl-10 text-white placeholder:text-slate-500 focus:border-primary focus:ring-primary"
                />
              </div>
              <Button>Langganan</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                SkillUp<span className="text-primary">Academy</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-slate-400">
              Memberdayakan pembelajar di seluruh dunia dengan kursus yang dipandu ahli dalam keterampilan digital, bisnis, dan teknologi.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-slate-400 transition-colors hover:text-white"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Kursus
            </h4>
            <ul className="space-y-2">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Perusahaan
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Sumber Daya
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Hukum
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-slate-800" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
          <p>&copy; {new Date().getFullYear()} SkillUp Academy. Hak cipta dilindungi.</p>
          <div className="flex items-center gap-4">
            <span>Created by <a href="https://creativism.id" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors font-medium">Creativism Digital Marketing</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
