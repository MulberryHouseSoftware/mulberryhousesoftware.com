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
