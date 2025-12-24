"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Palette,
  Code,
  TrendingUp,
  Briefcase,
  BarChart3,
  Target,
  ArrowRight,
} from "lucide-react";
import { categories } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Code,
  TrendingUp,
  Briefcase,
  BarChart3,
  Target,
};

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

export function CategoriesSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Jelajahi Berdasarkan Kategori
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Pilih dari 200+ kursus di 6 kategori. Temukan kursus yang sempurna
            untuk memajukan karir Anda.
          </p>
        </motion.div>

        {/* Categories grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Code;

            return (
              <motion.div key={category.id} variants={itemVariants}>
                <Link href={`/courses?category=${category.slug}`}>
                  <div className="group relative overflow-hidden rounded-xl border bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    {/* Icon */}
                    <div
                      className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${category.color}15` }}
                    >
                      <Icon
                        className="h-7 w-7"
                        style={{ color: category.color }}
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-slate-900 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-slate-600">{category.description}</p>

                    {/* Course count & arrow */}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-500">
                        {category.courseCount} kursus
                      </span>
                      <ArrowRight className="h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                    </div>

                    {/* Hover gradient overlay */}
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-5"
                      style={{ backgroundColor: category.color }}
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
