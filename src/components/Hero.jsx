export default function Hero({ post }) {
  return (
    <section className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] mt-9">
      {/* Background Image */}
      <img
        src="/post-1.jpg"
        alt="Top 5 Healthy Recipes"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 flex items-center">
        {/* Glass Effect Card */}
        <div
          className="w-[90%] sm:w-[70%] md:w-[55%] lg:w-[45%] 
                     ml-4 sm:ml-8 md:ml-12 
                     text-moredarkgreen p-4 sm:p-6
                     border border-[#4D774E]/40
                     bg-[#F1B24A]/40 backdrop-blur-lg
                     rounded-xl shadow-lg 
                     min-h-[220px] sm:min-h-[280px] md:min-h-[410px] 
                     flex flex-col justify-center"
        >
          {/* Date + Category */}
          <p className="text-xs sm:text-sm uppercase tracking-wide mb-4">
            {new Date(post.date).toDateString()} • {post.category || "Food"}
          </p>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mt-4">
            Top Healthy Recipes
          </h2>

          {/* Description */}
          <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg">
            Delicious and easy-to-make recipes...
          </p>

          {/* Button */}
          <button className="button-52 mt-8 font-semibold rounded-lg text-darkgreen"> Read More </button>
        </div>
      </div>
    </section>
  );
}
