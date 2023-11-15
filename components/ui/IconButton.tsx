'use client';

interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({icon, onClick}) => {
  return (
    <button 
      className="flex items-center justify-center w-8 h-8 p-1 bg-gray-200 rounded-full shadow-md"
      onClick={onClick}
    >
      {icon}
    </button>
  )
};

export default IconButton;