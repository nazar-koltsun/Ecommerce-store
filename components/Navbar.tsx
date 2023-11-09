import Link from 'next/link';
import Container from '@/components/ui/Container';
import MainMav from '@/components/MainNav';
import { Category } from '@/types';
import getCategories from '@/actions/get-categories';

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <nav className="bg-emerald-500 py-5">
      <Container className='flex justify-between items-center'>
        <Link href='/'>
          <h1 className="text-2xl font-bold text-[var(--link-color)]">Store</h1>
        </Link>
        <MainMav data={categories} />
      </Container>
    </nav>
  );
};

export default Navbar;
