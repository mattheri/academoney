// components/Logo.tsx
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <Image src="/logo.png" alt="Logo" width={500} height={300} priority />
    </div>
  );
};

export default Logo;
