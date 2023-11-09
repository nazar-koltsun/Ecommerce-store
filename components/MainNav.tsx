'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({data}) => {
  const pageUrl = usePathname();

  const routes = data?.map(route => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pageUrl === `/category/${route.id}`,
  }))

  return (
    <ul className="flex gap-4">
      {routes.map(({ href, label, active }) => (
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
