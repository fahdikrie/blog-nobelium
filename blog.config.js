const BLOG = {
  title: 'home | badi\'s very own blogpage',
  author: 'Fahdii Ajmalal Fikrie',
  email: 'fahdiaf@ristek.cs.ui.ac.id',
  link: 'https://blog.fahdikrie.com',
  description: `
    Fahdii (or Badi) is a 21 years old sophomore student currently majoring
    CS 💻 at the University of Indonesia ‍🇮🇩

    Fahdii is very passionate when it comes to taking naps 💤 and watching
    movies 🎬 Some of his favorite movies are Good Morning (1959) 🌄 and The
    Makioka Sisters (1983) 🎎

    All the funsies aside 🎭 Fahdii is a software engineer in the making 🧑‍💻
    Having great interest in full-stack web development 🌐 He looks forward to
    be able to do big things 💯 and take part in this vast & rapid growing
    world of tech-industry 🚀
  `,
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  appearance: 'dark', // ['light', 'dark', 'auto'],
  font: 'sans', // ['sans-serif', 'serif']
  lightBackground: '#F7F7F7', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#000000', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2022, // If leave this empty, current year will be used.
  postsPerPage: 7,
  sortByDate: false,
  showAbout: false,
  showArchive: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateURL: 'https://og-image-craigary.vercel.app', // The link to generate OG image, don't end with a slash
  socialLink: 'https://twitter.com/fahdikrie',
  seo: {
    keywords: ['Blog', 'Website', 'Notion', 'fahdikrie'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  analytics: {
    provider: '', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: gitalk, utterances, cusdis
    provider: '', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: '', // The repository of store comments
      owner: '',
      admin: [],
      clientID: '',
      clientSecret: '',
      distractionFreeMode: false
    },
    utterancesConfig: {
      repo: ''
    },
    cusdisConfig: {
      appId: '', // data-app-id
      host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
      scriptSrc: 'https://cusdis.com/js/cusdis.es.js' // change this if you're using self-hosted version
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
