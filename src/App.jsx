import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Shield,
  TerminalSquare,
  Code2,
  Lock,
  Globe2,
  Sparkles,
  Rocket,
  Cpu,
  FileText,
  Quote,
} from "lucide-react";
import { motion } from "framer-motion";

const content = {
  en: {
    nav: { home: "Home", about: "About", portfolio: "Projects", skills: "Skills", services: "Services", experience: "Experience", testimonials: "Testimonials", contact: "Contact" },
    hero: {
      kicker: "I'm",
      name: "Mohamed Abdelaal Saad",
      title: "Cybersecurity Engineer in Training | Future Exploit Developer",
      usp: "I design and secure digital systems that can’t be broken — merging exploit development with full‑stack engineering to create solutions that are both powerful and unhackable.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Download CV"
    },
    about: {
      heading: "About Me",
      body: `I'm a 3rd‑year Information & Communication Engineering student at Helwan University, ranked top 4 out of 150+ peers. Passionate about exploit development, reverse engineering, and penetration testing. Skilled in C++, Python, Java, Assembly. Proven leadership across technical teams and trusted as class leader for 3+ years.`
    },
    projects: {
      heading: "Selected Projects",
      list: [
        { title: "Threat Intelligence Platform (In Progress)", desc: "Designing a modular TIP that aggregates OSINT, correlates IoCs, and exposes a secure API/dashboard for SOC workflows.", tech: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "Docker"], link: "#", image: "/my-portfolio/project1.png" },
        { title: "Graph Analysis Tool (Qt GUI)", desc: "Built GUI app to load graphs, compute MST & shortest paths (Prim, Kruskal, Dijkstra). Led a 4‑person team and delivered an A+ project.", tech: ["Qt", "C++"], link: "#", image: "/my-portfolio/project2.png" },
        { title: "C++ CLI Projects", desc: "Snake Game (real‑time input, collision detection) and Car Management System (OOP principles, file persistence).", tech: ["C++", "Raylib"], link: "#", image: "/my-portfolio/project3.png" }
      ]
    },
    skills: {
      heading: "Skills",
      list: ["C++", "Python", "Java", "Assembly", "Linux", "Networking", "Exploit Development", "Reverse Engineering", "Penetration Testing", "Full‑Stack Development"]
    },
    services: {
      heading: "Services",
      items: [
        { icon: <Code2 className="w-6 h-6" />, title: "Full‑Stack Secure Development", desc: "Design and build performant web applications with secure architecture." },
        { icon: <Shield className="w-6 h-6" />, title: "Penetration Testing", desc: "Hands‑on exploitation, OWASP Top 10, vulnerability discovery, and remediation." },
        { icon: <Lock className="w-6 h-6" />, title: "Exploit Research", desc: "Reverse engineering, exploit dev (early stage), and vulnerability analysis." }
      ]
    },
    experience: {
      heading: "Experience & Training",
      bullets: [
        "ITI Penetration Testing Track (2025): 20+ PortSwigger labs, OWASP Top 10 exploitation, enterprise Cisco networking labs.",
        "Fortinet / DEPI Advanced Cybersecurity Program (2025).",
        "ITI Cybersecurity for Beginners (2025).",
        "Zewail City AI Internship (2023)."
      ]
    },
    testimonials: {
      heading: "Testimonials",
      list: [
        { quote: "Mohamed is a disciplined and sharp learner, always pushing the limits.", name: "Instructor, ITI" },
        { quote: "A natural leader who delivers high‑quality projects under pressure.", name: "Team Member" }
      ]
    },
    contact: {
      heading: "Contact",
      text: "Let’s collaborate on elite projects only.",
      emailLabel: "Email",
      placeholders: { name: "Your name", email: "Your email", message: "Your message" },
      send: "Send Message"
    },
    footer: { rights: "© "+new Date().getFullYear()+" Mohamed Abdelaal. All rights reserved." }
  },
  ar: {
    nav: { home: "الرئيسية", about: "عنّي", portfolio: "المشاريع", skills: "المهارات", services: "الخدمات", experience: "الخبرات", testimonials: "التوصيات", contact: "تواصل" },
    hero: { kicker: "أنا",
      name: "محمد عبد العال سعد",
      title: "مهندس أمن سيبراني تحت التدريب | مطور استغلالات مستقبلي",
      usp: "أبني وأؤمّن أنظمة رقمية لا يمكن اختراقها — أجمع بين تطوير الاستغلالات والهندسة البرمجية الكاملة لصناعة حلول قوية وآمنة.",
      ctaPrimary: "استعرض المشاريع", 
      ctaSecondary: "تحميل السيرة الذاتية" },
    about: { heading: "من أنا", body: `طالب بالفرقة الثالثة هندسة اتصالات ومعلومات بجامعة حلوان، ترتيبي الرابع على أكثر من 150 طالب. شغوف بتطوير الاستغلالات والهندسة العكسية واختبار الاختراق. متمكن من C++، بايثون، جافا، اسمبلي. قائد موثوق لفريق دراسي لأكثر من 3 سنوات.` },
    projects: { heading: "مختارات من الأعمال", list: [ { title: "منصة استخبارات التهديدات (قيد التنفيذ)", desc: "تصميم TIP يجمع مصادر OSINT ويربط مؤشرات الاختراق ويوفر لوحة تحكم وواجهة API آمنة.", tech: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "Docker"], link: "#", image: "/my-portfolio/project1.png" }, { title: "أداة تحليل الرسوم (Qt GUI)", desc: "تطبيق GUI لحساب MST وأقصر مسار باستخدام Prim/Kruskal/Dijkstra. قادت فريقًا من 4 طلاب وأنجز المشروع بدرجة A+.", tech: ["Qt", "C++"], link: "#", image: "/my-portfolio/project2.png" }, { title: "مشاريع C++ CLI", desc: "لعبة Snake ونظام إدارة السيارات باستخدام مبادئ OOP وتخزين الملفات.", tech: ["C++", "Raylib"], link: "#", image: "/my-portfolio/project3.png" } ] },
    skills: { heading: "المهارات", list: ["++C", "بايثون", "جافا", "اسمبلي", "لينكس", "الشبكات", "تطوير الاستغلالات", "الهندسة العكسية", "اختبار الاختراق", "التطوير الكامل"] },
    services: { heading: "الخدمات", items: [ { icon: <Code2 className="w-6 h-6" />, title: "تطوير برمجيات آمن", desc: "تصميم وبناء تطبيقات ويب قوية بهندسة آمنة." }, { icon: <Shield className="w-6 h-6" />, title: "اختبار اختراق", desc: "استغلال عملي واكتشاف الثغرات مع تقديم حلول عملية." }, { icon: <Lock className="w-6 h-6" />, title: "أبحاث الاستغلال", desc: "هندسة عكسية وتطوير استغلالات وتحليل الثغرات." } ] },
    experience: { heading: "الخبرات والتدريب", bullets: [ "مسار اختبار الاختراق ITI (2025): أكثر من 20 مختبر PortSwigger، استغلال OWASP Top 10، مختبرات Cisco.", "برنامج Fortinet / DEPI للأمن السيبراني المتقدم (2025).", "مبتدئ الأمن السيبراني ITI (2025).", "تدريب Zewail City AI (2023)." ] },
    testimonials: { heading: "التوصيات", list: [ { quote: "محمد متعلم منضبط وذكي، دائمًا يدفع بنفسه إلى الأمام.", name: "مدرب ITI" }, { quote: "قائد بالفطرة يقدم مشاريع عالية الجودة تحت الضغط.", name: "زميل فريق" } ] },
    contact: { heading: "التواصل", text: "للتعاون الجاد فقط.", emailLabel: "البريد", placeholders: { name: "اسمك", email: "بريدك الإلكتروني", message: "رسالتك" }, send: "إرسال" },
    footer: { rights: "© "+new Date().getFullYear()+" محمد عبد العال. جميع الحقوق محفوظة." }
  }
};

const Section = ({ id, children }) => (
  <section id={id} className="scroll-mt-24">{children}</section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide uppercase">
    <Sparkles className="w-3.5 h-3.5" /> {children}
  </span>
);

export default function App() {
  const [lang, setLang] = useState("en");
  const [darkMode, setDarkMode] = useState(true);
  const t = useMemo(() => content[lang], [lang]);

  return (
   <div
  dir={lang === "ar" ? "rtl" : "ltr"}
  className="min-h-screen text-slate-100 bg-gradient-to-br from-black via-slate-900 to-zinc-900"
>
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/70 border-b border-white/10">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-widest text-xl">MA</a>
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li><a href="#home" className="hover:text-green-400">{t.nav.home}</a></li>
            <li><a href="#about" className="hover:text-green-400">{t.nav.about}</a></li>
            <li><a href="#portfolio" className="hover:text-green-400">{t.nav.portfolio}</a></li>
            <li><a href="#skills" className="hover:text-green-400">{t.nav.skills}</a></li>
            <li><a href="#services" className="hover:text-green-400">{t.nav.services}</a></li>
            <li><a href="#experience" className="hover:text-green-400">{t.nav.experience}</a></li>
            <li><a href="#testimonials" className="hover:text-green-400">{t.nav.testimonials}</a></li>
            <li><a href="#contact" className="hover:text-green-400">{t.nav.contact}</a></li>
          </ul>
          <div className="flex items-center gap-3">
            <button aria-label="Toggle language" onClick={() => setLang(lang === "en" ? "ar" : "en")} className="rounded-xl border border-white/10 px-3 py-1.5 text-xs hover:bg-white/10">
              {lang === "en" ? "AR" : "EN"}
            </button>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <Section id="home">
        <div className={`mx-auto max-w-6xl px-4 pt-16 pb-20 md:pt-24 md:pb-28 ${lang === 'ar' ? 'text-right' : ''}`}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Pill>{t.hero.kicker}</Pill>
           <h1 className={`${lang === "ar" ? "text-right" : "text-left"} mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-green-400`}>
  {t.hero.name}
</h1>

<p className={`${lang === "ar" ? "text-right" : "text-left"} mt-3 text-lg md:text-xl text-slate-300`}>
  {t.hero.title}
</p>

            <p className={`mt-6 max-w-3xl text-slate-300/90 ${lang === "ar" ? "text-right" : "text-left"}`}>
  {t.hero.usp}
</p>
            <div className={`mt-8 flex ${lang === 'ar' ? 'justify-end' : 'justify-start'} gap-3`}>
              <a href="#portfolio" className="inline-flex items-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 px-5 py-3 text-sm font-semibold"><TerminalSquare className="w-4 h-4" /> {t.hero.ctaPrimary}</a>
              <a href="/my-portfolio/Resume.pdf" download className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-700 px-5 py-3 text-sm font-semibold shadow-lg shadow-green-900/30"><FileText className="w-4 h-4" /> {t.hero.ctaSecondary}</a>
            </div>
            <div className="mt-10 w-40 h-40 rounded-full overflow-hidden border-4 border-green-500 shadow-lg">
              <img src="/my-portfolio/profile.jpg" alt="Mohamed Abdelaal" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about">
        <div className={`mx-auto max-w-6xl px-4 py-16 ${lang === 'ar' ? 'text-right' : ''}`}>
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-green-400"><Globe2 className="w-6 h-6" /> {t.about.heading}</h2>
          <p className="mt-4 max-w-4xl text-slate-300 leading-relaxed">{t.about.body}</p>
        </div>
      </Section>

     {/* PROJECTS */}
      <Section id="portfolio">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-green-400"><Rocket className="w-6 h-6" /> {t.projects.heading}</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.projects.list.map((p, idx) => (
              <motion.article key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx*0.05 }} className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-green-300">{p.title}</h3>
                  <Cpu className="w-5 h-5 text-green-400" />
                </div>
                <p className="mt-2 text-sm text-slate-300/90 min-h-[72px]">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((tch) => (
                    <span key={tch} className="text-[11px] rounded-full bg-white/5 border border-white/10 px-2 py-1">{tch}</span>
                  ))}
                </div>
                {p.image && <img src={p.image} alt={p.title} className="mt-4 rounded-lg border border-white/10" />}
                <a href={p.link} className="mt-4 inline-flex items-center gap-2 text-sm hover:underline text-green-400">View details <ArrowRight className="w-4 h-4" /></a>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-green-400"><Code2 className="w-6 h-6" /> {t.skills.heading}</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {t.skills.list.map((skill, i) => (
              <span key={i} className="text-sm rounded-full bg-white/5 border border-white/10 px-3 py-1">{skill}</span>
            ))}
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services">
        <div className={`mx-auto max-w-6xl px-4 py-16 ${lang === 'ar' ? 'text-right' : ''}`}>
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-green-400"><Shield className="w-6 h-6" /> {t.services.heading}</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.items.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i*0.05 }} className={`rounded-2xl border border-white/10 p-6 ${darkMode ? 'bg-black/40' : 'bg-white/70 text-black'}`}>
                <div className="text-green-400 mb-3">{s.icon}</div>
                <h3 className="text-lg font-semibold text-green-300">{s.title}</h3>
                <p className="mt-2 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience">
        <div className={`mx-auto max-w-6xl px-4 py-16 ${lang === 'ar' ? 'text-right' : ''}`}>
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-green-400"><Cpu className="w-6 h-6" /> {t.experience.heading}</h2>
          <ul className="mt-6 space-y-3 list-disc list-inside">
            {t.experience.bullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section id="testimonials">
        <div className={`mx-auto max-w-6xl px-4 py-16 ${lang === 'ar' ? 'text-right' : ''}`}>
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-green-400"><Quote className="w-6 h-6" /> {t.testimonials.heading}</h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {t.testimonials.list.map((ts, i) => (
              <motion.blockquote key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i*0.05 }} className={`rounded-2xl border border-white/10 p-6 ${darkMode ? 'bg-black/40' : 'bg-white/70 text-black'}`}>
                <p className="italic">“{ts.quote}”</p>
                <footer className="mt-4 text-green-400 font-semibold">— {ts.name}</footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <div className={`mx-auto max-w-6xl px-4 py-16 ${lang === 'ar' ? 'text-right' : ''}`}>
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-green-400"><Mail className="w-6 h-6" /> {t.contact.heading}</h2>
          <p className="mt-4">{t.contact.text}</p>
          <form className="mt-6 grid gap-4 max-w-2xl">
            <input type="text" placeholder={t.contact.placeholders.name} className={`rounded-xl border border-white/10 px-4 py-3 ${darkMode ? 'bg-black/40' : 'bg-white/70 text-black'}`} />
            <input type="email" placeholder={t.contact.placeholders.email} className={`rounded-xl border border-white/10 px-4 py-3 ${darkMode ? 'bg-black/40' : 'bg-white/70 text-black'}`} />
            <textarea placeholder={t.contact.placeholders.message} rows="4" className={`rounded-xl border border-white/10 px-4 py-3 ${darkMode ? 'bg-black/40' : 'bg-white/70 text-black'}`} />
            <button type="submit" className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-700 px-5 py-3 text-sm font-semibold shadow-lg shadow-green-900/30">{t.contact.send}</button>
          </form>
          <div className="mt-8 flex gap-6">
            <a href="https://github.com/mo7amed-abdelaal" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-green-400"><Github className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/mohamed-abdelaal-saad/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-green-400"><Linkedin className="w-6 h-6" /></a>
            <a href="mailto:moabdelaal442004@gmail.com" aria-label="Email" className="hover:text-green-400"><Mail className="w-6 h-6" />
</a>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-6 mt-12 text-center text-sm">
        <div className="flex justify-center items-center gap-4">
          <span>{t.footer.rights}</span>
        </div>
      </footer>
    </div>
  );
}
