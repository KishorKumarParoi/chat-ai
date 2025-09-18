import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

const Navbar = () => {
  return (
    <nav
      suppressHydrationWarning
      className="w-full bg-gradient-to-r from-purple-300 via-blue-300 to-fuchsia-100/80 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 backdrop-blur-lg shadow-lg py-3 px-6 flex items-center justify-between transition-colors duration-300"
    >
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/images/chat-ai.jpeg"
          alt="Chat.ai Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-fuchsia-600 dark:from-blue-300 dark:via-purple-300 dark:to-fuchsia-400 tracking-tight">
          Chat.ai
        </span>
      </div>
      {/* Middle: Nav Links */}
      <div className="flex-1 flex justify-center">
        <ul className="flex gap-8 items-center text-lg font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-fuchsia-600 dark:hover:text-fuchsia-400 text-gray-700 dark:text-gray-200 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="hover:text-fuchsia-600 dark:hover:text-fuchsia-400 text-gray-700 dark:text-gray-200 transition-colors"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/newsroom"
              className="hover:text-fuchsia-600 dark:hover:text-fuchsia-400 text-gray-700 dark:text-gray-200 transition-colors"
            >
              NewsRoom
            </Link>
          </li>
          <li>
            <Link
              href="/features"
              className="hover:text-fuchsia-600 dark:hover:text-fuchsia-400 text-gray-700 dark:text-gray-200 transition-colors"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-fuchsia-600 dark:hover:text-fuchsia-400 text-gray-700 dark:text-gray-200 transition-colors"
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
      {/* Right: Free Trial Button & Mode Toggle */}
      <div className="flex items-center gap-2">
        <Link
          href="/free-trial"
          className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-500 hover:from-fuchsia-700 hover:via-purple-700 hover:to-blue-600 text-white font-bold px-6 py-2 rounded-xl shadow-lg transition-all duration-300 mr-2 dark:from-fuchsia-500 dark:via-purple-500 dark:to-blue-400"
        >
          Free Trial
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
