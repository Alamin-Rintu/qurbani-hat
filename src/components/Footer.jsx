import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-24 ">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* Subtle Gradient Glow */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex gap-2 items-center">
              <Image src={"/quarbani.jpg"} alt="logo" width={35} height={35} />
              <h3 className="font-black text-lg">QurbaniHat</h3>
            </div>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
              Find Your Perfect Qurbani Animal with Ease
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Contact info
            </h3>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <FaEnvelope />
                <Link
                  href="mailto:support@qurbanihat.com"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  rintuweb01@gmail.com
                </Link>
              </li>

              <li className="flex items-center gap-2">
                <FaPhone />
                <Link
                  href="tel:+8801XXXXXXXXX"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  +880 1521781416
                </Link>
              </li>

              <li className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>Dinajpur, Rangpur, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Social links
            </h3>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-black dark:hover:text-white transition"
                >
                  <FaFacebook /> Facebook
                </Link>
              </li>

              <li>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-black dark:hover:text-white transition"
                >
                  <FaInstagram /> Instagram
                </Link>
              </li>

              <li>
                <Link
                  href="https://github.com"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-black dark:hover:text-white transition"
                >
                  <FaGithub /> GitHub
                </Link>
              </li>

              <li>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-black dark:hover:text-white transition"
                >
                  <FaLinkedin /> LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA Block */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              About section
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              You can get here your best Qurbani Animal.
            </p>

            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
              bg-black text-white dark:bg-white dark:text-black 
              text-sm font-medium transition-all duration-200 
              hover:scale-[1.02] hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} QurbaniHat. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-black dark:hover:text-white transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-black dark:hover:text-white transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
