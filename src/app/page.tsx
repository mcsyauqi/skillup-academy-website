import { HeroSection } from "@/components/home/hero-section";
import { CategoriesSection } from "@/components/home/categories-section";
import { FeaturedCoursesSection } from "@/components/home/featured-courses-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { InstructorsSection } from "@/components/home/instructors-section";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedCoursesSection />
      <InstructorsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
