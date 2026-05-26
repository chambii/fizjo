import { Link } from "react-router-dom";

function Booking() {
  return (
    <div className="booking-page">

      <Link to="/" className="back-button">
        ←
      </Link>

      <div className="booking-container">
        <h1>Umów wizytę</h1>

        <form className="booking-form">
          <input type="text" placeholder="Imię i nazwisko" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Telefon" />
          <input type="date" />

          <select>
            <option>Wybierz usługę</option>
            <option>Terapia manualna</option>
            <option>Rehabilitacja sportowa</option>
            <option>Masaż leczniczy</option>
          </select>

          <textarea placeholder="Dodatkowe informacje"></textarea>

          <button type="submit">
            Potwierdź rezerwację
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;