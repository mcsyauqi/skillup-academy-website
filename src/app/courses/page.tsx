"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Star,
  Users,
  Clock,
  ChevronDown,
  Grid3X3,
  List,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { courses, categories } from "@/lib/data";
import { formatPrice, formatDuration, formatNumber, cn } from "@/lib/utils";

const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const durations = [
  { label: "All Durations", value: "all" },
  { label: "0-2 hours", value: "short" },
  { label: "2-10 hours", value: "medium" },
  { label: "10+ hours", value: "long" },
];
const sortOptions = [
  { label: "Most Popular", value: "popular" },
  { label: "Highest Rated", value: "rating" },
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  const filteredCourses = useMemo(() => {
    let result = [...courses];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query) ||
          course.instructor.name.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      result = result.filter(
        (course) => course.category.slug === selectedCategory
      );
    }

    // Level filter
    if (selectedLevel !== "All Levels") {
      result = result.filter((course) => course.level === selectedLevel);
    }

    // Duration filter
    if (selectedDuration !== "all") {
      result = result.filter((course) => {
        const hours = course.duration / 60;
        if (selectedDuration === "short") return hours <= 2;
        if (selectedDuration === "medium") return hours > 2 && hours <= 10;
        if (selectedDuration === "long") return hours > 10;
        return true;
      });
    }

    // Sort
    switch (sortBy) {
      case "popular":
        result.sort((a, b) => b.students - a.students);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, selectedLevel, selectedDuration, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedLevel("All Levels");
    setSelectedDuration("all");
  };

  const activeFiltersCount = [
    selectedCategory !== "all",
    selectedLevel !== "All Levels",
    selectedDuration !== "all",
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Explore Courses
          </h1>
          <p className="mt-2 text-lg text-slate-600">
            Choose from 200+ courses to advance your career
          </p>

          {/* Search and Filters */}
          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <Input
                type="search"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12"
              />
            </div>

            {/* Filter toggle & View mode */}
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
              >
                <Filter className="h-4 w-4" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge variant="default" className="ml-1 h-5 w-5 rounded-full p-0 text-xs">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="hidden sm:flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className={cn(viewMode === "grid" && "bg-slate-100")}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className={cn(viewMode === "list" && "bg-slate-100")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 rounded-lg border bg-slate-50 p-4"
            >
              <div className="flex flex-wrap gap-4">
                {/* Category */}
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category.slug} value={category.slug}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Level */}
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Duration */}
                <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    {durations.map((duration) => (
                      <SelectItem key={duration.value} value={duration.value}>
                        {duration.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {activeFiltersCount > 0 && (
                  <Button variant="ghost" onClick={clearFilters} className="gap-2">
                    <X className="h-4 w-4" />
                    Clear filters
                  </Button>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Results count */}
        <p className="mb-6 text-slate-600">
          Showing {filteredCourses.length} course{filteredCourses.length !== 1 && "s"}
        </p>

        {/* Courses Grid/List */}
        {filteredCourses.length > 0 ? (
          <div
            className={cn(
              "grid gap-6",
              viewMode === "grid"
                ? "sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            )}
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link href={`/courses/${course.slug}`}>
                  <Card
                    className={cn(
                      "group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
                      viewMode === "list" && "flex flex-row"
                    )}
                  >
                    {/* Thumbnail */}
                    <div
                      className={cn(
                        "relative overflow-hidden",
                        viewMode === "grid" ? "aspect-video" : "w-64 shrink-0"
                      )}
                    >
                      <Image
                        src={course.thumbnail}
                        alt={course.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute left-3 top-3 flex gap-2">
                        {course.isBestseller && (
                          <Badge variant="bestseller">Bestseller</Badge>
                        )}
                        {course.isNew && <Badge variant="new">New</Badge>}
                      </div>
                    </div>

                    <CardContent className={cn("p-5", viewMode === "list" && "flex-1")}>
                      <p className="text-sm font-medium text-primary">
                        {course.category.name}
                      </p>

                      <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>

                      {viewMode === "list" && (
                        <p className="mt-2 line-clamp-2 text-sm text-slate-600">
                          {course.description}
                        </p>
                      )}

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

                      <div className="mt-4 flex items-center justify-between border-t pt-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-slate-900">
                            {formatPrice(course.price)}
                          </span>
                          {course.originalPrice && (
                            <span className="text-sm text-slate-400 line-through">
                              {formatPrice(course.originalPrice)}
                            </span>
                          )}
                        </div>
                        <Badge variant="outline">{course.level}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-lg text-slate-600">
              No courses found matching your criteria.
            </p>
            <Button variant="outline" onClick={clearFilters} className="mt-4">
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
