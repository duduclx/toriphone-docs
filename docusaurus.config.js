// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'toriphone-docs',
  tagline: 'community documentation',
  favicon: 'img/torifavicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'duduclx', // Usually your GitHub org/user name.
  projectName: 'toriphone-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/duduclx/toriphone-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/duduclx/toriphone-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Toriphone-docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/community', label: 'Communauté', position: 'left'},
          /*{to: '/blog', label: 'Blog', position: 'left'},*/
          {
            href: 'https://github.com/duduclx/toriphone-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
              {
                label: 'Wazo platform documentation',
                href: 'https://wazo-platform.org/documentation'
              },
              {
                label: 'Wazo platform use cases',
                href: 'https://wazo-platform.org/use-cases'
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Community',
                to: 'community',
              },
              {
                label: 'Wazo-platform discourse',
                href: 'https://wazo-platform.discourse.group/',
              },
              {
                label: 'Wazo-platform mattermost',
                href: 'https://mm.wazo.community/wazo-platform/channels/town-square',
              },
            ],
          },
          {
            title: 'More',
            items: [
              /*
              {
                label: 'Blog',
                to: '/blog',
              },
              */
              {
                label: "documentation's GitHub",
                href: 'https://github.com/duduclx/toriphone-docs',
              },
              {
                label: "Wazo platform githubs",
                href: 'https://github.com/wazo-platform/'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ToriPhone, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
