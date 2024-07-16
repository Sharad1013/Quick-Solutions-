import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Defend against the downpour with waterproofing options</p>
              <h1 className="home-head">Quick Solutions</h1>
              <p>
                Don't let leaks turn your peace of mind into a trickle. Here at
                Quick Solutions, we are your trusted waterproofing specialists.
                We offer a complete range of solutions to shield your property
                from water damage, from basements and roofs to bathrooms and
                pools. Our expert team uses top-of-the-line materials and
                techniques to ensure a lasting, leak-free barrier. Contact us
                for a free quote and experience the peace of mind that comes
                with a watertight home.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect with us</button>
                </a>
                <a href="/service">
                  <button className="btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>

            {/* hero images */}

            <div className="hero-image">
              <img
                src="/images/home/QShomes3.png"
                alt="labours Working"
                width={600}
                height={400}
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section */}
      <Analytics />

      {/* 3rd section */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/home/QShome4.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>WHAT WE DO</h1>
            <p>
              we specialize in comprehensive waterproofing solutions to shield
              your residential, commercial, and industrial structures from water
              damage. Our expertise covers a wide range of areas as Terrace &
              Roof Waterproofing, Basement & Foundation Waterproofing, Wall &
              Ceiling Waterproofing,Concrete Wall & Floor Waterproofing,Crack
              Filling & more.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/gallery">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* {4th section} */}
      <section className="i2i-section-hero">
        <h1>Inspection to Installation</h1>
        <hr></hr>
        <div className="container grid grid-three-cols parentBox">
          <div className="hero-content contentBox">
            <h2>1. Inspection</h2>
            <p className="box">
              Our engineers and contractors initially inspect your site at no
              extra cost. They identify the areas to be treated and then suggest
              a requirement to solve the leaks which are visible. For every
              problem identified, we have different solutions accommodating
              different kinds of strategies.
            </p>
          </div>
          <div className="hero-content contentBox">
            <h2>2. Restoration</h2>
            <p className="box">
              Our trained and qualified applicators are very capable of
              completing the most challenging tasks like treating terraces,
              swimming pools, retaining walls etc.. We provide you solutions for
              both the new and old construction on different dimensions
            </p>
          </div>
          <div className="hero-content contentBox">
            <h2>3. Support</h2>
            <p className="box">
              We are always there to help you achieve the most economical and
              functional waterproofing and repair solutions for your needs. We
              also help by providing technical support and overseeing your first
              time product usage.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
