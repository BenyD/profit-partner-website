"use client";

import { motion } from "framer-motion";
import { Envelope, Phone } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-r from-blue-800 to-blue-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Thirumal Facilities Service
            </h3>
            <p className="text-white/80">
              ISO 9001:2015 Certified Company providing comprehensive facility
              management solutions since 2011.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Phone size={20} />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center gap-2">
                <Envelope size={20} />
                <span>info@thirumalfacilities.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>
            &copy; {new Date().getFullYear()} Thirumal Facilities Service. All
            rights reserved.
          </p>
          <p className="mt-2 text-sm">ISO 9001:2015 Certified Company</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
