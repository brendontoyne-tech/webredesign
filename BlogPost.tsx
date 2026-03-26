import { motion } from "motion/react";
import { 
  ArrowRight,
  Calendar,
  User,
  ChevronLeft
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
import { useParams, Navigate } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

const RelatedPostCard = ({ post }: { post: typeof blogPosts[0] }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-100 flex flex-col h-full group hover:shadow-md transition-all">
    <a href={`/blog/${post.slug}`} className="aspect-[16/9] overflow-hidden relative block">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
    </a>
    <div className="p-6 flex flex-col flex-grow">
      <div className="text-[#F8ABAC] font-bold text-[10px] uppercase tracking-widest mb-3">
        {post.category}
      </div>
      <h4 className="text-lg font-bold text-[#033852] mb-4 leading-tight group-hover:text-[#F8ABAC] transition-colors">
        <a href={`/blog/${post.slug}`}>{post.title}</a>
      </h4>
      <a 
        href={`/blog/${post.slug}`} 
        className="inline-flex items-center gap-2 text-[#033852] font-bold text-xs hover:gap-3 transition-all mt-auto"
      >
        Read More <ArrowRight className="w-3 h-3 text-[#F8ABAC]" />
      </a>
    </div>
  </div>
);

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-sans text-[#033852]">
      <SEO 
        title={`${post.title} | CoastalVille Exteriors`}
        description={post.excerpt}
      />
      
      {/* BlogPosting Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "image": [post.image],
          "datePublished": post.date,
          "author": [{
            "@type": "Organization",
            "name": "CoastalVille Exteriors",
            "url": "https://coastalville.ca"
          }],
          "description": post.excerpt
        })}
      </script>

      <Navbar />

      <article className="pt-48 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb / Back */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <a href="/blog" className="inline-flex items-center gap-2 text-zinc-400 font-bold text-sm hover:text-[#F8ABAC] transition-colors group">
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
            </a>
          </motion.div>

          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 bg-[#F8ABAC] text-white font-bold text-[10px] px-4 py-1.5 rounded-full uppercase tracking-widest mb-8 shadow-lg shadow-[#F8ABAC]/20">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#033852] mb-8 leading-tight tracking-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-zinc-400 font-medium text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#F8ABAC]" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#F8ABAC]" />
                {post.author}
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl border border-zinc-100">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Body Content */}
          <div className="max-w-[720px] mx-auto">
            <div 
              className="prose prose-lg prose-zinc prose-headings:text-[#033852] prose-headings:font-bold prose-a:text-[#F8ABAC] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#033852] prose-img:rounded-3xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Inline CTA */}
            <div className="mt-16 p-10 bg-zinc-50 rounded-3xl border border-zinc-100 text-center">
              <h3 className="text-2xl font-bold text-[#033852] mb-4">Need help with your {post.category.toLowerCase()}?</h3>
              <p className="text-zinc-500 mb-8 leading-relaxed">
                Our team is right next door in Parksville. Get a free, honest assessment of your home's exterior today.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#F8ABAC] text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Final CTA Block */}
      <section className="bg-white py-32 px-6 text-center overflow-hidden relative border-t border-zinc-100">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
            <span className="text-[#F8ABAC] font-bold text-xs uppercase tracking-[0.4em]">Get In Touch</span>
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#033852] mb-8 leading-tight tracking-tight uppercase">
            Ready to <span className="text-[#F8ABAC]">book?</span>
          </h2>
          <p className="text-zinc-500 text-xl mb-12">Whatever your exterior needs — we're right next door.</p>
          
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

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-24 px-6 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold text-[#033852] mb-12 text-center">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((p) => (
                <div key={p.slug}>
                  <RelatedPostCard post={p} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
