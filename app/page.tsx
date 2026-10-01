"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type SVGProps,
  type MouseEvent as ReactMouseEvent,
} from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function BaseIcon({ children, size = 18, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function ArrowDown(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </BaseIcon>
  );
}

function ArrowUpRight(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </BaseIcon>
  );
}

function Github(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3" />
      <path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.56 8.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </BaseIcon>
  );
}

function Linkedin(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-6.5a1.5 1.5 0 0 0-3 0V21h-4v-7a6 6 0 0 1 6-6Z" />
      <path d="M2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </BaseIcon>
  );
}

function Mail(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </BaseIcon>
  );
}

function Menu(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M3 6h18" />
      <path d="M3 12h18" />
      <path d="M3 18h18" />
    </BaseIcon>
  );
}

function X(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </BaseIcon>
  );
}

function Download(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3v12" />
      <path d="m7 19 5 5 5-5" />
      <path d="M4 21h16" />
    </BaseIcon>
  );
}

function ExternalLink(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14 3h7v7" />
      <path d="M10 14 21 3" />
      <path d="M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
    </BaseIcon>
  );
}

function MapPin(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </BaseIcon>
  );
}

function Code2(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m8 8-5 4 5 4" />
      <path d="m16 8 5 4-5 4" />
      <path d="m14 4-4 16" />
    </BaseIcon>
  );
}

function Server(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="4" y="2" width="16" height="7" rx="2" />
      <rect x="4" y="15" width="16" height="7" rx="2" />
      <path d="M8 5h.01" />
      <path d="M8 18h.01" />
      <path d="M12 5h.01" />
      <path d="M12 18h.01" />
    </BaseIcon>
  );
}

function BrainCircuit(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M9 2v2" />
      <path d="M15 2v2" />
      <path d="M9 20v2" />
      <path d="M15 20v2" />
      <path d="M5 9.5V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v1.5" />
      <path d="M5 14.5V16a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1.5" />
      <path d="M9 12h6" />
      <path d="M12 9v6" />
      <path d="M8 7 6.5 5.5" />
      <path d="M16 7l1.5-1.5" />
      <path d="M8 17l-1.5 1.5" />
      <path d="M16 17l1.5 1.5" />
    </BaseIcon>
  );
}

function Cloud(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M17 18H6.5A4.5 4.5 0 0 1 6 9.5a5.5 5.5 0 0 1 10.69-1.18A3.5 3.5 0 0 1 17 18Z" />
    </BaseIcon>
  );
}

function Camera(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="3.5" />
    </BaseIcon>
  );
}

/* ---------- animated pink cursor ---------- */
function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.documentElement.classList.add("has-cursor");

    const cv = canvas.current!;
    const ctx = cv.getContext("2d")!;
    const d = dot.current!;
    const r = ring.current!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      cv.width = w * dpr;
      cv.height = h * dpr;
      cv.style.width = w + "px";
      cv.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    type P = { x: number; y: number; vx: number; vy: number; life: number; size: number };
    const ps: P[] = [];
    const spawn = (x: number, y: number, n: number, speed: number) => {
      for (let i = 0; i < n; i++) {
        ps.push({
          x,
          y,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed - 0.2,
          life: 1,
          size: 2 + Math.random() * 3.5,
        });
      }
    };

    let mx = -100, my = -100, rx = -100, ry = -100, lx = -100, ly = -100;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      d.style.opacity = "1";
      r.style.opacity = "1";
      if (Math.hypot(mx - lx, my - ly) > 7) {
        spawn(mx, my, 1, 1.2);
        lx = mx;
        ly = my;
      }
      const t = e.target as HTMLElement | null;
      const hovering = !!t?.closest?.("a, button, [data-hover]");
      d.classList.toggle("is-hover", hovering);
      r.classList.toggle("is-hover", hovering);
    };
    const onDown = () => {
      d.classList.add("is-down");
      r.classList.add("is-down");
      spawn(mx, my, 18, 7);
    };
    const onUp = () => {
      d.classList.remove("is-down");
      r.classList.remove("is-down");
    };
    const onLeave = () => {
      d.style.opacity = "0";
      r.style.opacity = "0";
    };

    let raf = 0;
    const tick = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      d.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      r.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;

      ctx.clearRect(0, 0, w, h);
      for (let i = ps.length - 1; i >= 0; i--) {
        const p = ps[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.025;
        if (p.life <= 0) {
          ps.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.fillStyle = `rgba(244, 114, 182, ${p.life * 0.85})`;
        ctx.shadowColor = "#f472b6";
        ctx.shadowBlur = 12;
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("resize", resize);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("resize", resize);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <canvas ref={canvas} className="cursor-canvas" aria-hidden="true" />
      <div ref={ring} className="cursor-pos" aria-hidden="true">
        <span className="cursor-ring" />
      </div>
      <div ref={dot} className="cursor-pos" aria-hidden="true">
        <span className="cursor-dot" />
      </div>
    </>
  );
}

function ScrollBar() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const on = () => {
      const el = document.documentElement;
      const p = el.scrollTop / (el.scrollHeight - el.clientHeight || 1);
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return <div ref={ref} className="scroll-bar" />;
}

function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
    </div>
  );
}

/* ---------- 3D helpers ---------- */
function Tilt({
  children,
  className = "",
  max = 10,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const move = (e: ReactMouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const b = el.getBoundingClientRect();
    const px = (e.clientX - b.left) / b.width;
    const py = (e.clientY - b.top) / b.height;
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * max * 2}deg) rotateY(${(px - 0.5) * max * 2}deg) scale3d(1.02, 1.02, 1.02)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };
  const leave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={leave} className={`tilt ${className}`}>
      {children}
      <span className="tilt-glare" />
    </div>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
  variant,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "flip";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal3d ${variant === "flip" ? "flip" : ""} ${shown ? "is-in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- photos ---------- */
function PhotoFrame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const img = useRef<HTMLImageElement>(null);

  // catches images that already failed before React hydrated
  useEffect(() => {
    const el = img.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-pink-400/20 bg-gradient-to-br from-pink-500/25 via-fuchsia-500/10 to-transparent ${className}`}
    >
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={img}
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center text-xs text-pink-200/70">
          <Camera size={26} />
          <span>Add your photo at</span>
          <code className="rounded bg-black/30 px-2 py-1">public{src}</code>
        </div>
      )}
    </div>
  );
}

function HeroPhoto() {
  return (
    <div className="float mx-auto w-full max-w-xs lg:max-w-sm">
      <Tilt className="rounded-[2.5rem]" max={12}>
        <div className="photo-frame">
          <span className="sticker sparkle -left-5 top-10 text-3xl text-pink-200">✦</span>
          <span className="sticker sparkle -right-4 bottom-24 text-2xl text-fuchsia-200 [animation-delay:0.8s]">✦</span>
          <span className="sticker heart-pop -right-4 -top-5 text-4xl text-pink-300">♥</span>
          <span className="sticker heart-pop -left-3 bottom-10 text-2xl text-pink-400 [animation-delay:0.5s]">♥</span>

          <div className="rounded-[2rem] bg-white/95 p-2">
            <PhotoFrame
              src="/photos/profile.jpeg"
              alt="Aden Sial"
              className="aspect-[4/5] w-full"
            />
          </div>

          <div className="photo-tag">✦ Aden Sial ✦</div>
        </div>
      </Tilt>
    </div>
  );
}

const experiences: {
  company: string;
  role: string;
  date: string;
  tags: string[];
  points: string[];
  logo?: string; // optional: e.g. "/logos/densefusion.png" in /public
}[] = [
  {
    company: "DenseFusion — NUST",
    role: "DevOps Intern",
    date: "Aug 2025 – Dec 2025",
    tags: ["OpenStack", "Docker", "Kubernetes"],
    points: [
      "Managed cloud infrastructure using OpenStack.",
      "Containerized and orchestrated applications using Docker and Kubernetes.",
    ],
  },
  {
    company: "RapidsAI — NUST",
    role: "AI Intern",
    date: "Aug 2025 – Dec 2025",
    tags: ["Computer Vision", "YOLO"],
    points: [
      "Worked on computer vision projects using YOLO.",
      "Contributed to an AI-based exam surveillance system.",
    ],
  },
  {
    company: "ZTBL Bank",
    role: ".NET Development Intern",
    date: "Jun 2025 – Jul 2025",
    tags: ["C#", "ASP.NET MVC", "Oracle"],
    points: [
      "Developed internal applications using ASP.NET MVC and C#.",
      "Worked with Oracle databases for enterprise systems.",
    ],
  },
  {
    company: "Cyblytics Lab — FAST NUCES",
    role: "Mobile Development Intern",
    date: "Jun 2024 – Aug 2024",
    tags: ["Java", "Android", "Firebase"],
    points: [
      "Developed Android applications using Java and Firebase.",
      "Contributed to both frontend and backend components.",
    ],
  },
];

function ExperienceTimeline() {
  const wrap = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLDivElement>(null);
  const nodes = useRef<(HTMLDivElement | null)[]>([]);
  const [reached, setReached] = useState(0); // nodes the line has passed (live)
  const [shown, setShown] = useState(0); // cards revealed so far (sticky)

  useEffect(() => {
    const update = () => {
      const el = wrap.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const line = window.innerHeight * 0.6;
      const p = Math.min(1, Math.max(0, (line - rect.top) / rect.height));
      if (fill.current) fill.current.style.height = `${p * 100}%`;

      let count = 0;
      let seen = 0;
      nodes.current.forEach((n, i) => {
        if (!n) return;
        const top = n.getBoundingClientRect().top;
        if (top < line) count = i + 1;
        if (top < window.innerHeight * 0.88) seen = i + 1;
      });
      setReached(count);
      setShown((prev) => Math.max(prev, seen));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={wrap} className="relative">
      {/* track + glowing fill */}
      <div className="absolute bottom-0 left-4 top-0 w-px -translate-x-1/2 bg-white/10 md:left-1/2" />
      <div
        ref={fill}
        className="tl-fill absolute left-4 top-0 w-[3px] -translate-x-1/2 md:left-1/2"
        style={{ height: 0 }}
      />

      {experiences.map((item, i) => {
        const on = reached > i;
        const visible = shown > i;
        const right = i % 2 === 1;
        const initials = item.company
          .split(/[\s—-]+/)
          .filter(Boolean)
          .slice(0, 2)
          .map((w) => w[0])
          .join("")
          .toUpperCase();

        return (
          <div key={item.company} className="relative pb-14 last:pb-0">
            <div
              ref={(n) => {
                nodes.current[i] = n;
              }}
              className={`tl-node ${on ? "is-on" : ""}`}
            />

            <div
              className={`tl-card ${right ? "is-right" : ""} ${visible ? "is-in" : ""} pl-12 md:w-[calc(50%-2.5rem)] md:pl-0 ${right ? "md:ml-auto" : ""}`}
            >
              <Tilt
                max={5}
                className={`rounded-2xl border bg-white/[0.03] p-6 ${on ? "border-pink-400/40" : "border-white/10"}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-pink-400 to-fuchsia-500 text-sm font-black text-[#1a0512] shadow-[0_0_20px_rgba(244,114,182,.4)]">
                    {item.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={item.logo} alt={item.company} className="h-full w-full object-cover" />
                    ) : (
                      initials
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-pink-400">{item.company}</p>
                    <h3 className="mt-1 text-xl font-bold">{item.role}</h3>
                  </div>

                  <span className="text-xs font-bold text-pink-300/40">
                    0{i + 1}
                  </span>
                </div>

                <span className="mt-4 inline-block rounded-full border border-pink-400/30 bg-pink-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-pink-300">
                  {item.date}
                </span>

                <ul className="mt-4 space-y-2 text-zinc-400">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex gap-3 leading-7">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/5 px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Tilt>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- icons for viewer ---------- */
function ExpandIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" />
    </BaseIcon>
  );
}
function CloseIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </BaseIcon>
  );
}
function ChevLeft(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M15 5l-7 7 7 7" />
    </BaseIcon>
  );
}
function ChevRight(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M9 5l7 7-7 7" />
    </BaseIcon>
  );
}

/* ---------- count-up number ---------- */
function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const step = (t: number) => {
          const p = Math.min(1, (t - t0) / 1200);
          setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return <span ref={ref}>{n}</span>;
}

const aboutCards = [
  {
    badge: "</>",
    title: "Backend & APIs",
    text: "Building REST APIs and services with Node.js, Express and FastAPI, backed by PostgreSQL.",
  },
  {
    badge: "AI",
    title: "AI & Computer Vision",
    text: "YOLO-based detection and AI-powered applications, including my final year project.",
  },
  {
    badge: "K8s",
    title: "DevOps",
    text: "Containerizing and orchestrating apps with Docker and Kubernetes, and managing OpenStack infrastructure.",
  },
  {
    badge: "APP",
    title: "Mobile & IoT",
    text: "Android apps built with Java and Firebase, connected to ESP32 hardware.",
  },
];

/* ---------- full-screen image viewer ---------- */
type ViewerImage = { src: string; alt: string };

function Lightbox({
  images,
  start,
  onClose,
}: {
  images: ViewerImage[];
  start: number;
  onClose: () => void;
}) {
  const [i, setI] = useState(start);
  const [zoom, setZoom] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");
  const box = useRef<HTMLDivElement>(null);
  const many = images.length > 1;

  const go = (d: number) => {
    setZoom(false);
    setI((p) => (p + d + images.length) % images.length);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && images.length > 1) go(1);
      if (e.key === "ArrowLeft" && images.length > 1) go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleFullscreen = () => {
    const el = box.current;
    if (!el) return;
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    else el.requestFullscreen?.().catch(() => {});
  };

  const pan = (e: ReactMouseEvent<HTMLImageElement>) => {
    const b = e.currentTarget.getBoundingClientRect();
    setOrigin(
      `${((e.clientX - b.left) / b.width) * 100}% ${((e.clientY - b.top) / b.height) * 100}%`
    );
  };

  const btn =
    "flex h-11 w-11 items-center justify-center rounded-full border border-pink-400/40 bg-black/50 text-pink-100 transition hover:bg-pink-400/25";
  const current = images[i];

  return createPortal(
    <div
      ref={box}
      className="fixed inset-0 z-[9990] flex items-center justify-center bg-[#0d0510]/95 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <div
        className="absolute left-0 right-0 top-0 flex items-center justify-between p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="rounded-full bg-black/40 px-4 py-2 text-xs font-semibold text-pink-200">
          {i + 1} / {images.length}
        </span>
        <div className="flex gap-3">
          <button type="button" className={btn} onClick={toggleFullscreen} aria-label="Toggle full screen">
            <ExpandIcon size={18} />
          </button>
          <button type="button" className={btn} onClick={onClose} aria-label="Close viewer">
            <CloseIcon size={18} />
          </button>
        </div>
      </div>

      {many && (
        <>
          <button
            type="button"
            className={`${btn} absolute left-4 top-1/2 -translate-y-1/2`}
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Previous image"
          >
            <ChevLeft size={20} />
          </button>
          <button
            type="button"
            className={`${btn} absolute right-4 top-1/2 -translate-y-1/2`}
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Next image"
          >
            <ChevRight size={20} />
          </button>
        </>
      )}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={current.src}
        alt={current.alt}
        data-hover
        draggable={false}
        onClick={(e) => {
          e.stopPropagation();
          pan(e);
          setZoom((z) => !z);
        }}
        onMouseMove={zoom ? pan : undefined}
        style={{ transformOrigin: origin }}
        className={`max-h-[84vh] max-w-[92vw] select-none rounded-2xl object-contain shadow-[0_0_90px_rgba(244,114,182,.35)] transition-transform duration-300 ${zoom ? "scale-[2]" : "scale-100"}`}
      />

      <p
        className="absolute bottom-5 left-1/2 w-[90vw] -translate-x-1/2 text-center text-xs text-pink-200/70"
        onClick={(e) => e.stopPropagation()}
      >
        {current.alt} · click image to zoom · Esc to close
      </p>
    </div>,
    document.body
  );
}

/* ---------- FYP project image(s) ---------- */
// Add more entries here to get a slideshow with arrows in the viewer.
const FYP_IMAGES: ViewerImage[] = [
  {
    src: "/photos/photo.jpeg",
    alt: "AI exam surveillance system detecting students in a classroom",
  },
];

function FypImage() {
  const [failed, setFailed] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const main = FYP_IMAGES[active];

  return (
    <>
      <div className="overflow-hidden rounded-3xl border border-pink-400/30 bg-black/40 shadow-[0_0_70px_rgba(244,114,182,.25)]">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-pink-400/80" />
          <span className="h-3 w-3 rounded-full bg-fuchsia-400/60" />
          <span className="h-3 w-3 rounded-full bg-pink-200/40" />
          <span className="ml-3 text-xs text-zinc-500">fyp-preview</span>
          {!failed && (
            <span className="ml-auto text-xs text-pink-300/60">click to view full screen</span>
          )}
        </div>

        <button
          type="button"
          disabled={failed}
          onClick={() => setOpen(true)}
          aria-label="View image full screen"
          className="group relative block aspect-video w-full bg-gradient-to-br from-pink-500/20 via-fuchsia-500/10 to-transparent"
        >
          {!failed ? (
            <>
              <Image
                src={main.src}
                alt={main.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                onError={() => setFailed(true)}
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-black/60 px-3 py-2 text-xs font-semibold text-pink-100 opacity-100 backdrop-blur transition md:opacity-0 md:group-hover:opacity-100">
                <ExpandIcon size={14} /> Full screen
              </span>
            </>
          ) : (
            <span className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
              <span className="font-semibold text-pink-100">Project image unavailable</span>
              <span className="max-w-xs text-xs leading-5 text-pink-200/60">
                Check that <code className="rounded bg-black/30 px-1.5 py-0.5">public{main.src}</code> exists.
              </span>
            </span>
          )}
        </button>

        {FYP_IMAGES.length > 1 && (
          <div className="flex gap-2 border-t border-white/10 p-3">
            {FYP_IMAGES.map((img, idx) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setActive(idx)}
                aria-label={`Show image ${idx + 1}`}
                className={`relative h-14 w-20 overflow-hidden rounded-lg border transition ${idx === active ? "border-pink-400" : "border-white/10 opacity-60 hover:opacity-100"}`}
              >
                <Image src={img.src} alt="" fill sizes="80px" className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {open && <Lightbox images={FYP_IMAGES} start={active} onClose={() => setOpen(false)} />}
    </>
  );
}
const featuredProjects = [
  {
    number: "01",
    title: "FORESYTE AI Exam Surveillance System",
    category: "FINAL YEAR PROJECT",
    description:
      "An AI-powered automated proctoring system that analyzes examination footage using YOLO for real-time object detection and integrated invigilator tracking.",
    tags: ["Python", "YOLO", "Computer Vision", "OpenCV", "MediaPipe"],
    github: "https://github.com/inamullahshaikh/FORESYTE_Frontend",
    demo: "#",
  },
  {
    number: "02",
    title: "Developer Incident Tracker",
    category: "FULL STACK / BACKEND",
    description:
      "A centralized incident management platform for development teams to report, investigate, and resolve software incidents through a structured workflow.",
    tags: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    github: "https://github.com/AdenSial/developer-incident-tracker",
  },
  {
    number: "03",
    title: "Developer Documentation Copilot",
    category: "AI / RAG",
    description:
      "A RAG-powered chatbot that answers technical questions using uploaded documentation, retrieves relevant passages, and generates grounded responses with source citations.",
    tags: ["React", "Node.js", "Express", "RAG", "Qdrant", "LLMs"],
    github: "https://github.com/AdenSial/Developer-Documentation-Copilot",
  },
  {
    number: "04",
    title: "DataPulse",
    category: "BACKEND / DATA ENGINEERING",
    description:
      "A backend platform for managing web scraping jobs, processing extracted data, and tracking job execution through a structured REST API.",
    tags: ["Node.js", "Express", "REST API", "Web Scraping", "PostgreSQL"],
    github: "https://github.com/AdenSial/datapulse",
  },
  {
    number: "05",
    title: "Dockerized Event Management",
    category: "DEVOPS / BACKEND",
    description:
      "A containerized event management application demonstrating backend development, containerization, orchestration, and deployment workflows.",
    tags: ["FastAPI", "Docker", "Kubernetes", "GitHub"],
    github: "https://github.com/AdenSial/EventBooking_Dockerized",
  },
  {
    number: "06",
    title: "SmartKnock Doorbell",
    category: "MOBILE / IOT",
    description:
      "A mobile application connected to an ESP32-based smart doorbell, combining Android development, Firebase services, and hardware interaction.",
    tags: ["Java", "Android", "Firebase", "ESP32"],
    github: "https://github.com/AdenSial/smartknock_doorbell_app",
  },
];

const otherProjects = [
  ["Blockchain Voting System", "Ethereum · Solidity · DApp"],
  ["Flex Trainer", ".NET · C# · SQL · Windows Forms"],
  ["Event Management System", "HTML · CSS · JS · Flask · FastAPI"],
  ["Hospital Network System", "Cisco Packet Tracer · NAT · DHCP · EIGRP"],
  ["Tetris Game", "C++ · SFML"],
  ["PacMan Game", "x86 Assembly"],
];

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    items: ["C", "C++", "Java", "Python", "C#", "Assembly", "Bash"],
  },
  {
    title: "Backend & Databases",
    icon: Server,
    items: [
      "FastAPI",
      "ASP.NET MVC",
      "REST APIs",
      "SQL Server",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Oracle",
      "Firebase",
    ],
  },
  {
    title: "AI / Machine Learning",
    icon: BrainCircuit,
    items: [
      "YOLO",
      "TensorFlow",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "SciPy",
      "Matplotlib",
      "Computer Vision",
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    items: [
      "Docker",
      "Kubernetes",
      "OpenStack",
      "Terraform",
      "Ansible",
      "Grafana",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Blockchain",
    icon: Code2,
    items: ["Ethereum", "Solidity", "Smart Contracts", "DApps"],
  },
];

function SectionTitle({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <Reveal className="mb-14">
      <div className="mb-3 flex items-center gap-3 text-sm text-pink-400">
        <span>{number}</span>
        <span className="h-px w-10 bg-pink-400/50" />
      </div>
      <h2 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
      <p className="mt-3 text-zinc-500">{subtitle}</p>
    </Reveal>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["About", "about"],
    ["Experience", "experience"],
    ["FYP", "fyp"],
    ["Projects", "projects"],
    ["Skills", "skills"],
    ["Contact", "contact"],
  ];

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Backdrop />
      <CustomCursor />
      <ScrollBar />

      {/* NAV */}
      <nav className="glass fixed left-0 top-0 z-50 w-full border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button
            onClick={() => go("home")}
            className="text-lg font-black tracking-tight"
          >
            ADEN<span className="text-pink-400">.</span>
          </button>

          <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
            {links.map(([label, id]) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="transition hover:text-white"
              >
                {label}
              </button>
            ))}
          </div>

          <a
            href="/Aden_Resume.pdf"
            className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-pink-400/50 hover:text-pink-300 md:flex"
          >
            Resume <Download size={15} />
          </a>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Open navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#12060f] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5 text-zinc-400">
              {links.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className="text-left hover:text-white"
                >
                  {label}
                </button>
              ))}
              <a href="/Aden_Resume.pdf" download className="flex items-center gap-2">
                Resume <Download size={15} />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="grid-bg relative flex min-h-screen items-center px-6 pt-24"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="reveal">
            <div className="mb-7 flex items-center gap-3 text-sm text-zinc-500">
              <MapPin size={16} className="text-pink-400" />
              Islamabad, Pakistan
            </div>

            <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-pink-400">
              Computer Science Graduate
            </p>

            <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl">
              HEY, I&apos;M
              <br />
              ADEN <span className="text-shimmer">SIAL.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-zinc-400">
              I build{" "}
              <span className="text-zinc-100">full stack applications</span>,{" "}
              <span className="text-zinc-100">AI systems</span>, and{" "}
              <span className="text-zinc-100">automation tools</span>.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => go("projects")}
                className="group flex items-center gap-2 rounded-full bg-pink-400 px-6 py-3 font-semibold text-black shadow-[0_0_30px_rgba(244,114,182,.4)] transition hover:bg-pink-300"
              >
                View Projects
                <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="/Aden_Resume.pdf"
                download
                className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold transition hover:border-white/30 hover:bg-white/5"
              >
                Download CV <Download size={17} />
              </a>
            </div>

            <div className="mt-12 flex gap-5">
              <a
                href="https://github.com/AdenSial"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-zinc-500 transition hover:text-white"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/aden-sial-2b53a0310/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-zinc-500 transition hover:text-white"
              >
                <Linkedin />
              </a>
              <a
                href="mailto:adensyal2003@gmail.com"
                aria-label="Email"
                className="text-zinc-500 transition hover:text-white"
              >
                <Mail />
              </a>
            </div>
          </div>

          <HeroPhoto />

          <button
            onClick={() => go("about")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600 transition hover:text-zinc-300"
            aria-label="Scroll down"
          >
            <ArrowDown className="float" />
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            number="01"
            title="About Me"
            subtitle="A little bit about what I do"
          />

          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <h3 className="text-3xl font-black uppercase leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
                I build <span className="text-shimmer">full-stack applications</span>,{" "}
                <span className="text-shimmer">AI systems</span>, and{" "}
                <span className="text-shimmer">automation tools</span>.
              </h3>
            </Reveal>

            <div className="space-y-6 leading-7 text-zinc-400">
              <Reveal delay={100}>
                <p>
                  I&apos;m a Computer Science graduate from FAST-NUCES Islamabad
                  with hands-on experience across backend development, AI /
                  computer vision, mobile development, and DevOps.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p>
                  My current interests are backend engineering, AI-powered
                  applications, distributed systems, APIs, databases,
                  containerization, and cloud infrastructure.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p>
                  I like understanding what happens beyond the UI — how services
                  communicate, how data moves through a system, how applications
                  scale, and how software gets deployed reliably.
                </p>
              </Reveal>
            </div>
          </div>

          {/* stats */}
          <div className="mt-16 grid grid-cols-3 gap-4">
            {[
              { n: experiences.length, label: "Internships" },
              { n: featuredProjects.length, label: "Featured projects" },
              { n: aboutCards.length, label: "Core domains" },
            ].map((stat, i) => (
              <Reveal key={stat.label} variant="flip" delay={i * 120}>
                <Tilt
                  max={8}
                  className="rounded-2xl border border-pink-400/20 bg-gradient-to-br from-pink-500/15 to-transparent p-5 text-center md:p-7"
                >
                  <p className="text-4xl font-black text-pink-300 md:text-6xl">
                    <CountUp to={stat.n} />
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 md:text-sm">
                    {stat.label}
                  </p>
                </Tilt>
              </Reveal>
            ))}
          </div>

          {/* focus cards — flip in one by one as you scroll */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutCards.map((card, i) => (
              <Reveal key={card.title} variant="flip" delay={i * 130} className="h-full">
                <Tilt className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-400 to-fuchsia-500 text-sm font-black text-[#1a0512] shadow-[0_0_24px_rgba(244,114,182,.45)]">
                    {card.badge}
                  </div>
                  <h4 className="mt-5 text-lg font-bold">{card.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{card.text}</p>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section bg-[#12060f]/70 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            number="02"
            title="Experience"
            subtitle="Where I&apos;ve worked"
          />

          <ExperienceTimeline />
        </div>
      </section>

      {/* FYP */}
      <section id="fyp" className="section bg-[#12060f]/70 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            number="03"
            title="Final Year Project"
            subtitle="AI Exam Surveillance System — project preview"
          />

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <p className="text-xs font-bold tracking-[0.2em] text-pink-400">
                FINAL YEAR PROJECT
              </p>
              <h3 className="mt-4 text-3xl font-bold md:text-4xl">
                FORESYTE-AI Exam Surveillance System
              </h3>
              <p className="mt-5 leading-7 text-zinc-400">
                An AI-powered automated proctoring system that analyzes
                examination footage using YOLO for real-time object detection
                and integrated invigilator tracking.
              </p>

              <ul className="mt-6 space-y-3 text-zinc-300">
                {[
                  "Automated proctoring of examination footage",
                  "Real-time object detection with YOLO",
                  "Integrated invigilator tracking",
                ].map((h) => (
                  <li key={h} className="flex items-center gap-3">
                    <span className="text-pink-400">✦</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "YOLO", "Computer Vision", "OpenCV", "MediaPipe"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-pink-400/20 px-2.5 py-1.5 text-xs text-pink-200/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/AdenSial"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-pink-400/40 px-5 py-2.5 text-sm font-semibold text-pink-200 transition hover:bg-pink-400/10"
              >
                View on GitHub <ArrowUpRight size={16} />
              </a>
            </Reveal>

            <Reveal delay={150}>
              <FypImage />
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            number="04"
            title="Featured Projects"
            subtitle="Selected work that represents my technical interests"
          />

          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.title} delay={(i % 2) * 100}>
              <Tilt className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7">
                <div className="absolute right-6 top-5 text-5xl font-black text-white/[0.035]">
                  {project.number}
                </div>

                <p className="text-xs font-bold tracking-[0.2em] text-pink-400">
                  {project.category}
                </p>

                <h3 className="mt-4 text-2xl font-bold">{project.title}</h3>

                <p className="mt-5 min-h-28 leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 px-2.5 py-1.5 text-xs text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-5 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-zinc-300 hover:text-white"
                  >
                    GitHub <ArrowUpRight size={15} />
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-1.5 text-zinc-600 hover:text-zinc-300"
                  >
                    Demo <ExternalLink size={14} />
                  </a>
                </div>
              </Tilt>
              </Reveal>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="mb-6 text-xl font-bold">Other Projects</h3>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map(([name, stack]) => (
                <Tilt
                  key={name}
                  max={8}
                  className="rounded-2xl border border-white/10 p-5"
                >
                  <p className="font-semibold">{name}</p>
                  <p className="mt-2 text-sm text-zinc-600">{stack}</p>
                </Tilt>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section bg-[#12060f]/70 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            number="05"
            title="Technical Skills"
            subtitle="Tools and technologies I work with"
          />

          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => {
              const Icon = group.icon;

              return (
                <Tilt
                  key={group.title}
                  max={7}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <Icon size={19} className="text-pink-400" />
                    <h3 className="font-bold">{group.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg bg-white/5 px-3 py-2 text-sm text-zinc-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Tilt>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDUCATION + LEADERSHIP */}
      <section className="section px-6 py-28">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
          <div>
            <SectionTitle
              number="06"
              title="Education"
              subtitle="Academic background"
            />

            <div className="border-l border-pink-400/40 pl-6">
              <p className="text-sm text-pink-400">Aug 2022 – May 2026</p>
              <h3 className="mt-3 text-2xl font-bold">
                Bachelor of Computer Science
              </h3>
              <p className="mt-2 text-zinc-400">
                FAST National University of Computer & Emerging Sciences
              </p>
              <p className="mt-1 text-sm text-zinc-600">Islamabad Campus</p>
            </div>
          </div>

          <div>
            <SectionTitle
              number="07"
              title="Leadership"
              subtitle="Beyond coursework"
            />

            <div className="space-y-5">
              <div className="rounded-2xl border border-white/10 p-6">
                <p className="text-pink-400">President</p>
                <h3 className="mt-2 text-xl font-bold">
                  Wall of Hope — FAST Chapter
                </h3>
              </div>

              <div className="rounded-2xl border border-white/10 p-6">
                <p className="text-pink-400">Founding Member</p>
                <h3 className="mt-2 text-xl font-bold">SPCN NGO</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-pink-400">
            08 — Contact
          </p>

          <h2 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">
            LET&apos;S BUILD
            <br />
            SOMETHING.
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-7 text-zinc-500">
            I&apos;m open to opportunities in backend engineering, AI/ML,
            DevOps, and software engineering.
          </p>

          <a
            href="mailto:adensyal2003@gmail.com"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-pink-400 px-7 py-3 font-semibold text-black shadow-[0_0_40px_rgba(244,114,182,.45)] transition hover:bg-pink-300"
          >
            Get in touch <Mail size={17} />
          </a>

          <div className="mt-12 flex justify-center gap-7 text-zinc-500">
            <a
              href="https://github.com/AdenSial"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aden-sial-2b53a0310/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="mailto:adensyal2003@gmail.com"
              className="hover:text-white"
            >
              Email
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-zinc-700 sm:flex-row">
          <p>© 2026 Aden Sial</p>
          <p>Built with Next.js</p>
        </div>
      </footer>
    </main>
  );
}