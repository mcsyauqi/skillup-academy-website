"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Users, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { instructors } from "@/lib/data";
import { formatNumber } from "@/lib/utils";

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

export function InstructorsSection() {
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
              Learn from Industry Experts
            </h2>
            <p className="mt-2 text-lg text-slate-600">
              Our instructors bring real-world experience to every lesson
            </p>
          </div>
          <Link href="/instructors">
            <Button variant="outline" className="gap-2">
              View All Instructors
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        {/* Instructors grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {instructors.map((instructor) => (
            <motion.div key={instructor.id} variants={itemVariants}>
              <Link href={`/instructors/${instructor.slug}`}>
                <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    {/* Avatar */}
                    <div className="relative mx-auto h-24 w-24">
                      <Avatar className="h-24 w-24 ring-4 ring-white shadow-lg">
                        <AvatarImage src={instructor.avatar} />
                        <AvatarFallback className="text-2xl">
                          {instructor.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow">
                        <Star className="h-3.5 w-3.5 fill-current" />
                      </div>
                    </div>

                    {/* Name & Title */}
                    <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
                      {instructor.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {instructor.title}
                    </p>

                    {/* Rating */}
                    <div className="mt-3 flex items-center justify-center gap-1">
                      <Star className="h-4 w-4 fill-amber text-amber" />
                      <span className="font-medium">{instructor.rating}</span>
                      <span className="text-sm text-slate-500">
                        ({formatNumber(instructor.reviews)} reviews)
                      </span>
                    </div>

                    {/* Stats */}
                    <div className="mt-4 flex justify-center gap-6 text-sm">
                      <div className="flex items-center gap-1 text-slate-500">
                        <Users className="h-4 w-4" />
                        <span>{formatNumber(instructor.students)}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500">
                        <BookOpen className="h-4 w-4" />
                        <span>{instructor.courses} courses</span>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mt-4 flex flex-wrap justify-center gap-1">
                      {instructor.specialties.slice(0, 2).map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
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
