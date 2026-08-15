/**
 * Akshar Dental Clinic — Surat Morning
 * A quiet, information-led treatment page: warm paper, confident teal, simple navigation,
 * and a WhatsApp-first action that keeps every service detail practical and personal.
 */
import { ArrowDownRight, ArrowLeft, Check, MessageCircle } from "lucide-react";
import { Link, useRoute } from "wouter";
import { getAksharService } from "@/lib/aksharServices";

const whatsappLink = "https://wa.me/919409313494";
const serviceListScrollKey = "akshar-service-list-scroll-y";

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:slug");
  const service = getAksharService(params?.slug);

  const returnToServiceList = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.sessionStorage.getItem(serviceListScrollKey) && window.history.length > 1) {
      event.preventDefault();
      window.history.back();
    }
  };

  if (!service) {
    return (
      <main className="service-detail-page service-not-found">
        <p className="eyebrow">Akshar Dental Clinic</p>
        <h1>This treatment page is <em>not here yet.</em></h1>
        <Link className="button button-primary" href="/#care">Return to services <ArrowLeft size={16} /></Link>
      </main>
    );
  }

  return (
    <div className="service-detail-page">
      <header className="service-detail-header">
        <Link className="brand brand-logo-link" href="/" aria-label="Akshar Dental Clinic home">
          <img className="brand-logo" src="/clinic-assets/akshar-dental-clinic-logo.webp" alt="Akshar Dental Clinic" />
        </Link>
        <Link className="detail-back" href="/#care" onClick={returnToServiceList}><ArrowLeft size={16} /> All services</Link>
        <a className="button button-primary detail-book" href={whatsappLink} target="_blank" rel="noreferrer">Ask on WhatsApp <MessageCircle size={16} /></a>
      </header>

      <main>
        <section className="detail-hero">
          <div className="detail-count"><span>{service.number}</span><span>Akshar care</span></div>
          <div className="detail-copy">
            <p className="eyebrow">{service.eyebrow}</p>
            <h1>{service.title}</h1>
            <p className="detail-summary">{service.summary}</p>
          </div>
          <div className="detail-orbit" aria-hidden="true"><span>a</span></div>
        </section>

        <section className="detail-content">
          <div className="detail-intro"><p className="eyebrow">A clear place to begin</p><h2>Talk it through at your <em>own pace.</em></h2></div>
          <div className="detail-body"><p>{service.overview}</p><a className="detail-text-link" href={whatsappLink} target="_blank" rel="noreferrer">Ask Dr. Aneri about this treatment <ArrowDownRight size={16} /></a></div>
        </section>

        <section className="detail-checks">
          <div><p className="eyebrow">At your consultation</p><h2>Useful things to <em>discuss.</em></h2></div>
          <div className="detail-check-list">
            {service.considerations.map((consideration, index) => <div key={consideration}><span>0{index + 1}</span><p>{consideration}</p><Check size={18} /></div>)}
          </div>
        </section>

        <section className="detail-cta"><p className="eyebrow">Akshar Dental Clinic · Surat</p><h2>Questions are a good place to <em>start.</em></h2><p>Send the clinic a WhatsApp message to discuss this treatment or request an appointment.</p><a className="button button-cream" href={whatsappLink} target="_blank" rel="noreferrer">Message Akshar on WhatsApp <MessageCircle size={17} /></a></section>
      </main>
    </div>
  );
}
