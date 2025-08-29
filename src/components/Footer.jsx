import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 w-full h-full flex flex-col justify-center items-center py-16 overflow-hidden">
      {/* Dark main box */}
      <div className="relative bg-neutral-900 shadow-lg rounded-2xl w-full max-w-6xl px-8 py-10 z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Description */}
          <div className="col-span-1">
            <h3 className="text-2xl font-extrabold text-white">CMDC</h3>
            <p className="text-neutral-400 text-sm mt-3 max-w-xs leading-relaxed">
              A technical club empowering students through hands-on experience
              in CAD, Simulation, AI/ML, and Product Design.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-5 text-neutral-300 text-lg">
              <a
                href="https://www.instagram.com/cmdc.nitjsr?igsh=anNnMm9ia2lhNzI5"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#B9FF66] transition-colors"
              >
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-[#B9FF66] transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-[#B9FF66] transition-colors">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-[#B9FF66] transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-neutral-400 text-sm">
              {[
                "Home",
                "Domains",
                "Projects",
                "Achievement",
                "About",
                "Contact",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase()}`}
                   className="hover:text-[#B9FF66] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white">Resources</h4>
            <ul className="mt-3 space-y-2 text-neutral-400 text-sm">
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Tutorials</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          {/* Join Us */}
          <div>
            <h4 className="text-sm font-semibold text-white">Join Us</h4>
            <p className="text-neutral-400 text-sm mt-3">
              Interested in joining our club or collaborating?
            </p>
            <a
              href="#contact"
             className="inline-block mt-4 px-4 py-2 bg-[#B9FF66] text-[#111] text-sm font-bold rounded-md hover:bg-[#B9FF66]/90 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} CMDC. All rights reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
        </div>
      </div>

      {/* Watermark Shadow Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0 pointer-events-none">
        <h1 className="text-[8rem] md:text-[12rem] font-extrabold text-neutral-800 opacity-50 select-none w-full text-center transform translate-y-1/2">
          CMDC
        </h1>
      </div>
    </footer>
  );
}
