"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  House,
  DeviceMobile,
  Users,
  UsersFour,
  List,
  X,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: House,
  },
  {
    name: "About The App",
    href: "/about-app",
    icon: DeviceMobile,
  },
  {
    name: "Agents",
    href: "/agents",
    icon: Users,
  },
  {
    name: "Employees",
    href: "/employees",
    icon: UsersFour,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
            >
              Thirumal Facilities
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 gap-2 ${
                    isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-600 hover:text-blue-600 hover:bg-blue-50/50"
                  }`}
                >
                  <Icon size={20} weight={isActive ? "fill" : "regular"} />
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200"
            >
              {isOpen ? (
                <X size={24} weight="bold" />
              ) : (
                <List size={24} weight="bold" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.2 }}
        className="md:hidden overflow-hidden bg-white border-b border-slate-200"
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 gap-2 ${
                  isActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-600 hover:text-blue-600 hover:bg-blue-50/50"
                }`}
              >
                <Icon size={20} weight={isActive ? "fill" : "regular"} />
                {item.name}
              </Link>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
}
