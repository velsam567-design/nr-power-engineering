"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Factory,
  Gauge,
  Globe2,
  HardHat,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Settings2,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";

import { useCallback, useEffect, useRef, useState } from "react";

/* =========================================================
   COMPANY DATA
========================================================= */

const company = {
  name: "NR Power Engineering Services",
  shortName: "NR POWER",
  tagline: "POWERING PERFORMANCE. DELIVERING EXCELLENCE.",
  description:
    "Reliable engineering solutions for rotary and static equipment across power and process industries.",
  email: "nrpowerengineering@gmail.com",
  phone: "+91 90004 16666",
  address:
    "30th Division Main Road, Sramika Nagar, Opposite Masjid, AK Nagar, SPSR Nellore District, Andhra Pradesh – 524004, India.",
};

/* =========================================================
   NAVIGATION
========================================================= */

const navigation = [
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "INDUSTRIES", href: "#industries" },
  { label: "EXPERTISE", href: "#expertise" },
  { label: "MISSION", href: "#mission" },
  { label: "CONTACT", href: "#contact" },
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    number: "01",
    title: "Erection & Commissioning",
    icon: Settings2,
    description:
      "Professional erection and commissioning services for a wide range of industrial rotary and static equipment.",
    details: [
      "Steam Turbine Generator (STG) Sets",
      "Turbo Generators",
      "Turbo Compressors",
      "Turbo Blowers",
      "Diesel Generator (DG) Sets",
      "Industrial Chillers",
      "Pumps and Auxiliary Equipment",
    ],
  },
  {
    number: "02",
    title: "Troubleshooting & Overhauls",
    icon: Gauge,
    description:
      "Comprehensive troubleshooting, inspection, maintenance and overhaul services to improve reliability, reduce downtime and enhance operational performance.",
    details: [
      "Steam Turbines",
      "Turbo Generators",
      "High-Speed Centrifugal Compressors",
      "Pumps",
      "Turbo Blowers",
      "Gearboxes",
      "Critical Rotating Equipment",
    ],
  },
  {
    number: "03",
    title: "Repair & Reconditioning",
    icon: Wrench,
    description:
      "Repair, refurbishment and reconditioning of rotary and static equipment to restore performance, reliability and operational efficiency.",
    details: [
      "Equipment refurbishment",
      "Component repair",
      "Reconditioning",
      "Precision machining",
      "Quality inspection",
      "Recommissioning support",
    ],
  },
  {
    number: "04",
    title: "Operation & Maintenance",
    icon: ShieldCheck,
    description:
      "Comprehensive O&M services for power plants and industrial facilities focused on safe, reliable and efficient plant operation.",
    details: [
      "Equipment availability",
      "Performance optimization",
      "Downtime reduction",
      "Maintenance support",
      "Safety compliance",
      "Operational reliability",
    ],
  },
  {
    number: "05",
    title: "Turbine & Auxiliary Services",
    icon: Zap,
    description:
      "Complete turbine and auxiliary equipment services supporting reliable and efficient plant performance.",
    details: [
      "Steam turbine inspection",
      "Turbine servicing and repair",
      "Precision alignment",
      "Dynamic balancing",
      "Heat exchangers",
      "Condensers",
      "Lubrication systems",
      "Condition monitoring",
      "Vibration analysis",
      "Performance evaluation",
    ],
  },
  {
    number: "06",
    title: "Manpower Supply",
    icon: Users,
    description:
      "Skilled, semi-skilled and unskilled manpower solutions supporting operational and maintenance requirements.",
    details: [
      "Power plant manpower",
      "Industrial manpower",
      "Operation support",
      "Maintenance support",
      "Shutdown requirements",
      "Safety-focused deployment",
    ],
  },
  {
    number: "07",
    title: "Spare Parts & Refurbishment",
    icon: Network,
    description:
      "Spare parts, refurbishment and replacement support highlighted as part of the company's engineering service offering.",
    details: [
      "Spare parts support",
      "Refurbishment",
      "Replacement support",
      "Quality-oriented sourcing",
      "Engineering support",
      "Service continuity",
    ],
  },
];

/* =========================================================
   INDUSTRIES
========================================================= */

const industries = [
  {
    number: "01",
    title: "Power Plants",
    icon: Zap,
  },
  {
    number: "02",
    title: "Refineries",
    icon: Factory,
  },
  {
    number: "03",
    title: "Petrochemical Industries",
    icon: Settings2,
  },
  {
    number: "04",
    title: "Fertilizer Plants",
    icon: Gauge,
  },
  {
    number: "05",
    title: "Steel Plants",
    icon: Factory,
  },
  {
    number: "06",
    title: "Cement Industries",
    icon: Settings2,
  },
  {
    number: "07",
    title: "Paper Mills",
    icon: Factory,
  },
  {
    number: "08",
    title: "Process Industries",
    icon: Network,
  },
  {
    number: "09",
    title: "Waste to Energy",
    icon: Sparkles,
  },
  {
    number: "10",
    title: "Sugar Industry",
    icon: Factory,
  },
];

/* =========================================================
   VALUES
========================================================= */

const values = [
  {
    title: "Excellence",
    description:
      "Delivering engineering solutions with high standards of quality, precision, reliability and technical excellence.",
  },
  {
    title: "Integrity",
    description:
      "Conducting business with honesty, transparency, professionalism and ethical responsibility.",
  },
  {
    title: "Customer Focus",
    description:
      "Understanding unique client requirements and delivering reliable, cost-effective and value-driven solutions.",
  },
  {
    title: "Innovation",
    description:
      "Adopting modern engineering practices, advanced technologies and innovative solutions.",
  },
  {
    title: "Safety",
    description:
      "Maintaining a safe working environment through industry best practices and health, safety and environmental standards.",
  },
  {
    title: "Teamwork",
    description:
      "Working through collaboration, mutual respect and shared responsibility with clients, partners and employees.",
  },
];

/* =========================================================
   EQUIPMENT
========================================================= */

const equipment = [
  "Steam Turbine Generator (STG) Systems",
  "Turbo Generators",
  "Turbo Compressors",
  "Turbo Blowers",
  "Diesel Generator Sets",
  "MG Sets (Motor & Generator Sets)",
  "High-Speed Centrifugal Compressors",
  "Pumps",
  "Gearboxes",
  "Industrial Chillers",
  "Heat Exchangers",
  "Condensers",
  "Lubrication Systems",
  "Auxiliary Equipment",
];

const serviceImages = [
  "/images/about/turbine-hall.jpg",
  "/images/services/turbine-overhaul.jpg",
  "/images/services/industrial-welder.jpg",
  "/images/services/refinery-engineers.jpg",
  "/images/expertise/steam-turbine-rotor.jpg",
  "/images/support/field-inspection.jpg",
  "/images/services/spare-component.jpg",
];

const industryImages = [
  "/images/about/turbine-hall.jpg",
  "/images/industries/refinery.jpg",
  "/images/industries/petrochemical.jpg",
  "/images/industries/fertilizer.jpg",
  "/images/industries/steel-plant.jpg",
  "/images/industries/cement-kiln.jpg",
  "/images/industries/paper-mill.jpg",
  "/images/services/compressor.jpg",
  "/images/industries/waste-to-energy.jpg",
  "/images/industries/sugar-industry.jpg",
];

const valueImages = [
  "/images/values/excellence-inspection.jpg",
  "/images/values/engineering-consultation.jpg",
  "/images/values/engineering-consultation.jpg",
  "/images/industries/steel-plant.jpg",
  "/images/values/safety-inspection.jpg",
  "/images/values/team-collaboration.jpg",
];

const equipmentImages: Record<string, string> = {
  "Steam Turbine Generator (STG) Systems": "/images/expertise/steam-turbine-rotor.jpg",
  "Turbo Generators": "/images/expertise/turbine-generator.jpg",
  "Turbo Compressors": "/images/services/compressor.jpg",
  "Turbo Blowers": "/images/services/compressor.jpg",
  "Diesel Generator Sets": "/images/about/turbine-hall.jpg",
  "MG Sets (Motor & Generator Sets)": "/images/expertise/turbine-generator.jpg",
  "High-Speed Centrifugal Compressors": "/images/services/compressor.jpg",
  Pumps: "/images/services/compressor.jpg",
  Gearboxes: "/images/expertise/gearbox.jpg",
  "Industrial Chillers": "/images/services/compressor.jpg",
  "Heat Exchangers": "/images/services/refinery-engineers.jpg",
  Condensers: "/images/about/turbine-hall.jpg",
  "Lubrication Systems": "/images/services/refinery-engineers.jpg",
  "Auxiliary Equipment": "/images/services/turbine-overhaul.jpg",
};

function DecorativeImage({
  src,
  className = "",
  sizes = "100vw",
}: {
  src: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      fill
      sizes={sizes}
      className={`pointer-events-none select-none object-cover ${className}`}
    />
  );
}

function AboutParallaxImage() {
  const imageRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [isNarrow, setIsNarrow] = useState(false);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-18, 18]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const updateViewport = () => setIsNarrow(media.matches);

    updateViewport();
    media.addEventListener("change", updateViewport);

    return () => media.removeEventListener("change", updateViewport);
  }, []);

  return (
    <div
      ref={imageRef}
      className="relative min-h-[340px] overflow-hidden border border-slate-200 bg-[#06182c] sm:min-h-[420px]"
    >
      <motion.div
        className="absolute inset-[-5%_0]"
        style={{ y: reduceMotion || isNarrow ? 0 : y }}
      >
        <DecorativeImage
          src="/images/services/turbine-overhaul.jpg"
          sizes="(min-width: 1024px) 30vw, 100vw"
          className="scale-105 object-[center_42%]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#06182c]/75 via-[#06182c]/15 to-transparent" />
    </div>
  );
}

/* =========================================================
   REVEAL COMPONENT
========================================================= */

function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  visibleFallback = false,
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
  visibleFallback?: boolean;
}) {
  const reduced = useReducedMotion();

  const initial =
    direction === "left"
      ? { opacity: visibleFallback ? 0.92 : 0, x: -50 }
      : direction === "right"
        ? { opacity: visibleFallback ? 0.92 : 0, x: 50 }
        : { opacity: visibleFallback ? 0.92 : 0, y: 45 };

  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 1 } : initial}
      whileInView={
        reduced
          ? { opacity: 1 }
          : {
              opacity: 1,
              x: 0,
              y: 0,
            }
      }
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={
        reduced
          ? { duration: 0 }
          : {
              duration: 0.85,
              delay,
              ease: [0.22, 1, 0.36, 1],
            }
      }
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  blueWord,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  blueWord?: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div>
      <div
        className={`eyebrow ${
          dark ? "" : "!text-[#0879e8]"
        }`}
      >
        {eyebrow}
      </div>

      <h2
        className={`mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl ${
          dark ? "text-white" : "text-[#06182c]"
        }`}
      >
        {title}

        {blueWord && (
          <>
            {" "}
            <span
              className={
                dark ? "text-[#5eb0ff]" : "text-[#0879e8]"
              }
            >
              {blueWord}
            </span>
          </>
        )}
      </h2>

      {description && (
        <p
          className={`mt-6 max-w-2xl text-[15px] leading-8 ${
            dark ? "text-white/60" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* =========================================================
   PROPRIETOR PROFILE
========================================================= */

const proprietorKeyExpertise = [
  "Steam Turbine & Generator (STG)",
  "Turbine Commissioning",
  "Turbine Servicing & Overhauling",
  "Gearbox Erection & Alignment",
  "Generator Inspection & Maintenance",
  "Power Plant Mechanical Maintenance",
];

const proprietorFullExpertise = [
  "Steam Turbine & Generator (STG) Erection & Installation",
  "Turbine & Generator Commissioning",
  "Turbine Servicing, Overhauling & Maintenance",
  "Gearbox Erection, Alignment & Servicing",
  "Turbine–Gearbox–Generator Alignment",
  "Generator Inspection & Maintenance",
  "Power Plant Mechanical Maintenance",
  "Shutdown & Overhauling Activities",
  "Field Engineering & Project Execution",
  "Manpower Coordination & Site Supervision",
  "Power Plant Equipment Servicing & Troubleshooting",
];

function ProprietorProfile() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  const openPanel = useCallback(() => {
    setOpen(true);
  }, []);

  const closePanel = useCallback(() => {
    setOpen(false);
  }, []);

  // Focus management & scroll lock
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      // Delay focus to after animation starts
      const t = window.setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 80);
      return () => {
        window.clearTimeout(t);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
      openButtonRef.current?.focus();
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePanel();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, closePanel]);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const panelVariants = {
    hidden: { opacity: 0, y: reduced ? 0 : 40 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: reduced ? 0 : 30 },
  };

  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-[#f5f8fc] py-24 lg:py-32"
    >
      <div className="container-nr">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* IMAGE COLUMN */}
          <Reveal direction="left">
            <div className="relative overflow-hidden bg-[#06182c]">
              <Image
                src="/images/founder/rahamathulla-turbine.png"
                alt="SK. Rahamthulla – Proprietor, NR Power Engineering Services"
                width={900}
                height={1100}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06182c] via-[#06182c]/40 to-transparent p-6 pt-24">
                <div className="text-[10px] font-bold tracking-[0.25em] text-[#168bff]">
                  PROPRIETOR
                </div>
                <div className="mt-2 text-2xl font-black tracking-tight text-white">
                  SK. Rahamthulla
                </div>
                <div className="mt-1 text-sm text-white/60">
                  NR Power Engineering Services
                </div>
              </div>
            </div>
          </Reveal>

          {/* CONTENT COLUMN */}
          <Reveal direction="right">
            <div>
              {/* EYEBROW */}
              <div className="mb-5 text-[10px] font-bold tracking-[0.28em] text-[#0879e8]">
                PROPRIETOR PROFILE
              </div>

              {/* NAME & DESIGNATION */}
              <h2 className="text-4xl font-black tracking-[-0.04em] text-[#10243e] sm:text-5xl">
                SK. Rahamthulla
              </h2>
              <div className="mt-2 text-sm font-semibold tracking-wide text-[#64748b]">
                Proprietor – NR Power Engineering Services
              </div>
              <div className="mt-1 text-[11px] font-bold tracking-[0.18em] text-[#0879e8]">
                Erection · Commissioning · Servicing · Maintenance
              </div>

              {/* INTRODUCTION */}
              <p className="mt-6 max-w-xl text-[15px] leading-8 text-[#475569]">
                SK. Rahamthulla is a Power &amp; Engineering professional with{" "}
                <strong className="font-bold text-[#10243e]">
                  15+ years of hands-on experience
                </strong>{" "}
                in power plant projects, specializing in Steam Turbine &amp;
                Generator (STG) erection, commissioning, servicing,
                maintenance, and project execution.
              </p>

              {/* KEY EXPERTISE */}
              <div className="mt-8">
                <div className="mb-4 text-[9px] font-bold tracking-[0.22em] text-[#64748b]">
                  KEY EXPERTISE
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {proprietorKeyExpertise.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 border border-[#dbe5ef] bg-white px-4 py-3 text-[12px] font-semibold leading-5 text-[#10243e]"
                    >
                      <CheckCircle2
                        size={13}
                        className="mt-0.5 shrink-0 text-[#0879e8]"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA BUTTON */}
              <div className="mt-10">
                <button
                  ref={openButtonRef}
                  type="button"
                  onClick={openPanel}
                  aria-expanded={open}
                  aria-controls="proprietor-full-profile"
                  className="group inline-flex h-[50px] items-center gap-3 border border-[#0879e8] bg-[#0879e8] px-7 text-[10px] font-extrabold tracking-[0.16em] text-white shadow-[0_8px_24px_rgba(8,121,232,0.25)] transition-all duration-200 hover:bg-[#168bff] hover:shadow-[0_12px_32px_rgba(8,121,232,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0879e8]"
                >
                  MORE ABOUT RAHAMTHULLA
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* FULL PROFILE OVERLAY */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              key="proprietor-backdrop"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: reduced ? 0 : 0.25 }}
              className="fixed inset-0 z-[60] bg-[#06182c]/80 backdrop-blur-[6px]"
              aria-hidden="true"
              onClick={closePanel}
            />

            {/* PANEL */}
            <motion.div
              key="proprietor-panel"
              id="proprietor-full-profile"
              role="dialog"
              aria-modal="true"
              aria-label="Full profile of SK. Rahamthulla"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                duration: reduced ? 0 : 0.42,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed inset-x-0 bottom-0 z-[70] flex max-h-[92dvh] flex-col overflow-hidden bg-white shadow-[0_-24px_80px_rgba(6,24,44,0.3)] sm:inset-4 sm:inset-x-auto sm:left-1/2 sm:max-h-[90dvh] sm:w-full sm:max-w-3xl sm:-translate-x-1/2 sm:rounded-none lg:inset-x-auto lg:left-1/2 lg:max-w-4xl lg:-translate-x-1/2"
            >
              {/* PANEL HEADER */}
              <div className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-[#06182c] px-6 py-5 sm:px-8">
                <div>
                  <div className="text-[9px] font-bold tracking-[0.26em] text-[#5eb0ff]">
                    PROFESSIONAL PROFILE
                  </div>
                  <div className="mt-1 text-lg font-black tracking-tight text-white">
                    SK. Rahamthulla
                  </div>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closePanel}
                  aria-label="Close profile"
                  className="flex h-9 w-9 items-center justify-center border border-white/25 text-white/70 transition hover:border-white/50 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <X size={16} />
                </button>
              </div>

              {/* PANEL SCROLLABLE BODY */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                <div className="grid lg:grid-cols-[300px_1fr]">
                  {/* LEFT: IMAGE + IDENTITY */}
                  <div className="relative shrink-0 bg-[#06182c]">
                    <div className="relative aspect-[3/4] w-full lg:aspect-auto lg:h-full lg:min-h-[520px]">
                      <Image
                        src="/images/founder/rahamathulla-turbine.png"
                        alt="SK. Rahamthulla – Proprietor, NR Power Engineering Services"
                        fill
                        sizes="(min-width: 1024px) 300px, 100vw"
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06182c]/95 via-[#06182c]/40 to-transparent p-6 pt-20">
                        <div className="text-[10px] font-bold tracking-[0.25em] text-[#168bff]">
                          PROPRIETOR
                        </div>
                        <div className="mt-1.5 text-xl font-black tracking-tight text-white">
                          SK. Rahamthulla
                        </div>
                        <div className="mt-1 text-xs text-white/55">
                          NR Power Engineering Services
                        </div>
                        <div className="mt-3 text-[10px] font-bold tracking-[0.15em] text-[#5eb0ff]">
                          15+ Years Experience
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT: CONTENT */}
                  <div className="space-y-8 p-6 sm:p-8">
                    {/* PROFESSIONAL SUMMARY */}
                    <div>
                      <div className="mb-3 text-[9px] font-bold tracking-[0.24em] text-[#0879e8]">
                        PROFESSIONAL PROFILE
                      </div>
                      <div className="space-y-4 text-sm leading-8 text-[#475569]">
                        <p>
                          SK. Rahamthulla is a Power &amp; Engineering
                          professional with{" "}
                          <strong className="font-semibold text-[#10243e]">
                            15+ years of hands-on experience
                          </strong>{" "}
                          in power plant projects, specializing in Steam
                          Turbine &amp; Generator (STG) erection, installation,
                          commissioning, servicing, overhauling, maintenance,
                          and project execution.
                        </p>
                        <p>
                          He has 15 years of professional experience associated
                          with{" "}
                          <strong className="font-semibold text-[#10243e]">
                            Greene Sol Power Systems Pvt. Ltd.
                          </strong>
                          , gaining extensive field experience in power plant
                          equipment erection, commissioning, servicing,
                          maintenance, shutdown, and overhauling activities.
                        </p>
                        <p>
                          His expertise covers Steam Turbines, Generators,
                          Gearboxes, and associated auxiliary systems, with
                          strong experience in mechanical erection, alignment,
                          inspection, troubleshooting, site supervision,
                          manpower coordination, and project execution.
                        </p>
                      </div>
                    </div>

                    {/* DIVIDER */}
                    <div className="h-px bg-slate-200" />

                    {/* KEY AREAS OF EXPERTISE */}
                    <div>
                      <div className="mb-4 text-[9px] font-bold tracking-[0.24em] text-[#0879e8]">
                        KEY AREAS OF EXPERTISE
                      </div>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {proprietorFullExpertise.map((item, idx) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 border border-[#dbe5ef] bg-[#f8fbff] px-4 py-3"
                          >
                            <span className="mt-0.5 shrink-0 text-[9px] font-bold tracking-[0.1em] text-[#0879e8]">
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                            <span className="text-[12px] font-semibold leading-5 text-[#10243e]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* DIVIDER */}
                    <div className="h-px bg-slate-200" />

                    {/* PROFESSIONAL STRENGTH */}
                    <div>
                      <div className="mb-3 text-[9px] font-bold tracking-[0.24em] text-[#0879e8]">
                        PROFESSIONAL STRENGTH
                      </div>
                      <div className="border-l-2 border-[#168bff] pl-5">
                        <p className="text-sm leading-8 text-[#475569]">
                          Strong practical field experience with a focus on{" "}
                          <strong className="font-semibold text-[#10243e]">
                            safe execution, quality workmanship, technical
                            coordination, efficient site management
                          </strong>
                          , and timely completion of power plant projects.
                        </p>
                      </div>
                    </div>

                    {/* BOTTOM CLOSE */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={closePanel}
                        className="inline-flex h-[44px] items-center gap-2 border border-slate-300 bg-white px-6 text-[10px] font-bold tracking-[0.14em] text-[#10243e] transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0879e8]"
                      >
                        <X size={13} />
                        CLOSE PROFILE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerSolid, setHeaderSolid] = useState(false);
  const [isMobileLogo, setIsMobileLogo] = useState(false);

  const reduced = useReducedMotion();

  useEffect(() => {
    const viewportQuery = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsMobileLogo(viewportQuery.matches);

    updateViewport();
    viewportQuery.addEventListener("change", updateViewport);

    return () => {
      viewportQuery.removeEventListener("change", updateViewport);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderSolid(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* -------------------------------------------------------
     MOUSE PARALLAX
  ------------------------------------------------------- */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 55,
    damping: 22,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 55,
    damping: 22,
  });

  function handleMouseMove(
    event: React.MouseEvent<HTMLElement>,
  ) {
    if (reduced) return;

    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width - 0.5) * 2;

    const y =
      ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    mouseX.set(x * 4);
    mouseY.set(y * 3);
  }

  function resetMouse() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#10243e]">
      {/* ===================================================
          NAVIGATION
      =================================================== */}

      <header className="sticky top-0 z-50 w-full border-b border-white/15 bg-[#06182c] shadow-[0_10px_35px_rgba(0,0,0,0.18)]">
        <div className="container-nr">
          <nav
            className={`flex h-[82px] items-center justify-between bg-[#06182c] transition-all duration-300 ${
              headerSolid ? "shadow-[0_10px_35px_rgba(0,0,0,0.18)]" : ""
            }`}
          >
            {/* LOGO */}

            <Link
              href="/"
              className="flex items-center"
            >
              <motion.div
                whileHover={reduced ? undefined : { scale: 1.02 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="group inline-flex items-center gap-2.5 sm:gap-3"
              >
                <motion.div
                  initial={false}
                  animate={
                    reduced
                      ? { rotate: 0, y: 0, scale: 1 }
                      : {
                          rotate: 360,
                          y: isMobileLogo ? [0, 2.5, 0, -2.5, 0] : [0, 5, 0, -5, 0],
                          scale: isMobileLogo
                            ? [0.98, 1.03, 0.98]
                            : [0.96, 1.05, 0.96],
                        }
                  }
                  transition={
                    reduced
                      ? { duration: 0 }
                      : {
                          rotate: {
                            duration: 8,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop",
                          },
                          y: {
                            duration: 4.2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "loop",
                          },
                          scale: {
                            duration: 3.8,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "loop",
                          },
                        }
                  }
                  className="relative inline-flex"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -inset-[5px] rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(195, 222, 255, 0.16) 0%, rgba(63, 137, 218, 0.1) 58%, rgba(6, 24, 44, 0) 78%)",
                    }}
                  />
                  <Image
                    src="/images/logo/nr-power-engineering-logo-transparent.png"
                    alt="NR Power Engineering Services"
                    width={180}
                    height={180}
                    className="relative z-10 h-[58px] w-[58px] object-contain md:h-[76px] md:w-[76px]"
                    style={{
                      filter:
                        "brightness(1.1) contrast(1.05) drop-shadow(0 1px 3px rgba(0, 0, 0, 0.28))",
                    }}
                  />
                </motion.div>
                <div className="flex min-w-0 flex-col justify-center whitespace-nowrap">
                  <motion.span
                    initial={reduced ? false : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: reduced ? 0 : 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-[11px] font-extrabold tracking-[0.18em] text-white/95 transition-colors duration-300 group-hover:text-white sm:text-sm"
                  >
                    NR POWER
                  </motion.span>
                  <motion.span
                    initial={reduced ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: reduced ? 0 : 0.22,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="mt-1 text-[6px] font-bold tracking-[0.22em] text-white/65 transition-colors duration-300 group-hover:text-white/85 sm:text-[8px] sm:tracking-[0.24em]"
                  >
                    ENGINEERING SERVICES
                  </motion.span>
                </div>
              </motion.div>
            </Link>

            {/* DESKTOP MENU */}

            <div className="hidden items-center gap-[28px] lg:flex">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group relative block py-3 text-[11px] font-bold tracking-[0.14em] text-white transition-colors duration-200 hover:text-[#5eb0ff]"
                  style={{ color: "#FFFFFF" }}
                >
                  {item.label}

                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#168bff] transition-all duration-250 ease-out group-hover:w-full" />
                </a>
              ))}

              <a
                href="#contact"
                className="ml-2 inline-flex h-[46px] items-center gap-2 border border-[#168bff] bg-[#168bff] px-6 text-[10px] font-extrabold tracking-[0.14em] text-white transition-colors duration-200 hover:bg-[#0879e8]"
                style={{ color: "#FFFFFF" }}
              >
                REQUEST A QUOTE
                <ArrowRight size={13} />
              </a>
            </div>

            {/* MOBILE */}

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() =>
                setMenuOpen((current) => !current)
              }
              className="flex h-10 w-10 items-center justify-center border border-white/40 bg-[#06182c] text-white transition hover:bg-white/10 lg:hidden"
            >
              {menuOpen ? (
                <X size={19} />
              ) : (
                <Menu size={19} />
              )}
            </button>
          </nav>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-b border-white/15 bg-[#06182c] px-6 py-7 lg:hidden"
          >
            <div className="mx-auto flex max-w-md flex-col gap-5">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-xs font-bold tracking-[0.18em] text-white transition-colors hover:text-[#168bff]"
                  style={{ color: "#FFFFFF" }}
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex h-12 items-center justify-center gap-2 bg-[#168bff] text-xs font-bold tracking-[0.14em] text-white"
                style={{ color: "#FFFFFF" }}
              >
                REQUEST A QUOTE
                <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* ===================================================
          HERO
      =================================================== */}

      <section
        onMouseMove={handleMouseMove}
        onMouseLeave={resetMouse}
        className="relative min-h-[720px] overflow-hidden bg-[#06182c] sm:min-h-[760px] lg:min-h-[820px] xl:min-h-screen"
      >
        {/* IMAGE */}

        <motion.div
          className="absolute inset-[-12px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/hero/nr-power-hero.png')",
            x: smoothX,
            y: smoothY,
          }}
          animate={
            reduced
              ? undefined
              : {
                  scale: [1.02, 1.045, 1.02],
                }
          }
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* COLOR GRADE */}

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,24,44,0.97)_0%,rgba(6,24,44,0.88)_42%,rgba(6,24,44,0.58)_70%,rgba(6,24,44,0.25)_100%)]" />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#06182c]/95 via-[#06182c]/65 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#06182c] via-[#06182c]/70 to-transparent" />

        {/* GRID */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.09]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(22,139,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(22,139,255,0.2) 1px, transparent 1px)",
              backgroundSize: "90px 90px",
            }}
          />
        </div>

        {/* BLUE LIGHT */}

        <motion.div
          className="absolute -right-40 top-[15%] h-[560px] w-[560px] rounded-full bg-[#0879e8]/15 blur-[145px]"
          animate={
            reduced
              ? undefined
              : {
                  x: [0, -40, 0],
                  y: [0, 25, 0],
                  opacity: [0.25, 0.5, 0.25],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ENERGY LINE */}

        <svg
          className="pointer-events-none absolute inset-0 z-10 h-full w-full opacity-60"
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="energyLine"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#168bff"
                stopOpacity="0"
              />

              <stop
                offset="50%"
                stopColor="#168bff"
                stopOpacity="0.8"
              />

              <stop
                offset="100%"
                stopColor="#6cc1ff"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          <motion.path
            d="M30 700 C330 575 520 750 750 610 C1000 460 1180 600 1570 390"
            fill="none"
            stroke="url(#energyLine)"
            strokeWidth="3"
            strokeDasharray="15 22"
            animate={
              reduced
                ? undefined
                : {
                    strokeDashoffset: [0, -300],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>

        {/* HERO */}

        <div className="container-nr relative z-20 flex min-h-[720px] items-center pt-[100px] pb-12 sm:min-h-[760px] lg:min-h-[820px] xl:min-h-screen">
          <div className="w-full max-w-[760px]">
            <Reveal direction="left">
              <div className="eyebrow">
                ENGINEERING SOLUTIONS · POWER & PROCESS INDUSTRIES
              </div>
            </Reveal>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-5 text-[39px] font-black leading-[0.94] tracking-[-0.06em] text-white sm:text-[52px] md:text-[60px] lg:text-[68px] xl:text-[74px]"
            >
              POWERING
              <br />

              <span className="text-[#168bff]">
                PERFORMANCE.
              </span>

              <br />

              DELIVERING
              <br />

              EXCELLENCE.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="mt-5 max-w-[580px] text-[13px] leading-7 text-white/85 sm:text-[14px]"
            >
              Reliable engineering solutions for critical rotary
              and static equipment across power and process
              industries. We focus on technical expertise,
              quality workmanship, timely execution, safety,
              reliability and minimized downtime.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.42,
              }}
              className="mt-6 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#services"
                className="group inline-flex h-[47px] items-center justify-center gap-3 bg-[#0879e8] px-7 text-[9px] font-bold tracking-[0.15em] !text-white shadow-[0_10px_30px_rgba(8,121,232,0.3)] transition hover:bg-[#168bff]"
              >
                EXPLORE OUR SERVICES

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="group inline-flex h-[47px] items-center justify-center gap-3 border border-white/40 bg-[#06182c]/60 px-7 text-[9px] font-bold tracking-[0.15em] !text-white backdrop-blur-md transition hover:bg-white/10"
              >
                REQUEST A QUOTE

                <ChevronRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </motion.div>

            {/* HERO DATA */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.58,
              }}
              className="mt-9 grid max-w-[850px] border-t border-white/20 sm:grid-cols-3"
            >
              <div className="border-b border-white/10 py-3 sm:border-b-0 sm:border-r sm:pr-7">
                <div className="text-[7px] font-bold tracking-[0.2em] text-[#8fc7ff]">
                  SPECIALIZATION
                </div>

                <div className="mt-1 text-[12px] font-semibold text-white">
                  Rotary & Static Equipment
                </div>
              </div>

              <div className="border-b border-white/10 py-3 sm:border-b-0 sm:border-r sm:px-7">
                <div className="text-[7px] font-bold tracking-[0.2em] text-[#8fc7ff]">
                  PROJECT EXPERIENCE
                </div>

                <div className="mt-1 text-[12px] font-semibold text-white">
                  10 MW – 70 MW
                </div>
              </div>

              <div className="py-3 sm:pl-7">
                <div className="text-[7px] font-bold tracking-[0.2em] text-[#8fc7ff]">
                  SERVICE NETWORK
                </div>

                <div className="mt-1 flex items-center gap-2 text-[12px] font-semibold text-white">
                  <Globe2
                    size={12}
                    className="text-[#5eb0ff]"
                  />
                  Across India
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.a
          href="#about"
          className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 !text-white/75 lg:flex"
          animate={
            reduced
              ? undefined
              : {
                  y: [0, 5, 0],
                }
          }
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <span className="text-[7px] font-bold tracking-[0.3em]">
            SCROLL TO EXPLORE
          </span>

          <ArrowDown size={14} />
        </motion.a>
      </section>

      {/* ===================================================
          ABOUT
      =================================================== */}

      <section
        id="about"
        className="section-padding bg-white"
      >
        <div className="container-nr">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr_1fr]">
            <Reveal direction="left">
              <SectionHeading
                eyebrow="COMPANY OVERVIEW"
                title="Engineering built around"
                blueWord="reliability."
              />
            </Reveal>

            <Reveal direction="right" delay={0.12}>
              <div>
                <p className="text-[15px] leading-8 text-slate-600">
                  <strong className="font-bold text-[#06182c]">
                    NR Power Engineering Services
                  </strong>{" "}
                  is a professionally managed engineering
                  solutions company headquartered in Nellore
                  District, Andhra Pradesh, India.
                </p>

                <p className="mt-5 text-[15px] leading-8 text-slate-600">
                  We specialize in providing reliable,
                  high-quality and cost-effective solutions for
                  rotary and static equipment across a wide
                  range of industries.
                </p>

                <p className="mt-5 text-[15px] leading-8 text-slate-600">
                  Our services include installation, maintenance,
                  overhauling, troubleshooting, alignment,
                  balancing and performance optimization of
                  turbines, generators, gearboxes, compressors,
                  pumps, heat exchangers and other critical
                  industrial equipment.
                </p>

                <p className="mt-5 text-[15px] leading-8 text-slate-600">
                  We are committed to delivering engineering
                  excellence through technical expertise,
                  quality workmanship, timely execution and a
                  strong focus on safety.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              <AboutParallaxImage />
            </Reveal>
          </div>

          {/* ABOUT HIGHLIGHTS */}

          <div className="mt-12 grid border-y border-slate-200 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "QUALITY WORKMANSHIP",
                text: "Engineering excellence through quality, precision and reliability.",
              },
              {
                icon: HardHat,
                title: "SAFETY FOCUS",
                text: "Safety remains a central focus across engineering activities.",
              },
              {
                icon: Gauge,
                title: "MINIMIZED DOWNTIME",
                text: "Dependable services designed to improve reliability and operational efficiency.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.1}
                >
                  <div className="border-b border-slate-200 p-6 md:border-b-0 md:border-r md:last:border-r-0">
                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      className="text-[#0879e8]"
                    />

                    <h3 className="mt-4 text-[11px] font-bold tracking-[0.16em] text-[#06182c]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================
          SERVICES
      =================================================== */}

      <section
        id="services"
        className="section-padding bg-[#f5f8fc]"
      >
        <div className="container-nr">
          <Reveal visibleFallback direction="left">
            <SectionHeading
              eyebrow="SERVICES OFFERED"
              title="Comprehensive engineering"
              blueWord="solutions."
              description="From erection and commissioning to troubleshooting, repair, maintenance, turbine services and manpower support."
            />
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal
                  key={service.number}
                  delay={index * 0.06}
                  visibleFallback
                >
                  <motion.article
                    whileHover={
                      reduced
                        ? undefined
                        : {
                            y: -5,
                          }
                    }
                    className="group relative isolate flex h-full flex-col overflow-hidden bg-white p-6 transition-colors duration-500 hover:bg-[#06182c]"
                  >
                    <DecorativeImage
                      src={serviceImages[index]}
                      sizes="(min-width: 1280px) 28vw, (min-width: 768px) 45vw, 100vw"
                      className="z-0 opacity-40 transition duration-700 group-hover:scale-105 group-hover:opacity-50"
                    />
                    <div className="pointer-events-none absolute inset-0 z-0 bg-white/75 transition-colors duration-500 group-hover:bg-[#06182c]/75" />
                    <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] font-bold tracking-[0.18em] text-[#0879e8]">
                        {service.number}
                      </span>

                      <Icon
                        size={24}
                        strokeWidth={1.4}
                        className="text-slate-400 transition group-hover:text-[#5eb0ff]"
                      />
                    </div>

                    <h3 className="mt-7 text-xl font-bold tracking-[-0.02em] text-[#06182c] group-hover:text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500 group-hover:text-white/55">
                      {service.description}
                    </p>

                    <div className="mt-4 space-y-1">
                      {service.details.slice(0, 4).map((detail) => (
                        <div
                          key={detail}
                          className="flex items-start gap-2 text-[11px] leading-5 text-slate-500 group-hover:text-white/45"
                        >
                          <CheckCircle2
                            size={12}
                            className="mt-1 shrink-0 text-[#0879e8]"
                          />

                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>

                    {service.details.length > 4 && (
                      <div className="mt-auto pt-3 text-[9px] font-bold tracking-[0.12em] text-[#0879e8]">
                        + {service.details.length - 4} MORE
                      </div>
                    )}

                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#168bff] transition-all duration-500 group-hover:w-full" />
                    </div>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================
          INDUSTRIES
      =================================================== */}

      <section
        id="industries"
        className="section-padding bg-white"
      >
        <div className="container-nr">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal direction="left">
              <SectionHeading
                eyebrow="INDUSTRIES WE SERVE"
                title="Engineering support for"
                blueWord="critical industries."
                description="Dependable engineering solutions tailored to operational requirements across power and process industries."
              />
            </Reveal>

            <div className="grid grid-cols-2 border-l border-t border-slate-200 sm:grid-cols-3">
              {industries.map((industry, index) => {
                const Icon = industry.icon;

                return (
                  <Reveal
                    key={industry.title}
                    delay={index * 0.05}
                  >
                    <motion.div
                      whileHover={
                        reduced
                          ? undefined
                          : {
                              borderColor: "rgba(22,139,255,0.55)",
                            }
                      }
                      className="group relative isolate flex h-full flex-col overflow-hidden border-b border-r border-slate-200 p-5 transition-colors duration-500"
                    >
                      <DecorativeImage
                        src={industryImages[index]}
                        sizes="(min-width: 1280px) 25vw, (min-width: 640px) 33vw, 50vw"
                        className="z-0 opacity-35 transition-transform duration-700 group-hover:scale-[1.05] group-hover:opacity-45"
                      />
                      <div className="pointer-events-none absolute inset-0 z-0 bg-[#06182c]/75 transition-colors duration-500 group-hover:bg-[#06182c]/65" />
                      <div className="relative z-10 flex h-full flex-col">
                      <div className="flex justify-between">
                        <span className="text-[9px] font-bold tracking-[0.18em] text-white/55 group-hover:text-[#8fc7ff]">
                          {industry.number}
                        </span>

                        <Icon
                          size={19}
                          strokeWidth={1.5}
                          className="text-[#0879e8] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-[#5eb0ff]"
                        />
                      </div>

                      <h3 className="mt-7 text-sm font-bold text-white">
                        {industry.title}
                      </h3>

                      <div className="mt-auto h-px w-0 bg-[#168bff] pt-4 transition-all duration-500 group-hover:w-full" />
                      </div>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          PROPRIETOR PROFILE
      =================================================== */}

      <ProprietorProfile />

      <section
        id="expertise"
        className="section-padding relative overflow-hidden bg-[#06182c]"
      >
        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(22,139,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(22,139,255,0.2) 1px, transparent 1px)",
              backgroundSize: "90px 90px",
            }}
          />
        </div>

        <motion.div
          className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#0879e8]/10 blur-[140px]"
          animate={
            reduced
              ? undefined
              : {
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.45, 0.2],
                }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />

        <div className="container-nr relative z-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal direction="left">
              <div>
                <SectionHeading
                  dark
                  eyebrow="OUR EXPERTISE"
                  title="Hands-on experience across"
                  blueWord="critical equipment."
                  description="The founder brings extensive hands-on experience in erection, commissioning, operation, maintenance, troubleshooting, repair and overhauling of rotary equipment for captive and utility power plants across India."
                />

                <div className="mt-10 border-l-2 border-[#168bff] pl-6">
                  <div className="text-6xl font-black tracking-[-0.06em] text-white">
                    10–70
                  </div>

                  <div className="mt-1 text-[9px] font-bold tracking-[0.2em] text-white/40">
                    MW PROJECT EXPERIENCE
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 border-l border-t border-white/10">
              {equipment.map((item, index) => (
                <Reveal
                  key={item}
                  delay={index * 0.04}
                >
                  <motion.div
                    whileHover={
                      reduced
                        ? undefined
                        : {
                            backgroundColor:
                              "rgba(255,255,255,0.045)",
                          }
                    }
                    className="group relative isolate h-full overflow-hidden border-b border-r border-white/10 p-5"
                  >
                    <DecorativeImage
                      src={equipmentImages[item]}
                      sizes="(min-width: 1024px) 20vw, 45vw"
                      className="z-0 opacity-[0.12] transition-transform duration-700 group-hover:scale-105 group-hover:opacity-20"
                    />
                    <div className="pointer-events-none absolute inset-0 z-0 bg-[#06182c]/65 transition-colors duration-500 group-hover:bg-[#06182c]/55" />
                    <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold tracking-[0.15em] text-white/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <ChevronRight
                        size={14}
                        className="text-[#168bff] transition-transform group-hover:translate-x-1"
                      />
                    </div>

                    <h3 className="mt-4 text-[12px] font-bold leading-5 text-white/80 group-hover:text-[#5eb0ff]">
                      {item}
                    </h3>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          VALUES
      =================================================== */}

      <section className="section-padding bg-white">
        <div className="container-nr">
          <Reveal direction="left">
            <SectionHeading
              eyebrow="COMPANY VALUES"
              title="Values that guide"
              blueWord="every project."
              description="Our values define who we are and guide every project we undertake."
            />
          </Reveal>

          <div className="mt-12 grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Reveal
                key={value.title}
                delay={index * 0.07}
              >
                <motion.article
                  whileHover={
                    reduced
                      ? undefined
                      : {
                          y: -4,
                        }
                  }
                    className="group relative isolate flex h-full flex-col overflow-hidden bg-white p-6"
                >
                    <DecorativeImage
                      src={valueImages[index]}
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="z-0 opacity-30 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-40"
                    />
                    <div className="pointer-events-none absolute inset-0 z-0 bg-white/80 transition-colors duration-500 group-hover:bg-white/75" />
                    <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold tracking-[0.18em] text-[#0879e8]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <CheckCircle2
                      size={18}
                      className="text-slate-300 group-hover:text-[#0879e8]"
                    />
                  </div>

                  <h3 className="mt-8 text-lg font-bold text-[#06182c] group-hover:text-[#0879e8]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {value.description}
                  </p>
                    </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          MISSION / VISION
      =================================================== */}

      <section
        id="mission"
        className="section-padding bg-[#f5f8fc]"
      >
        <div className="container-nr">
          <Reveal>
            <SectionHeading
              eyebrow="OUR PROCESS"
              title="Mission &"
              blueWord="Vision."
              description="The direction that shapes NR Power Engineering Services and its approach to engineering delivery."
            />
          </Reveal>

          <div className="mt-12 grid gap-px border border-slate-200 bg-slate-200 lg:grid-cols-2">
            <Reveal direction="left">
              <article className="relative isolate h-full overflow-hidden bg-white p-8 sm:p-10">
                <DecorativeImage
                  src="/images/mission/mission-execution.jpg"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="z-0 opacity-40"
                />
                <div className="pointer-events-none absolute inset-0 z-0 bg-white/80" />
                <div className="relative z-10">
                <div className="text-[10px] font-bold tracking-[0.2em] text-[#0879e8]">
                  OUR MISSION
                </div>

                <h3 className="mt-5 text-3xl font-black tracking-[-0.04em] text-[#06182c] sm:text-4xl">
                  Reliable.
                  <br />
                  Innovative.
                  <br />
                  Cost-effective.
                </h3>

                <p className="mt-7 text-sm leading-8 text-slate-600">
                  To provide reliable, innovative and
                  cost-effective engineering solutions for
                  rotary and static equipment that enhance
                  operational efficiency, maximize equipment
                  reliability and minimize downtime.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    "Quality workmanship",
                    "Safety",
                    "Technical excellence",
                    "Integrity",
                    "Timely service",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium text-[#10243e]"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-[#0879e8]"
                      />
                      {item}
                    </div>
                  ))}
                </div>
                </div>
              </article>
            </Reveal>

            <Reveal direction="right" delay={0.15}>
              <article className="relative isolate h-full overflow-hidden bg-[#06182c] p-8 sm:p-10">
                <DecorativeImage
                  src="/images/mission/vision-facility.jpg"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="z-0 opacity-30"
                />
                <div className="pointer-events-none absolute inset-0 z-0 bg-[#06182c]/75" />
                <div className="relative z-10">
                <div className="text-[10px] font-bold tracking-[0.2em] text-[#5eb0ff]">
                  OUR VISION
                </div>

                <h3 className="mt-5 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                  Trusted.
                  <br />
                  Preferred.
                  <br />
                  Recognized.
                </h3>

                <p className="mt-7 text-sm leading-8 text-white/60">
                  To become a trusted and preferred engineering
                  solutions provider, recognized for excellence,
                  innovation and reliability in the power and
                  process industries.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    "Lasting partnerships",
                    "High-quality services",
                    "Advanced technologies",
                    "Continuous improvement",
                    "Safety",
                    "Environmental responsibility",
                    "Customer satisfaction",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium text-white/80"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-[#5eb0ff]"
                      />
                      {item}
                    </div>
                  ))}
                </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================================================
          TECHNICAL SUPPORT
      =================================================== */}

      <section className="section-padding bg-white">
        <div className="container-nr">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal direction="left">
              <div className="relative isolate overflow-hidden border border-slate-200 bg-[#f8fbff] p-8 sm:p-10">
                <DecorativeImage
                  src="/images/support/precision-equipment.jpg"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="z-0 opacity-30"
                />
                <div className="pointer-events-none absolute inset-0 z-0 bg-[#f8fbff]/80" />
                <div className="relative z-10">
                <Network
                  size={28}
                  strokeWidth={1.4}
                  className="text-[#0879e8]"
                />

                <h2 className="mt-7 text-2xl font-black tracking-[-0.03em] text-[#06182c] sm:text-3xl">
                  Technical Support Network
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  To ensure reliable service delivery, NR Power
                  Engineering Services works closely with a
                  trusted network of OEMs, authorized vendors
                  and specialized engineering partners.
                </p>

                <div className="mt-8 flex flex-col gap-3">
                  {[
                    "OEMs",
                    "Authorized Vendors",
                    "Specialized Engineering Partners",
                    "Engineering Support",
                    "Field Services",
                    "Client / Plant",
                  ].map((item, index, list) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0879e8]/30 bg-white text-[10px] font-bold text-[#0879e8]">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="flex flex-1 items-center gap-3">
                        <span className="text-sm font-semibold text-[#10243e]">
                          {item}
                        </span>
                        {index < list.length - 1 && (
                          <span className="h-px flex-1 bg-gradient-to-r from-[#0879e8]/40 via-[#168bff]/60 to-transparent" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Quality Spare Parts",
                    "Precision Machining",
                    "Specialized Services",
                    "Technical Support",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border border-slate-200 bg-white p-4 text-xs font-semibold text-[#10243e]"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-[#0879e8]"
                      />
                      {item}
                    </div>
                  ))}
                </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.15}>
              <div className="relative isolate overflow-hidden border border-slate-200 bg-[#06182c] p-8 sm:p-10">
                <DecorativeImage
                  src="/images/support/field-inspection.jpg"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="z-0 opacity-30"
                />
                <div className="pointer-events-none absolute inset-0 z-0 bg-[#06182c]/75" />
                <div className="relative z-10">
                <Globe2
                  size={28}
                  strokeWidth={1.4}
                  className="text-[#5eb0ff]"
                />

                <h2 className="mt-7 text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
                  Engineering support across India.
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/60">
                  Direct client engagement, on-site field
                  services and shutdown maintenance support for
                  critical industrial operations throughout the
                  country.
                </p>

                <div className="mt-8 rounded-[20px] border border-white/10 bg-white/[0.02] p-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="text-[9px] font-bold tracking-[0.26em] text-[#5eb0ff]">
                      INDIA SERVICE
                    </div>
                    <div className="text-4xl font-black tracking-[-0.06em] text-white">
                      PAN
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 text-xs font-medium uppercase tracking-[0.12em] text-white/70 sm:grid-cols-2">
                    {[
                      "Power Plants",
                      "Refineries",
                      "Petrochemical Facilities",
                      "Cement Plants",
                      "Steel Industries",
                      "Process Industries",
                    ].map((item) => (
                      <div
                        key={item}
                        className="border border-white/10 bg-white/[0.02] px-3 py-3"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================================================
          CONTACT CTA
      =================================================== */}

      <section
        id="contact"
        className="relative overflow-hidden bg-[#06182c] py-20 sm:py-28"
      >
        <DecorativeImage
          src="/images/contact/industrial-background.jpg"
          sizes="100vw"
          className="z-0 opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06182c]/90 via-[#0b2948]/75 to-[#06182c]/90" />

        <motion.div
          className="absolute right-[-12%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#0879e8]/10 blur-[140px]"
          animate={
            reduced
              ? undefined
              : {
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.45, 0.2],
                }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />

        <div className="container-nr relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <Reveal direction="left">
              <SectionHeading
                dark
                eyebrow="CONTACT NR POWER"
                title="Let's discuss your"
                blueWord="engineering requirement."
                description="Connect with NR Power Engineering Services for engineering support across critical equipment and industrial requirements."
              />
            </Reveal>

            <Reveal direction="right" delay={0.15}>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+919000416666"
                  className="inline-flex h-[52px] items-center justify-center gap-3 bg-[#0879e8] px-7 text-xs font-bold tracking-[0.12em] !text-white transition hover:bg-[#168bff]"
                >
                  <Phone size={16} />
                  +91 90004 16666
                </a>

                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex h-[52px] items-center justify-center gap-3 border border-white/55 px-7 text-xs font-bold tracking-[0.12em] !text-[#e5f3ff] transition hover:bg-white/[0.05] hover:!text-white"
                >
                  <Mail size={16} />
                  EMAIL US
                </a>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-8 border-t border-white/10 pt-9 md:grid-cols-3">
            <Reveal delay={0.05}>
              <div>
                <MapPin
                  size={17}
                  className="text-[#5eb0ff]"
                />

                <div className="mt-4 text-[9px] font-bold tracking-[0.18em] text-[#8fc7ff]">
                  ADDRESS
                </div>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">
                  {company.address}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div>
                <Phone
                  size={17}
                  className="text-[#5eb0ff]"
                />

                <div className="mt-4 text-[9px] font-bold tracking-[0.18em] text-[#8fc7ff]">
                  PHONE
                </div>

                <a
                  href="tel:+919000416666"
                  className="mt-3 block text-sm !text-[#e5f3ff] hover:!text-[#8fc7ff]"
                >
                  {company.phone}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.19}>
              <div>
                <Mail
                  size={17}
                  className="text-[#5eb0ff]"
                />

                <div className="mt-4 text-[9px] font-bold tracking-[0.18em] text-[#8fc7ff]">
                  EMAIL
                </div>

                <div className="mt-3 space-y-1.5">
                  <a
                    href={`mailto:${company.email}`}
                    className="block break-all text-sm !text-[#e5f3ff] hover:!text-[#8fc7ff] transition"
                  >
                    {company.email}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer className="bg-[#03101e]">
        <div className="container-nr flex flex-col gap-6 py-9 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-xs font-black tracking-[0.2em] text-white">
              NR POWER ENGINEERING SERVICES
            </div>

            <div className="mt-2 text-[9px] tracking-[0.12em] text-white/35">
              POWERING PERFORMANCE. DELIVERING EXCELLENCE.
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:items-end">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/60">
              <a
                href={`mailto:${company.email}`}
                className="hover:text-white transition"
              >
                {company.email}
              </a>
            </div>

            <div className="text-[9px] tracking-[0.12em] text-white/30">
              © 2026 NR POWER ENGINEERING SERVICES
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
