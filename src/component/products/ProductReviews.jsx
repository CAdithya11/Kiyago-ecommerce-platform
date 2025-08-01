import { useState } from 'react';
import { isEmpty } from 'lodash';
import { ArrowLeftToLine, ArrowRightToLine } from 'lucide-react';
import '../../css/home/ProductReviews.css';
import arrow_left from '../../assets/icons/arrow_left.ico';
import arrow_right from '../../assets/icons/arrow_right.ico';

export default function ProductReviews({ customerReviews }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === customerReviews.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? customerReviews.length - 1 : prevIndex - 1));
  };

  if (isEmpty(customerReviews)) {
    return <p>No data</p>;
  }

  const review = customerReviews[currentIndex];

  return (
    <div className="client-reviews">
      <p>Client Reviews</p>
      <div className="review">
        <div className="box left" onClick={handlePrevious}>
          <img src={arrow_left} className="w-6 h-6 cursor-pointer" />
        </div>

        <div className="box center" style={{ width: '80%' }}>
          <div className="custome-image">
            <img src={review.client_profile} alt={review.client_name} />
          </div>
          <div className="custome-review">{review.review}</div>
          <div className="custome-name">{review.client_name}</div>
          <div className="custome-position">{review.client_position}</div>
        </div>

        <div className="box right" onClick={handleNext}>
          <img src={arrow_right} className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
