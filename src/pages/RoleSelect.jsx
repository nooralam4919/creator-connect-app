import React, { useState } from "react";
import { Store, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[#FFF8F0] relative overflow-hidden flex items-center justify-center px-8 py-10">

      {/* Background blobs (FIXED: pointer-events-none) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C08552]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#8C5A3C]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-[#C08552]/10 rounded-full blur-2xl pointer-events-none"></div>

      {/* Main card */}
      <div className="w-full max-w-7xl rounded-[40px] overflow-hidden shadow-2xl bg-white grid md:grid-cols-2 relative z-10">

        {/* LEFT */}
        <div className="bg-[#4B2E2B] text-white p-20 flex flex-col justify-center relative overflow-hidden z-10">

          <div className="absolute -top-20 -right-20 w-96 h-96 border border-[#C08552]/20 rounded-full pointer-events-none"></div>

          <div className="absolute bottom-0 left-0 w-72 h-72 border border-[#C08552]/10 rounded-full pointer-events-none"></div>

          <h1 className="text-6xl font-bold leading-tight z-10">
            Connect With <br />
            <span className="text-[#C08552]">Creators</span>
          </h1>

          <p className="text-lg text-gray-300 mt-6 z-10">
            Grow your business or become a creator partner.
          </p>

          {/* FIXED BUTTON */}
          <button
            className="mt-10 bg-[#C08552] text-white px-8 py-4 rounded-full flex items-center gap-3 w-fit font-semibold hover:scale-105 transition relative z-20"
            onClick={() => navigate("/getstarted")}
          >
            Get Started
          </button>
        </div>

        {/* RIGHT */}
        <div className="bg-[#FFF8F0] p-16 flex flex-col justify-center relative z-10">

          <h2 className="text-4xl font-bold text-[#4B2E2B] mb-12">
            Choose Your Role
          </h2>

          {/* Shop Owner */}
          <div className="bg-white border-2 border-[#C08552]/20 rounded-3xl p-8 mb-8 hover:shadow-xl transition hover:-translate-y-2 cursor-pointer">

            <Store className="text-[#C08552]" size={42} />

            <h3 className="text-2xl font-bold text-[#4B2E2B] mt-4">
              Shop Owner
            </h3>

            <p className="text-[#8C5A3C] mt-2">
              Promote products through creators
            </p>

            <button
              className="mt-6 bg-[#C08552] text-white px-6 py-3 rounded-full font-medium"
              onClick={() => navigate("/owner")}
            >
              Continue
            </button>
          </div>

          {/* Creator */}
          <div className="bg-white border-2 border-[#8C5A3C]/20 rounded-3xl p-8 hover:shadow-xl transition hover:-translate-y-2 cursor-pointer">

            <Video className="text-[#8C5A3C]" size={42} />

            <h3 className="text-2xl font-bold text-[#4B2E2B] mt-4">
              Creator
            </h3>

            <p className="text-[#8C5A3C] mt-2">
              Collaborate and earn from brands
            </p>

            <button className="mt-6 bg-[#8C5A3C] text-white px-6 py-3 rounded-full font-medium"
               onClick={() => navigate("/creator")}

            >
              Continue
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}