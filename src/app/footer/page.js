import Image from "next/image";
import Link from "next/link";
import logo from "../img/logo.png"
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 ">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <Image className="mb-4 -mt-2" src={logo} width={100} height={100} alt="logo"/>
          <p className="text-lg leading-relaxed text-gray-400">
            Find your perfect home easily. Browse premium rental & sale
            properties with comfort and trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-md">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/all-properties" className="hover:text-blue-400">Properties</Link></li>
            <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Property Types */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Property Types</h3>
          <ul className="space-y-2 text-md">
            <li>Apartment</li>
            <li>Family House</li>
            <li>Studio</li>
            <li>Commercial</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-md text-gray-400">
            <li>📍 Feni, Bangladesh</li>
            <li>📞 +880 1887239062</li>
            <li>✉️ mrmahbuburrahman123@gmail</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SwiftStay. All rights reserved.  
        <br />
        <Link href="https://www.linkedin.com/in/mahbubur-rahman2003814/" className="text-white font-semibold tracking-wide">
          Created by MAHBUBUR RAHMAN
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
