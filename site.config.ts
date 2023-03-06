import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'BLOG-1a5116ebf0794cdc8b49cc9bbabaa36d',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Hye-dev',
  domain: '',
  author: 'Mihye Bae',

  // open graph metadata (optional)
  description: 'Hye-dev Blog',

  // social usernames (optional)
  twitter: 'hye_dev_',
  github: 'mihye126',
  linkedin: 'mihye126',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: false,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/post': 'Post-35bfd9e195c547de95e62017234aefe7',
    '/archive': 'Archive-9a5d1fdf7f73421e995b1844f04f0f3b',
    '/contact': 'Contact-c14a3833d6a44c23ad9728ddc9549985',
    '/personal': 'Peronal-ee5febd682754ccb8537da77b0f09c6c'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
