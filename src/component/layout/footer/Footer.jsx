import '../../../css/home/Footer.css';
import logo from '../../../assets/logo/logo.png';
import facebook from '../../../assets/icons/facebook.ico';
import youtube from '../../../assets/icons/youtube.ico';
import instagram from '../../../assets/icons/instagram.ico';
import twitter from '../../../assets/icons/stwitter.ico';
import linkedin from '../../../assets/icons/linkedin.ico';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="item item-one">
          <div className="logo">
            <img src={logo} />
          </div>
          <div style={{ lineHeight: '1.5' }} className="text">
            3245 Grant Street LongView, TX united kingdom 345672123435467 cadithya13@gmail.com
          </div>
          <div className="social-media">
            <img src={facebook} />
            <img src={instagram} />
            <img src={twitter} />
            <img src={facebook} />
          </div>
        </div>
        <div className="item item-two">
          <div className="head">Support</div>
          <div className="item">Contact Us</div>
          <div className="item">About Page</div>
          <div className="item">Size Guid</div>
          <div className="item">Shipping & Returns</div>
          <div className="item">Privacy</div>
        </div>
        <div className="item item-three">
          <div className="head">Shop</div>
          <div className="item">Men's Shopping</div>
          <div className="item">Woment's Shopping</div>
          <div className="item">Kid's Shopping</div>
          <div className="item">Furniture</div>
          <div className="item">Discount</div>
        </div>
        <div className="item item-four">
          <div className="head">Company</div>
          <div className="item">About</div>
          <div className="item">Blog</div>
          <div className="item">Affiliate</div>
          <div className="item">Login</div>
        </div>
        <div className="item item-five">
          <div className="head">Subscribe</div>
          <div className="item" style={{ lineHeight: '1.5' }}>
            Recive Updates, Hot Deals, Discouts Recive Updates, Hot Deals, Discouts Recive Updates, Hot Deals, Discouts
            Recive Updates, Hot Deals, Discouts Recive Updates, Hot Deals, Discouts Recive Updates
          </div>
        </div>
      </div>
    </div>
  );
}
