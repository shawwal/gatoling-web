import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Gatoling</span>,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Gatoling" />
      <meta property="og:description" content="Master Russian, English, Malay, and Indonesian with Gatoling - Your Gateway to Language Learning. Discover an engaging and effective way to learn languages, from alphabets to 850 common words. Join our global language learning community today and embark on a journey of cultural enrichment and career opportunities." />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Gatoling'
    }
  },
  project: {
    link: 'https://github.com/shawwal/gatoling-web',
  },
  chat: {
    link: 'https://discord.gg/ReGJ9Dgp',
  },
  docsRepositoryBase: 'https://github.com/shawwal/gatoling-web',
  footer: {
    text: '©2023 Gatoling - All rights reserved.',
  },
}

export default config
