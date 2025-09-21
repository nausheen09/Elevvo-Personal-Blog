export default function BlogCard({ post }) {
  return (
    <div
      className="relative group rounded-[30px] overflow-hidden  
                 bg-midgreen transition-transform duration-500 ease-in-out
                 hover:scale-[1.03] h-80"
      style={{
        boxShadow: "5px 5px 20px #10352F",
      }}
    >
      {/* Background Image */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Content Box (glass only behind text) */}
      <div
        className="absolute bottom-0 left-0 w-full p-5 
                   bg-[#4D774E]/40 backdrop-blur-xs"
      >
        {/* Title with underline animation */}
        <h2
          className="font-bold text-xl text-white relative w-max
                     after:content-[''] after:absolute after:left-0 after:-bottom-1
                     after:w-full after:h-1.5 after:bg-[#F1B24A]
                     after:scale-x-0 group-hover:after:scale-x-100 after:origin-left
                     after:transition-transform after:duration-500"
        >
          {post.title}
        </h2>

        {/* Hidden content (show on hover) */}
        <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out">
          <p className="text-white/90 text-sm mt-3">
            {post.description}
          </p>
          <div className="flex justify-between items-center mt-3 text-xs text-accent">
            <span className="font-medium">{post.category}</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
