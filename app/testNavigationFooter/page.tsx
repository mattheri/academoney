import { FC } from 'react';
import Navbar from '../../common/components/Layout/Navbar';
import Footer from '../../common/components/Layout/Footer';


const TestFooter: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* page */}
      </main>
      <Footer />
    </div>
    
  );
};

export default TestFooter;
