import { Menu, Search, ShoppingBag, User } from 'lucide-react';
import logo from '../../../assets/logo/logo.png';
import '../../../css/home/Navbar.css';
import { Link } from 'react-router-dom';

export default function NavBar({ scrolled }) {
  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="logo">
        <Link to={'/'}>
          <img src={logo} className="w-10 h-10" />
          <p>Kiyago</p>
        </Link>
      </div>
      <div className="navmenu">
        <Link to={'/'}>
          <div>Home</div>
        </Link>
        <Link to={'/'}>
          <div>Shop</div>
        </Link>
        <Link to={'/'}>
          <div>Products</div>
        </Link>
        <Link to={'/'}>
          <div>Page</div>
        </Link>
        <Link to={'/'}>
          <div>Docs</div>
        </Link>
      </div>
      <div className="nav-icon">
        <Link to={'/'}>
          <Search className="w-4 h-4" />
        </Link>
        <Link to={'/'}>
          <User className="w-4 h-4" />
        </Link>
        <Link to={'/'}>
          <ShoppingBag className="w-4 h-4" />
        </Link>
        <Link to={'/'}>
          <Menu className="w-4 h-4" />
        </Link>
      </div>
    </header>
  );
}
