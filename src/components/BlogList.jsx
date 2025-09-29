import BlogCard from "./BlogCard.jsx";

export default function BlogList({
  posts,
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  return (
    <section className="p-6 font-sans">
      {/* Subheading */}
      <h4 className="mt-6 text-base leading-relaxed font-medium text-moredarkgreen">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </h4>

      {/* Main Heading */}
      <h1 className="mt-2 mb-7 text-3xl md:text-5xl font-bold text-moredarkgreen">
        Latest Stories
      </h1>

      {/* Blog Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {posts.length > 0 ? (
          posts.map((post) => <BlogCard key={post.id} post={post} />)
        ) : (
          <p className="text-center col-span-3 text-accent text-lg md:text-xl">
            No posts found.
          </p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6 flex-wrap">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-md transition-all duration-300 font-medium cursor-pointer ${
              currentPage === i + 1
                ? "text-moredarkgreen"
                : "bg-accent text-moredarkgreen hover:bg-midgreen hover:text-darkgreen"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}


