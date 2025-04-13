import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#E8DAEF] to-[#D2B4DE] text-[#4A235A] py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-extrabold mb-4 tracking-wide">JobOrbit</h2>
          <p className="text-sm text-[#5D3A73] leading-relaxed">
            Discover your next career move with curated job listings and connections to top companies around you.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm text-[#5D3A73]">
            {['Home', 'Jobs', 'Companies', 'Contact'].map((link, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="hover:text-[#9B59B6] transition-all duration-200 ease-in-out"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4 text-[#4A235A]">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="p-2 bg-white rounded-full shadow hover:bg-[#BB8FCE] hover:text-white transition-colors duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-[#5D3A73] mt-12 border-t border-[#BB8FCE] pt-6">
        © {new Date().getFullYear()} JobOrbit. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
