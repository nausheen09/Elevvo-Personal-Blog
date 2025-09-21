import { useState } from "react";
import { Search, Facebook, Twitter, Instagram, Linkedin, Menu, X } from "lucide-react";

export default function Header({ category, setCategory, search, setSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-darkgreen shadow-md">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between py-4 md:py-6">
        {/* Left: Blog Title */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-accent">
          My Personal Blog
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-accent" size={18} />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-3 py-2 rounded-md w-48 md:w-60 text-accent border border-transparent focus:border-accent focus:ring-2 outline-none"
            />
          </div>

          {/* Category */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="pl-3 pr-1 py-2 rounded-md bg-darkgreen text-accent border border-transparent  focus:ring-2 cursor-pointer"
          >
            <option value="All">All</option>
            <option value="Tech">Tech</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
          </select>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a href="#" className="text-accent hover:!text-[#1877F2]"><Facebook size={20} /></a>
            <a href="#" className="text-accent hover:!text-[#1DA1F2]"><Twitter size={20} /></a>
            <a href="#" className="text-accent hover:!text-[#E4405F]"><Instagram size={20} /></a>
            <a href="#" className="text-accent hover:!text-[#0A66C2]"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-accent"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-2 flex flex-col gap-4 md:hidden">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-accent" size={18} />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-3 py-2 rounded-md w-full text-accent border border-transparent focus:border-accent focus:ring-2 outline-none"
            />
          </div>

          {/* Category */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="pl-3 pr-1 py-2 rounded-md bg-darkgreen text-accent border border-transparent focus:ring-2 cursor-pointer"
          >
            <option value="All">All</option>
            <option value="Tech">Tech</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
          </select>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 pb-4">
            <a href="#" className="text-accent hover:!text-[#1877F2]"><Facebook size={22} /></a>
            <a href="#" className="text-accent hover:!text-[#1DA1F2]"><Twitter size={22} /></a>
            <a href="#" className="text-accent hover:!text-[#E4405F]"><Instagram size={22} /></a>
            <a href="#" className="text-accent hover:!text-[#0A66C2]"><Linkedin size={22} /></a>
          </div>
        </div>
      )}
    </header>
  );
}
