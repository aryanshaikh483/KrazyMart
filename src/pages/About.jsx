import React from "react";
import {
  Zap,
  Package,
  Users,
  Star,
  Truck,
  ShieldCheck,
  Clock,
  Heart,
  Award,
  ArrowUpRight,
} from "lucide-react";
import ShapeGrid from "@/components/ShapeGrid";

const stats = [
  { icon: Package, value: "20K+", label: "Products" },
  { icon: Users, value: "50K+", label: "Happy Customers" },
  { icon: Star, value: "4.9", label: "Avg. Rating" },
  { icon: Truck, value: "99%", label: "On-time Delivery" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Trust",
    description:
      "Every product is verified for quality and authenticity before listing.",
  },
  {
    icon: Clock,
    title: "Speed",
    description:
      "We obsess over delivery times so your orders arrive when promised.",
  },
  {
    icon: Heart,
    title: "Community",
    description:
      "Built around real customer feedback, not just business metrics.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We curate the best. No filler, no junk, just great products.",
  },
];

const team = [
  { initial: "A", name: "Aryan Shah", role: "Founder & CEO" },
];

const About = () => {
  return (
    <main className="relative isolate min-h-screen overflow-hidden text-[#F5F5F5]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <ShapeGrid />
      </div>

      {/* Hero */}
      <section className="px-5 pb-16 pt-20 sm:px-8 sm:pt-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-[22px] bg-[#C6FF00] text-black shadow-[0_0_45px_rgba(198,255,0,0.12)]">
            <Zap size={30} fill="currentColor" strokeWidth={2.5} />
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            About <span className="text-[#C6FF00]">SkyMart</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
            SkyMart is a next-generation e-commerce platform built to make
            online shopping fast, fair, and enjoyable — for everyone.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="group rounded-2xl border border-white/20 bg-white/1 px-4 py-7 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#C6FF00]/60 hover:bg-[#C6FF00]/4"
            >
              <Icon
                size={23}
                className="mx-auto mb-4 text-[#C6FF00] transition-transform duration-300 group-hover:-translate-y-1"
              />
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {value}
              </h2>
              <p className="mt-1.5 text-sm text-white/40">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-5xl rounded-[26px] border border-white/20 bg-[#171717]/80 p-6 backdrop-blur-md sm:p-10">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-8 w-1 rounded-full bg-[#C6FF00]" />
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Our Story
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-white/50 sm:text-base">
            <p>
              SkyMart started in 2022 as a small side project — two engineers
              tired of bloated, slow e-commerce experiences. We asked
              ourselves: what if shopping online was actually{" "}
              <span className="italic text-white/80">enjoyable?</span>
            </p>

            <p>
              Three years later, SkyMart serves over 50,000 customers across
              the country. We stock electronics, fashion, jewelry, and
              everyday essentials — all at prices that don't require a
              second mortgage.
            </p>

            <p>
              We're still the same team at heart: obsessed with speed,
              transparency, and making you feel good about every purchase
              you make here.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#C6FF00]">
              The SkyMart difference
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              What We Stand For
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/45 sm:text-base">
              Great shopping isn't just about what you buy. It's about how
              the entire experience makes you feel.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/15 bg-[#171717]/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6FF00]/50"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#C6FF00]/10 text-[#C6FF00] transition-colors group-hover:bg-[#C6FF00] group-hover:text-black">
                  <Icon size={23} />
                </div>

                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-6 text-white/45">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#C6FF00]">
              The people behind the pixels
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Meet the Team
            </h2>
          </div>

          <div className="flex justify-center items-center">
            {team.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl border border-white/15 bg-[#171717]/80 p-6 text-center transition-all duration-300 hover:border-[#C6FF00]/50"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C6FF00] text-2xl font-semibold text-black transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
                  {member.initial}
                </div>

                <h3 className="font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm text-white/40">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 sm:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-[#C6FF00]/30 bg-[#C6FF00]/5.5 px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-[#C6FF00]/10 blur-[80px]" />

          <div className="relative">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#C6FF00] text-black">
              <Zap size={24} fill="currentColor" />
            </div>

            <h2 className="text-3xl font-semibold sm:text-4xl">
              Ready to <span className="text-[#C6FF00]">shop?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/50 sm:text-base">
              Explore thousands of products at unbeatable prices.
            </p>

            <a
              href="/shop"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C6FF00] px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-[#d5ff38]"
            >
              Browse Products
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <a href="/" className="flex items-center gap-2 font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C6FF00] text-black">
              <Zap size={18} fill="currentColor" />
            </span>
            <span>
              Sky<span className="text-[#C6FF00]">Mart</span>
            </span>
          </a>

          <p className="text-xs text-white/35">
            © 2025 SkyMart • Built with React + Redux + TanStack Query
          </p>
        </div>
      </footer>
    </main>
  );
};

export default About;