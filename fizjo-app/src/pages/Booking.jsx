import { Link } from "react-router-dom";
import { useState } from "react";

function Booking() {
  const [message, setMessage] = useState("");

  const randomHours = [
    "08:00",
    "09:30",
    "11:00",
    "12:30",
    "14:00",
    "15:30",
    "17:00",
    "18:30",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = e.target.date.value;

    const randomTime =
      randomHours[
        Math.floor(Math.random() * randomHours.length)
      ];

    setMessage(
      `✅ Rezerwacja udana!
Termin: ${date} godz. ${randomTime}`
    );

    e.target.reset();
  };

  return (
    <div className="booking-page">
      <Link to="/" className="back-button">
        ←
      </Link>

      <div className="booking-container">
        <h1>Umów wizytę</h1>

        <form
          className="booking-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Imię i nazwisko"
            required
          />

          <input
            type="email"
            placeholder="Email"
            required
          />

          <input
            type="tel"
            placeholder="Telefon"
            required
          />

          <input
            type="date"
            name="date"
            required
          />

<select required>
  <option value="">Wybierz usługę</option>

  <option>Terapia manualna</option>
  <option>Rehabilitacja</option>
  <option>Masaż</option>
  <option>Trener personalny</option>
</select>

          <textarea placeholder="Dodatkowe informacje"></textarea>

          <button type="submit">
            Potwierdź rezerwację
          </button>
        </form>

        {message && (
          <div className="success-message">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default Booking;