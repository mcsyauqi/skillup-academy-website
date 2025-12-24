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
    question: "Can I switch plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, Pro plans come with a 7-day free trial. You won't be charged until the trial ends.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and popular payment methods including GoPay, OVO, and bank transfers.",
  },
  {
    question: "Can I get a refund?",
    answer: "Yes, we offer a 30-day money-back guarantee on all paid plans. No questions asked.",
  },
  {
    question: "Do you offer discounts for students?",
    answer: "Yes! Students with a valid .edu email can get 50% off on Pro plans.",
  },
  {
    question: "How does team billing work?",
    answer: "Team plans are billed per user per month. You can add or remove team members at any time.",
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
              Simple, Transparent Pricing
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Choose the plan that&apos;s right for you. All plans include access
              to our community and support.
            </p>

            {/* Billing toggle */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <span
                className={cn(
                  "text-sm font-medium",
                  !isAnnual ? "text-slate-900" : "text-slate-500"
                )}
              >
                Monthly
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
                Annual
              </span>
              <Badge variant="success">Save 20%</Badge>
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
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>

                    <div className="mt-4">
                      <span className="text-4xl font-bold text-slate-900">
                        {plan.price === 0
                          ? "Free"
                          : formatPrice(isAnnual ? plan.price * 10 : plan.price)}
                      </span>
                      {plan.price > 0 && (
                        <span className="text-slate-500">/{plan.period}</span>
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
              Need a custom solution?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              We offer custom enterprise plans with advanced features, dedicated
              support, and flexible pricing for large teams.
            </p>
            <Button
              size="lg"
              className="mt-6 bg-white text-slate-900 hover:bg-white/90"
            >
              Contact Sales
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
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Have questions? We have answers.
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
              30-Day Money-Back Guarantee
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              Try any paid plan risk-free. If you&apos;re not completely satisfied
              within the first 30 days, we&apos;ll refund your payment. No questions
              asked.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
