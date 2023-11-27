import { Image as ImageType } from '@/types';

import { Tab } from '@headlessui/react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface GalleryTabProps {
  image: ImageType;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab
      key={image.id}
      className={({ selected }) =>
        cn(
          'w-20 h-20 relative rounded-lg py-2.5 text-sm font-medium leading-5 overflow-hidden',
          'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          selected
            ? 'bg-white text-blue-700 shadow'
            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
        )
      }
    >
      <Image src={image.url} fill alt="Product image" />
    </Tab>
  );
};

export default GalleryTab;
