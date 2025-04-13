import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#E8DAEF] text-[#4A235A] py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    
        <div>
          <h2 className="text-xl font-bold mb-4 text-[#4A235A]">JobOrbit</h2>
          <p className="text-sm text-[#5D3A73]">
            Find your dream job from a wide variety of listings and connect with top companies today.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 text-[#4A235A]">Quick Links</h2>
          <ul className="space-y-2 text-sm text-[#5D3A73]">
            <li><a href="#" className="hover:text-[#9B59B6]">Home</a></li>
            <li><a href="#" className="hover:text-[#9B59B6]">Jobs</a></li>
            <li><a href="#" className="hover:text-[#9B59B6]">Companies</a></li>
            <li><a href="#" className="hover:text-[#9B59B6]">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 text-[#4A235A]">Follow Us</h2>
          <div className="flex gap-4 text-[#4A235A]">
            <a href="#"><FaFacebookF className="hover:text-[#BB8FCE]" /></a>
            <a href="#"><FaTwitter className="hover:text-[#BB8FCE]" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-[#BB8FCE]" /></a>
            <a href="#"><FaInstagram className="hover:text-[#BB8FCE]" /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-[#5D3A73] mt-10 border-t border-[#BB8FCE] pt-6">
        © {new Date().getFullYear()} JobOrbit. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
