'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MainNav = () => {
  const pageUrl = usePathname();

  const links = [
    { href: '/products', label: 'Products', active: pageUrl === '/products' },
    { href: '/about-us', label: 'About us', active: pageUrl === '/about-us' },
  ];

  return (
    <ul className="flex gap-4">
      {links.map(({ href, label, active }) => (
        <li key={`${href}${label}`}>
          <Link
            href={href}
            className={cn(
              "text-[var(--link-color)] hover:text-gray-200",
              active && "text-gray-800",
            )}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainNav;
