import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'thiagola92',
  tagline: '',
  favicon: 'img/logo.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://thiagola92.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'thiagola92', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',

          // Added by me
          postsPerPage: 1,
          blogSidebarTitle: ' ',
          blogSidebarCount: 'ALL',
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'https://thiagola92.github.io/blog/img/social_card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ThiagoLA92',
      logo: {
        alt: 'Website Logo',
        src: 'img/logo.svg',
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social Media',
          items: [
            {
              label: 'Bluesky',
              href: 'https://bsky.app/profile/thiagola92.bsky.social',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/thiagola92',
            },
            {
              label: 'Steam',
              href: 'https://steamcommunity.com/id/thiagola92',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/thiagola92',
            },
          ],
        },
        {
          title: 'Career',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/thiagola92',
            },
            {
              label: 'Itch.io',
              href: 'https://thiagola92.itch.io/',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/thiagola92/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Thiago Lages de Alencar, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
