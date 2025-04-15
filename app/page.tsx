"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Broom,
  Lightning,
  Drop,
  SwimmingPool,
  Barbell,
  ArrowRight,
} from "@phosphor-icons/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Security Services",
    description:
      "Expert security implementation with well-trained guards and advanced equipment.",
    icon: Shield,
  },
  {
    title: "Housekeeping",
    description:
      "Comprehensive cleaning and maintenance services for all types of properties.",
    icon: Broom,
  },
  {
    title: "Electrical Services",
    description:
      "Professional electrical maintenance and emergency support services.",
    icon: Lightning,
  },
  {
    title: "Plumbing Services",
    description:
      "Expert plumbing solutions with advanced conservative techniques.",
    icon: Drop,
  },
  {
    title: "Swimming Pool Maintenance",
    description:
      "Complete pool maintenance including water quality and infrastructure care.",
    icon: SwimmingPool,
  },
  {
    title: "Gym & Club House",
    description:
      "Professional maintenance and management of gym and clubhouse facilities.",
    icon: Barbell,
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/facility1.jpg"
            alt="Facility Management"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/70" />
        </div>

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6"
            >
              Elevating Facility Management to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                New Heights
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
            >
              ISO 9001:2015 Certified Company delivering comprehensive facility
              management solutions with precision and excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4"
            >
              <Button
                asChild
                className="bg-[#3b82f6] hover:bg-[#2563eb] text-white text-base sm:text-lg px-6 sm:px-10 h-12 sm:h-14 rounded-full transition-all duration-300 shadow-[0_0_0_3px_rgba(59,130,246,0.1)] hover:shadow-[0_0_0_3px_rgba(59,130,246,0.2)]"
              >
                <Link href="/about-app" className="flex items-center">
                  About the App
                  <ArrowRight
                    size={20}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="text-base sm:text-lg px-6 sm:px-10 h-12 sm:h-14 rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300"
                onClick={() =>
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  })
                }
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        {/* Decorative circles - Reduced size for mobile */}
        <div className="absolute top-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-gradient-to-l from-blue-500/10 to-purple-500/10 blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="px-4 sm:px-0"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                Excellence in Facility Management
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8">
                Established in 2011, Thirumal Facilities has been at the
                forefront of delivering exceptional facility management services
                across multiple states in India.
              </p>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                    Our Vision
                  </h3>
                  <p className="text-slate-600 text-base sm:text-lg">
                    &ldquo;We strive to grow in-terms of sustainability,
                    scalability and resource to enhance every client base with
                    high level strategies and solutions.&rdquo;
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                    Our Mission
                  </h3>
                  <p className="text-slate-600 text-base sm:text-lg">
                    &ldquo;We accomplish best-in-class management solutions for
                    every individual, residence and commercial activities
                    through accountable strategy and technology.&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[300px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/facility2.jpg"
                alt="Modern Facility Management Services"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative circles - Reduced size for mobile */}
        <div className="absolute top-1/2 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-gradient-to-tr from-blue-500/5 to-purple-500/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-gradient-to-tl from-blue-500/5 to-purple-500/5 blur-3xl translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-16 px-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive facility management solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white">
                    <CardHeader>
                      <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                        <Icon size={24} className="text-white" />
                      </div>
                      <CardTitle className="text-lg sm:text-xl text-slate-900">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 text-base sm:text-lg">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Facility Management?
            </h2>
            <p className="text-xl text-slate-300">
              Experience the difference of working with an ISO 9001:2015
              certified company. Let&apos;s discuss how we can elevate your
              facility management to new heights.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
