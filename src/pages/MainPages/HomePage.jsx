import { useEffect, useState } from 'react';
import NavBar from '../../component/layout/navbar/NavBar';
import wallpaperImage from '../../assets/images/homePage/main.png';
import '../../css/home/wallpaper.css';
import { ArrowRight } from 'lucide-react';
import Product from '../../component/products/Product';
import ProductReviews from '../../component/products/ProductReviews';

// Product images
import _01_01 from '../../assets/images/homePage/Products/01_01.jpg';
import _01_02 from '../../assets/images/homePage/Products/01_02.jpg';
import _02_01 from '../../assets/images/homePage/Products/02_01.jpg';
import _02_02 from '../../assets/images/homePage/Products/02_02.jpg';
import _03_01 from '../../assets/images/homePage/Products/03_01.jpg';
import _03_02 from '../../assets/images/homePage/Products/03_02.jpg';
import _04_01 from '../../assets/images/homePage/Products/04_01.jpg';
import _04_02 from '../../assets/images/homePage/Products/04_02.jpg';
import _05_01 from '../../assets/images/homePage/Products/05_01.jpg';

import _01 from '../../assets/images/homePage/Reviews/01.webp';
import _02 from '../../assets/images/homePage/Reviews/01.webp';
import _03 from '../../assets/images/homePage/Reviews/01.webp';

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

  const productsData = [
    { rating: '4.5', tag: 'SALE', price: 3490.0, text: 'JOBBS OVERSIZED WAFFLE SHIRT', url: _01_01 },
    { rating: '4.5', tag: 'SALE', price: 3490.0, text: 'JOBBS OVERSIZED WAFFLE SHIRT', url: _01_02 },
    { rating: '4.5', tag: 'NEW', price: 3490.0, text: 'JOBBS OVERSIZED WAFFLE SHIRT', url: _02_01 },
    { rating: '4.5', tag: 'SALE', price: 3490.0, text: 'JOBBS OVERSIZED WAFFLE SHIRT', url: _02_02 },
    { rating: '4.5', tag: '', price: 3490.0, text: 'JOBBS OVERSIZED WAFFLE SHIRT', url: _03_01 },
    { rating: '4.5', tag: 'NEW', price: 3490.0, text: 'JOBBS OVERSIZED WAFFLE SHIRT', url: _03_02 },
    { rating: '4.5', tag: 'SALE', price: 3490.0, text: 'JOBBS OVERSIZED WAFFLE SHIRT', url: _04_01 },
    { rating: '4.5', tag: 'HOT', price: 3490.0, text: 'JOBBS OVERSIZED WAFFLE SHIRT', url: _04_02 },
    { rating: '4.5', tag: 'SALE', price: 3490.0, text: 'JOBBS OVERSIZED WAFFLE SHIRT', url: _05_01 },
  ];
  const customerReviews = [
    {
      client_profile: _01,
      client_name: 'John Doe',
      client_position: 'CEO',
      review: 'Excellent service and prompt delivery. Our project deadlines were met efficiently.',
    },
    {
      client_profile: _02,
      client_name: 'Jane Smith',
      client_position: 'Marketing Manager',
      review: 'Great communication throughout the project. The team was very responsive to our needs.',
    },
    {
      client_profile: _03,
      client_name: 'Michael Johnson',
      client_position: 'CTO',
      review: 'Impressive technical expertise and attention to detail. Highly recommend their services.',
    },
  ];

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
      <div
        className="line"
        style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%', position: 'relative' }}
      >
        <p
          style={{
            textAlign: 'center',
            marginBottom: '40px',
            padding: '3px',
            width: '300px',
            backgroundColor: 'white',
            zIndex: '100000000',
            fontSize: '20px',
          }}
        >
          Our Trending <span style={{ fontWeight: 'bold', color: 'red', transform: 'scale(1.1)' }}>Products</span>
        </p>
        <p
          style={{
            borderBottom: '1.6px solid black',
            width: '86%',
            textAlign: 'center',
            position: 'absolute',
            top: '13px',
          }}
        ></p>
      </div>

      <div className="products" style={{ width: '100vw' }}>
        <Product productsData={productsData} />
      </div>
      <div className="reviews" style={{ width: '100vw' }}>
        <ProductReviews customerReviews={customerReviews} noOfReviews={customerReviews.length} />
      </div>
    </>
  );
}
