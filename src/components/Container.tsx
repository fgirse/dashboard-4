import { ReactNode } from 'react';

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`bg-red-300 shadow-2xl shadow-red-400 fixed top-0 left-0 right-0 h-[50pxw] p-[7px 0] full max-w-7xl my-0 mx-auto px-5 ${className}`}>
      { children }
    </div>
  )
}

export default Container;