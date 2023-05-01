import React from "react";
import Link from "next/link";

type NavLink = {
  href: string;
  label: string;
};

type IconLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/design-guidelines", label: "Design Guidelines" },
];

const iconLinks: IconLink[] = [
  { href: "https://twitter.com/YourTwitterHandle", label: "Twitter" },
  {
    href: "https://www.instagram.com/YourInstagramHandle/",
    label: "Instagram",
  },
  { href: "https://github.com/YourGitHubUsername", label: "GitHub" },
  { href: "https://www.behance.net/YourBehanceUsername", label: "Behance" },
];

const Footer: React.FC = () => {
  return (
    <footer className="">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-4 text-center md:mb-0 md:text-left">
            <p className="text-gray-500">&copy; 2023 Your Site Name</p>
          </div>
          <div className="flex items-center">
            <nav className="-mx-4 flex flex-wrap text-center md:text-left">
              {navLinks.map((navLink) => (
                <Link href={navLink.href} key={navLink.href}>
                  {navLink.label}
                </Link>
              ))}
            </nav>
            <nav className="-mx-4 flex flex-wrap text-center md:text-left">
              {iconLinks.map((iconLink) => (
                <a
                  key={iconLink.href}
                  href={iconLink.href}
                  aria-label={iconLink.label}
                  className="mx-2 inline-flex h-8 w-8 items-center justify-center text-gray-500 hover:text-gray-700"
                ></a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
