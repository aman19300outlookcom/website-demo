/**
 * Akshar Dental Clinic — Surat Morning
 * Design philosophy: an established Surat clinic presented with editorial calm, warm mineral
 * surfaces, precise teal accents, and content-first mobile layouts where imagery remains supportive.
 */
import { Button } from "@/components/ui/button";
import {
  ArrowDownRight,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Menu,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { aksharServices } from "@/lib/aksharServices";
import { Link } from "wouter";

const whatsappLink = "https://wa.me/919409313494";

const services = [
  {
    number: "01",
    title: "Everyday dentistry",
    detail:
      "Checkups, teeth cleaning, preventive guidance, and restorative care that helps keep small concerns manageable.",
    cta: "Explore general care",
    href: "/services/dental-checkups-exams",
    image: "/clinic-assets/morrow-care-routine.jpg",
    tone: "sage",
  },
  {
    number: "02",
    title: "Smile design",
    detail:
      "Whitening, veneers, and smile makeovers planned around your features, your goals, and your comfort.",
    cta: "Discover smile options",
    href: "/services/teeth-whitening",
    image: "/clinic-assets/morrow-care-smile.jpg",
    tone: "rose",
  },
  {
    number: "03",
    title: "Advanced solutions",
    detail:
      "Implants, root canal treatment, braces, and full-mouth rehabilitation with a clear treatment roadmap.",
    cta: "See advanced care",
    href: "/services/dental-implants",
    image: "/clinic-assets/morrow-care-technology.jpg",
    tone: "blue",
  },
];

const comfortItems = [
  "A friendly first conversation before any treatment is planned.",
  "Care for children, adults, and every stage of the family smile.",
  "Clear recommendations with time to understand your options.",
];

const faqs = [
  {
    question: "Are dental implants painful, and how long do they last?",
    answer:
      "Implant treatment is planned carefully around your oral health and comfort. Dr. Aneri can explain the expected steps, aftercare, and the option that is right for your individual case during a consultation.",
  },
  {
    question: "Why do gums bleed when brushing?",
    answer:
      "Bleeding gums can have several causes, including plaque buildup and gum inflammation. A dental assessment helps identify what is happening and the right next step for your gum health.",
  },
  {
    question: "Do you provide dental care for children?",
    answer:
      "Yes. Akshar Dental Clinic offers pediatric dentistry with an approach designed to help children feel comfortable while building healthy early habits.",
  },
  {
    question: "How do I request an appointment?",
    answer:
      "The easiest way to start is by sending the clinic a WhatsApp message. Share the concern or treatment you would like to discuss, and the team can guide you from there.",
  },
];

function ArrowLink({ children }: { children: React.ReactNode }) {
  return (
    <a className="arrow-link" href="#visit">
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={16} strokeWidth={1.8} />
    </a>
  );
}

function WhatsAppButton({ className = "button button-primary", children }: { className?: string; children: React.ReactNode }) {
  return (
    <a className={className} href={whatsappLink} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

const serviceListScrollKey = "akshar-service-list-scroll-y";

function rememberServiceListPosition() {
  window.sessionStorage.setItem(serviceListScrollKey, String(window.scrollY));
  window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const savedPosition = window.sessionStorage.getItem(serviceListScrollKey);
    if (!savedPosition) return;

    window.sessionStorage.removeItem(serviceListScrollKey);
    const targetY = Number(savedPosition);
    const restoreTimer = window.setTimeout(() => {
      window.scrollTo({ top: Number.isFinite(targetY) ? targetY : 0, behavior: "smooth" });
    }, 80);

    return () => window.clearTimeout(restoreTimer);
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <a className="brand brand-logo-link" href="#top" aria-label="Akshar Dental Clinic home">
          <img className="brand-logo" src="/clinic-assets/akshar-dental-clinic-logo.webp" alt="Akshar Dental Clinic" />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#care">Services</a>
          <a href="#doctor">Doctor</a>
          <a href="#visit">Contact</a>
        </nav>

        <div className="header-actions">
          <WhatsAppButton className="button button-primary header-book">
            Book appointment <ArrowDownRight size={16} strokeWidth={1.8} />
          </WhatsAppButton>
          <Button aria-label={menuOpen ? "Close navigation" : "Open navigation"} className="menu-button" onClick={() => setMenuOpen((open) => !open)} variant="ghost" size="icon">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="#care" onClick={closeMenu}>Services <ChevronRight size={18} /></a>
          <a href="#doctor" onClick={closeMenu}>Meet Dr. Aneri <ChevronRight size={18} /></a>
          <a href="#visit" onClick={closeMenu}>Contact us <ChevronRight size={18} /></a>
          <a href={whatsappLink} target="_blank" rel="noreferrer" onClick={closeMenu}>WhatsApp appointment <MessageCircle size={18} /></a>
        </nav>
      )}

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-grid">
            <div className="hero-image-wrap hero-doctor-image">
              <div className="hero-orbit orbit-one" aria-hidden="true" />
              <img className="hero-image" src="/clinic-assets/akshar-dr-aneri-moradiya.webp" alt="Dr. Aneri Moradiya of Akshar Dental Clinic" />
              <div className="image-caption"><span>Dr. Aneri Moradiya</span><span>BDS</span></div>
            </div>

            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-spark" /> Akshar Dental Clinic · Surat</p>
              <h1>Care that gives your smile a <em>fresh start.</em></h1>
              <p className="hero-intro">General, cosmetic, and restorative dentistry made clear, comfortable, and close to home in Surat.</p>
              <div className="hero-actions">
                <WhatsAppButton>
                  Request an appointment <ArrowDownRight size={17} strokeWidth={1.8} />
                </WhatsAppButton>
                <a className="text-cta" href="#doctor">Meet Dr. Aneri <ArrowRight size={16} strokeWidth={1.8} /></a>
              </div>
              <div className="hero-proof">
                <div className="proof-symbol" aria-hidden="true"><Sparkles size={16} strokeWidth={1.7} /></div>
                <p><strong>Trusted care, thoughtfully explained.</strong><span>Serving Katargam, Dabholi, Amroli, and nearby Surat.</span></p>
              </div>
            </div>
          </div>
          <div className="hero-side-note" aria-hidden="true"><span>Personal care</span><span className="note-line" /><span>Surat, Gujarat</span></div>
        </section>

        <section className="intro-section" id="doctor">
          <div className="section-mark">01</div>
          <div className="intro-layout">
            <div>
              <p className="eyebrow">Meet your dentist</p>
              <h2>Expert care with a <em>gentle pace.</em></h2>
            </div>
            <div className="intro-note">
              <p><strong>Dr. Aneri Moradiya, BDS</strong> is a specialist in general and cosmetic dentistry with more than seven years of hands-on experience. At Akshar, each plan starts with a careful listen and a clear explanation.</p>
              <ArrowLink>See how we approach your care</ArrowLink>
            </div>
          </div>
          <div className="comfort-grid">
            <div className="comfort-title"><span className="orbit-icon" aria-hidden="true" /><p>Thoughtful in the details. Clear in the plan.</p></div>
            <div className="comfort-list">
              {comfortItems.map((item, index) => (
                <div className="comfort-item" key={item}><span>0{index + 1}</span><p>{item}</p><Check size={18} strokeWidth={1.7} aria-hidden="true" /></div>
              ))}
            </div>
          </div>
          <div className="doctor-note">
            <div className="doctor-note-mark" aria-hidden="true"><span>Dr.</span><i>A</i></div>
            <div>
              <p className="eyebrow">A note on your care</p>
              <h3>One clinic. One clear place to begin.</h3>
              <p>From a child’s first dental visit to a cosmetic goal or a more involved treatment, Dr. Aneri brings general, cosmetic, and restorative care into a plan shaped around the person in the chair.</p>
            </div>
            <div className="doctor-note-meta"><span>7+ years</span><small>Hands-on experience</small><span>4 areas</span><small>Katargam · Dabholi · Amroli · Singanpor</small></div>
          </div>
        </section>

        <section className="ticker" aria-label="Akshar Dental Clinic message">
          <div className="ticker-track"><span>Clear answers</span><i>✦</i><span>Confident smiles</span><i>✦</i><span>Care for every age</span><i>✦</i><span>Clear answers</span><i>✦</i><span>Confident smiles</span><i>✦</i><span>Care for every age</span><i>✦</i></div>
        </section>

        <section className="services-section" id="care">
          <div className="section-head services-head">
            <div><p className="eyebrow">How we can help</p><h2>Care for the smile you have, and the one you <em>want to grow.</em></h2></div>
            <p>From regular checks to advanced treatment, the clinic brings many of your dental needs into one considered care plan.</p>
          </div>
          <div className="services-stack">
            {services.map((service) => (
              <article className={`service-card ${service.tone}`} key={service.number}>
                <div className="service-image-wrap"><img src={service.image} alt="" className="service-image" /><span className="service-number">{service.number}</span></div>
                <div className="service-copy"><p className="service-kicker">Akshar Dental Clinic</p><h3>{service.title}</h3><p>{service.detail}</p><Link className="arrow-link" href={service.href} onClick={rememberServiceListPosition}>{service.cta}<ArrowRight size={16} strokeWidth={1.8} /></Link></div>
              </article>
            ))}
          </div>
          <div className="service-directory">
            <div className="service-directory-intro">
              <p className="eyebrow">The complete care menu</p>
              <h3>More ways we can help your smile <em>feel like itself.</em></h3>
              <p>Whether you know exactly what you need or you are simply ready to ask, there is a useful place to start.</p>
              <WhatsAppButton className="button button-outline">Ask about a treatment <MessageCircle size={16} strokeWidth={1.8} /></WhatsAppButton>
            </div>
            <div className="service-directory-list">
              {aksharServices.map((service) => (
                <Link className="directory-item" key={service.slug} href={`/services/${service.slug}`} onClick={rememberServiceListPosition}>
                  <span>{service.number}</span>
                  <div><h4>{service.title}</h4><p>{service.summary}</p></div>
                  <ArrowRight size={17} strokeWidth={1.7} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="technology-section">
          <div className="tech-paper">
            <div className="tech-label"><span>02</span><p>Complete dental care</p></div>
            <div className="tech-title"><p className="eyebrow">From a simple checkup to a full restoration</p><h2>Good dentistry starts with <em>clear next steps.</em></h2></div>
            <div className="tech-details">
              <div><span className="detail-number">01</span><h3>Personal assessment</h3><p>Your concern, oral health, and goals are understood before a treatment path is discussed.</p></div>
              <div><span className="detail-number">02</span><h3>Thoughtful treatment</h3><p>Whether you need a cleaning, a root canal, braces, or implants, each step has a purpose.</p></div>
              <div><span className="detail-number">03</span><h3>Care that continues</h3><p>Follow-up guidance helps you protect your oral health long after your appointment.</p></div>
            </div>
            <div className="tech-orbit" aria-hidden="true"><span>a</span></div>
          </div>
        </section>

        <section className="visit-section" id="visit">
          <div className="visit-grid">
            <div className="visit-main">
              <p className="eyebrow">Book an appointment</p>
              <h2>Start with a message. <em>We will guide you from there.</em></h2>
              <p className="visit-intro">Tell us what you would like to discuss—whether it is a routine visit, a child’s first dental check, a smile concern, or a treatment question. The clinic can help you take the next step.</p>
              <WhatsAppButton className="button button-cream">Message Akshar on WhatsApp <MessageCircle size={17} strokeWidth={1.8} /></WhatsAppButton>
            </div>
            <aside className="visit-card">
              <p className="visit-card-label">At a glance</p>
              <div className="visit-card-item"><CalendarDays size={21} strokeWidth={1.6} /><p><strong>Appointments by WhatsApp</strong><span>Send your question to begin</span></p></div>
              <div className="visit-card-item"><Clock3 size={21} strokeWidth={1.6} /><p><strong>Serving Surat families</strong><span>Katargam · Dabholi · Amroli · Singanpor</span></p></div>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="visit-card-phone"><MessageCircle size={16} strokeWidth={1.8} /> +91 94093 13494</a>
            </aside>
          </div>
        </section>

        <section className="faq-section">
          <div className="faq-heading"><p className="eyebrow">Helpful answers</p><h2>Nothing too small to <em>ask first.</em></h2><p>Some useful context before you plan your visit.</p></div>
          <div className="faq-guide"><span>Tap a question</span><span>Answers open here <ArrowDownRight size={14} /></span></div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className={`faq-card ${activeFaqIndex === index ? "is-open" : ""}`} key={faq.question}>
                <button className="faq-question" type="button" aria-expanded={activeFaqIndex === index} aria-controls={`faq-answer-${index}`} onClick={() => setActiveFaqIndex((open) => open === index ? null : index)}>
                  <span className="faq-number">0{index + 1}</span><span>{faq.question}</span><ArrowDownRight aria-hidden="true" size={17} strokeWidth={1.8} />
                </button>
                <div className="faq-answer" id={`faq-answer-${index}`} aria-hidden={activeFaqIndex !== index}><p>{faq.answer}</p><a href={whatsappLink} target="_blank" rel="noreferrer">Still have a question? Ask on WhatsApp <ArrowRight size={14} /></a></div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand brand-light brand-logo-link" href="#top"><img className="brand-logo" src="/clinic-assets/akshar-dental-clinic-logo.webp" alt="Akshar Dental Clinic" /></a>
            <p>Modern, patient-first dental care for Surat and surrounding communities.</p>
          </div>
          <div className="footer-nav"><p>Explore</p><a href="#care">Services</a><a href="#doctor">Meet Dr. Aneri</a><a href="#visit">Book appointment</a></div>
          <div className="footer-nav"><p>Connect</p><a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp us</a><a href="https://www.instagram.com/dentist_aneri/" target="_blank" rel="noreferrer">@dentist_aneri</a><span>Katargam · Dabholi · Amroli · Singanpor</span></div>
        </div>
        <div className="footer-bottom"><p>© 2026 Akshar Dental Clinic</p><p>Surat, Gujarat</p><a href="#top">Back to top <ArrowRight size={14} /></a></div>
      </footer>

    </div>
  );
}
