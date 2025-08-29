import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gray-50 w-full h-full flex flex-col justify-center items-center py-16 overflow-hidden">
      {/* White main box */}
      <div className="relative bg-white shadow-lg rounded-2xl w-full max-w-6xl px-8 py-10 z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Description */}
          <div className="col-span-1">
            <h3 className="text-2xl font-extrabold text-black">CMDC</h3>
            <p className="text-gray-600 text-sm mt-3 max-w-xs leading-relaxed">
              A technical club empowering students through hands-on experience
              in CAD, Simulation, AI/ML, and Product Design.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-5 text-gray-700 text-lg">
              <a
                href="https://www.instagram.com/cmdc.nitjsr?igsh=anNnMm9ia2lhNzI5"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#00ffe1] transition-colors"
              >
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-[#00ffe1] transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-[#00ffe1] transition-colors">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-[#00ffe1] transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-gray-600 text-sm">
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
                    className="hover:text-[#00ffe1] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Resources</h4>
            <ul className="mt-3 space-y-2 text-gray-600 text-sm">
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
            <h4 className="text-sm font-semibold text-gray-900">Join Us</h4>
            <p className="text-gray-600 text-sm mt-3">
              Interested in joining our club or collaborating?
            </p>
            <a
              href="#contact"
              className="inline-block mt-4 px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:opacity-80 transition-opacity"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
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
        <h1 className="text-[8rem] md:text-[12rem] font-extrabold text-gray-200 opacity-50 select-none w-full text-center transform translate-y-1/2">
          CMDC
        </h1>
      </div>
    </footer>
  );
}
