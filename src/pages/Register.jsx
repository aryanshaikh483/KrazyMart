import React, { useContext, useRef } from "react";
import { Link } from "react-router";
import {
  Zap,
  UserRound,
  Mail,
  Lock,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";
import { UserStore } from "@/context/UserContext";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";

const Register = () => {
  const { user, setUser } = useContext(UserStore);
  console.log(user);

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const formSubmit = (data) => {
    const userExists = user.some((val) => {
      return val.email.toLowerCase() === data.uEmail.toLowerCase();
    });

    if (userExists) {
      alert("User already exists!");
      return;
    }
    
    let userId = uuidv4();

    let obj = {
      id: userId,
      name: data.uName,
      email: data.uEmail,
      password: data.uPassword,
      avatar: data.uName.charAt(0).toUpperCase(),
      joinedAt: Date.now(),
    };

    const updatedUsers = [...user, obj];

    setUser(updatedUsers);

    localStorage.setItem("sm_users", JSON.stringify(updatedUsers));

    reset();
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-[#C6FF00]/[0.07] blur-[130px]" />

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="mb-8 flex items-center justify-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C6FF00] text-black">
            <Zap size={23} fill="currentColor" />
          </span>
          <span className="text-2xl font-bold tracking-tight">
            Sky<span className="text-[#C6FF00]">Mart</span>
          </span>
        </Link>

        {/* Register card */}
        <div className="rounded-3xl border border-white/10 bg-[#181818]/90 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-9">
          <div className="mb-7 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C6FF00]/20 bg-[#C6FF00]/10 text-[#C6FF00]">
              <ShoppingBag size={26} />
            </div>

            <h1 className="text-3xl font-semibold tracking-tight">
              Create account
            </h1>

            <p className="mt-2 text-sm text-white/45">
              Join SkyMart and discover something great.
            </p>
          </div>

          <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-white/75">
                Full name
              </label>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#111111] px-4 transition focus-within:border-[#C6FF00]/60">
                <UserRound size={18} className="shrink-0 text-white/35" />
                <input
                  {...register("uName", { required: "Name is Required" })}
                  type="text"
                  placeholder="Your full name"
                  className="w-full bg-transparent py-3.5 text-sm outline-none placeholder:text-white/25"
                />
              </div>
              {errors.uName && (
                <p className="text-xs text-red-500">{errors.uName.message}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/75">
                Email address
              </label>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#111111] px-4 transition focus-within:border-[#C6FF00]/60">
                <Mail size={18} className="shrink-0 text-white/35" />
                <input
                  {...register("uEmail", { required: "Email is Required" })}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-transparent py-3.5 text-sm outline-none placeholder:text-white/25"
                />
              </div>
              {errors.uEmail && (
                <p className="text-xs text-red-500">{errors.uEmail.message}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/75">
                Password
              </label>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#111111] px-4 transition focus-within:border-[#C6FF00]/60">
                <Lock size={18} className="shrink-0 text-white/35" />
                <input
                  {...register("uPassword", {
                    required: "Password is Required",
                  })}
                  type="password"
                  placeholder="Create a password"
                  className="w-full bg-transparent py-3.5 text-sm outline-none placeholder:text-white/25"
                />
              </div>
              {errors.uPassword && (
                <p className="text-xs text-red-500">
                  {errors.uPassword.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C6FF00] py-3.5 font-semibold text-black transition hover:bg-[#d7ff3b] active:scale-[0.99]"
            >
              Create Account
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-white/30">ALREADY A MEMBER?</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <p className="text-center text-sm text-white/50">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-[#C6FF00] transition hover:text-white"
            >
              Login
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-white/25">
          © 2025 SkyMart. Shopping made simple.
        </p>
      </div>
    </main>
  );
};

export default Register;
