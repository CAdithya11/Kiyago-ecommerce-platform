import { isEmpty } from 'lodash';
import '../../css/home/Product.css';
import { Heart, Star, StarHalf } from 'lucide-react';

export default function Product({ productsData }) {
  console.log(productsData);
  return (
    <>
      <div className="product-box">
        {!isEmpty(productsData) ? (
          productsData.map((product, index) => {
            return (
              <div className="product" key={index}>
                <img src={product.url} />
                {product.tag != '' ? <p className="tag">{product.tag}</p> : null}
                <div className="text-box">
                  <div className="left">
                    <p className="text">{product.text}</p>
                    <p className="price">LKR. {product.price}</p>
                    <div className="star-rating">
                      <div className="stars">
                        {Array.from({ length: 5 }, () => (
                          <Star className=" star w-4 h-4" fill="white" strokeWidth={0} />
                        ))}
                      </div>
                      <div className="stars rating">
                        <Star className=" star w-4 h-4" fill="#fcec04" strokeWidth={0} />
                        <Star className=" star w-4 h-4" fill="#fcec04" strokeWidth={0} />
                        <StarHalf className=" star w-4 h-4" fill="#fcec04" strokeWidth={0} />
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <Heart className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No Products Avaialble</p>
        )}
      </div>
    </>
  );
}
