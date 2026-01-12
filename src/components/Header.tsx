import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="p-4 border-b flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <Button className="cursor-pointer border px-4 py-2 text-sm rounded-2xl">User</Button>
    </header>
  );
};

export default Header;
