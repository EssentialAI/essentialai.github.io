// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Essential AI',
  tagline: 'Learn AI, the Math way!',
  url: 'https://essentialai.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/brain1.ico',
  organizationName: 'EssentialAI', // Usually your GitHub org/user name.
  projectName: 'EssentialAI.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // The application ID provided by Algolia
        appId: 'GT852U1XQK',
  
        // Public API key: it is safe to commit it
        apiKey: 'ddadeaac9a2a8bb4f70bfe194c3a1bea',
  
        indexName: 'naresh',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
      navbar: {
        title: 'The Essential AI',
        
        // logo: {
        //   alt: 'My Site Logo',
        //   // src: 'img/brain1.ico',
        // },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: ' ',
          // },
          // {
          //   href: 'https://essentialai.org',
          //   label: 'The Essential AI',
          //   position: 'left',
          // },
          // {
          //   href: 'momentum',
          //   label: 'Our research',
          //   position: 'left',
          // },
          {
            href: 'https://github.com/EssentialAI',
            label: 'Code',
            position: 'left',
          },
          // {
          //   href: 'https://github.com/EssentialAI',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Home',
            items: [
              {
                label: 'The Essential AI',
                href: '/',
              },
              {
                label: 'Research at EssentialAI (WIP)',
                href: '/',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Linkedin',
                to: 'https://www.linkedin.com/in/nareshkumar1040/',
              },
              {
                label: 'Resume (LaTeX)',
                to: 'https://drive.google.com/file/d/1Tr3uto3iaG9Px7bMzfdWSPdGpx-Vytzo/view?usp=sharing',
              },
              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Created by Naresh Kumar Devulapally.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
