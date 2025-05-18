import React from 'react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-t from-blue-600 to-blue-500 pt-16 pb-6 text-center">
      <div className="absolute top-0 left-0 w-full">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </div>

      <ul className="flex justify-center space-x-6">
        <li>
          <a
            href="#"
            className="inline-flex text-3xl text-white hover:text-gray-300 transition-transform duration-300 transform hover:-translate-y-2"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="inline-flex text-3xl text-white hover:text-gray-300 transition-transform duration-300 transform hover:-translate-y-2"
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="inline-flex text-3xl text-white hover:text-gray-300 transition-transform duration-300 transform hover:-translate-y-2"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="inline-flex text-3xl text-white hover:text-gray-300 transition-transform duration-300 transform hover:-translate-y-2"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>

      <ul className="flex justify-center space-x-6 text-lg opacity-75 hover:opacity-100 transition mt-2">
        <li><a href="#" className="hover:text-gray-300">Home</a></li>
        <li><a href="#" className="hover:text-gray-300">About</a></li>
        <li><a href="#" className="hover:text-gray-300">Services</a></li>
        <li><a href="#" className="hover:text-gray-300">Team</a></li>
        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
      </ul>

      <p className="mt-2 text-gray-200">&copy; 2025 CMDC | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
