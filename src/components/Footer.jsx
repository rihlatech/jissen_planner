import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Releases", href: "/releases" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Affiliate Programme", href: "/affiliates" },
];

const legalLinks = [
  { label: "Terms & Conditions and Refund Policy", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const socials = ["Instagram", "TikTok", "LinkedIn"];

export default function Footer() {
  return (
    <footer className="bg-[#25231F] text-[#F8F4ED]">
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display text-3xl tracking-tight">
              Jissen Planner<span className="text-[#C9A875]">.</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[#C9C2B8]">
              Plan with purpose. Show up for yourself.
              Create space for your goals, your growth, and the life you're building.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#C9A875]">
              Explore
            </h2>

            <nav
              aria-label="Footer navigation"
              className="mt-5 flex flex-col items-start gap-3"
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm text-[#C9C2B8] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#C9A875]">
              Legal
            </h2>

            <nav
              aria-label="Legal navigation"
              className="mt-5 flex flex-col items-start gap-3"
            >
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm text-[#C9C2B8] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#C9A875]">
              Find us
            </h2>

            <div className="mt-5 flex flex-col items-start gap-3">
              {socials.map((social) => (
                <span
                  key={social}
                  title="Social profile coming soon"
                  className="text-sm text-[#C9C2B8]"
                >
                  {social}
                  {/* <span className="ml-2 text-xs text-[#8F887E]">
                    Coming soon
                  </span> */}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-[#AFA79C] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Jissen Planner. All rights reserved.
          </p>

          <p>Built for a more intentional life.</p>
        </div>
      </div>
    </footer>
  );
}