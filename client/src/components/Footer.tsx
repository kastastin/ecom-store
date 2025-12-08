import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Catalog",
    links: [
      { href: "/sale", label: "Sale" },
      { href: "/products", label: "All Products" },
      { href: "/best-sellers", label: "Best Sellers" },
    ],
  },
  {
    title: "Info",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/affiliate-program", label: "Affiliate Program" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="mt-16 flex flex-col items-center gap-8 md:gap-28 xl:gap-54 justify-between rounded-lg bg-gray-800 p-8 md:flex-row md:items-start">
      <div className="flex flex-col items-center gap-4 md:items-start">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Logo" width={36} height={36} />
          <p className="text-md hidden font-medium tracking-wide text-white md:block">
            MicroStore
          </p>
        </Link>
        <p className="text-sm text-gray-400">© 2025 MicroStore</p>
        <p className="-mt-2 text-sm text-gray-400">All rights reserved.</p>
      </div>

      <nav className="flex w-full flex-col items-center gap-8 md:flex-1 md:flex-row md:items-start md:justify-between xl:justify-end lg:gap-16">
        {footerLinks.map((section) => (
          <section
            key={section.title}
            className="flex flex-col items-center gap-3 md:items-start"
          >
            <h2 className="text-sm font-semibold text-amber-50">
              {section.title}
            </h2>
            <ul className="flex items-center md:items-start flex-col gap-4 text-sm text-gray-400">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
