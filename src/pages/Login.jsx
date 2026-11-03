import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { Zap, Mail, Lock, ArrowRight, Eye } from "lucide-react";
import { useForm } from "react-hook-form";
import { UserStore } from "@/context/UserContext";

const Login = () => {
  let navigate = useNavigate();

  const { user, setIsLogged, setSession } = useContext(UserStore);

  let {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    let userMatch = user.find((val) => {
      return val.email === data.uEmail;
    });

    if (userMatch) {
      if (userMatch.password === data.uPassword) {
        console.log("Login Sucessful!");
        setIsLogged(true);
        setSession(userMatch);
        navigate("/");
      } else {
        alert("Incorrect Password");
      }
    } else alert("User doens't match");

    reset();
  };

  return (
    <main className="grid min-h-screen text-white lg:grid-cols-2">
      {/* LEFT PANEL */}
      <section className="relative flex min-h-95 bg-[#181818]/70 backdrop-blur-[2px] flex-col justify-between overflow-hidden border-b border-white/10 px-6 py-8 sm:px-12 sm:py-10 lg:min-h-screen lg:border-b-0 lg:border-r lg:border-white/60 lg:px-12 xl:px-16">
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-[#C6FF00]/5.5 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#C6FF00]/2.5 blur-[100px]" />

        {/* Logo */}
        <Link to="/" className="relative z-10 flex w-fit items-center gap-3">
          <span className="text-2xl font-bold tracking-tight">
            Krazy<span className="text-[#C6FF00]">Kart</span>
          </span>
        </Link>

        {/* Hero content */}
        <div className="relative z-10 my-12 max-w-xl lg:my-0 lg:py-20">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-[#C6FF00]">
            Welcome back
          </p>

          <h1 className="text-4xl font-semibold leading-[1.2] tracking-tight sm:text-5xl xl:text-6xl">
            Shop the future.
            <br />
            <span className="mt-2 inline-block text-[#C6FF00]">Today.</span>
          </h1>

          <p className="mt-7 max-w-md text-sm leading-7 text-white/45 sm:text-base">
            Thousands of products, lightning-fast delivery, and prices that make
            your wallet happy.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
            <div className="rounded-2xl border border-white/50 bg-white/1.5 px-2 py-5 text-center sm:px-4">
              <h2 className="text-xl font-semibold text-[#C6FF00] sm:text-2xl">
                20K+
              </h2>
              <p className="mt-1 text-xs text-white/40">Products</p>
            </div>

            <div className="rounded-2xl border border-white/50 bg-white/1.5 px-2 py-5 text-center sm:px-4">
              <h2 className="text-xl font-semibold text-[#C6FF00] sm:text-2xl">
                50K+
              </h2>
              <p className="mt-1 text-xs text-white/40">Users</p>
            </div>

            <div className="rounded-2xl border border-white/50 bg-white/1.5 px-2 py-5 text-center sm:px-4">
              <h2 className="text-xl font-semibold text-[#C6FF00] sm:text-2xl">
                4.9<sup>★</sup>
              </h2>
              <p className="mt-1 text-xs text-white/40">Rating</p>
            </div>
          </div>
        </div>

        {/* Left footer */}
        <p className="relative z-10 hidden text-xs text-white/25 mx-auto lg:block">
          © 2025 SkyMart. Shopping made simple.
        </p>
      </section>

      {/* RIGHT PANEL */}
      <section className="relative flex min-h-130 items-center justify-center overflow-hidden px-5 py-12 sm:px-10 lg:min-h-screen">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-[#C6FF00]/2.5 blur-[100px]" />

        {/* Login card */}
        <div className="relative w-full max-w-108 rounded-[26px] border border-white/9 bg-[#171717]/80 p-6 shadow-2xl shadow-black/20 sm:p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">Sign in</h2>

            <p className="mt-1.5 text-sm text-white/40">
              Enter your credentials to continue
            </p>
          </div>

          <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
            {/* Email */}
            <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-[#232323] px-3.5 transition focus-within:border-[#C6FF00]/50">
              <Mail size={16} className="shrink-0 text-white/30" />

              <input
                {...register("uEmail", { required: "Email Address required" })}
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                className="min-w-0 flex-1 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/30"
              />
            </div>

            {/* Password */}
            <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-[#232323] px-3.5 transition focus-within:border-[#C6FF00]/50">
              <Lock size={16} className="shrink-0 text-white/30" />

              <input
                {...register("uPassword", { required: "Password Required" })}
                type="password"
                placeholder="Password"
                aria-label="Password"
                className="min-w-0 flex-1 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/30"
              />
            </div>

            {/* Forgot password */}
            <div className="flex justify-end pt-0.5">
              <button
                type="button"
                className="text-xs text-white/40 transition hover:text-[#C6FF00]"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#C6FF00] py-3.5 text-sm font-semibold text-black transition duration-200 hover:bg-[#d6ff38] active:scale-[0.99]"
            >
              Sign in
              <ArrowRight size={17} />
            </button>
          </form>

          {/* Register link */}
          <p className="mt-6 text-center text-sm text-white/35">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-[#C6FF00] transition hover:text-white"
            >
              Create one
            </Link>
          </p>
        </div>

        {/* Mobile footer */}
        <p className="absolute bottom-4 text-center text-[11px] text-white/20 lg:hidden">
          © 2025 SkyMart. Shopping made simple.
        </p>
      </section>
    </main>
  );
};

export default Login;
