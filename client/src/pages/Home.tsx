/**
 * Sunlit Sanctuary design system: warm editorial healthcare, local Adajan specificity,
 * calm pathways, Saffron Sunline accents, and offset gallery-walk composition.
 */
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Compass,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";
import { clinicProfile } from "@/config/clinic";
import { clinicDetails } from "@/config/client-details";

function Mark({ className = "" }: { className?: string }) {
  return (
    <img
      src={clinicProfile.assets.logo}
      alt={`${clinicProfile.fullName} abstract smile mark`}
      className={className}
    />
  );
}

function Sunline({ className = "" }: { className?: string }) {
  return <span className={`sunline ${className}`} aria-hidden="true" />;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openQuestion, setOpenQuestion] = useState(0);

  useEffect(() => {
    document.title = clinicProfile.pageTitle;
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f6f1e8] text-[#183d35]">
      <div className="location-ribbon">
        <span>{clinicProfile.fullName.toUpperCase()}</span>
        <span className="hidden sm:inline">—</span>
        <span>{clinicProfile.locationRibbon.toUpperCase()}</span>
      </div>

      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label={`${clinicProfile.fullName} home`}>
          <Mark className="h-14 w-14 object-contain" />
          <span>
            <strong>{clinicProfile.shortName}</strong>
            <em>{clinicProfile.descriptor}</em>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#first-visit">First visit</a>
          <a href="#care">Care options</a>
          <a href="#location">Find us</a>
        </nav>

        <div className="header-actions">
          <a className="phone-link" href={clinicProfile.phoneHref}>
            <Phone size={15} strokeWidth={2.2} />
            <span>{clinicProfile.phoneNumber}</span>
          </a>
          <a className="btn btn-primary header-cta" href={clinicProfile.phoneHref}>
            <span>Call the clinic</span>
            <ArrowUpRight size={16} />
          </a>
          <button
            className="menu-button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <a href="#first-visit" onClick={closeMenu}>First visit</a>
            <a href="#care" onClick={closeMenu}>Care options</a>
            <a href="#location" onClick={closeMenu}>Find us</a>
            <a className="mobile-call" href={clinicProfile.phoneHref} onClick={closeMenu}>
              <Phone size={16} /> Call {clinicProfile.phoneNumber}
            </a>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-heading">
          <div className="hero-orbit hero-orbit-left" aria-hidden="true" />
          <div className="hero-copy">
            <div className="hero-signature">
              <Mark className="h-11 w-11 object-contain" />
              <p className="eyebrow"><Sunline /> {clinicProfile.locationEyebrow.toUpperCase()}</p>
            </div>
            <p className="hero-clinic-name">{clinicProfile.fullName}</p>
            <h1 id="hero-heading">{clinicProfile.heroHeading}</h1>
            <p className="hero-intro">
              {clinicProfile.heroIntro}
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={clinicProfile.phoneHref}>
                <Phone size={17} /> Call to plan a visit
              </a>
              <a className="text-action" href="#location">
                Find the clinic <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-detail">
              <Compass size={18} />
              <span>{clinicProfile.heroDetail}</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src={clinicProfile.assets.hero}
                alt="A warm, sunlit dental consultation room"
              />
            </div>
            <div className="hero-note">
              <span className="note-dot" />
              <span>{clinicProfile.heroNote}</span>
            </div>
          </div>
        </section>

        <section id="first-visit" className="first-visit-section" aria-labelledby="first-visit-heading">
          <div className="first-visit-intro">
            <div className="intro-marker">{clinicProfile.monogram}</div>
            <div>
              <p className="eyebrow"><Sunline /> NEW PATIENTS · {clinicDetails.localLandmark.toUpperCase()}</p>
              <h2 id="first-visit-heading">{clinicDetails.firstVisitHeading}</h2>
              <p>{clinicDetails.firstVisitCopy}</p>
            </div>
          </div>
          <div className="first-visit-steps">
            {clinicDetails.firstVisitSteps.map((item) => (
              <div className="first-visit-step" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
          <a href={clinicProfile.phoneHref} className="round-arrow" aria-label={`Call ${clinicProfile.fullName}`}>
            <Phone size={21} />
          </a>
        </section>

        <section id="care" className="care-section" aria-labelledby="care-heading">
          <div className="section-header split-heading">
            <div>
              <p className="eyebrow"><Sunline /> WHAT BRINGS YOU IN?</p>
              <h2 id="care-heading">A path for the moment you are in.</h2>
            </div>
            <p>
              A clear first conversation makes everything that follows feel more manageable. Choose the place that feels closest to your needs today.
            </p>
          </div>

          <div className="care-list">
            {clinicProfile.carePaths.map(({ number, label, title, text, action, icon: Icon, tone }) => (
              <article className={`care-card care-card-${tone}`} key={number}>
                <div className="care-number">{number}</div>
                <div className="care-icon"><Icon size={27} strokeWidth={1.5} /></div>
                <p className="care-label">{label}</p>
                <h3>{title}</h3>
                <p className="care-copy">{text}</p>
                <a href={clinicProfile.phoneHref} className="card-action">
                  {action} <ChevronRight size={18} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="visit" className="visit-section" aria-labelledby="visit-heading">
          <div className="visit-copy">
            <p className="eyebrow"><Sunline /> YOUR FIRST STEP</p>
            <h2 id="visit-heading">{clinicProfile.visitHeading}</h2>
            <p>
              {clinicProfile.visitCopy}
            </p>
            <div className="visit-links">
              <a className="btn btn-light" href={clinicProfile.phoneHref}>
                <CalendarDays size={17} /> Speak with the clinic
              </a>
              <a className="visit-phone" href={clinicProfile.phoneHref}>{clinicProfile.phoneNumber}</a>
            </div>
          </div>
          <div className="visit-photo-wrap">
            <div className="vertical-label">EASE • CLARITY • CARE</div>
            <img
              src={clinicProfile.assets.visit}
              alt="A relaxed patient in a welcoming dental consultation setting"
            />
            <div className="photo-affirmation">
              <ShieldCheck size={20} />
              <span>{clinicProfile.visitAffirmation}</span>
            </div>
          </div>
        </section>

        <section className="details-section" aria-label="Care experience">
          <div className="detail-image-column">
            <img
              src={clinicProfile.assets.detail}
              alt="A tranquil, sunlit welcome setting"
            />
          </div>
          <div className="detail-content">
            <p className="eyebrow"><Sunline /> MADE FOR A MORE COMFORTABLE DAY</p>
            <h2>A patient experience with room to breathe.</h2>
            <div className="experience-grid">
              <div>
                <span className="experience-index">A</span>
                <h3>Start with the question</h3>
                <p>Bring the concern you have. A meaningful appointment begins there.</p>
              </div>
              <div>
                <span className="experience-index">B</span>
                <h3>Know where you are going</h3>
                <p>Clear directions and a visible call path make arriving simpler.</p>
              </div>
              <div>
                <span className="experience-index">C</span>
                <h3>Choose the next right step</h3>
                <p>Dental decisions are easier when the conversation feels considered.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section" aria-labelledby="faq-heading">
          <div className="faq-intro">
            <p className="eyebrow"><Sunline /> PRACTICAL DETAILS</p>
            <h2 id="faq-heading">A few things worth knowing.</h2>
            <p>Everything a prospective patient needs to feel oriented—without the clutter.</p>
          </div>
          <div className="faq-list">
            {clinicProfile.questions.map((item, index) => {
              const isOpen = openQuestion === index;
              return (
                <div className={`faq-item ${isOpen ? "open" : ""}`} key={item.question}>
                  <button onClick={() => setOpenQuestion(isOpen ? -1 : index)} aria-expanded={isOpen}>
                    <span>{item.question}</span>
                    <ChevronDown size={20} />
                  </button>
                  {isOpen && <p>{item.answer}</p>}
                </div>
              );
            })}
          </div>
        </section>

        <section id="location" className="location-section" aria-labelledby="location-heading">
          <div className="location-card">
            <div className="location-topline"><MapPin size={17} /> {clinicProfile.locationShort.toUpperCase()}</div>
            <h2 id="location-heading">Close to the roads you already know.</h2>
            <p>
              {clinicProfile.addressLines.map((line) => (
                <span key={line}>{line}<br /></span>
              ))}
            </p>
            <div className="location-actions">
              <a className="btn btn-saffron" href={clinicProfile.mapHref} target="_blank" rel="noreferrer">
                <MapPin size={17} /> Get directions
              </a>
              <a className="text-action light-text" href={clinicProfile.phoneHref}>
                <Phone size={15} /> {clinicProfile.phoneNumber}
              </a>
            </div>
          </div>
          <div className="location-art" aria-hidden="true">
            <div className="map-line map-line-one" />
            <div className="map-line map-line-two" />
            <div className="map-line map-line-three" />
            <div className="map-pin"><MapPin size={25} /></div>
            <span className="map-label">{clinicProfile.mapLabel.toUpperCase()}</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <Mark className="h-10 w-10 object-contain" />
          <div>
            <strong>{clinicProfile.shortName} Dental</strong>
            <span>{clinicProfile.descriptor}</span>
          </div>
        </div>
        <p>{clinicProfile.footerLine}</p>
        <div className="footer-links">
          <a href={clinicProfile.phoneHref}>Call the clinic</a>
          <a href={clinicProfile.mapHref} target="_blank" rel="noreferrer">Directions</a>
        </div>
      </footer>
    </div>
  );
}
