export interface SiteConfig {
  title: string;
  description: string;
  author: {
    name: string;
    bio: string;
    avatar?: string;
  };
  social: {
    github?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
  siteUrl: string;
}

export const config: SiteConfig = {
  title: "Jim's Travel 2026",
  description: "Come along on our 2026 journey to Spain",
  author: {
    name: "Jim S.",
    bio: "Getting those last few trips in!",
    avatar: "/images/avatar.jpg" // Uncomment and add your avatar image to public/images/
  },
  social: {
    github: "https://github.com/jimslaughter",
    twitter: "https://twitter.com/jimslaughter",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "jimslaughter@gmail.com"
  },
  siteUrl: "https://my-astro-site-694.pages.dev/"
};

// Export constants for SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;