import { motion } from "motion/react";
import { 
  ArrowRight,
  Search,
  Instagram
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
import { useState, useMemo } from "react";
import { blogPosts, BlogCategory } from "../data/blogPosts";

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-100 flex flex-col h-full group hover:shadow-xl transition-all duration-500"
  >
    <a href={`/blog/${post.slug}`} className="aspect-[16/9] overflow-hidden relative block">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 left-4 bg-[#F8ABAC] text-white font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-widest">
        {post.category}
      </div>
    </a>
    <div className="p-8 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-[#033852] mb-4 leading-tight group-hover:text-[#F8ABAC] transition-colors">
        <a href={`/blog/${post.slug}`}>{post.title}</a>
      </h3>
      <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow">
        {post.excerpt}
      </p>
      <div className="pt-6 border-t border-zinc-50 mt-auto flex items-center justify-between">
        <span className="text-zinc-400 text-xs font-medium uppercase tracking-widest">{post.date}</span>
        <a 
          href={`/blog/${post.slug}`} 
          className="inline-flex items-center gap-2 text-[#033852] font-bold text-xs hover:gap-3 transition-all group/btn"
        >
          Read More <ArrowRight className="w-3 h-3 text-[#F8ABAC]" />
        </a>
      </div>
    </div>
  </motion.div>
);

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'All'>('All');
  
  const categories: (BlogCategory | 'All')[] = ['All', 'Gutters', 'Lighting', 'Soffits', 'Seasonal', 'General'];

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return blogPosts;
    return blogPosts.filter(post => post.category === activeCategory);
  }, [activeCategory]);

  const featuredPost = useMemo(() => {
    return blogPosts.find(post => post.featured);
  }, []);

  const hasPosts = blogPosts.length > 0;

  return (
    <div className="min-h-screen bg-white font-sans text-[#033852]">
      <SEO 
        title="Blog | CoastalVille Exteriors"
        description="Exterior maintenance tips, seasonal advice, and local know-how from CoastalVille Exteriors — Parksville's gutter, lighting and soffit specialists."
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src="https://i.ibb.co/jP3zVksp/0-L5-A7248-1.jpg" 
            alt="CoastalVille Blog" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#033852]/80 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Service List with Lines */}
            <div className="mb-12 flex items-center gap-6">
              <div className="hidden md:block h-[1px] w-24 bg-white/30" />
              <span className="text-white/90 text-[10px] md:text-[11px] font-bold tracking-[0.4em] uppercase whitespace-nowrap">
                TIPS · ADVICE · LOCAL KNOW-HOW
              </span>
              <div className="hidden md:block h-[1px] w-24 bg-white/30" />
            </div>

            {/* Main Headline */}
            <h1 className="flex flex-col items-center mb-10">
              <span className="font-sans font-bold text-6xl md:text-[110px] text-white leading-none uppercase tracking-tight mb-2">
                Coastal
              </span>
              <span className="font-sans font-black text-5xl md:text-[90px] text-[#F8ABAC] leading-none uppercase tracking-tight">
                Insights
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-xl text-white/80 text-sm md:text-base font-medium leading-relaxed mb-12">
              Seasonal maintenance guides, product explainers, and honest advice from the CoastalVille team.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="/contact" 
                className="w-full sm:w-auto px-10 py-4 bg-[#F8ABAC] text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20"
              >
                Get a Free Quote
              </a>
              <a 
                href="tel:2502701010" 
                className="w-full sm:w-auto px-10 py-4 bg-transparent text-white border border-white/40 rounded-md text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                Call (250) 270-1010
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {!hasPosts ? (
        /* Empty State */
        <section className="py-32 px-6 bg-[#F5F5F5] text-center">
          <div className="max-w-xl mx-auto">
            <div className="w-20 h-20 bg-zinc-200 rounded-full flex items-center justify-center mx-auto mb-8">
              <Search className="w-8 h-8 text-zinc-400" />
            </div>
            <h3 className="text-2xl font-bold text-[#033852] mb-4">We're working on it — check back soon.</h3>
            <p className="text-zinc-500 mb-10 leading-relaxed">
              In the meantime follow us on Instagram for tips, project updates, and the occasional before and after.
            </p>
            <a 
              href="https://instagram.com/coastalville_exteriors" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#F8ABAC] text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20"
            >
              <Instagram className="w-5 h-5" /> Follow us on Instagram
            </a>
          </div>
        </section>
      ) : (
        <>
          {/* Featured Post */}
          {featuredPost && activeCategory === 'All' && (
            <section className="py-12 px-6 bg-white -mt-12 relative z-10">
              <div className="max-w-7xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-zinc-100 flex flex-col lg:flex-row min-h-[500px] group"
                >
                  <div className="lg:w-1/2 relative overflow-hidden">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-8 left-8 bg-[#F8ABAC] text-white font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      {featuredPost.category}
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
                    <div className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-6">{featuredPost.date}</div>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#033852] mb-8 leading-tight group-hover:text-[#F8ABAC] transition-colors">
                      <a href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</a>
                    </h2>
                    <p className="text-zinc-500 text-lg mb-10 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <a 
                      href={`/blog/${featuredPost.slug}`} 
                      className="inline-flex items-center gap-3 text-[#033852] font-bold text-lg hover:gap-4 transition-all group/btn"
                    >
                      Read More <ArrowRight className="w-5 h-5 text-[#F8ABAC]" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {/* Filter Bar */}
          <section className="py-12 px-6 bg-white sticky top-24 z-20 border-b border-zinc-50">
            <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-[#033852] text-white shadow-lg shadow-[#033852]/20' 
                    : 'bg-zinc-100 text-[#033852] hover:bg-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
            </div>
          </section>

          {/* Post Grid */}
          <section className="py-24 px-6 bg-[#F5F5F5]">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <div key={post.slug}>
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
              
              {filteredPosts.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-zinc-400 font-medium">No posts found in this category.</p>
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {/* Final CTA */}
      <section className="bg-white py-32 px-6 text-center overflow-hidden relative border-t border-zinc-100">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
            <span className="text-[#F8ABAC] font-bold text-xs uppercase tracking-[0.4em]">Get In Touch</span>
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#033852] mb-8 leading-tight tracking-tight uppercase">
            Ready to <span className="text-[#F8ABAC]">Book?</span>
          </h2>
          <p className="text-zinc-500 text-xl mb-12">Whatever your exterior needs, we're right next door.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="px-10 py-5 bg-[#F8ABAC] text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20 flex items-center justify-center gap-2"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="tel:2502701010" 
              className="px-10 py-5 border border-[#033852]/20 text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-zinc-50 transition-all flex items-center justify-center gap-2"
            >
              Call (250) 270-1010
            </a>
          </div>
          <p className="text-zinc-400 text-sm mt-6">We respond within 24 hours, usually much faster.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
