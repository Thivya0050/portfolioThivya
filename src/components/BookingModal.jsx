import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import './BookingModal.css';

const EMAIL = 'thivyathrshn@gmail.com';
const WHATSAPP = '+601116402155';
const WHATSAPP_DISPLAY = '+60 11 1640 2155';

const TOPICS = ['Job Opportunity', 'Collaboration', 'General Enquiry'];

const TIME_SLOTS = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
];

function getNextWeekdays(count = 7) {
  const days = [];
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);

  while (days.length < count) {
    cursor.setDate(cursor.getDate() + 1);
    const day = cursor.getDay();
    if (day !== 0 && day !== 6) {
      days.push(new Date(cursor));
    }
  }

  return days;
}

function formatDatePill(date) {
  return date.toLocaleDateString('en-MY', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
}

function formatDateLong(date) {
  return date.toLocaleDateString('en-MY', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function BookingModal({ onClose }) {
  const weekdays = useMemo(() => getNextWeekdays(7), []);

  const [activeTab, setActiveTab] = useState('schedule');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [topic, setTopic] = useState(TOPICS[0]);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const [messageName, setMessageName] = useState('');
  const [messageEmail, setMessageEmail] = useState('');
  const [message, setMessage] = useState('');

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      e.preventDefault();
      onClose();
    }
  };

  const showCopiedToast = () => {
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 2000);
  };

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      showCopiedToast();
    } catch {
      // Clipboard can fail if denied.
    }
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !bookingName.trim() || !bookingEmail.trim()) {
      return;
    }

    const subject = encodeURIComponent(
      `Meeting Request — ${topic} — ${bookingName.trim()}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${bookingName.trim()}`,
        `Email: ${bookingEmail.trim()}`,
        `Date: ${formatDateLong(selectedDate)}`,
        `Time: ${selectedTime} (MYT)`,
        `Topic: ${topic}`,
      ].join('\n')
    );

    const mailtoLink = document.createElement('a');
    mailtoLink.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    mailtoLink.rel = 'noopener noreferrer';
    document.body.appendChild(mailtoLink);
    mailtoLink.click();
    document.body.removeChild(mailtoLink);
    setBookingSuccess(true);
  };

  const canConfirmBooking =
    selectedDate && selectedTime && bookingName.trim() && bookingEmail.trim();

  return createPortal(
    <div className="email-modal-overlay" onClick={handleOverlayClick} role="presentation">
      <div
        className="booking-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Book a call or send a message"
      >
        <button type="button" className="modal-close" onClick={handleClose} aria-label="Close">
          ✕
        </button>

        {bookingSuccess ? (
          <div className="booking-success">
            <div className="booking-success__check" aria-hidden="true">
              ✓
            </div>
            <h3>Booking request sent!</h3>
            <p>Thivya will confirm via email within 24 hours.</p>
            <button type="button" className="booking-confirm" onClick={handleClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <header className="booking-header">
              <h2>Let&apos;s Connect 👋</h2>
              <p>Book a call or send a message</p>
            </header>

            <div className="booking-tabs" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'schedule'}
                className={`booking-tab ${activeTab === 'schedule' ? 'booking-tab--active' : ''}`}
                onClick={() => setActiveTab('schedule')}
              >
                Schedule a Call
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'message'}
                className={`booking-tab ${activeTab === 'message' ? 'booking-tab--active' : ''}`}
                onClick={() => setActiveTab('message')}
              >
                Send a Message
              </button>
            </div>

            <div className="booking-panel">
              {activeTab === 'schedule' ? (
                <form className="booking-form booking-form--schedule" onSubmit={handleConfirmBooking}>
                  <p className="booking-tz">All times in MYT (UTC+8)</p>

                  <label className="booking-label">Select a date</label>
                  <div className="booking-pills">
                    {weekdays.map((date) => {
                      const key = date.toISOString();
                      const isSelected =
                        selectedDate?.toDateString() === date.toDateString();
                      return (
                        <button
                          key={key}
                          type="button"
                          className={`booking-pill ${isSelected ? 'booking-pill--selected' : ''}`}
                          onClick={() => {
                            setSelectedDate(date);
                            setSelectedTime('');
                          }}
                        >
                          {formatDatePill(date)}
                        </button>
                      );
                    })}
                  </div>

                  {selectedDate ? (
                    <>
                      <label className="booking-label">Select a time</label>
                      <div className="booking-pills">
                        {TIME_SLOTS.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            className={`booking-pill ${
                              selectedTime === slot ? 'booking-pill--selected' : ''
                            }`}
                            onClick={() => setSelectedTime(slot)}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </>
                  ) : null}

                  <label className="booking-label" htmlFor="booking-name">
                    Your name
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    className="booking-input"
                    value={bookingName}
                    onChange={(e) => setBookingName(e.target.value)}
                    placeholder="Full name"
                    required
                  />

                  <label className="booking-label" htmlFor="booking-email">
                    Email
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    className="booking-input"
                    value={bookingEmail}
                    onChange={(e) => setBookingEmail(e.target.value)}
                    placeholder="you@email.com"
                    required
                  />

                  <label className="booking-label" htmlFor="booking-topic">
                    Topic
                  </label>
                  <select
                    id="booking-topic"
                    className="booking-select"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  >
                    {TOPICS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>

                  <button
                    type="submit"
                    className="booking-confirm"
                    disabled={!canConfirmBooking}
                  >
                    Confirm Booking
                  </button>
                </form>
              ) : (
                <div className="booking-form booking-form--message">
                  <label className="booking-label" htmlFor="message-name">
                    Your name
                  </label>
                  <input
                    id="message-name"
                    type="text"
                    className="booking-input"
                    value={messageName}
                    onChange={(e) => setMessageName(e.target.value)}
                    placeholder="Full name"
                  />

                  <label className="booking-label" htmlFor="message-email">
                    Email
                  </label>
                  <input
                    id="message-email"
                    type="email"
                    className="booking-input"
                    value={messageEmail}
                    onChange={(e) => setMessageEmail(e.target.value)}
                    placeholder="you@email.com"
                  />

                  <label className="booking-label" htmlFor="message-body">
                    Message
                  </label>
                  <textarea
                    id="message-body"
                    className="booking-input booking-textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your opportunity or question..."
                    rows={4}
                  />

                  <div className="booking-copy-btns">
                    <button
                      type="button"
                      className="booking-confirm"
                      onClick={() => copyText(EMAIL)}
                    >
                      📋 Copy Email
                    </button>
                    <button
                      type="button"
                      className="booking-copy-secondary"
                      onClick={() => copyText(WHATSAPP)}
                    >
                      💬 Copy WhatsApp
                    </button>
                  </div>

                  <div className="booking-direct">
                    <p className="booking-direct__title">Or reach me directly:</p>
                    <button
                      type="button"
                      className="booking-direct__link"
                      onClick={() => copyText(EMAIL)}
                    >
                      {EMAIL}
                    </button>
                    <button
                      type="button"
                      className="booking-direct__link"
                      onClick={() => copyText(WHATSAPP)}
                    >
                      {WHATSAPP_DISPLAY}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {showToast ? (
          <div className="booking-toast" role="status">
            ✓ Copied to clipboard!
          </div>
        ) : null}
      </div>
    </div>,
    document.body
  );
}

export default BookingModal;
