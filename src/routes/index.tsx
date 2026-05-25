import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone, Mail, BookOpen, Calculator, Code2, Beaker, Palette, Bot, GraduationCap, Sparkles, ArrowRight, Check } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_NUMBER = "2348055894414";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi ClassBridge Academy! I'd like to book a free trial for my child.")}`;
const DIRECT_CALL = "+2348105379294";
const EMAIL = "classbridgeacademy@gmail.com";

const subjects = [
  { icon: Calculator, title: "Mathematics", desc: "Foundations to advanced problem-solving" },
  { icon: BookOpen, title: "Language Arts", desc: "English, Spanish, French, Yoruba & Dutch" },
  { icon: Code2, title: "Coding", desc: "Scratch, Python & JavaScript basics" },
  { icon: Beaker, title: "Sciences", desc: "Curiosity-led, concept-first learning" },
  { icon: GraduationCap, title: "11+ Exam Prep", desc: "Structured prep, proven results" },
  { icon: Bot, title: "STEM & Robotics", desc: "Hands-on building and logic" },
  { icon: Palette, title: "Creative Arts", desc: "Expression, design and craft" },
  { icon: Sparkles, title: "Math Mastery", desc: "Confidence through daily practice" },
];

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ClassBridge Academy on WhatsApp"
      className="group relative inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
      style={{ backgroundColor: "var(--whatsapp)" }}
    >
      <span className="absolute inset-0 rounded-full animate-pulse-ring" />
      <svg viewBox="0 0 24 24" className="size-5 fill-current relative" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
      <span className="relative hidden sm:inline">WhatsApp</span>
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-display font-bold text-lg shadow-md">
            CB
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-primary text-lg">ClassBridge</div>
            <div className="text-[10px] uppercase tracking-widest text-accent font-bold -mt-0.5">Academy</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#subjects" className="hover:text-primary transition">Subjects</a>
          <a href="#why" className="hover:text-primary transition">Why us</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>
        <WhatsAppButton />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-grain">
      <div className="absolute top-0 right-0 -z-10 size-[600px] rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 size-[500px] rounded-full bg-accent/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary mb-6">
            <Sparkles className="size-3.5" /> Connect! Learn! Succeed!
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary leading-[1.05]">
            Your child studies <em className="not-italic text-accent">but still</em> struggles.
          </h1>
          <p className="mt-6 text-2xl font-display font-medium text-foreground/80">
            Let's change that.
          </p>
          <p className="mt-4 text-lg text-muted-foreground max-w-lg">
            Get a personalized tutor that transforms your child's learning journey — confidence, clarity, and real results.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-semibold shadow-[var(--shadow-soft)] hover:opacity-90 transition-all hover:scale-[1.02]"
            >
              Book a Free Trial <ArrowRight className="size-4" />
            </a>
            <a
              href={`tel:${DIRECT_CALL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/15 bg-card px-7 py-4 font-semibold text-primary hover:border-primary/40 transition"
            >
              <Phone className="size-4" /> {DIRECT_CALL}
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground italic">Give it a trial — completely free.</p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem]" style={{ background: "var(--gradient-accent)", opacity: 0.4, filter: "blur(40px)" }} />
          <div className="relative animate-float">
            <img
              src={heroImage}
              alt="Happy student learning with ClassBridge Academy tutor"
              width={1024}
              height={1024}
              className="rounded-[2rem] shadow-[var(--shadow-glow)] object-cover aspect-square w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-border">
              <div className="flex size-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                <GraduationCap className="size-6" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Personalized for</div>
                <div className="font-semibold text-primary text-sm">Every learner</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-2xl shadow-xl px-4 py-3 font-display font-bold">
              1 + 3 = 4 ✓
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Subjects() {
  return (
    <section id="subjects" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-widest text-accent">Our Complete Offering</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-primary">Everything they need to thrive.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From core academics to creativity and code — taught by tutors who actually care.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {subjects.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="size-6" />
              </div>
              <h3 className="mt-5 font-display font-bold text-xl text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    "Carefully matched, vetted tutors",
    "Flexible online sessions, anywhere",
    "Progress reports parents understand",
    "Trial your first session free",
    "Curriculum-aligned across regions",
    "Confidence-first teaching style",
  ];
  return (
    <section id="why" className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 bg-grain opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-secondary">Why ClassBridge</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-primary-foreground">
            She's tired of <em className="not-italic text-secondary">searching</em> — but you don't have to.
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/80 max-w-lg">
            Stop scrolling through endless after-school programs. We are here — a complete, personalized solution your child will actually look forward to.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-7 py-4 font-bold shadow-xl hover:scale-105 transition-transform"
          >
            We Are Here — Let's Talk <ArrowRight className="size-4" />
          </a>
        </div>
        <ul className="grid sm:grid-cols-2 gap-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-xl bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 p-4">
              <span className="mt-0.5 flex size-6 items-center justify-center rounded-full bg-secondary text-secondary-foreground shrink-0">
                <Check className="size-3.5" strokeWidth={3} />
              </span>
              <span className="text-primary-foreground font-medium text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden border border-border bg-card shadow-[var(--shadow-soft)]">
          <div className="absolute top-0 right-0 size-64 rounded-full bg-secondary/20 blur-3xl -z-0" />
          <div className="absolute bottom-0 left-0 size-64 rounded-full bg-accent/20 blur-3xl -z-0" />
          <div className="relative">
            <div className="text-xs font-bold uppercase tracking-widest text-accent">Get in touch</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-primary">
              Book your child's free trial today.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              One quick chat is all it takes. Reach us on WhatsApp, call directly, or send an email.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-border p-5 hover:border-primary/40 transition flex flex-col items-center gap-2"
              >
                <div className="flex size-12 items-center justify-center rounded-xl text-white" style={{ backgroundColor: "var(--whatsapp)" }}>
                  <MessageCircle className="size-6" />
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">WhatsApp</div>
                <div className="font-semibold text-primary">+2348055894414</div>
              </a>
              <a href={`tel:${DIRECT_CALL}`} className="group rounded-2xl border border-border p-5 hover:border-primary/40 transition flex flex-col items-center gap-2">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Phone className="size-6" />
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Direct Call</div>
                <div className="font-semibold text-primary">{DIRECT_CALL}</div>
              </a>
              <a href={`mailto:${EMAIL}`} className="group rounded-2xl border border-border p-5 hover:border-primary/40 transition flex flex-col items-center gap-2">
                <div className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Mail className="size-6" />
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Email</div>
                <div className="font-semibold text-primary text-sm break-all">{EMAIL}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-display font-bold text-sm">CB</div>
          <span className="font-display font-bold text-primary">ClassBridge Academy</span>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} ClassBridge Academy. Connect! Learn! Succeed!</p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full text-white shadow-2xl hover:scale-110 transition-transform animate-pulse-ring"
      style={{ backgroundColor: "var(--whatsapp)" }}
    >
      <svg viewBox="0 0 24 24" className="size-7 fill-current" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Subjects />
        <Why />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
