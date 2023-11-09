'use client';
import Container from "@/components/ui/Container";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-700 border-t">
      <Container className="flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-white hover:text-gray-200">Store</a>
        <p className="text-white">All rights reserved</p>
      </Container>
    </footer>
  )
}

export default Footer