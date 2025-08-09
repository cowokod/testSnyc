import { Link, useLocation } from 'react-router-dom';

const mobileMenu = [
  { to: '/market', label: 'Market' },
  { to: '/trading', label: 'Trading' },
  { to: '/portfolio', label: 'Portfolio', center: true },
  { to: '/transaction', label: 'Transaction' },
  { to: '/setting', label: 'Setting' },
];

const desktopMenu = [
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/market', label: 'Market' },
  { to: '/trading', label: 'Trading' },
  { to: '/transaction', label: 'Transaction' },
  { to: '/setting', label: 'Setting' },
];

export default function NavBar() {
  const location = useLocation();
  return (
    <>
      <nav className="hidden md:flex flex-col w-48 p-4 bg-gray-100 h-screen">
        {desktopMenu.map((item) => (
          <Link key={item.to} className={`mb-2 ${location.pathname === item.to ? 'font-bold' : ''}`} to={item.to}>
            {item.label}
          </Link>
        ))}
      </nav>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-100 flex justify-between p-2">
        {mobileMenu.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`${item.center ? 'relative -top-6 rounded-full bg-white px-4 py-2 shadow' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
