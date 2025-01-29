import Home from '@/_components/icons/Home/Home';
import Like from '@/_components/icons/Like/Like';
import Profile from '@/_components/icons/Profile/Profile';
import Setting from '@/_components/icons/Setting/Setting';

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center mt-20 gap-20">
      <Home />
      <Like />
      <Profile />
      <Setting />
    </div>
  );
};

export default Sidebar;
