import { cn } from '@/lib/utils';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({className = '', children}) => {
  return (
    <div className={cn(className,'mx-auto w-full max-w-7xl px-4')}>
      {children}
    </div>
  )
}

export default Container