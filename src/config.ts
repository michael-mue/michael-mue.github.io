import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://michael-mue.github.io",
  author: "Michael Müller",
  profile: "https://satnaing.dev/",
  desc: "A personal blog by Michael Müller",
  title: "Michael Müller",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 3,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Mail",
    href: "mailto:michael.m.mueller@uibk.ac.at",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/michael-markus-mueller/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/michael-mue.bsky.social",
    linkTitle: ` ${SITE.title} on Bluesky`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/michael-mue",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://x.com/michael_mmller",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "GoogleScholar",
    href: "https://scholar.google.com/citations?user=7q6rv7EAAAAJ&hl=de",
    linkTitle: `${SITE.title} on Google Scholar`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://fosstodon.org/@michaelmueller",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
