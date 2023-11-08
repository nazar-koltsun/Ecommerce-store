import Link from "next/link";

const MainNav = () => {
  const links = [
    { href: '/products', label: 'Products' },
    { href: '/about-us', label: 'About us' },
  ];

  return (
    <ul className="flex gap-4">
      {links.map(({ href, label }) => (
        <li key={`${href}${label}`}>
          <Link
            href={href}
            className="text-[var(--link-color)] hover:text-gray-200"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainNav;
