"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Users,
  TrendingUp,
  Award,
  BarChart3,
  Shield,
  Headphones,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const features = [
  {
    icon: Users,
    title: "Team Management",
    description: "Easily manage team access, assign courses, and track progress from a central dashboard.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Get detailed insights on team learning progress, engagement, and skill development.",
  },
  {
    icon: Award,
    title: "Custom Learning Paths",
    description: "Create tailored learning programs aligned with your company's goals and needs.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SSO integration, data privacy compliance, and enterprise-grade security.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Get a dedicated account manager and priority support for your team.",
  },
  {
    icon: TrendingUp,
    title: "ROI Tracking",
    description: "Measure the impact of training on employee performance and business outcomes.",
  },
];

const benefits = [
  "Access to 200+ professional courses",
  "Custom learning paths for your team",
  "Detailed analytics and reporting",
  "SSO & enterprise security",
  "Dedicated account manager",
  "Priority support",
  "Volume discounts",
  "API access",
];

const logos = [
  "Company 1",
  "Company 2",
  "Company 3",
  "Company 4",
  "Company 5",
  "Company 6",
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

export default function ForBusinessPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-4">
                <Building2 className="mr-1 h-3 w-3" />
                Enterprise Solutions
              </Badge>

              <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl lg:text-6xl">
                Upskill Your Team with{" "}
                <span className="gradient-text">SkillUp for Business</span>
              </h1>

              <p className="mt-6 text-lg text-slate-600">
                Transform your workforce with our enterprise learning platform.
                Give your team access to world-class courses, track their
                progress, and measure the impact on your business.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="xl">Request a Demo</Button>
                <Button variant="outline" size="xl">
                  Contact Sales
                </Button>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <p className="text-3xl font-bold text-slate-900">500+</p>
                  <p className="text-sm text-slate-600">Enterprise clients</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">94%</p>
                  <p className="text-sm text-slate-600">Completion rate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">4.8/5</p>
                  <p className="text-sm text-slate-600">Satisfaction score</p>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="shadow-2xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900">
                    Get Started Today
                  </h2>
                  <p className="mt-2 text-slate-600">
                    Fill out the form and we&apos;ll be in touch shortly.
                  </p>

                  <form className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium text-slate-700">
                          First Name
                        </label>
                        <Input className="mt-1" placeholder="John" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-700">
                          Last Name
                        </label>
                        <Input className="mt-1" placeholder="Smith" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700">
                        Work Email
                      </label>
                      <Input
                        className="mt-1"
                        type="email"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700">
                        Company Name
                      </label>
                      <Input className="mt-1" placeholder="Acme Inc." />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700">
                        Team Size
                      </label>
                      <select className="mt-1 flex h-11 w-full rounded-lg border border-input bg-white px-4 py-2 text-sm">
                        <option>1-10 employees</option>
                        <option>11-50 employees</option>
                        <option>51-200 employees</option>
                        <option>201-500 employees</option>
                        <option>500+ employees</option>
                      </select>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Request Demo
                    </Button>
                  </form>

                  <p className="mt-4 text-center text-xs text-slate-500">
                    By submitting, you agree to our Terms and Privacy Policy.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="border-y bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-slate-500">
            TRUSTED BY LEADING COMPANIES
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex h-12 w-24 items-center justify-center rounded-lg bg-slate-100 text-sm font-medium text-slate-400"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Everything You Need to Train Your Team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Our enterprise platform provides all the tools you need to
              manage, track, and optimize your team&apos;s learning journey.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Why Choose SkillUp for Business?
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Join hundreds of companies who trust SkillUp Academy to develop
                their workforce and drive business growth.
              </p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" className="mt-8">
                Get Started
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="mx-auto h-16 w-16 text-primary" />
                    <p className="mt-4 text-lg font-medium text-slate-700">
                      Analytics Dashboard Preview
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-16">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Transform Your Team?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Schedule a personalized demo and see how SkillUp for Business can
            help your organization grow.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="xl"
              className="bg-white text-primary hover:bg-white/90"
            >
              Request Demo
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
