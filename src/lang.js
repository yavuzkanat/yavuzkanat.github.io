let currentLang = "tr";

const translations = {
  en: {
    siteTitle: "Yavuzkanat | Portfolio",
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",
    introTitle: "Hi — I'm Ahmet",
    introText:
      "I'm a 2nd-year Information Systems Engineering student focusing on backend development using Java, Python, Go, and Node.js. Below are my projects and contact details — feel free to explore.",
    aboutTitle: "About Me",
    aboutText:
      "University: Mehmet Akif Ersoy University — Department of Information Systems Engineering. Focused on open-source projects and backend development. Check my GitHub for more.",
    projectsTitle: "Projects",
    contactTitle: "Contact",
    contactMail: "Email: ahmet@yavuzkanat.dev",
    footerText: "© 2025 Ahmet Yavuzkanat — Crafted with dark vibes.",
    translateBtn: "Translate TR",
  },

  tr: {
    siteTitle: "Yavuzkanat | Portföy",
    navAbout: "Hakkımda",
    navProjects: "Projeler",
    navContact: "İletişim",
    introTitle: "Merhaba — ben Ahmet",
    introText:
      "İkinci sınıf Bilişim Sistemleri öğrencisiyim. Backend, Java, Python, Go konusunda çalışıyorum. Aşağıda projelerim ve iletişim bilgilerim var — daha fazlasını eklemeni bekliyorum.",
    aboutTitle: "Hakkımda",
    aboutText:
      "Üniversite: Mehmet Akif Ersoy Üniversitesi — Bölüm: Bilişim Sistemleri Mühendisliği. Staj ve açık kaynak projelerine odaklı. İşe alım için GitHub profilimi inceleyebilirsiniz.",
    projectsTitle: "Projeler",
    contactTitle: "İletişim",
    contactMail: "E-posta: ahmet@yavuzkanat.dev",
    footerText: "© 2025 Ahmet Yavuzkanat — Tutku ve kodla geliştirildi.",
    translateBtn: "Translate EN",
  },
};

function toggleLanguage() {
  currentLang = currentLang === "tr" ? "en" : "tr";
  const t = translations[currentLang];

  // Sayfa başlığı
  document.title = t.siteTitle;

  // Navbar linkleri
  const aboutLink = document.querySelector('.nav-links a[href="#about"]');
  const projectsLink = document.querySelector('.nav-links a[href="#projects"]');
  const contactLink = document.querySelector('.nav-links a[href="#contact"]');
  if (aboutLink) aboutLink.textContent = t.navAbout;
  if (projectsLink) projectsLink.textContent = t.navProjects;
  if (contactLink) contactLink.textContent = t.navContact;

  // Intro kısmı
  const introTitle = document.getElementById("intro-title");
  const introText = document.getElementById("intro-text");
  if (introTitle) introTitle.textContent = t.introTitle;
  if (introText) introText.textContent = t.introText;

  // Hakkımda
  const aboutTitle = document.getElementById("about-title");
  const aboutText = document.getElementById("about-text");
  if (aboutTitle) aboutTitle.textContent = t.aboutTitle;
  if (aboutText) aboutText.textContent = t.aboutText;

  // Projeler
  const projectsTitle = document.getElementById("projects-title");
  if (projectsTitle) projectsTitle.textContent = t.projectsTitle;

  // İletişim
  const contactTitle = document.getElementById("contact-title");
  const contactMail = document.getElementById("contact-mail");
  if (contactTitle) contactTitle.textContent = t.contactTitle;
  if (contactMail) contactMail.textContent = t.contactMail;

  // Footer
  const footer = document.querySelector("footer .small");
  if (footer) footer.textContent = t.footerText;

  // Buton
  const btn = document.querySelector(".lang-btn");
  if (btn) btn.textContent = t.translateBtn;
}