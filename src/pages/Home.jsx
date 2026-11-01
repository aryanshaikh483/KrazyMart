
import React from "react";
import {
  ArrowRight,
  Package,
  TrendingUp,
  Star,
  Tag,
} from "lucide-react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const stats = [
    {
      icon: Package,
      value: "0",
      title: "Cart Items",
      description: "In your bag",
      iconColor: "text-[#C6FF00]",
      iconBg: "bg-[#C6FF00]/10",
    },
    {
      icon: TrendingUp,
      value: "$0.00",
      title: "Cart Value",
      description: "Ready to checkout",
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/10",
    },
    {
      icon: Star,
      value: "5",
      title: "Top Products",
      description: "Highly rated",
      iconColor: "text-amber-400",
      iconBg: "bg-amber-500/10",
    },
    {
      icon: Tag,
      value: "6",
      title: "Categories",
      description: "To explore",
      iconColor: "text-purple-400",
      iconBg: "bg-purple-500/10",
    },
  ];

  return (
    <main className="min-h-screen px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-369 space-y-12">

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-[28px] border border-white/25 bg-[#181818]/70 backdrop-blur-[2px] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">

          {/* Background Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(198,255,0,0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(198,255,0,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative z-10 flex flex-col justify-between gap-12 lg:flex-row lg:items-center">

            {/* Welcome Content */}
            <div className="max-w-2xl">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-[#A3D900]">
                Good Afternoon 👋
              </p>

              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[54px]">
                Welcome back,
                <br />
                <span className="text-[#C6FF00]">Aryan!</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/45 sm:text-lg">
                Discover today's picks, hand-curated products across
                electronics, fashion, and more.
              </p>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("/shop")}
                  className="group inline-flex items-center gap-3 rounded-[20px] bg-[#C6FF00] px-7 py-4 font-semibold text-black transition-all duration-300 hover:bg-[#d5ff45] hover:shadow-[0_0_30px_rgba(198,255,0,0.18)]"
                >
                  Shop Now
                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <button
                  onClick={() => navigate("/shop")}
                  className="rounded-[20px] border border-white/10 px-7 py-4 text-white/65 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white"
                >
                  View All Products
                </button>
              </div>
            </div>

            {/* Promotional Cards */}
            <div className="flex w-full flex-col gap-4 sm:flex-row lg:w-46 lg:flex-col">
              <div className="flex flex-1 flex-col items-center justify-center rounded-[20px] border border-[#C6FF00]/15 bg-[#C6FF00]/10 px-6 py-6 text-center">
                <span className="text-3xl font-bold text-[#C6FF00]">
                  20+
                </span>
                <span className="mt-1 text-sm text-white/40">
                  Products Available
                </span>
              </div>

              <div className="flex flex-1 flex-col items-center justify-center rounded-[20px] border border-white/60 bg-white/2 px-6 py-6 text-center">
                <span className="text-2xl font-bold">Free</span>
                <span className="mt-1 text-sm text-white/40">
                  Delivery on ₹999+
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Cards */}
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="group flex items-start gap-5 rounded-[28px] border border-white/25 bg-[#181818]/75 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6FF00]/40 hover:bg-[#202020]/90 sm:p-7"
              >
                <div
                  className={`flex h-15 w-15 shrink-0 items-center justify-center rounded-[20px] ${stat.iconBg}`}
                >
                  <Icon size={25} className={stat.iconColor} />
                </div>

                <div className="min-w-0">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {stat.value}
                  </h2>

                  <p className="mt-1 text-base text-white/50">
                    {stat.title}
                  </p>

                  <p className="mt-1 text-sm text-white/25">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

      </div>
    </main>
  );
};

export default Home;
