import { Link } from "react-router-dom";
import { useState } from "react";

function Booking() {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const bookingData = {
      name: form[0].value,
      email: form[1].value,
      phone: form[2].value,
      date: form[3].value,
      service: form[4].value,
      message: form[5].value,
    };

    try {
      const response = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (data.success) {
        setMessage(
          `✅ Rezerwacja zapisana!`
        );
        form.reset();
      } else {
        setMessage("❌ Błąd zapisu");
      }
    } catch (error) {
      console.log(error);
      setMessage("❌ Błąd serwera");
    }
  };

  return (
    <div className="booking-page">
      <Link to="/" className="back-button">
        ←
      </Link>

      <div className="booking-container">
        <h1>Umów wizytę</h1>

        <form className="booking-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Imię i nazwisko" required />

          <input type="email" placeholder="Email" required />

          <input type="tel" placeholder="Telefon" required />

          <input type="date" required />

          <select required>
            <option value="">Wybierz usługę</option>
            <option>Terapia manualna</option>
            <option>Rehabilitacja</option>
            <option>Masaż</option>
            <option>Trener personalny</option>
          </select>

          <textarea placeholder="Dodatkowe informacje"></textarea>

          <button type="submit">Potwierdź rezerwację</button>
        </form>

        {message && <div className="success-message">{message}</div>}
      </div>
    </div>
  );
}

export default Booking;