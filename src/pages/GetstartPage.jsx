import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import authService from "../Appwrite/Auth";
import { login } from "../store/authSlice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

function GetstartPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const CreateSignInAccount = async (data) => {
    setError("");

    try {
      const session = await authService.login(data);

      if (session) {
        const userData =
          await authService.getCurrentUser();

        if (userData) {
          dispatch(login({ userData }));
        }

        navigate("/");
      }

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF8F0] relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute w-[500px] h-[500px] bg-[#C08552]/20 rounded-full blur-3xl top-[-120px] left-[-120px]"></div>

      <div className="absolute w-[380px] h-[380px] bg-[#8C5A3C]/20 rounded-full blur-3xl bottom-[-120px] right-[-120px]"></div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-[92%] max-w-lg bg-white shadow-2xl rounded-3xl p-14 border border-[#C08552]/20"
      >

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-[#4B2E2B] mb-3">
          Welcome Back
        </h1>

        <p className="text-center text-[#8C5A3C] mb-10 text-lg">
          Login to continue your journey
        </p>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-center mb-4">
            {error}
          </p>
        )}

        {/* FORM */}
        <form
          onSubmit={handleSubmit(CreateSignInAccount)}
         >

          {/* Email */}
          <div className="mb-5">
            <Input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-4 rounded-xl border border-[#C08552]/30 focus:outline-none focus:ring-2 focus:ring-[#C08552]"
              {...register("email", {
                required: "Email is required",
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative mb-7">

            <Input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              className="w-full px-5 py-4 pr-12 rounded-xl border border-[#C08552]/30 focus:outline-none focus:ring-2 focus:ring-[#C08552]"
              {...register("password", {
                required: "Password is required",
              })}
            />

            <button
              type="button"
              type = "submit"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8C5A3C] hover:text-[#4B2E2B]"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

          {errors.password && (
            <p className="text-red-500 text-sm -mt-5 mb-5">
              {errors.password.message}
            </p>
          )}

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="w-full bg-[#C08552] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#8C5A3C] transition"
          >
            Login
          </motion.button>

        </form>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-[#C08552]/30"></div>

          <span className="px-4 text-sm text-[#8C5A3C]">
            OR
          </span>

          <div className="flex-1 h-px bg-[#C08552]/30"></div>
        </div>

        {/* Social Login */}
        <div className="space-y-4">

          <button className="w-full py-4 rounded-xl border border-[#4B2E2B] text-[#4B2E2B] hover:bg-[#4B2E2B] hover:text-white transition">
            Continue with Google
          </button>

          <button className="w-full py-4 rounded-xl border border-[#8C5A3C] text-[#8C5A3C] hover:bg-[#8C5A3C] hover:text-white transition">
            Continue with Facebook
          </button>

        </div>

        {/* Footer */}
        <p className="text-center text-sm text-[#8C5A3C] mt-8">
          Don’t have an account?{" "}

          <span
            onClick={() => navigate("/")}
            className="text-[#C08552] font-semibold cursor-pointer"
          >
            Sign up
          </span>
        </p>

      </motion.div>
    </div>
  );
}

export default GetstartPage;