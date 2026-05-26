import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="hero">
        <nav>
          <h1>FizjoCare</h1>

          <div className="nav-links">
            <a href="#services">Usługi</a>
            <a href="#booking">Rezerwacja</a>
            <a href="#contact">Kontakt</a>
          </div>
        </nav>

        <div className="hero-content">
          <h2>Profesjonalna fizjoterapia</h2>
          <p>
            Umów wizytę online szybko i wygodnie.
          </p>

          <a href="#booking">
            <button>Zarezerwuj wizytę</button>
          </a>
        </div>
      </header>

      <section id="services" className="services">
        <h2>Nasze usługi</h2>

        <div className="cards">
          <div className="card">
            <h3>Terapia manualna</h3>
            <p>Pomoc w bólu kręgosłupa i stawów.</p>
          </div>

          <div className="card">
            <h3>Rehabilitacja sportowa</h3>
            <p>Powrót do sprawności po kontuzjach.</p>
          </div>

          <div className="card">
            <h3>Masaż leczniczy</h3>
            <p>Redukcja napięcia mięśniowego.</p>
          </div>
        </div>
      </section>

      <section id="booking" className="booking">
        <h2>Umów wizytę</h2>

        <form className="booking-form">
          <input type="text" placeholder="Imię i nazwisko" />
          <input type="email" placeholder="Email" />
          <input type="date" />
          
          <select>
            <option>Wybierz usługę</option>
            <option>Terapia manualna</option>
            <option>Rehabilitacja sportowa</option>
            <option>Masaż leczniczy</option>
          </select>

          <textarea placeholder="Dodatkowe informacje"></textarea>

          <button type="submit">Zarezerwuj</button>
        </form>
      </section>
      <section className="testimonials">
  <h2>Opinie pacjentów</h2>

  <div className="testimonial-boxes">
    <div className="testimonial">
      <p>
        „Świetna atmosfera i pełen profesjonalizm.
        Ból pleców zniknął po kilku wizytach.”
      </p>
      <h4>— Anna K.</h4>
    </div>

    <div className="testimonial">
      <p>
        „Najlepszy fizjoterapeuta w Warszawie.
        Szybka diagnoza i skuteczna terapia.”
      </p>
      <h4>— Michał P.</h4>
    </div>

    <div className="testimonial">
      <p>
        „Nowoczesne podejście i bardzo wygodna
        rezerwacja online.”
      </p>
      <h4>— Karolina W.</h4>
          </div>
        </div>
      </section>

      <footer id="contact">
        <h2>Kontakt</h2>
        <p>📍 Warszawa</p>
        <p>📞 +48 123 456 789</p>
        <p>✉️ kontakt@fizjocare.pl</p>
      </footer>
    </div>
  );
}

export default App;