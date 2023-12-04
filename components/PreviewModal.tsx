'use client';

import Modal from '@/components/ui/Modal';
import usePreviewModal from '@/hooks/use-preview-modal';
import Gallery from '@/components/gallery';
import ProductInfo from '@/components/ProductInfo';

const PreviewModal = () => {
  const { isOpen, onClose, data } = usePreviewModal();

  if (!data) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-[1fr_2fr]">
        <Gallery images={data.images} />
        <ProductInfo product={data} />
      </div>
    </Modal>
  );
};

export default PreviewModal;
