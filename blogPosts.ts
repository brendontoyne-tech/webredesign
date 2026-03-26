export type BlogCategory = 'Gutters' | 'Lighting' | 'Soffits' | 'Seasonal' | 'General';

export interface BlogPost {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-often-should-parksville-homeowners-clean-gutters',
    title: 'How Often Should Parksville Homeowners Clean Their Gutters?',
    category: 'Gutters',
    excerpt: 'Pine needles, arbutus leaves, and heavy coastal rainfall make Parksville one of the toughest areas for gutter maintenance. Here\'s how often you actually need to clean.',
    date: 'March 2026',
    author: 'CoastalVille Exteriors',
    image: 'https://picsum.photos/seed/parksville-gutters/1200/800',
    featured: true,
    content: `
      <p>If you live in Parksville, Qualicum Beach, or anywhere in the Oceanside area, you know that our coastal environment is beautiful—but it's also incredibly tough on your home's exterior. Between the massive Douglas firs, the shedding arbutus trees, and the relentless winter rains, your gutters have a big job to do.</p>

      <h2>The Short Answer</h2>
      <p>For most Parksville homeowners, <strong>twice a year</strong> is the minimum requirement for gutter maintenance. However, depending on your specific property, you might need more frequent attention.</p>

      <h2>Factors That Influence Your Cleaning Schedule</h2>
      <ul>
        <li><strong>Tree Proximity:</strong> If you have large evergreens or deciduous trees within 20 feet of your roofline, you likely need a clean every 4-6 months.</li>
        <li><strong>Roof Pitch:</strong> Steeper roofs shed debris into gutters faster than flatter ones.</li>
        <li><strong>Gutter Type:</strong> Standard open gutters fill up much faster than those protected by high-quality guards.</li>
      </ul>

      <h2>Signs Your Gutters Are Overdue for a Clean</h2>
      <p>Don't wait for a waterfall over your front door to call for help. Look for these early warning signs:</p>
      <ul>
        <li><strong>Visible Debris:</strong> If you can see grass or small trees growing out of your gutters from the ground, it's long overdue.</li>
        <li><strong>Staining on Siding:</strong> Dark streaks on your fascia or siding often mean water is overflowing.</li>
        <li><strong>Sagging Gutters:</strong> The weight of wet debris and standing water can pull your gutters away from the house.</li>
      </ul>

      <p>Regular maintenance is significantly cheaper than repairing foundation damage or replacing rotted fascia boards. If you haven't had your gutters inspected recently, now is the time.</p>

      <p>Ready to get your gutters back in top shape? Check out our <a href="/services/gutter-cleaning">Gutter Cleaning services</a> or give us a call today.</p>
    `
  },
  {
    slug: 'do-gutter-guards-work-with-pine-needles',
    title: 'Do Gutter Guards Work With Pine Needles? The Honest Answer',
    category: 'Gutters',
    excerpt: 'Most gutter guard systems fail with pine needles. Here\'s why — and what to look for if you live on Vancouver Island where Douglas fir and pine trees are everywhere.',
    date: 'March 2026',
    author: 'CoastalVille Exteriors',
    image: 'https://picsum.photos/seed/pine-needles/1200/800',
    content: `
      <p>If you've ever spent a Saturday afternoon picking individual pine needles out of a mesh gutter guard, you know the frustration. Most "big box" gutter guards are designed for large maple leaves, not the fine, needle-like debris we deal with here on Vancouver Island.</p>

      <h2>The Problem with Standard Guards</h2>
      <p>Standard mesh or plastic guards often have holes that are either too large (letting needles through) or too small (letting needles get stuck and "bridge" over the holes, causing water to overshoot the gutter).</p>

      <h2>What Actually Works?</h2>
      <p>On Vancouver Island, you need a system designed for micro-debris. We recommend the <strong>Alu-Rex DoublePro</strong>. It uses a dual-layer system with precision offset holes that are specifically engineered to block pine needles while maintaining maximum water flow.</p>

      <p>Learn more about why we recommend this system on our <a href="/services/gutter-guards">Gutter Guards page</a>.</p>
    `
  },
  {
    slug: 'why-coastal-bc-homes-need-soffit-venting',
    title: 'Why Coastal BC Homes Need Soffit Venting',
    category: 'Soffits',
    excerpt: 'Inadequate soffit venting is one of the most overlooked causes of premature roof aging on Vancouver Island. Here\'s what it does and why it matters.',
    date: 'February 2026',
    author: 'CoastalVille Exteriors',
    image: 'https://picsum.photos/seed/soffit-venting/1200/800',
    content: `
      <p>Your roof isn't just a lid on your house; it's a breathing system. In our damp, coastal climate, proper airflow is critical to preventing mold, rot, and ice damming.</p>

      <h2>The Role of Soffit Vents</h2>
      <p>Soffit vents allow cool air to enter your attic at the lowest point. This air then travels up and out through your roof vents, carrying away heat and moisture. Without this intake, your attic becomes a stagnant, humid box.</p>

      <p>If you're noticing peeling paint on your soffits or ice buildup in the winter, it might be time for an upgrade. See our <a href="/services/soffits">Soffit services</a> for more information.</p>
    `
  },
  {
    slug: 'permanent-vs-holiday-lighting-comparison',
    title: 'Permanent vs Holiday Lighting — Which Is Right for Your Home?',
    category: 'Lighting',
    excerpt: 'Both are beautiful, but they serve different purposes and come with different price points. Here\'s how to think about which one fits your home.',
    date: 'January 2026',
    author: 'CoastalVille Exteriors',
    image: 'https://picsum.photos/seed/lighting-compare/1200/800',
    content: `
      <p>Choosing between permanent LED lighting and traditional seasonal holiday lights is a common dilemma for Oceanside homeowners. Both offer stunning results, but the "best" choice depends on your long-term goals.</p>

      <h2>Permanent Lighting: The "Set and Forget" Choice</h2>
      <p>Permanent systems are installed once and stay on your home year-round. They are app-controlled, allowing you to change colors for any occasion—from Christmas to Canada Day or even just elegant architectural lighting for a Tuesday night.</p>

      <h2>Holiday Lighting: The Seasonal Tradition</h2>
      <p>Traditional holiday lighting is perfect for those who love the classic look and don't mind the seasonal cycle of installation and takedown. It's often a lower upfront cost but requires annual service.</p>

      <p>Compare the two on our <a href="/services/permanent-lighting">Permanent Lighting</a> and <a href="/services/holiday-lighting">Holiday Lighting</a> pages.</p>
    `
  },
  {
    slug: 'coastalville-guide-preparing-exterior-for-fall',
    title: 'The CoastalVille Guide to Preparing Your Home\'s Exterior for Fall',
    category: 'Seasonal',
    excerpt: 'A practical pre-fall checklist for Oceanside homeowners — gutters, downspouts, soffits, and lighting. Everything to check before the rain hits.',
    date: 'September 2025',
    author: 'CoastalVille Exteriors',
    image: 'https://picsum.photos/seed/fall-prep/1200/800',
    content: `
      <p>Fall on Vancouver Island means one thing: rain. Is your home ready for the "Big Wet"? Use this checklist to ensure your exterior is prepared before the first storm hits.</p>

      <ol>
        <li><strong>Clear the Gutters:</strong> Ensure water can flow freely away from your foundation.</li>
        <li><strong>Check Downspouts:</strong> Make sure they aren't blocked and are directing water at least 6 feet away from the house.</li>
        <li><strong>Inspect Soffits:</strong> Look for signs of pests or blocked vents.</li>
        <li><strong>Test Exterior Lights:</strong> With the days getting shorter, you'll want your lighting in top shape.</li>
      </ol>

      <p>Need help with your fall prep? <a href="/contact">Contact us</a> for a free exterior assessment.</p>
    `
  }
];
