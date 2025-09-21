import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import BlogList from "./components/BlogList.jsx";
import { postsData } from "./data/posts.jsx";

export default function App() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const filteredPosts = postsData.filter(
    (post) =>
      (category === "All" || post.category === category) &&
      post.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="min-h-screen bg-midgreen ">
      <Header
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
      />
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Hero section - featured first post */}
        {postsData[0] && <Hero post={postsData[0]} />}

        {/* Blog list */}
        <BlogList
          posts={currentPosts}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>

    </div>
  );
}
