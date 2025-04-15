"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Users,
  ChatCircleDots,
  Money,
  Bell,
  DeviceMobile,
  Database,
  ChatText,
  CreditCard,
  Bell as BellIcon,
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const features = [
  {
    icon: <Users size={32} weight="duotone" className="text-indigo-500" />,
    title: "Client Dashboard",
    description: "Post requirements and connect with skilled workers instantly",
  },
  {
    icon: (
      <ChatCircleDots size={32} weight="duotone" className="text-emerald-500" />
    ),
    title: "Real-time Chat",
    description: "Seamless communication between clients and service providers",
  },
  {
    icon: <Money size={32} weight="duotone" className="text-amber-500" />,
    title: "Secure Payments",
    description: "Safe and transparent payment processing",
  },
  {
    icon: <Bell size={32} weight="duotone" className="text-rose-500" />,
    title: "Instant Notifications",
    description: "Stay updated with real-time alerts and updates",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Post Requirement",
    description: "Clients post their manpower needs with specific details",
  },
  {
    step: "02",
    title: "Connect",
    description: "Service providers view and respond to relevant requirements",
  },
  {
    step: "03",
    title: "Discuss",
    description: "Real-time chat to finalize details and terms",
  },
  {
    step: "04",
    title: "Confirm",
    description: "Secure payment and service confirmation",
  },
];

const techStack = [
  {
    icon: <DeviceMobile size={32} weight="duotone" className="text-blue-600" />,
    name: "React Native",
    description: "Cross-platform mobile development",
    badge: "Frontend",
  },
  {
    icon: <Database size={32} weight="duotone" className="text-blue-600" />,
    name: "Supabase",
    description: "Backend & Authentication",
    badge: "Backend",
  },
  {
    icon: <ChatText size={32} weight="duotone" className="text-blue-600" />,
    name: "Realtime",
    description: "Instant messaging system",
    badge: "Chat",
  },
  {
    icon: <CreditCard size={32} weight="duotone" className="text-blue-600" />,
    name: "Razorpay",
    description: "Secure payment gateway",
    badge: "Payments",
  },
  {
    icon: <BellIcon size={32} weight="duotone" className="text-blue-600" />,
    name: "Expo",
    description: "Push notifications",
    badge: "Push",
  },
];

const AboutApp = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Summary Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.1]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 px-4">
                Streamlining Facility Management Through Technology
              </h1>
              <div className="prose prose-slate mx-auto">
                <p className="text-base sm:text-lg text-slate-600 mb-6 px-4">
                  Thirumal Facilities App is a comprehensive platform designed
                  to revolutionize how businesses connect with skilled
                  workforce. Our mobile application simplifies the entire
                  process of manpower management, from posting requirements to
                  finalizing deals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left mt-8 sm:mt-12 px-4">
                  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-slate-100">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      For Clients
                    </h3>
                    <p className="text-slate-600 text-base">
                      Post requirements, browse qualified service providers, and
                      manage workforce efficiently through our intuitive
                      platform.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-slate-100">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      For Providers
                    </h3>
                    <p className="text-slate-600 text-base">
                      Connect with businesses, showcase your services, and grow
                      your client base with our streamlined approach.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white relative">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4 px-4">
            Key Features
          </h2>
          <p className="text-base sm:text-lg text-slate-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Everything you need to manage your workforce efficiently
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 px-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-4">
                  {React.cloneElement(feature.icon, { size: 24 })}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.1]" />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container mx-auto px-4 relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4 px-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Simple steps to get started with our platform
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4">
            {howItWorks.map((step, index) => (
              <motion.div key={index} variants={item} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-900">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-base">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4 px-4">
            Built With Modern Tech
          </h2>
          <p className="text-base sm:text-lg text-slate-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Leveraging cutting-edge technologies to deliver a seamless and
            reliable experience
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto px-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-4">
                  {React.cloneElement(tech.icon, { size: 24 })}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                    {tech.name}
                  </h3>
                  <Badge variant="secondary" className="text-xs sm:text-sm">
                    {tech.badge}
                  </Badge>
                </div>
                <p className="text-slate-600 text-base">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Development Roadmap */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:14px_24px]" />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container mx-auto px-4 relative z-10"
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            Development Roadmap
          </h2>
          <p className="text-lg text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Our journey to building the perfect platform
          </p>
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div
              variants={item}
              className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10"
            >
              <Badge variant="default" className="bg-blue-500 text-white">
                MVP
              </Badge>
              <div>
                <p className="font-semibold text-white">Core Functionality</p>
                <p className="text-slate-300">
                  Authentication, Request Posting, and Real-time Chat
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={item}
              className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10"
            >
              <Badge variant="default" className="bg-blue-500 text-white">
                Phase 2
              </Badge>
              <div>
                <p className="font-semibold text-white">
                  Payments & Gig Confirmation
                </p>
                <p className="text-slate-300">
                  Secure payment processing and automated confirmations
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={item}
              className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10"
            >
              <Badge variant="default" className="bg-blue-500 text-white">
                Phase 3
              </Badge>
              <div>
                <p className="font-semibold text-white">Reviews & Ratings</p>
                <p className="text-slate-300">
                  Build trust with user reviews and service ratings
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutApp;
