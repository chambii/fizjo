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
      <section className="stats">
  <div className="stat">
    <h3>1200+</h3>
    <p>Zadowolonych pacjentów</p>
  </div>

  <div className="stat">
    <h3>8 lat</h3>
    <p>Doświadczenia</p>
  </div>

  <div className="stat">
    <h3>98%</h3>
    <p>Skuteczności terapii</p>
  </div>
</section>

<section className="why-us">
    
  <div className="why-left">
    <h2>Dlaczego FizjoCare?</h2>

    <p>
      Łączymy nowoczesną fizjoterapię z indywidualnym
      podejściem do każdego pacjenta.
    </p>

    <div className="why-items">
      <div className="why-item">
        ✅ Indywidualny plan leczenia
      </div>

      <div className="why-item">
        ✅ Nowoczesny sprzęt
      </div>

      <div className="why-item">
        ✅ Szybkie terminy wizyt
      </div>
      <div className="why-item">✅ Treningi personalne na siłowni</div>
    </div>
  </div>

  <div className="why-right">
    <img
      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
      alt=""
    />
  </div>
</section>
      <section id="services" className="services">
        <h2>Nasze usługi</h2>

        <div className="cards">
  <div className="card">
    <h3>🦴 Terapia manualna</h3>
    <p>Leczenie bólu kręgosłupa i stawów.</p>
  </div>

  <div className="card">
    <h3>🏃 Rehabilitacja sportowa</h3>
    <p>Powrót do pełnej sprawności po kontuzjach.</p>
  </div>

  <div className="card">
    <h3>💆 Masaż leczniczy</h3>
    <p>Redukcja napięcia mięśniowego.</p>
  </div>

  {/* NOWA USŁUGA */}
  <div className="card">
    <h3>🏋️ Trener personalny</h3>
    <p>
      Treningi na siłowni, plan treningowy i
      budowa sylwetki dopasowana do Ciebie.
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
      <section className="cta">
  <h2>Zadbaj o swoje zdrowie już dziś</h2>

  <p>
    Umów pierwszą wizytę online w mniej niż minutę.
  </p>

  <Link to="/rezerwacja">
    <button>Zarezerwuj termin</button>
  </Link>
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