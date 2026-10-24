
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { label: "Home", to: "/" },
  { label: "Releases", to: "/releases" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "FAQs", to: "/faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative inline-flex h-full items-center py-3 text-sm transition-colors duration-300 ${
      isActive
        ? "text-[#25231F]"
        : "text-[#625C53] hover:text-[#25231F]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#25231F]/10 bg-[#F8F4ED]/95 backdrop-blur-md">
      <nav
        className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="group flex shrink-0 flex-col"
        >
          <span className="font-display text-3xl font-light leading-none tracking-wide text-[#25231F]">
            LOCK<span className="text-[#8B714A]">-</span>IN
          </span>
          {/* <span className="mt-1 text-[8px] uppercase tracking-[0.24em] text-[#8B714A]">
            Plan with purpose
          </span> */}
        </Link>

        {/* Desktop navigation */}
        <div className="hidden h-full items-center gap-8 md:flex lg:gap-10">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={linkClass}
            >
              {({ isActive }) => (
                <>
                  {link.label}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8B714A]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="ml-1 border border-[#25231F] px-5 py-3 text-xs transition-colors duration-300 hover:bg-[#25231F] hover:text-[#F8F4ED]"
          >
            Get Started <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-[#25231F] md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span className="text-2xl leading-none">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[#25231F]/10 bg-[#F8F4ED] md:hidden"
          >
            <div className="px-5 pb-5 pt-2 sm:px-8">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between border-b py-4 text-sm transition-colors ${
                      isActive
                        ? "border-[#8B714A]/40 text-[#8B714A]"
                        : "border-[#25231F]/10 text-[#625C53]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>
                      {isActive && (
                        <span
                          className="h-[2px] w-8 bg-[#8B714A]"
                          aria-hidden="true"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-5 flex items-center justify-between bg-[#25231F] px-5 py-4 text-sm text-[#F8F4ED]"
              >
                Get Started <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
