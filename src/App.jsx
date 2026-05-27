import { useState, useEffect } from 'react';
import collectionsData from './data/collections.json';

const translations = {
  sv: {
    tagline: "James Thompson — Göteborg, Sverige",
    title: "Black Badger",
    subtitle: "Nyskapande konstverk och industriella smycken tillverkade av avancerade kompositmaterial, damaskusstål, rymdindustri-kolfiber och vårt egna självlysande Badgerite-lume.",
    viewBtn: "Se kollektionen",
    inquireBtn: "Skicka förfrågan",
    navHome: "Hem",
    navCollections: "Kollektioner",
    navWatches: "Klockor",
    navMaterials: "Material",
    navStudio: "Ateljé",
    navContact: "Kontakt",
    
    colTag: "Konstnärliga Ringar",
    colTitle: "Materialkollektioner",
    colDesc: "Varje ring är ett handbearbetat stycke industrihistoria, utformad för att visa råmaterialets naturliga skönhet och karaktär.",
    
    watchTag: "Exklusiva samarbeten",
    watchTitle: "Watch Collaborations",
    watchDesc: "Banbrytande samarbeten med oberoende klocktillverkare där vi integrerar våra patenterade lysande material i urtavlor och boetter.",
    
    materialTag: "Teknisk Innovation",
    materialTitle: "Våra Signaturmaterial",
    
    studioTag: "Bakom Kulisserna",
    studioTitle: "James Thompson",
    studioP1: "James Thompson grundade Black Badger i Göteborg och har blivit känd över hela världen som en pionjär inom avantgardistisk smyckesdesign och klockinnovation. Med en bakgrund inom industriell design och en djup fascination för materialvetenskap utforskar han ständigt gränserna för vad en ring kan tillverkas av.",
    studioP2: "Genom att samarbeta med de mest prestigefyllda oberoende klockmärkena som MB&F, Bamford och Sarpaneva, samt genom att utveckla unika material som lysande 'Badgerite' och återvinna F1-kolfiber, skapar Black Badger tidlösa föremål med en genuin historia.",

    inquiryTitle: "Skräddarsydd Förfrågan",
    inquiryDesc: "Varje Black Badger-ring tillverkas på beställning i vår studio i Göteborg. Fyll i dina uppgifter nedan för att påbörja din beställning eller ställa frågor om storlek, material eller specialdesign.",
    inquiryDisclaimer: "Vi svarar normalt inom 48 timmar. Våra ringar skickas globalt med full försäkring.",
    
    rights: "Alla rättigheter förbehållna. Skapad med premium Vite + React stack.",
    footerText: "Black Badger är James Thompsons Göteborgs-baserade designateljé som skapar framtidens bärbara konst av okonventionella material.",
    contactTitle: "Ateljé & Kontakt",
    contactAddress: "Adress",
    contactAddressVal: "Göteborg, Sverige (Besök endast enligt överenskommelse)"
  },
  en: {
    tagline: "James Thompson — Gothenburg, Sweden",
    title: "Black Badger",
    subtitle: "Avant-garde wearable art and industrial rings sculpted from advanced aerospace composites, Damascus steel, superconductors, and proprietary Badgerite luminous lume.",
    viewBtn: "View Collections",
    inquireBtn: "Inquire Now",
    navHome: "Home",
    navCollections: "Collections",
    navWatches: "Watches",
    navMaterials: "Materials",
    navStudio: "Studio",
    navContact: "Contact",
    
    colTag: "Wearable Artifacts",
    colTitle: "Material Collections",
    colDesc: "Every single ring is a hand-finished slice of industrial history, designed to expose the raw honesty and texture of unconventional composites.",
    
    watchTag: "Horological Collaborations",
    watchTitle: "Watch Collaborations",
    watchDesc: "Pioneering alliances with premier independent watchmakers, integrating our proprietary luminous materials into high-concept dials and cases.",
    
    materialTag: "Material Innovation",
    materialTitle: "Our Signature Media",
    
    studioTag: "Behind the Lume",
    studioTitle: "James Thompson",
    studioP1: "Founded by Canadian designer James Thompson in Gothenburg, Black Badger has garnered international acclaim as a pioneer in avant-garde jewelry design and horological innovation. With a background in industrial design and a deep fascination with materials science, James constantly challenges what wearable art can be made from.",
    studioP2: "Collaborating with legendary watchmakers like MB&F, Bamford Watch Department, Sarpaneva, and Arcanaut, Black Badger combines aerospace titanium, Damascus steel, reclaimed Formula 1 components, and custom-engineered glow composites to make products that carry a profound narrative.",

    inquiryTitle: "Custom Inquiry",
    inquiryDesc: "Every Black Badger ring is individually crafted to order in our Gothenburg studio. Enter your details below to initiate your build, or ask questions about sizing, pricing, or custom material commissions.",
    inquiryDisclaimer: "Standard lead time is 4-6 weeks. We ship worldwide via secure express logistics.",
    
    rights: "All rights reserved. Constructed with premium Vite + React stack.",
    footerText: "Black Badger is James Thompson's Gothenburg-based design studio, crafting the future of wearable art from unconventional media.",
    contactTitle: "Atelier & Location",
    contactAddress: "Address",
    contactAddressVal: "Gothenburg, Sweden (Visits by private appointment only)"
  }
};

const watchCollabs = [
  {
    id: "arcanaut",
    brand: "Arcanaut",
    name: "Arcanaut ARC II Fordite & Havender",
    desc: {
      sv: "Delägare och designer för det danska klockmärket Arcanaut. Urtavlor handslipade från äkta Detroit-agat (Fordite) samt lysande 'Mussel' och 'Havender' urtavlor.",
      en: "Co-owner and lead materials designer of the Danish watchmaker Arcanaut. Feat. hand-machined dials sculpted from genuine Fordite or glowing composites."
    }
  },
  {
    id: "mbf",
    brand: "MB&F",
    name: "HMX Black Badger & Starfleet Machine",
    desc: {
      sv: "Samarbete med Max Büsser & Friends på den ikoniska HMX, utrustad med solida block av självlysande material för en oöverträffad nattlig upplevelse.",
      en: "Collaboration with Max Büsser & Friends on the iconic HMX, equipped with solid blocks of our custom lume for an unparalleled nighttime glow."
    }
  },
  {
    id: "bamford",
    brand: "Bamford Watch Department",
    name: "Zenith El Primero & Tag Heuer Carrera Badgers",
    desc: {
      sv: "Anpassade Zenith- och Tag Heuer-serier med urtavlor belagda med högeffektiv Badgerite-lume i samarbete med George Bamford.",
      en: "Custom Zenith and Tag Heuer series featuring bezel inserts and dial highlights coated in high-potency Badgerite, co-designed with George Bamford."
    }
  },
  {
    id: "sarpaneva",
    brand: "Sarpaneva Watches",
    name: "K0 Korona & Lunations",
    desc: {
      sv: "Samarbete med den finska mästerurmakaren Stepan Sarpaneva. Fullt lysande månfasindikatorer och urtavlor som lyser upp den finska natten.",
      en: "Alliances with Finnish master horologist Stepan Sarpaneva, designing solid-lume moon phases and dials that light up the Nordic night."
    }
  }
];

const customMaterials = [
  {
    id: "badgerite",
    name: "Badgerite® Lume",
    desc: {
      sv: "Vår egenpatenterade fasta lysande komposit, utvecklad i samarbete med tillverkarna bakom Swiss Super-LumiNova® för maximal glöd och intensitet.",
      en: "Our proprietary solid luminous composite, engineered in direct cooperation with Swiss Super-LumiNova® to provide unprecedented glow output."
    }
  },
  {
    id: "fordite-mat",
    name: "Fordite / Detroit Agate",
    desc: {
      sv: "Historisk sprayfärg från bilfabriker i Detroit, härdad under decennier av ugnstorkning. Varje bit visar hundratals färgglada ränder.",
      en: "Historic automotive paint overspray from Detroit assembly lines, cured over decades of oven-baking. Shows hundreds of vibrant, psychedelic stripes."
    }
  },
  {
    id: "super-mat",
    name: "Superconductors",
    desc: {
      sv: "Koppar-niobtråd utvecklad för partikelacceleratorer och MRI-maskiner. Ger en fascinerande hexagonal bikakestruktur vid maskinbearbetning.",
      en: "High-grade copper-niobium filaments designed for particle accelerators. Exposes a breathtaking hexagonal honeycomb matrix when turned."
    }
  }
];

export default function App() {
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme-bb') || 'dark';
  });
  const [scrolled, setScrolled] = useState(false);
  const [activeMaterial, setActiveMaterial] = useState('damascus');
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', size: '', material: 'damascus', msg: '' });
  const [inquirySent, setInquirySent] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme-bb', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => setLang(prev => (prev === 'sv' ? 'en' : 'sv'));
  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : prev === 'light' ? 'pink' : 'dark'));

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setShowInquiryModal(false);
      setInquirySent(false);
      setFormData({ name: '', email: '', size: '', material: activeMaterial, msg: '' });
    }, 2000);
  };

  return (
    <div className="bb-app">
      {/* Navigation Header */}
      <header className={`bb-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="bb-container header-container">
          <a href="#home" className="logo-link">
            <span className="logo-title">BLACK BADGER</span>
            <span className="logo-subtitle">GOTHEBORG · ESTD 2013</span>
          </a>

          <nav>
            <ul className="nav-links">
              <li><a href="#home">{t.navHome}</a></li>
              <li><a href="#collections">{t.navCollections}</a></li>
              <li><a href="#watches">{t.navWatches}</a></li>
              <li><a href="#materials">{t.navMaterials}</a></li>
              <li><a href="#studio">{t.navStudio}</a></li>
              <li><a href="#contact">{t.navContact}</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle language">
              {lang === 'sv' ? '🇬🇧 EN' : '🇸🇪 SV'}
            </button>

            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? '☀️' : theme === 'light' ? '🌸' : '🌙'}
            </button>

            <button className="btn-glow" onClick={() => setShowInquiryModal(true)}>
              {t.inquireBtn}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-glow-orb"></div>
        <div className="bb-container hero-content">
          <span className="hero-tagline">{t.tagline}</span>
          <h1 className="hero-title">{t.title}</h1>
          <p className="hero-subtitle">{t.subtitle}</p>
          <div className="hero-ctas">
            <a href="#collections" className="btn-glow">{t.viewBtn}</a>
            <button className="btn-outline" onClick={() => setShowInquiryModal(true)}>{t.inquireBtn}</button>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="section bg-dim">
        <div className="bb-container">
          <div className="section-header">
            <span className="section-tagline">{t.colTag}</span>
            <h2 className="section-title">{t.colTitle}</h2>
            <p className="section-desc">{t.colDesc}</p>
          </div>

          {/* Scaffolding Category Filter */}
          <div className="collections-nav">
            {collectionsData.materials.map(mat => (
              <button
                key={mat.id}
                className={`tab-btn ${activeMaterial === mat.id ? 'active' : ''}`}
                onClick={() => setActiveMaterial(mat.id)}
              >
                {mat.name[lang]}
              </button>
            ))}
          </div>

          {/* Active Material Scaffolding Grid */}
          <div className="showcase-grid">
            {collectionsData.materials
              .filter(mat => mat.id === activeMaterial)
              .map(mat => (
                <div key={mat.id} className="material-showcase-card">
                  <div className="card-border-glow"></div>
                  <div className="material-info">
                    <h3>{mat.name[lang]}</h3>
                    <p>{mat.description[lang]}</p>
                    <div className="specifications-scaffold">
                      <span>⚡ HANDMADE IN SWEDEN</span>
                      <span>🛡️ DAMASCUS OR AERO COMPOSITE</span>
                      <span>💎 INDIVIDUALLY MEASURED</span>
                    </div>
                    <button className="btn-glow" onClick={() => {
                      setFormData(prev => ({ ...prev, material: mat.id }));
                      setShowInquiryModal(true);
                    }}>
                      {t.inquireBtn}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Watch Collaborations Section */}
      <section id="watches" className="section bg-pitch border-y">
        <div className="bb-container">
          <div className="section-header">
            <span className="section-tagline">{t.watchTag}</span>
            <h2 className="section-title">{t.watchTitle}</h2>
            <p className="section-desc">{t.watchDesc}</p>
          </div>

          <div className="collab-grid">
            {watchCollabs.map(collab => (
              <div key={collab.id} className="collab-card">
                <div className="brand-badge">{collab.brand}</div>
                <h3>{collab.name}</h3>
                <p>{collab.desc[lang]}</p>
                <span className="collab-status">✓ DESIGN ARCHIVE</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Tech Section */}
      <section id="materials" className="section">
        <div className="bb-container">
          <div className="section-header">
            <span className="section-tagline">{t.materialTag}</span>
            <h2 className="section-title">{t.materialTitle}</h2>
          </div>

          <div className="materials-grid">
            {customMaterials.map(mat => (
              <div key={mat.id} className="material-card">
                <div className="mat-orb-scaffold" data-material={mat.id}></div>
                <h3>{mat.name}</h3>
                <p>{mat.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Studio Section */}
      <section id="studio" className="section bg-dim">
        <div className="bb-container studio-grid">
          <div className="studio-text">
            <span className="section-tagline">{t.studioTag}</span>
            <h2 className="section-title">{t.studioTitle}</h2>
            <p>{t.studioP1}</p>
            <p>{t.studioP2}</p>
            <button className="btn-glow" onClick={() => setShowInquiryModal(true)}>{t.inquireBtn}</button>
          </div>
          <div className="studio-visual-container">
            <div className="glowing-mesh-scaffold">
              <span>GOTHEBORG STUDIO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section border-t">
        <div className="bb-container contact-grid">
          <div>
            <span className="section-tagline">STUDIO</span>
            <h2 className="section-title">{t.contactTitle}</h2>
            <div className="contact-details">
              <div className="contact-item">
                <h4>{t.contactAddress}</h4>
                <p>{t.contactAddressVal}</p>
              </div>
              <div className="contact-item">
                <h4>EMAIL</h4>
                <p><a href="mailto:james@blackbadger.se">james@blackbadger.se</a></p>
              </div>
              <div className="contact-item">
                <h4>INSTAGRAM</h4>
                <p><a href="https://www.instagram.com/blackbadger/" target="_blank" rel="noopener noreferrer">@blackbadger</a></p>
              </div>
            </div>
          </div>
          <div className="contact-inquiry-box">
            <h3>{t.inquiryTitle}</h3>
            <p>{t.inquiryDesc}</p>
            <button className="btn-glow" style={{ width: '100%', marginTop: '20px' }} onClick={() => setShowInquiryModal(true)}>
              {t.inquireBtn}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bb-footer">
        <div className="bb-container footer-grid">
          <div className="footer-brand">
            <h3>BLACK BADGER</h3>
            <p>{t.footerText}</p>
          </div>
          <div className="footer-links">
            <h4>EXPLORE</h4>
            <ul>
              <li><a href="#home">{t.navHome}</a></li>
              <li><a href="#collections">{t.navCollections}</a></li>
              <li><a href="#watches">{t.navWatches}</a></li>
              <li><a href="#materials">{t.navMaterials}</a></li>
            </ul>
          </div>
        </div>
        <div className="bb-container footer-bottom">
          <p>Copyright © 2026 Black Badger Design. {t.rights}</p>
        </div>
      </footer>

      {/* Inquiry Form Modal Overlay */}
      {showInquiryModal && (
        <div className="inquiry-overlay" onClick={(e) => {
          if (e.target.classList.contains('inquiry-overlay')) setShowInquiryModal(false);
        }}>
          <div className="inquiry-modal">
            <button className="btn-close-modal" onClick={() => setShowInquiryModal(false)}>×</button>
            <h3>{t.inquiryTitle}</h3>
            <p className="modal-desc">{t.inquiryDesc}</p>

            {inquirySent ? (
              <div className="success-message">
                <span>✓</span>
                <p>{lang === 'sv' ? 'Tack! Vi har mottagit din förfrågan.' : 'Thank you! We have received your inquiry.'}</p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit}>
                <div className="form-group">
                  <label>{lang === 'sv' ? 'Namn' : 'Name'}</label>
                  <input type="text" required value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" required value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label>{lang === 'sv' ? 'Ringstorlek (om känd)' : 'Ring Size (if known)'}</label>
                  <input type="text" placeholder="e.g. 62, 10, U" value={formData.size} onChange={e => setFormData(p => ({ ...p, size: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label>{lang === 'sv' ? 'Intresserad av material' : 'Interested in Material'}</label>
                  <select value={formData.material} onChange={e => setFormData(p => ({ ...p, material: e.target.value }))}>
                    <option value="damascus">{lang === 'sv' ? 'Damaskusstål' : 'Damascus Steel'}</option>
                    <option value="carbon">{lang === 'sv' ? 'Kolfiber' : 'Carbon Fiber'}</option>
                    <option value="fordite">{lang === 'sv' ? 'Fordit' : 'Fordite'}</option>
                    <option value="superconductor">{lang === 'sv' ? 'Supraledare' : 'Superconductor'}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>{lang === 'sv' ? 'Meddelande' : 'Message'}</label>
                  <textarea rows="4" required value={formData.msg} onChange={e => setFormData(p => ({ ...p, msg: e.target.value }))}></textarea>
                </div>
                <button type="submit" className="btn-glow" style={{ width: '100%', marginTop: '10px' }}>
                  {lang === 'sv' ? 'Skicka Förfrågan' : 'Submit Build Request'}
                </button>
                <p className="modal-disclaimer">{t.inquiryDisclaimer}</p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
