import { isEmpty } from 'lodash';
import { ArrowLeftToLine, ArrowRightToLine } from 'lucide-react';
import '../../css/home/ProductReviews.css';

export default function ProductReviews({ customerReviews }) {
  console.log(customerReviews);

  return (
    <>
      <div className="client-reviews">
        <p>Client Reviews</p>
        <div className="review">
          <div className="box left">
            <ArrowLeftToLine className="w-4 h-4" />
          </div>
          {!isEmpty(customerReviews) ? (
            customerReviews.map((review) => {
              return <div className="box center" style={{ width: '80%' }}></div>;
            })
          ) : (
            <p>NO data</p>
          )}
          <div className="box column">
            <ArrowRightToLine className="w-4 h-4" />
          </div>
        </div>
      </div>
    </>
  );
}
