"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Play, Star, Users, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { stats } from "@/lib/data";
import { formatNumber } from "@/lib/utils";

const popularTags = [
  "Digital Marketing",
  "UI/UX Design",
  "Data Analytics",
  "Python",
  "React",
  "Business Strategy",
];

const statsItems = [
  { icon: Users, value: stats.students, label: "Students", suffix: "+" },
  { icon: BookOpen, value: stats.courses, label: "Courses", suffix: "+" },
  { icon: Award, value: stats.instructors, label: "Instructors", suffix: "+" },
];

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-40 top-1/2 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <Badge variant="secondary" className="mb-4">
              <Star className="mr-1 h-3 w-3 fill-current" />
              Rated 4.8/5 by 50,000+ learners
            </Badge>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Level Up Your Career with{" "}
              <span className="gradient-text">Expert-Led Courses</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 sm:text-xl">
              Learn from industry experts anytime, anywhere. Join 50,000+ professionals
              who&apos;ve transformed their careers with our premium courses in digital skills,
              business, and technology.
            </p>

            {/* Search bar */}
            <div className="mt-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (searchQuery) {
                    window.location.href = `/courses?search=${encodeURIComponent(searchQuery)}`;
                  }
                }}
                className="relative"
              >
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <Input
                      type="search"
                      placeholder="What do you want to learn today?"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="h-14 bg-white pl-12 pr-4 text-base shadow-lg"
                    />
                  </div>
                  <Button type="submit" size="xl" className="hidden sm:flex">
                    Search
                  </Button>
                </div>
              </form>

              {/* Popular tags */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                <span className="text-sm text-slate-500">Popular:</span>
                {popularTags.map((tag) => (
                  <Link key={tag} href={`/courses?search=${encodeURIComponent(tag)}`}>
                    <Badge
                      variant="outline"
                      className="cursor-pointer transition-colors hover:bg-primary hover:text-white"
                    >
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link href="/courses">
                <Button size="xl" className="w-full sm:w-auto">
                  Explore Courses
                </Button>
              </Link>
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </motion.div>

          {/* Right content - Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main illustration card */}
              <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-2xl">
                <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                  <div className="flex h-full flex-col items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
                      <Play className="h-10 w-10 text-primary" />
                    </div>
                    <p className="mt-4 font-medium text-slate-600">
                      Start your learning journey
                    </p>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -right-4 top-8 rounded-lg bg-white p-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald/10">
                      <Award className="h-4 w-4 text-emerald" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Certificate</p>
                      <p className="text-sm font-semibold">Earned!</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -left-4 bottom-16 rounded-lg bg-white p-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber/10">
                      <Star className="h-4 w-4 fill-amber text-amber" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Course Rating</p>
                      <p className="text-sm font-semibold">4.9/5.0</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-3 gap-8 rounded-2xl bg-white p-6 shadow-lg sm:p-8"
        >
          {statsItems.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-primary sm:h-8 sm:w-8" />
              </div>
              <p className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
                {formatNumber(stat.value)}{stat.suffix}
              </p>
              <p className="mt-1 text-sm text-slate-500 sm:text-base">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
