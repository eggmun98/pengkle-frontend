import Logo from '@/_components/icons/Logo/Logo';

const Header = () => {
  return (
    <div className="flex flex-row items-center gap-5">
      <Logo />
      <h1 className="text-3xl font-bold ">pengkle - 익명 SNS</h1>
    </div>
  );
};

export default Header;
