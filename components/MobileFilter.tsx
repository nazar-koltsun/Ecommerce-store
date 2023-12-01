'use client';

import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import Button from '@/components/ui/Button';
import { Filter as FilterIcon, X } from 'lucide-react';
import Filter from '@/components/Filter';

interface MobileFilterProps {
  className?: string;
  filterData: {
    valueKey: string;
    name: string;
    data: {
      id: string;
      name: string;
    }[];
  }[];
}

const MobileFilter: React.FC<MobileFilterProps> = ({
  className,
  filterData,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      <Button
        className="flex gap-1 items-center p-2 text-sm"
        onClick={() => setIsOpen(true)}
      >
        Filter <FilterIcon size={14} />
      </Button>
      <Dialog
        className={'fixed z-50 top-0 right-0 bottom-0 bg-white'}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0">
          <Dialog.Panel className="relative bg-white h-full w-[500px] max-w-[80%] ml-auto pt-14 p-4">
            <Button
              className="absolute right-4 top-4 flex gap-1 items-center p-2"
              onClick={() => setIsOpen(false)}
            >
              <X size={16} />
            </Button>
            <div className='space-y-6'>
              {filterData.map((filter) => (
                <div key={filter.name}>
                  <Filter {...filter} />
                </div>
              ))}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default MobileFilter;
