"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { blogPosts } from "@/lib/data";

const categories = [
  "All",
  "Design",
  "Development",
  "Marketing",
  "Data Science",
  "Career",
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

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

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
            <Badge variant="secondary" className="mb-4">
              Learning Resources
            </Badge>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              The SkillUp Blog
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Insights, tutorials, and tips from industry experts to help you
              grow your skills and advance your career.
            </p>

            {/* Search */}
            <div className="mx-auto mt-8 max-w-md">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="bg-white pr-12"
                />
                <Button
                  size="icon"
                  className="absolute right-1 top-1/2 h-9 w-9 -translate-y-1/2"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Categories */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="cursor-pointer transition-colors hover:bg-primary hover:text-white"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href={`/blog/${featuredPost.slug}`}>
              <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="relative aspect-video md:aspect-auto">
                    <Image
                      src={featuredPost.thumbnail}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="flex flex-col justify-center p-6 md:p-8">
                    <Badge variant="secondary" className="w-fit">
                      Featured
                    </Badge>
                    <h2 className="mt-4 text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors sm:text-3xl">
                      {featuredPost.title}
                    </h2>
                    <p className="mt-4 text-slate-600">{featuredPost.excerpt}</p>

                    <div className="mt-6 flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={featuredPost.author.avatar} />
                        <AvatarFallback>
                          {featuredPost.author.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-slate-900">
                          {featuredPost.author.name}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <span>{featuredPost.publishedAt}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {featuredPost.readTime} min read
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* All Posts */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">Latest Articles</h2>
            <Button variant="outline" className="gap-2">
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[...otherPosts, ...blogPosts].map((post, index) => (
              <motion.div key={`${post.id}-${index}`} variants={itemVariants}>
                <Link href={`/blog/${post.slug}`}>
                  <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute left-3 top-3">
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="line-clamp-2 text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-slate-600">
                        {post.excerpt}
                      </p>

                      <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={post.author.avatar} />
                            <AvatarFallback>
                              {post.author.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <span>{post.author.name}</span>
                        </div>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime} min
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl gradient-primary p-8 text-center text-white sm:p-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Subscribe to Our Newsletter
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Get the latest articles, tutorials, and learning resources
              delivered straight to your inbox.
            </p>
            <div className="mx-auto mt-8 flex max-w-md gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="border-white/20 bg-white/10 text-white placeholder:text-white/60"
              />
              <Button className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
