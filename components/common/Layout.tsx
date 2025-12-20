// import Footer from '@/components/common/Footer';
// import Header from '@/components/common/Header';
import React, { ReactNode } from 'react';

interface LayoutProps{
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=''>
       {children}
    </div>
  )
    
};

export default Layout;
