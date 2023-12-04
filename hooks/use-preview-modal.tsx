import { create } from 'zustand';
import { Product } from '@/types';

type dataType = Product | null;

interface PreviewModalState {
  isOpen: boolean;
  data: dataType;
  onOpen: (data: dataType) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalState>((set) => ({
  isOpen: false,
  data: null,
  onOpen: (data: dataType) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;