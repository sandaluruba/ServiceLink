"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FilterBar from "@/components/FilterBar";
import JobSection from "@/components/JobsSection";
import Footer from "@/components/Footer";


export default function Home() {

  const [keyword, setKeyword] = useState("");
  const [category, setCategoty] = useState("All");

  return (
    <main>

      <Navbar />
      <Hero />
      <FilterBar keyword={keyword} setKeyword={setKeyword} category={category} setCategory={setCategoty} />
      <JobSection keyword={keyword} category={category} />
      <Footer />

    </main>
  );
}
