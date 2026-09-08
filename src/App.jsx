import './styles/styles.css'
import './styles/header.css'
import './styles/footer.css'

function App() {

  return (
    <>
      <header>
        <img className="header__logo" src="/assets/logocolor.png" alt="Myesports logo"/>
        <nav className="header__menu">
            <input className="header__menu__searchbar" type="search" placeholder="Search..." alt="Search bar"/>
            <a className="header__menu__link" href="index.html" alt="Home page">Home</a>
            <a id="login-button" className="header__menu__link" alt="Login page">Log in</a>
        </nav>
      </header>
      <main>
        <section className="hero">
            <div className="hero-text">
                <h1 className="hero-text__title"><b>Your</b> esports. <b>Your</b> matches.</h1>
                <p className="hero-text__subtitle">Select your favorite games, championships, teams, and players to follow matches in real time.</p>
            </div>
        </section>
        <section className="home-card__container">
            <div className="home-card">
                <h3 className="home-card__options">Sport</h3>
                <input className="home-card__inputs" type="text" placeholder="Which game would you like to follow?"/>
                <h3 className="home-card__options">Championship</h3>
                <input className="home-card__inputs" type="text" placeholder="Select a championship (optional)"/>
                <h3 className="home-card__options">Team</h3>
                <input className="home-card__inputs" type="text" placeholder="Select a team (optional)"/>
                <h3 className="home-card__options">Player</h3>
                <input className="home-card__inputs" type="text" placeholder="Select a player (optional)"/>
                <a className="home-card__viewbutton" href="results.html" target="_blank">
                    <img className="home-card__viewbutton__eyeicon" src="/assets/view-icon.png"/>
                    View matches
                </a>
            </div>
        </section>
        <section className="hero-spacer"></section>
      </main>
    <footer>
        <img className="footer__logo" src="/assets/Logowhite.png" alt="Myesports logo"/>
        <div className="footer__links">
            <a className="footer__links__link" alt="About page">About</a>
            <a className="footer__links__link" alt="Contact page">Contact</a>
        </div>
    </footer>
  </>
  )
}

export default App
