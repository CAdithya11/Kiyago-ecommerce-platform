import { useEffect, useState } from 'react';
import NavBar from '../../component/layout/navbar/NavBar';
import wallpaperImage from '../../assets/images/homePage/main.png';
import '../../css/home/wallpaper.css';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setScrolled(scrollTop > 10); // Change background after 10px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div style={{ width: '100vw', height: '100vh' }}>
        <NavBar scrolled={scrolled} />
        <div className="wallpaper">
          <img className="image" src={wallpaperImage} />
          <div className="wallpaper-text">
            <p className="top-heading">Winter Collection</p>
            <p className="heading">New Winter Collection 2025</p>
            <p className="sub">There's Nothing Like Trend</p>
            <div className="button">
              <p>Show Now</p>
              <ArrowRight className="w-4 h-4" />
            </div>
            <div className="someText">Kiyago Shopping</div>
          </div>
        </div>
        <div className="discout">SALE OFF 30% USE CODE: CLIOFF</div>
      </div>
      <div className="products" style={{ width: '100vw', height: '100vh' }}>
        <p>Hello</p>
      </div>
    </>
  );
}
