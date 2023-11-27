'use client';

import { Image as ImageType } from '@/types';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import GalleryTab from './GalleryTab';

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => (
  <div className="max-w-[400px]">
    <Tab.Group>
      <Tab.Panels className="mb-2 w-full aspect-square rounded-lg overflow-hidden">
        {images.map((image, idx) => (
          <Tab.Panel
            key={idx}
            className={cn(
              'rounded-xl bg-white p-3 relative w-full h-full',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
            )}
          >
            <Image src={image.url} fill alt="Product image" />
          </Tab.Panel>
        ))}
      </Tab.Panels>
      <Tab.List className="flex space-x-3 p-1">
        {images.map((image) => (
          <GalleryTab key={image.id} image={image} />
        ))}
      </Tab.List>
    </Tab.Group>
  </div>
);

export default Gallery;
