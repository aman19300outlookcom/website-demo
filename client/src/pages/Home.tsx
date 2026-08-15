/**
 * Sunlit Sanctuary design system: warm editorial healthcare, local Adajan specificity,
 * calm pathways, Saffron Sunline accents, and offset gallery-walk composition.
 */
import { useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Compass,
  HeartPulse,
  MapPin,
  Menu,
  Phone,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
} from "lucide-react";

const phoneNumber = "+91 63526 86155";
const phoneHref = "tel:+916352686155";
const mapHref =
  "https://www.google.com/maps/place/Riddhi+Dental+Clinic+%26+Implant+Center/@21.2011161,72.7894545,17z";

const carePaths = [
  {
    number: "01",
    label: "THE EVERYDAY VISIT",
    title: "The care that keeps life moving.",
    text: "For the questions, check-ins, and everyday dental needs that deserve a calm, considered conversation.",
    action: "Plan a visit",
    icon: HeartPulse,
    tone: "sage",
  },
  {
    number: "02",
    label: "THE SMILE CONVERSATION",
    title: "A more confident way to talk about your smile.",
    text: "Start with what you notice, what you hope for, and a clear discussion about the next appropriate step.",
    action: "Talk through options",
    icon: Sparkles,
    tone: "clay",
  },
  {
    number: "03",
    label: "RESTORATIVE & IMPLANT CARE",
    title: "When the next step feels bigger.",
    text: "Get guidance for restorative needs and implant-related conversations in a setting designed to feel unhurried.",
    action: "Ask about a consult",
    icon: ScanLine,
    tone: "forest",
  },
];

const questions = [
  {
    question: "Where is Riddhi Dental Clinic & Implant Center located?",
    answer:
      "The clinic is located at Rutvan Apartment on Gangeshwar Mahadev Temple Road, opposite Axis Bank, Adajan Gam, Surat 395009.",
  },
  {
    question: "How can I begin an appointment conversation?",
    answer:
      "Call the clinic directly at +91 63526 86155. The booking experience can be connected to the practice’s preferred system before launch.",
  },
  {
    question: "How can I get the details relevant to my visit?",
    answer:
      "Call the clinic directly at +91 63526 86155 to discuss your question and confirm the details relevant to your appointment.",
  },
];

function Mark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/clinic-assets/riddhi-logo-mark.png"
      alt="Riddhi Dental Clinic abstract smile mark"
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

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f6f1e8] text-[#183d35]">
      <div className="location-ribbon">
        <span>RIDDHI DENTAL CLINIC & IMPLANT CENTER</span>
        <span className="hidden sm:inline">—</span>
        <span>ADAJAN, SURAT</span>
      </div>

      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Riddhi Dental Clinic home">
          <Mark className="h-14 w-14 object-contain" />
          <span>
            <strong>Riddhi</strong>
            <em>Dental Clinic & Implant Center</em>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#care">Care paths</a>
          <a href="#visit">Your visit</a>
          <a href="#location">Location</a>
        </nav>

        <div className="header-actions">
          <a className="phone-link" href={phoneHref}>
            <Phone size={15} strokeWidth={2.2} />
            <span>{phoneNumber}</span>
          </a>
          <a className="btn btn-primary header-cta" href={phoneHref}>
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
            <a href="#care" onClick={closeMenu}>Care paths</a>
            <a href="#visit" onClick={closeMenu}>Your visit</a>
            <a href="#location" onClick={closeMenu}>Location</a>
            <a className="mobile-call" href={phoneHref} onClick={closeMenu}>
              <Phone size={16} /> Call {phoneNumber}
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
              <p className="eyebrow"><Sunline /> ADAJAN, SURAT • OPP. AXIS BANK</p>
            </div>
            <h1 id="hero-heading">Care that begins with a calmer conversation.</h1>
            <p className="hero-intro">
              A more reassuring way to arrive, ask questions, and take the next step for your dental health.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={phoneHref}>
                <Phone size={17} /> Call to plan a visit
              </a>
              <a className="text-action" href="#location">
                Find the clinic <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-detail">
              <Compass size={18} />
              <span>Opposite Axis Bank, near Gangeshwar Mahadev Temple Road</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src="/clinic-assets/riddhi-hero-sunlit-clinic.webp"
                alt="A warm, sunlit dental consultation room"
              />
            </div>
            <div className="hero-note">
              <span className="note-dot" />
              <span>Thoughtful dental care, close to home.</span>
            </div>
          </div>
        </section>

        <section className="intro-band" aria-label="Clinic introduction">
          <div className="intro-marker">RD</div>
          <div>
            <p className="eyebrow"><Sunline /> A GENTLER START</p>
            <p className="intro-statement">
              The best dental visit is not only about the appointment itself. It is about feeling heard before you ever sit in the chair.
            </p>
          </div>
          <a href="#care" className="round-arrow" aria-label="Explore care paths">
            <ArrowUpRight size={23} />
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
            {carePaths.map(({ number, label, title, text, action, icon: Icon, tone }) => (
              <article className={`care-card care-card-${tone}`} key={number}>
                <div className="care-number">{number}</div>
                <div className="care-icon"><Icon size={27} strokeWidth={1.5} /></div>
                <p className="care-label">{label}</p>
                <h3>{title}</h3>
                <p className="care-copy">{text}</p>
                <a href={phoneHref} className="card-action">
                  {action} <ChevronRight size={18} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="visit" className="visit-section" aria-labelledby="visit-heading">
          <div className="visit-copy">
            <p className="eyebrow"><Sunline /> YOUR FIRST STEP</p>
            <h2 id="visit-heading">A visit should feel clear long before you arrive.</h2>
            <p>
              Call the clinic to ask your questions and arrange the right time to come in. Your first connection should feel direct, simple, and personal.
            </p>
            <div className="visit-links">
              <a className="btn btn-light" href={phoneHref}>
                <CalendarDays size={17} /> Speak with the clinic
              </a>
              <a className="visit-phone" href={phoneHref}>{phoneNumber}</a>
            </div>
          </div>
          <div className="visit-photo-wrap">
            <div className="vertical-label">EASE • CLARITY • CARE</div>
            <img
              src="/clinic-assets/riddhi-treatment-smile.webp"
              alt="A relaxed patient in a welcoming dental consultation setting"
            />
            <div className="photo-affirmation">
              <ShieldCheck size={20} />
              <span>Ask before you decide.</span>
            </div>
          </div>
        </section>

        <section className="details-section" aria-label="Care experience">
          <div className="detail-image-column">
            <img
              src="/clinic-assets/riddhi-care-detail.webp"
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
            {questions.map((item, index) => {
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
            <div className="location-topline"><MapPin size={17} /> FIND US IN ADAJAN</div>
            <h2 id="location-heading">Close to the roads you already know.</h2>
            <p>
              Rutvan Apartment, Gangeshwar Mahadev Temple Rd,<br />
              Opp. Axis Bank, Adajan Gam, Adajan,<br />
              Surat, Gujarat 395009.
            </p>
            <div className="location-actions">
              <a className="btn btn-saffron" href={mapHref} target="_blank" rel="noreferrer">
                <MapPin size={17} /> Get directions
              </a>
              <a className="text-action light-text" href={phoneHref}>
                <Phone size={15} /> {phoneNumber}
              </a>
            </div>
          </div>
          <div className="location-art" aria-hidden="true">
            <div className="map-line map-line-one" />
            <div className="map-line map-line-two" />
            <div className="map-line map-line-three" />
            <div className="map-pin"><MapPin size={25} /></div>
            <span className="map-label">ADAJAN</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <Mark className="h-10 w-10 object-contain" />
          <div>
            <strong>Riddhi Dental</strong>
            <span>Clinic & Implant Center</span>
          </div>
        </div>
        <p>Calm conversations. Thoughtful next steps.</p>
        <div className="footer-links">
          <a href={phoneHref}>Call the clinic</a>
          <a href={mapHref} target="_blank" rel="noreferrer">Directions</a>
        </div>
      </footer>
    </div>
  );
}
