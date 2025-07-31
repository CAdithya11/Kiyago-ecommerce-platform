import { isEmpty } from 'lodash';
import '../../css/home/Product.css';
import { Heart } from 'lucide-react';

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
