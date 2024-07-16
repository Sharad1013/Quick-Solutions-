import { useAuth } from "../store/auth";

export const About = () => {
  const { user } = useAuth();
  return (
    <>
      <main className="main-about-us">
        <section className="section-hero">
          <div className="hero-image">
            <img
              src="/images/about/QSabout1.jpg"
              alt="A Civil Site"
              width={600}
              height={400}
            />
          </div>
        </section>

        <section className="about-content">
          <div>
            <br />
            <br />
            <p>
              Welcome,
              {user ? `${user.username} to my website` : `to my website`}
            </p>
            <div className="content">
              <br />
              <br />
              <p>
                Quick Solutions is a company that offers waterproofing solutions
                in Bangalore. Waterproofing solutions are ideally used while
                building basements, water tanks, terraces, swimming pools, etc.
                where there is a need to ensure that water does not seep
                through. The material used for waterproofing is not only ideal
                for residential projects, but industrial projects as well.
              </p>
            </div>
            <br />

            <div className="content">
              <h1>WHAT IS WATERPROOFING?</h1>
              <br />
              <p>
                Waterprooﬁng refers to the process of applying an elastomeric
                coating to a building or a structure to protect it from damage
                caused by water seepage. Water leakage through ceilings, growth
                of fungi through the walls due water seepage (black patches that
                appear on the walls during the monsoons), paint peeling off,
                water dripping are signs that your building needs waterprooﬁng.
                Waterprooﬁng protects your building from permanent damage due to
                water seepage.
              </p>
            </div>
            <br />
            <br />

            <div className="content">
              <h1>WHAT DOES THE WATERPROOFING PROCESS INVOLVE?</h1>
              <br />
              <p>
                There are many methods of waterprooﬁng in the market. Aquaseal
                does it a little differently—involving the application of an
                acrylic membrane in a three-stage process
                <br />
                <li>
                  Application of bonding substrate/coating (primer—1 coat)
                </li>
                <li>Placement of membrane skeleton (glass ﬁbre mesh)</li>
                <li>Application of acrylic membrane (acrylic—3 coats)</li>
              </p>
            </div>
            <br />
            <br />

            <div className="content">
              <h1>WHERE DO YOU APPLY WATERPROOFING?</h1>
              <br />
              <p>
                Waterprooﬁng solutions are ideally used while building/on
                foundations, water tanks, terraces, swimming pools, etc. where
                there is a need to ensure that water does not seep through into
                the building’s structure. The material used for waterprooﬁng is
                not only ideal for residential projects but industrial projects
                as well.
              </p>
            </div>
            <br />
            <br />

            <div className="content">
              <h1>HOW CAN YOU GET A QUOTATION?</h1>
              <br />
              <p>
                You can reach out to us via phone or email, whichever is more
                convenient to you. We will visit your site at an appointed time
                and assess the scope of work and revert to you within 3 days
                with a quotation that suits your requirements. Once approved, we
                begin with the project.
              </p>
            </div>
            <br />
            <br />

            <div className="content">
              <h1>WHAT DOES QUICK SOLUTIONS DO?</h1>
              <br />
              <p>
                Quick Solutions is a company that specialises in application of
                waterprooﬁng on building structures. The ﬁrst of its kind in
                India, Quick Solutions is known to employ the best of
                application practices in waterprooﬁng. The difference is the
                quality of application. Quick Solutions uses waterprooﬁng
                primer, a glass ﬁbre mesh for added strength, provides coavings
                by removing right angles between walls and ﬂoor. It’s reﬁned
                application processes and innovation in application practices
                through various problems solving methods make Quick Solutions an
                easy organisation to partner with.
              </p>
            </div>
            <br />
            <br />

            <div className="content">
              <h1>HOW LONG DOES A PROJECT TAKE FROM START TO COMPLETION?</h1>
              <br />
              <p>
                The duration of each project depends on volume. A project could
                take anywhere between 5 and 7 business days.
              </p>
            </div>
            <br />
            <br />

            {/* hero images */}
            {/* <div className="hero-image">
              <img
                src="/images/QShome3.png"
                alt="labours Working"
                width={600}
                height={400}
              />
            </div> */}
          </div>
        </section>
      </main>
    </>
  );
};
