import { FormEvent, useEffect, useRef, useState } from "react";
import traditionalSilkReeling from "./assets/traditional-silk-reeling-hero.png";
import automaticReeling from "./assets/srtsm-reeling-line.jpg";
import factoryExterior from "./assets/srtsm-factory-exterior.jpg";
import productionFloor from "./assets/srtsm-production-floor.jpg";
import silkBales from "./assets/srtsm-silk-bales.jpg";
import silkHanks from "./assets/srtsm-silk-hanks.jpg";
import srtsmLogo from "./assets/srtsm-logo.png";
import finishedSilkReels from "./assets/finished-silk-reels.jpg";
import rawSilkLustre from "./assets/raw-silk-lustre.jpg";

const photos = {
  reeling: traditionalSilkReeling,
  automaticReelingLine: automaticReeling,
  exterior: factoryExterior,
  productionFloor,
  silkHanks,
  silkBales,
  finishedSilkReels,
  rawSilkLustre,
};

const milestones = [
  {
    year: "1920",
    title: "British Aided Silk Seed Grainage",
    text: "The foundation of our legacy dates back to 1920, when our founder, Late Shri G. Devaappa, established the British Silk Seed Aided Grainage. The organisation initially focused on the production and development of quality silkworm seeds, contributing to the early stages of the silk value chain. This marked the beginning of a journey deeply connected with the growth and development of the silk industry. Following this, the family expanded its activities into silkworm rearing and cocoon production, gaining valuable expertise and experience in sericulture.",
  },
  {
    year: "1928",
    title: "Entering Silk Reeling",
    text: "In 1928, the business took an important step forward by entering the silk reeling industry. Silk reeling was started on a very small scale using traditional methods through a hand charkha and cottage filature. This marked the beginning of SR Textile Silk Mills' journey into silk manufacturing. What started as a small traditional operation was built on hard work, skilled craftsmanship, and a strong commitment to producing quality silk.",
  },
  {
    year: "1960",
    title: "Expansion into Larger Production",
    text: "In 1960, the second generation took the responsibility of carrying the legacy forward. Under the leadership of Late Shri D. Ravindranath, the small cottage filature was expanded into a larger silk production unit. With his vision and dedication, production capabilities grew while preserving the traditional knowledge and expertise that had been developed over decades. This period played a significant role in establishing a stronger foundation for the future growth of the organisation.",
  },
  {
    year: "1983",
    title: "The Third Generation A New Chapter",
    text: "In 1983, the third generation entered the business. with Mr. C.R. Jagadeesh and Late Shri C.R. Devraj joining the journey and taking forward the family's rich silk heritage. With a vision to modernise and expand the business, the traditional hand charkha system and cottage filature , was gradually transformed, to advanced Multi-End Silk Filatures and Japanese Semi Automatic machines  were introduced. This transition represented a major milestone in the history of the organisation, combining generations of traditional silk knowledge with improved production methods and technology.",
  },
  {
    year: "Modern Era",
    title: "A New Era of Automatic Silk Reeling",
    text: "Continuing the journey of innovation and technological advancement, the organisation later installed an Automatic Silk Reeling (ARM) Unit. The automatic unit initially operated with a production capacity of approximately 120 kilograms per day. Through continuous development, improved technology, operational expertise, and the dedication of our skilled workforce, the production capacity of the same unit has grown significantly. Today, SR Textile Silk Mills proudly operates with a production capacity of approximately 600 kilograms per day, representing a remarkable transformation from its humble beginnings.",
  },
];

const advantages = [
  ["chain", "Reliable Supply Chain", "Deep sourcing relationships across Karnataka keep dealer orders moving consistently."],
  ["shield", "Quality Assurance", "In-house, ISO-aligned testing protects denier, twist, moisture and grade consistency."],
  ["people", "Dealer-First Partnership", "Responsive support, transparent communication and flexible long-term contracts."],
  ["tag", "Decades of Trust", "With over a century of silk heritage, we have built lasting relationships founded on integrity, consistency, and an unwavering commitment to quality."],
  ["truck", "Pan-India Logistics", "Dependable dispatch to major silk hubs including Varanasi, Surat and Bengaluru."],
  ["flask", "Samples & Consultation", "Expert guidance and evaluated samples before you commit to a bulk order."],
];

const factoryFeatures = [
  ["gear", "Automatic Reeling", "Modern multi-end systems"],
  ["flask", "In-house QC Lab", "Batch-level grade testing"],
  ["pin", "Karnataka Location", "At the heart of silk country"],
  ["leaf", "Direct Sourcing", "Trusted cocoon farmers"],
];

type IconName =
  | "arrow"
  | "chain"
  | "shield"
  | "people"
  | "tag"
  | "truck"
  | "flask"
  | "gear"
  | "pin"
  | "leaf"
  | "phone"
  | "mail"
  | "clock"
  | "menu"
  | "close"
  | "instagram"
  | "facebook"
  | "linkedin";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    chain: <><path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" /><path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
    people: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    tag: <><path d="M20.6 13.6 11 23.2 1 13.2V3h10.2l9.4 9.4a.85.85 0 0 1 0 1.2Z" /><circle cx="6.5" cy="8.5" r="1.5" /></>,
    truck: <><path d="M10 17h4V5H2v12h3M14 9h4l4 4v4h-3M14 17h1" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></>,
    flask: <><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3" /><path d="M7.5 15h9" /></>,
    gear: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-4v-.09A1.7 1.7 0 0 0 9 19.35a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.63 15 1.7 1.7 0 0 0 3.07 14H3v-4h.09A1.7 1.7 0 0 0 4.65 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.63h.02A1.7 1.7 0 0 0 10 3.07V3h4v.09A1.7 1.7 0 0 0 15 4.65a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.37 9v.02A1.7 1.7 0 0 0 20.93 10H21v4h-.09A1.7 1.7 0 0 0 19.4 15Z" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    leaf: <><path d="M20 4c-7 0-13 3-15 9-1 3 1 6 4 6 7 0 10-8 11-15Z" /><path d="M4 21c3-6 7-10 13-13" /></>,
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" /></>,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".5" fill="currentColor" /></>,
    facebook: <><path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1Z" /></>,
    linkedin: <><rect x="3" y="9" width="4" height="12" /><path d="M3 5.5A2 2 0 1 0 7 5.5a2 2 0 0 0-4 0ZM11 21V9h4v2c1-1.5 5-2 6 2v8h-4v-6c0-2-2-2-2 0v6Z" /></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className={`logo ${light ? "logo--light" : ""}`} aria-label="Sri Ranganatha Textile Silk Mills">
      <div className="logo__seal"><img src={srtsmLogo} alt="" /></div>
      <div className="logo__wordmark"><strong>SRTSM</strong><small>Sri Ranganatha Textile Silk Mills</small></div>
    </div>
  );
}

function FloatingSilk() {
  return (
    <div className="silk-floaters" aria-hidden="true">
      {Array.from({ length: 10 }, (_, index) => <span className="silk-floater" key={index}><i /></span>)}
      <svg className="silk-ribbon silk-ribbon--one" viewBox="0 0 240 600" fill="none">
        <path d="M176 610C-4 480 257 363 76 239C-34 164 95 76 34-28" />
      </svg>
      <svg className="silk-ribbon silk-ribbon--two" viewBox="0 0 240 600" fill="none">
        <path d="M49 628C247 472-12 385 160 237C255 155 127 67 208-35" />
      </svg>
    </div>
  );
}

function SectionTitle({ eyebrow, title, intro, centered = false }: { eyebrow: string; title: string; intro?: string; centered?: boolean }) {
  return (
    <div className={`section-title ${centered ? "section-title--center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const duration = 1400;
      const animate = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setValue(Math.round(end * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      observer.disconnect();
    }, { threshold: 0.5 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [end]);

  return <strong ref={ref}>{value}<span>{suffix}</span></strong>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeYear, setActiveYear] = useState(0);
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveYear(Number((entry.target as HTMLElement).dataset.index));
      }),
      { rootMargin: "-35% 0px -45% 0px", threshold: 0.1 },
    );
    cardsRef.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealTargets = document.querySelectorAll(
      ".section-title, .product-card, .advantage, .factory__heading, .factory__gallery figure, .factory__features > div, .contact__header, .contact__grid, .map-wrap, .mill-arrival__content",
    );
    revealTargets.forEach((element) => element.classList.add("reveal"));
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -70px" },
    );
    revealTargets.forEach((element) => revealObserver.observe(element));

    let ticking = false;
    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty("--scroll-progress", `${max > 0 ? (window.scrollY / max) * 100 : 0}%`);
      document.documentElement.style.setProperty("--hero-parallax", `${window.scrollY * 0.025}px`);
      document.documentElement.style.setProperty("--mill-parallax", `${(window.scrollY - 3500) * 0.018}px`);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };
    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      const subject = encodeURIComponent(`Bulk silk inquiry from ${formData.get("name")}`);
      const body = encodeURIComponent(
        `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\nPhone: ${formData.get("phone")}\nProduct: ${formData.get("product")}\n\n${formData.get("message")}`,
      );
      window.location.href = `mailto:dealer@srtsm.in?subject=${subject}&body=${body}`;
      return;
    }

    setSubmitState("sending");
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: Object.fromEntries(formData.entries()),
        }),
      });
      if (!response.ok) throw new Error("Unable to send inquiry");
      form.reset();
      setSubmitState("sent");
    } catch {
      setSubmitState("error");
    }
  }

  const nav = [["Legacy", "#legacy"], ["Products", "#products"], ["Why Us", "#why-us"], ["Factory", "#factory"], ["Contact", "#contact"]];

  return (
    <div className="site-shell">
      <div className="site-watermark" aria-hidden="true">
        <img className="site-watermark__factory" src={photos.exterior} alt="" />
      </div>
      <div className="site-watermark site-watermark--logo" aria-hidden="true">
        <img className="site-watermark__logo" src={srtsmLogo} alt="" />
      </div>
      <div className="scroll-progress" aria-hidden="true" />
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a href="#top" className="nav__brand"><Logo /></a>
          <div className={`nav__links ${menuOpen ? "is-open" : ""}`}>
            {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
                        <a className="button button--small" href="#contact" onClick={() => setMenuOpen(false)}>Request a sample <Icon name="arrow" size={16} /></a>
          </div>
          <button className="nav__toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "close" : "menu"} size={25} />
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__texture" />
          <div className="hero__silk hero__silk--one" />
          <div className="hero__silk hero__silk--two" />
          <FloatingSilk />
          <div className="container hero__grid">
            <div className="hero__content">
              <span className="eyebrow">Silk mastery since 1920</span>
              <h1>Silk, perfected<br /><em>over generations.</em></h1>
              <p>Premium raw silk yarn, reeled in Karnataka and supplied with confidence to textile manufacturers and dealers across India.</p>
              <div className="hero__actions">
                <a href="#contact" className="button">Inquire for bulk supply <Icon name="arrow" size={18} /></a>
                <a href="#products" className="text-link">Explore our products <span>↓</span></a>
              </div>
              <div className="hero__stats">
                <div><Counter end={100} suffix="+" /><small>Years of silk heritage</small></div>
                <div><Counter end={600} suffix=" kg" /><small>Daily production capacity</small></div>
                <div><strong>Pan<span>-India</span></strong><small>Dependable dealer supply</small></div>
              </div>
            </div>
            <div className="hero__visual">
              <div className="hero__image"><img src={photos.reeling} alt="Traditional master silk reeling by hand charkha with hot water cocoon basin" /></div>
              <div className="hero__stamp"><span>Premium<br />grade silk</span></div>
              <div className="hero__caption"><span>01</span><p>Traditional charkha reeling and cocoon drafting mastery.</p></div>
            </div>
          </div>
          <div className="hero__side-label">Channapatana · Karnataka · India</div>
        </section>

        <section className="intro-strip" aria-label="Supply network">
          <div className="marquee">
            <div className="marquee__track">
              {[0, 1].map((group) => (
                <div className="marquee__group" key={group} aria-hidden={group === 1}>
                  <span>Silk mastery since 1920</span><i /> <span>600 kg daily capacity</span><i />
                  <span>Premium silk grades</span><i /> <span>Pan-India supply</span><i />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="legacy" className="legacy section">
          <div className="container">
            <SectionTitle eyebrow="Our legacy" title="A Century–Old Silk History" intro="Four generations of accumulated knowledge, transformed by technology and anchored in the silk heartland of Karnataka." />
            <div className="timeline">
              <div className="timeline__years" role="tablist" aria-label="History years">
                {milestones.map((item, index) => (
                  <button key={item.year} role="tab" aria-selected={activeYear === index} className={activeYear === index ? "active" : ""} onClick={() => cardsRef.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" })}>
                    <span>{String(index + 1).padStart(2, "0")}</span>{item.year}
                  </button>
                ))}
              </div>
              <div className="timeline__cards">
                {milestones.map((item, index) => (
                  <div key={item.year} data-index={index} ref={(element) => { cardsRef.current[index] = element; }} className={`timeline-card ${activeYear === index ? "active" : ""}`} role="tabpanel">
                    <div className="timeline-card__number">{item.year === "Today" ? "∞" : item.year.slice(-2)}</div>
                    <span>{item.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <div className="timeline-card__line" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="products section">
          <div className="container">
            <SectionTitle eyebrow="Our offerings" title="Silk engineered for your loom." intro="Consistent raw material, flexible specifications, and a reliable supply partner for textile manufacturers and dealers." />
            <div className="product-grid">
              <article className="product-card">
                <div className="product-card__image"><img src={photos.rawSilkLustre} alt="Finished SRTSM raw silk hanks ready for weaving" loading="lazy" /><span>01</span></div>
                <div className="product-card__body">
                  <span className="product-card__type">Dealer catalogue</span>
                  <h3>Raw Silk Yarn</h3>
                  <p>Premium mulberry silk with high filament length for power looms, hand looms, rapier loom and high-end weaving.</p>
                  <dl><div><dt>Denier</dt><dd>18–20 D, 20–22 D, 24–26 D, 26–28 D, 28–30 D, 30–34 D, 36–40 D, 40–44 D, 50–70 D, 100–120 D, 150–200 D, 600–650 D (Coarse Denier)</dd></div><div><dt>Most Common</dt><dd>18-20 D, 20-22 D, 27-29 D, 36-40 D, 40-44 D, 100-120 D</dd></div><div><dt>Packaging</dt><dd>5 kg / 10 kg</dd></div><div><dt>Delivery</dt><dd>Pan-India</dd></div></dl>
                  <a href="#contact" className="card-link">Inquire for bulk supply <Icon name="arrow" size={18} /></a>
                </div>
              </article>
              <article className="product-card product-card--reverse">
                <div className="product-card__image"><img src={photos.silkBales} alt="Graded SRTSM silk bales packed for bulk dealer supply" loading="lazy" /><span>02</span></div>
                <div className="product-card__body">
                  <span className="product-card__type">Custom supply</span>
                  <h3>Bulk Raw<br />Silk Supply</h3>
                  <p>Customisable, mill-direct orders with dependable scheduling for textile manufacturers and established dealers.</p>
                  <dl><div><dt>Minimum order</dt><dd>50 kg</dd></div><div><dt>Available grades</dt><dd>Premium silk grades tailored to buyer specifications</dd></div><div><dt>Packaging</dt><dd>Bags, skeins, cartons</dd></div><div><dt>Delivery</dt><dd>Pan-India</dd></div></dl>
                  <a href="#contact" className="card-link">Discuss your requirement <Icon name="arrow" size={18} /></a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="why-us" className="why section">
          <div className="container">
            <SectionTitle eyebrow="The SRTSM standard" title="Why generations of dealers choose us." centered />
            <div className="advantage-grid">
              {advantages.map(([icon, title, text], index) => (
                <article className="advantage" key={title}>
                  <span className="advantage__index">{String(index + 1).padStart(2, "0")}</span>
                  <div className="icon-box"><Icon name={icon as IconName} size={24} /></div>
                  <h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mill-arrival" aria-label="SRTSM factory exterior">
          <div className="mill-arrival__image">
            <img src={photos.exterior} alt="Sri Ranganatha Textile Silk Mills factory exterior in Channapatana" loading="lazy" />
          </div>
          <div className="mill-arrival__shade" />
          <div className="container mill-arrival__content">
            <span className="eyebrow">Made in Channapatana</span>
            <h2>A century of knowledge.<br /><em>One modern mill.</em></h2>
            <div className="mill-arrival__meta">
              <span><strong>12.6515° N</strong> Karnataka silk country</span>
              <a href="#factory">Step inside the factory <Icon name="arrow" size={18} /></a>
            </div>
          </div>
          <span className="mill-arrival__word">SRTSM</span>
        </section>

        <section id="factory" className="factory section">
          <div className="container factory__heading">
            <SectionTitle eyebrow="Inside our mill" title="Where heritage meets precision." intro="Our Channapatana facility combines generations of reeling expertise with automated production and rigorous in-house quality control." />
            <p className="factory__aside">Every batch is watched, measured and documented—because consistency at the mill means confidence at the loom.</p>
          </div>
          <div className="factory__gallery">
            <figure className="factory__main"><img src={photos.productionFloor} alt="SRTSM silk production floor with reeling and winding machinery" loading="lazy" /><figcaption><span>01</span> Production floor</figcaption></figure>
            <figure><img src={photos.finishedSilkReels} alt="Traditional wooden reeling charkhas with precision wound raw silk" loading="lazy" /><figcaption><span>02</span> Reeled silk frames</figcaption></figure>
            <figure><img src={photos.rawSilkLustre} alt="Lustrous pure mulberry raw silk skein bundle with natural sheen" loading="lazy" /><figcaption><span>03</span> Pure silk lustre</figcaption></figure>
            <figure><img src={photos.silkBales} alt="Packed SRTSM silk bales ready for dispatch" loading="lazy" /><figcaption><span>04</span> Packed bales</figcaption></figure>
          </div>
          <div className="container factory__features">
            {factoryFeatures.map(([icon, title, text]) => <div key={title}><Icon name={icon as IconName} size={25} /><span><strong>{title}</strong><small>{text}</small></span></div>)}
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="container">
            <div className="contact__header">
              <SectionTitle eyebrow="Start a conversation" title="Your next supply begins here." intro="Tell us what your loom needs. Our dealer team will get back with availability, specifications and pricing." />
              <div className="contact__direct"><span>Prefer to speak directly?</span><a href="tel:+919876543210">+91 98765 43210</a></div>
            </div>
            <div className="contact__grid">
              <form className="inquiry-form" onSubmit={handleSubmit}>
                <div className="field-row">
                  <label><span>Your name *</span><input name="name" required placeholder="Full name" /></label>
                  <label><span>Business email *</span><input name="email" type="email" required placeholder="you@company.com" /></label>
                </div>
                <div className="field-row">
                  <label><span>Phone number *</span><input name="phone" type="tel" required placeholder="+91" /></label>
                  <label><span>Product of interest *</span><select name="product" required defaultValue=""><option value="" disabled>Select a product</option><option>Raw Silk Yarn</option><option>Bulk Raw Silk Supply</option><option>Sample Request</option></select></label>
                </div>
                <label><span>Tell us your requirement</span><textarea name="message" rows={5} placeholder="Quantity, grade, denier, packaging or delivery location..." /></label>
                <div className="form__footer">
                  <button className="button" type="submit" disabled={submitState === "sending"}>{submitState === "sending" ? "Sending..." : "Send inquiry"} <Icon name="arrow" size={18} /></button>
                  <p>{submitState === "sent" ? "Thank you. Our dealer team will respond shortly." : submitState === "error" ? "We could not send this. Please email dealer@srtsm.in." : "Your information stays private with us."}</p>
                </div>
              </form>
              <aside className="contact-card">
                <div className="contact-card__photo"><img src={photos.exterior} alt="SRTSM factory and office exterior" loading="lazy" /><span>Our mill · Channapatana</span></div>
                <div>
                  <span className="eyebrow">Factory & office</span>
                  <h3>Visit us in<br />silk country.</h3>
                  <p>#381, Genedmadu, Yelekeri,<br />Channapatana Town, Ramanagara – 562160,<br />Karnataka, India</p>
                </div>
                <div className="contact-card__details">
                  <a href="tel:+919876543210"><Icon name="phone" /><span>+91 98765 43210<br />+91 80123 45678</span></a>
                  <a href="mailto:info@srtsm.in"><Icon name="mail" /><span>info@srtsm.in<br />dealer@srtsm.in</span></a>
                  <div><Icon name="clock" /><span>Mon–Sat: 9:00 AM–6:00 PM<br />Sunday: Closed</span></div>
                </div>
              </aside>
            </div>
            <div className="map-wrap">
              <iframe title="Sri Ranganatha Textile Silk Mills factory location in Channapatana" aria-label="Map showing the exact SRTSM factory location" src="https://www.google.com/maps?q=M684%2BHV2%2C%20Channapatana%2C%20Karnataka%20562160&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <div className="map-label"><Icon name="pin" size={22} /><span><small>Plus code</small><strong>M684+HV2</strong></span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__top">
          <div><Logo light /><p>Silk mastery. Dealer trust.<br />Since 1920.</p></div>
          <div className="footer__links"><strong>Explore</strong>{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
          <div className="footer__links"><strong>Products</strong><a href="#products">Raw silk yarn</a><a href="#products">Bulk silk supply</a><a href="#contact">Sample requests</a></div>
          <div className="footer__contact"><strong>Let’s talk silk.</strong><a href="mailto:dealer@srtsm.in">dealer@srtsm.in</a></div>
        </div>
        <div className="container footer__bottom"><span>© {new Date().getFullYear()} Sri Ranganatha Textile Silk Mills. All rights reserved.</span><span>Channapatana · Karnataka · India</span><a href="#top">Back to top ↑</a></div>
      </footer>
                </div>
  );
}

export default App;
