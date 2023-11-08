import Link from 'next/link';
import Container from '@/components/ui/Container';
import MainMav from '@/components/MainNav';

const Navbar = () => {
  const links = [
    { href: '/products', label: 'Products' },
    { href: '/about-us', label: 'About us' },
  ];

  return (
    <nav className="bg-emerald-500 py-5">
      <Container className='flex justify-between items-center'>
        <Link href='/'>
          <h1 className="text-2xl font-bold text-[var(--link-color)]">Store</h1>
        </Link>
        <MainMav />
      </Container>
    </nav>
  );
};

export default Navbar;
