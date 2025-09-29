import { useState, useEffect } from "react";
export default function BlogCard({ post }) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 1325);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      className="relative group rounded-[30px] overflow-hidden  
             bg-midgreen transition-transform duration-500 ease-in-out
             hover:scale-[1.03] h-auto lg:h-80"
      style={{ boxShadow: "5px 5px 20px #10352F" }}
      onClick={() => {
        if (isMobile) setOpen(!open);
      }}
    >
      {/* Image */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover card-image"
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-5 bg-[#4D774E]/40 backdrop-blur-md ">
        <h2 className="font-bold text-xl text-white relative w-max underline-anim">
          {post.title}
        </h2>


        {/* Description popup */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden 
            ${isMobile
              ? open
                ? "max-h-40"
                : "max-h-0"
              : "max-h-0 group-hover:max-h-40"
            }`} >
          <p className="text-white/90 text-sm mt-3">{post.description}</p>
          <div className="flex justify-between items-center mt-3 text-xs text-accent">
            <span className="font-medium">{post.category}</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
        </div>

      </div>
    </div>
  );
}