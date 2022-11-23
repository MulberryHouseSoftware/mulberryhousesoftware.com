import nextMDX from '@next/mdx'
import rehypePrism from '@mapbox/rehype-prism'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  async redirects() {
    return [
      {
        source: '/blog/2022/4/26/world-marathon-courses-infographic',
        destination: '/articles/world-marathon-courses-infographic',
        permanent: true,
      },
      {
        source:
          '/blog/2021/11/25/allotment-a-react-component-for-resizable-split-views',
        destination:
          '/articles/allotment-a-react-component-for-resizable-split-views',
        permanent: true,
      },
      {
        source: '/blog/2020/10/4/supporting-two-major-versions-of-d3',
        destination: '/articles/supporting-two-major-versions-of-d3',
        permanent: true,
      },
      {
        source: '/blog/2019/2/1/inspector-oars',
        destination: '/articles/what-makes-for-a-memorable-oar-design',
        permanent: true,
      },
      {
        source: '/blog/2018/11/9/train-ticket-machine-ux-part-2',
        destination: '/articles/east-croydon-where-are-thou',
        permanent: true,
      },
      {
        source: '/blog/2018/10/9/visidata',
        destination: '/articles/a-command-line-spreadsheet',
        permanent: true,
      },
      {
        source: '/blog/2018/5/3/how-do-you-stack-up',
        destination: '/articles/how-do-you-stack-up',
        permanent: true,
      },
      {
        source: '/blog/2018/3/18/visualising-distributions',
        destination: '/articles/visualising-distributions',
        permanent: true,
      },
      {
        source: '/blog/2018/2/6/update-womens-eights-head-of-the-river-race-winning-times',
        destination: '/articles/update-womens-eights-head-of-the-river-race-winning-times',
        permanent: true,
      },
      {
        source: '/blog/2018/1/25/wehorr-winning-times',
        destination: '/articles/womens-eights-head-of-the-river-race-winning-times',
        permanent: true,
      },
      {
        source: 'https://www.mulberryhousesoftware.com/blog/2018/1/20/leaflet-d3',
        destination: '/articles/leaflet-d3',
        permanent: true,
      },
    ]
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
