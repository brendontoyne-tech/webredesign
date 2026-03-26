import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  schema?: object;
  noIndex?: boolean;
}

export const SEO = ({ title, description, schema, noIndex }: SEOProps) => {
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Handle noIndex
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (noIndex) {
      if (metaRobots) {
        metaRobots.setAttribute("content", "noindex, nofollow");
      } else {
        const meta = document.createElement("meta");
        meta.name = "robots";
        meta.content = "noindex, nofollow";
        document.head.appendChild(meta);
      }
    } else if (metaRobots) {
      metaRobots.setAttribute("content", "index, follow");
    }

    if (schema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [title, description, schema]);

  return null;
};
