import Home from '@/_components/icons/Home/Home';
import Like from '@/_components/icons/Like/Like';
import Profile from '@/_components/icons/Profile/Profile';
import Setting from '@/_components/icons/Setting/Setting';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav className="flex flex-col items-center mt-20 gap-20 p-4">
      <Link href="/" className="hover:opacity-50 transition-opacity cursor-pointer">
        <Home />
      </Link>

      <Link href="/likes" className="hover:opacity-50 transition-opacity cursor-pointer">
        <Like />
      </Link>

      <Link href="/profile" className="hover:opacity-50 transition-opacity cursor-pointer">
        <Profile />
      </Link>

      <Link href="/settings" className="hover:opacity-50 transition-opacity cursor-pointer">
        <Setting />
      </Link>
    </nav>
  );
};

export default Sidebar;
