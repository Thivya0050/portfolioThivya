import { useState } from 'react';
import './FloatingButton.css';
import BookingModal from './BookingModal';

function FloatingButton() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="floating-btn"
        title="Email Thivya"
        onClick={(e) => {
          e.stopPropagation();
          setIsBookingOpen(true);
        }}
      >
        <span className="floating-icon">✉</span>
        <span className="floating-label">Hire me</span>
      </button>
      {isBookingOpen ? <BookingModal onClose={() => setIsBookingOpen(false)} /> : null}
    </>
  );
}

export default FloatingButton;
