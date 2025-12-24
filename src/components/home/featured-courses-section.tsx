"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Users, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { courses } from "@/lib/data";
import { formatPrice, formatDuration, formatNumber } from "@/lib/utils";

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

export function FeaturedCoursesSection() {
  const featuredCourses = courses.slice(0, 6);

  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Featured Courses
            </h2>
            <p className="mt-2 text-lg text-slate-600">
              Top-rated courses chosen by our community
            </p>
          </div>
          <Link href="/courses">
            <Button variant="outline" className="gap-2">
              View All Courses
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        {/* Courses grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featuredCourses.map((course) => (
            <motion.div key={course.id} variants={itemVariants}>
              <Link href={`/courses/${course.slug}`}>
                <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Badges */}
                    <div className="absolute left-3 top-3 flex gap-2">
                      {course.isBestseller && (
                        <Badge variant="bestseller">Bestseller</Badge>
                      )}
                      {course.isNew && <Badge variant="new">New</Badge>}
                    </div>
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg">
                        <div className="ml-1 h-0 w-0 border-y-8 border-l-12 border-y-transparent border-l-primary" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-5">
                    {/* Category */}
                    <p className="text-sm font-medium text-primary">
                      {course.category.name}
                    </p>

                    {/* Title */}
                    <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>

                    {/* Instructor */}
                    <div className="mt-3 flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={course.instructor.avatar} />
                        <AvatarFallback>
                          {course.instructor.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-slate-600">
                        {course.instructor.name}
                      </span>
                    </div>

                    {/* Stats */}
                    <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-amber text-amber" />
                        <span className="font-medium text-slate-900">
                          {course.rating}
                        </span>
                        <span>({formatNumber(course.reviews)})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{formatNumber(course.students)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{formatDuration(course.duration)}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mt-4 flex items-center gap-2 border-t pt-4">
                      <span className="text-xl font-bold text-slate-900">
                        {formatPrice(course.price)}
                      </span>
                      {course.originalPrice && (
                        <span className="text-sm text-slate-400 line-through">
                          {formatPrice(course.originalPrice)}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
