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
// Review images
import _01 from '../../assets/images/homePage/Reviews/01.webp';
import _02 from '../../assets/images/homePage/Reviews/02.webp';
import _03 from '../../assets/images/homePage/Reviews/03.jpg';
// Post Images
import P_01 from '../../assets/images/homePage/Posts/P_01.jpg';
import P_02 from '../../assets/images/homePage/Posts/P_02.jpg';
import P_03 from '../../assets/images/homePage/Posts/P_03.jpg';
import P_04 from '../../assets/images/homePage/Posts/P_04.jpg';
import UpdatesPosts from '../../component/Posts/UpdatesPosts';
import Footer from '../../component/layout/footer/Footer';

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
      review:
        'We’ve partnered with this team on several projects now, and every time they’ve delivered results that exceeded expectations. Their ability to quickly understand complex requirements and translate them into functional solutions is truly impressive. What stands out most is their professionalism, timely communication, and dedication to quality. I highly recommend them for any organization looking for a reliable and skilled development partner.',
    },
    {
      client_profile: _02,
      client_name: 'Jane Smith',
      client_position: 'Marketing Manager',
      review:
        'Working with this team has been an absolute pleasure. From our initial consultation to project delivery, their attention to detail, creative input, and responsiveness made the entire process smooth and stress-free. They not only executed our vision perfectly but also brought their own innovative ideas that greatly enhanced the outcome. We look forward to working together again soon.',
    },
    {
      client_profile: _03,
      client_name: 'Michael Johnson',
      client_position: 'CTO',
      review:
        'I rarely leave reviews, but the quality of service and support we received from this group deserves special mention. The team showed exceptional technical expertise, particularly in solving some of our backend challenges and optimizing performance. Their documentation, clean code practices, and proactive updates kept our internal team well-informed. Definitely one of the best vendor experiences we’ve had.',
    },
  ];

  const postsData = [
    {
      imageUr: P_01,
      date: '2025-07-10',
      topic: 'Top 10 Fashion Trends for Summer 2025',
      text: 'Summer 2025 is shaping up to be one of the boldest seasons we’ve seen in years. Designers are embracing expressive silhouettes, reintroducing oversized blazers, asymmetrical cuts, and airy maxi dresses. The color palette is vibrant and optimistic, dominated by rich citrus tones, digital lavender, and earthy neutrals. Accessories are going maximalist, with chunky jewelry, oversized sunglasses, and statement bags stealing the spotlight. From streetwear to luxury fashion houses, this season is about comfort meeting confidence. Whether you’re planning a vacation or a local photoshoot, this trend report will help you find the right blend of trend-forward and wearable.',
    },
    {
      imageUr: P_02,
      date: '2025-07-15',
      topic: 'How to Build a Timeless Capsule Wardrobe',
      text: "A capsule wardrobe is more than a fashion buzzword—it’s a design philosophy rooted in simplicity, sustainability, and style longevity. This article walks you through selecting essential, high-quality pieces that blend versatility with personality. Think well-fitted blazers, neutral-toned blouses, tailored trousers, and the ever-essential little black dress. We explore how color coordination, layering, and mindful shopping habits can reduce decision fatigue and elevate your daily style. You'll also learn how to rotate pieces seasonally, experiment with textures, and avoid fast-fashion temptations without compromising on aesthetic or functionality. A perfect read for students, professionals, and anyone seeking a polished, minimalist approach.",
    },
    {
      imageUr: P_03,
      date: '2025-07-20',
      topic: 'Sustainable Fashion: Design with Purpose',
      text: "The shift toward sustainability is no longer a trend—it’s a responsibility. This in-depth post uncovers the urgent need for conscious design in the fashion industry. We explore eco-friendly fabrics like organic cotton, bamboo, and recycled polyester, and introduce readers to emerging brands that prioritize ethical sourcing and fair labor practices. You'll discover how slow fashion and circular economy principles are reshaping the industry, with design strategies that minimize waste from concept to production. Designers are also leveraging tech like blockchain and digital passports to ensure transparency. If you're a student, designer, or conscious shopper, this guide offers a blueprint to design with integrity and long-term impact.",
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
      <div className="posts" style={{ width: '100vw' }}>
        <UpdatesPosts postsData={postsData} />
      </div>
      <Footer />
    </>
  );
}
