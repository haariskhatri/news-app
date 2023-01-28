//images import
import logo from "./images/logo.svg";
import news1 from "./images/news1.png";
import news2 from "./images/news2.png";
import news3 from "./images/news3.png";
import news4 from "./images/news4.png";

import branding from "./images/branding.svg";
import footer from "./images/footer.svg";

//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import "./App.css";
import React from "react";
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function App() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src={logo}></img>
        </div>

        <div className="mainmenu">
          <ul className="list-unstyled">
            <li>
              <a href="/" className="active">
                {" "}
                INDIA
              </a>
            </li>

            <li>
              <a href="/"> GLOBAL</a>
            </li>

            <li>
              <a href="/"> TECH</a>
            </li>

            <li>
              <a href="/"> SPORTS</a>
            </li>
          </ul>
        </div>

        <div className="menu-right">
          <a href="https://anonymous-auth.auth.ap-south-1.amazoncognito.com/signup?client_id=7cqsa05unkn0c8hh28emu7cknc&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Flogged_in.html">Sign Up</a>
          <a href="https://anonymous-auth.auth.ap-south-1.amazoncognito.com/login?client_id=7cqsa05unkn0c8hh28emu7cknc&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Flogged_in.html" className="active">
            Sign In
          </a>
        </div>
      </header>

      <section className="news-section">
        <div className="container">
          <h5 className="text-center">Up2Date Board</h5>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="news-swiper-outer">
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  loop
                  spaceBetween={90}
                  slidesPerView={1}
                  className="news-swiper"
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                  }}
                >
                  <SwiperSlide>
                    <div className="news-card">
                      <div className="news-content">
                        <h2>
                          {" "}
                          ChatGPT has Google 'worried' about its Search business
                          and more, here's why{" "}
                        </h2>
                        <p>
                          Google has the technology it needs to fight ChatGPT.
                          But why is it not implementing it? Well, there are
                          some underlying issues, mainly with how the machine
                          learning model works and Google’s business model,
                          reveals a Google executive and voice memos, as heard
                          by the New York Times.
                        </p>
                      </div>

                      <div className="news-image">
                        <img src={news1} className="img-fluid"></img>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="news-card">
                      <div className="news-content">
                        <h2>
                          PhonePe is no longer Flipkart company: Why the
                          separation and what it means
                        </h2>
                        <p>
                          Flipkart and PhonePe are separating their businesses
                          and will operate independently. PhonePe was acquired
                          by Flipkart in 2016 and both companies are owned by
                          Walmart. The separation will allow both companies to
                          pursue their own growth strategies.
                        </p>
                      </div>

                      <div className="news-image">
                        <img src={news2} className="img-fluid"></img>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="news-card">
                      <div className="news-content">
                        <h2>
                          North Korea-backed hackers have stolen $1.2 billion of
                          virtual goods: Report
                        </h2>
                        <p>
                          South Korea’s spy agency and cybersecurity experts
                          have recently accused cybercriminals working for the
                          North Korean government of stealing virtual assets
                          worth 1.5 trillion won ($1.2 billion) in the past
                          three years.
                        </p>
                      </div>

                      <div className="news-image">
                        <img src={news3} className="img-fluid"></img>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="news-card">
                      <div className="news-content">
                        <h2>
                          Samsung rolls out One UI 5 update to these Galaxy M, F
                          series smartphones
                        </h2>
                        <p>
                          The One UI 5.0 update is currently available for the
                          Galaxy M53, Galaxy M52 5G, Galaxy M33, Galaxy M32 5G,
                          Galaxy M32, and Galaxy M13 5G, and it will soon be
                          made available for additional smartphones from the
                          Galaxy M and Galaxy F series.
                        </p>
                      </div>

                      <div className="news-image">
                        <img src={news4} className="img-fluid"></img>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div ref={navigationPrevRef} className="news-swiper-prev">
                  &lt;
                </div>
                <div ref={navigationNextRef} className="news-swiper-next">
                  &gt;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row justify-content-between">
                <div className="col-md-4">
                  <div className="feature-card">
                    <i className="fa fa-check-circle-o "></i>
                    <h5>Verified</h5>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="feature-card">
                    <i className="fa fa-file-text-o "></i>
                    <h5>Short</h5>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="feature-card">
                    <i className="fa fa-users "></i>
                    <h5>User Friendly</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="branding text-center">
        <div className="container">
          <img src={branding}></img>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src={footer}></img>
              <p>Stay Informed , Stay Up2Date</p>
              <p className="address">
                4rd Floor <br />
                Ganesh Meridian <br />
                Ahmedabad <br />
              </p>
            </div>

            <div className="col-md-7">
              <div className="quote">
                “ What you do makes a difference, and you have to decide what
                kind of difference you want to make." - Jane Goodall."
              </div>
            </div>

            <div className="col-md-2">
              <h5 className="about-us">About Us</h5>
              <div className="footer-about">
                <ul className="list-unstyled">
                  <li>
                    <a href="/">About</a>
                  </li>
                  <li>
                    <a href="/">Donate</a>
                  </li>
                  <li>
                    <a href="/">Email</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright text-center">Copyright &copy; 2023</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
