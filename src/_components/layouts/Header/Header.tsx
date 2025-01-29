import Logo from '@/_components/icons/Logo/Logo';

const Header = () => {
  return (
    <header className="flex flex-row items-center p-4">
      <Logo />
      <div className="flex flex-row items-center justify-center w-full mr-10">
        <h1 className="text-3xl font-bold text-blue-200">pengkle - 익명 SNS</h1>
      </div>
    </header>
  );
};

export default Header;
