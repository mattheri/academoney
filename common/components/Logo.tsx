import Image from 'next/image';

type LogoProps = {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 500, height = 300 }) => {
  return (
    <div className="flex items-center justify-center">
      <Image src="/logo.png" alt="Logo" width={width} height={height} priority />
    </div>
  );
};

export default Logo;
