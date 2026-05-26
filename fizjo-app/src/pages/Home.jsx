import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="hero">
        <nav>
          <h1>FizjoCare</h1>

          <div className="nav-links">
            <a href="#services">Usługi</a>
            <a href="#opinie">Opinie</a>
          </div>
        </nav>

        <div className="hero-center">
          <h2>
            Wróć do sprawności
            <br />
            bez bólu
          </h2>

          <p>
            Profesjonalna fizjoterapia i szybkie
            umawianie wizyt online.
          </p>

          <Link to="/rezerwacja">
            <button>Zapisz się</button>
          </Link>
        </div>
      </div>

      {/* SERVICES */}

      <section id="services" className="services">
        <h2>Nasze usługi</h2>

        <div className="cards">
          <div className="card">
            <h3>🦴 Terapia manualna</h3>
            <p>
              Leczenie bólu kręgosłupa, karku oraz
              problemów ze stawami.
            </p>
          </div>

          <div className="card">
            <h3>🏃 Rehabilitacja sportowa</h3>
            <p>
              Powrót do sprawności po kontuzjach
              i urazach sportowych.
            </p>
          </div>

          <div className="card">
            <h3>💆 Masaż leczniczy</h3>
            <p>
              Rozluźnienie mięśni oraz redukcja
              napięcia i stresu.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section id="opinie" className="testimonials">
        <h2>Opinie pacjentów</h2>

        <div className="testimonial-boxes">
          <div className="testimonial">
            <p>
              „Mega profesjonalne podejście.
              Już po 2 wizytach czułem ogromną poprawę.”
            </p>

            <h4>— Michał K.</h4>
          </div>

          <div className="testimonial">
            <p>
              „Najlepsza fizjoterapia w Warszawie.
              Świetna atmosfera i nowoczesne podejście.”
            </p>

            <h4>— Anna W.</h4>
          </div>

          <div className="testimonial">
            <p>
              „Bardzo wygodny system rezerwacji
              i szybkie terminy.”
            </p>

            <h4>— Karolina P.</h4>
          </div>
        </div>
      </section>

      <footer>
        <h2>Kontakt</h2>

        <p>📍 Warszawa</p>
        <p>📞 +48 123 456 789</p>
        <p>✉ kontakt@fizjocare.pl</p>
      </footer>
    </>
  );
}

export default Home;