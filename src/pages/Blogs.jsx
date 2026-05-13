import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { blogs, blogCategories } from "../data/blogs";
import { CONFIG } from "../data/config";
import { Calendar, Tag, ArrowRight } from "lucide-react";

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState("all");
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    if (activeCategory === "all") return blogs;
    return blogs.filter((b) => b.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Blog</h1>
          <div
            className="w-20 h-1 mx-auto mb-4"
            style={{ backgroundColor: "var(--accent)" }}
          />
          <p className="text-gray-600 max-w-xl mx-auto">
            Thoughts on business analysis, data, agile delivery, and career growth.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {blogCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.key
                  ? "text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-600"
              }`}
              style={
                activeCategory === cat.key
                  ? { backgroundColor: "var(--accent)" }
                  : {}
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Blog posts */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
            <div className="text-5xl mb-4">✍️</div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              No posts yet
            </h2>
            <p className="text-gray-500 mb-6">
              Blog posts will appear here once published.
            </p>
            <a
              href={`mailto:${CONFIG.email}`}
              className="inline-block px-5 py-2 rounded-md text-white text-sm"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Get in touch
            </a>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString("en-AU", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span
                      className="px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--accent) 12%, white)",
                        color: "var(--accent)",
                      }}
                    >
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {post.tags && (
                    <div className="flex flex-wrap gap-1 mb-5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 px-2 py-0.5 text-xs rounded bg-gray-100 text-gray-600"
                        >
                          <Tag size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <button
                    onClick={() => navigate(`/blogs/${post.slug}`)}
                    className="flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all"
                    style={{ color: "var(--accent)" }}
                  >
                    Read more <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
