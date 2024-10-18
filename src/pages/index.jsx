import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import image1 from '@/images/photos/image-1.gif'
import image2 from '@/images/photos/image-2.png'
import image3 from '@/images/photos/image-3.gif'
import image4 from '@/images/photos/image-4.png'
import image5 from '@/images/photos/image-5.png'
import image6 from '@/images/photos/image-6.gif'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoFinancialCanvas from '@/images/logos/financial-canvas.svg'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoNolojy from '@/images/logos/nolojy.svg'
import logoPeopleMake from '@/images/logos/people-make.svg'
import logoReno from '@/images/logos/reno.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStrata from '@/images/logos/strata.svg'
import logoVega from '@/images/logos/vega.svg'
import penny from '@/images/penny.png'
import squirrell from '@/images/squirrell.jpeg'
import { useRouter } from 'next/router'

function Testimonials() {
  return (
    <section className="overflow-hidden bg-white py-12 dark:bg-zinc-900 md:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute right-full top-full -translate-y-1/4 translate-x-1/3 transform lg:translate-x-1/2 xl:-translate-y-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          role="img"
          aria-labelledby="svg-workcation"
        >
          <title id="svg-workcation">Reno</title>
          <defs>
            <pattern
              id="ad119f34-7694-4c31-947f-5c9d249b21f3"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200 dark:text-gray-800"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
          />
        </svg>

        <div className="relative">
          <blockquote className="mt-10">
            <div className="mx-auto max-w-3xl text-center text-2xl font-medium leading-9 text-zinc-600 dark:text-zinc-400">
              <p>
                &ldquo;John has been an integral part of our team at Reno for
                the past year and a half, during this time, he has single
                handedly developed our floor planner app, a vital feature of our
                product. The floor planner allows users to effortlessly create
                to-scale floor plans and automatically generate wall elevation
                views - cross device, mobile first.
                <br />
                <br />
                John's expertise in data visualization and his ability to tackle
                the complex mathematical challenges of the app’s geospatial
                features have been instrumental in moving the project forward.
                <br />
                <br />
                Beyond his technical prowess, John has been a great fit for us
                due to his flexibility and collaborative nature. As a start up
                developing on a shoe string, he worked closely with us to
                establish a working pattern and commercial model that met
                everyone’s needs. His communicative nature and transparent
                approach have made the development process smooth, as he
                regularly shares his work in progress, allowing us to shape the
                technical implementation and user experience together
                effectively.
                <br />
                <br />
                John brings immense value through his independent
                problem-solving and his openness to feedback, which has helped
                ensure the success of our project.&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <Image
                    className="mx-auto h-10 w-10 rounded-full"
                    src={penny}
                    alt=""
                  />
                </div>
                <div className="mt-3 text-center md:ml-4 md:mt-0 md:flex md:items-center">
                  <div className="text-base font-medium text-zinc-600 dark:text-zinc-400">
                    Penny Andrews
                  </div>

                  <svg
                    className="mx-1 hidden h-5 w-5 text-zinc-600 dark:text-zinc-400 md:block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-zinc-600 dark:text-zinc-400">
                    Co-founder, CEO at{' '}
                    <a href="https://www.renovatewithreno.co.uk/">Reno</a>
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute right-full top-full -translate-y-1/4 translate-x-1/3 transform lg:translate-x-1/2 xl:-translate-y-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          role="img"
          aria-labelledby="svg-workcation"
        >
          <title id="svg-workcation">Financial Canvas</title>
          <defs>
            <pattern
              id="ad119f34-7694-4c31-947f-5c9d249b21f3"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200 dark:text-gray-800"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
          />
        </svg>

        <div className="relative">
          <blockquote className="mt-10">
            <div className="mx-auto max-w-3xl text-center text-2xl font-medium leading-9 text-zinc-600 dark:text-zinc-400">
              <p>
                &ldquo;The great thing about Mulberry House Software is their
                focus on the end user and the problems they’re trying to solve.
                Don’t tell them you need such and such a chart, tell them what
                the story is and what you wish to communicate - the results are
                much better. Mulberry House Software has been instrumental in
                bringing our clients’ data to life.&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <Image
                    className="mx-auto h-10 w-10 rounded-full"
                    src={squirrell}
                    alt=""
                  />
                </div>
                <div className="mt-3 text-center md:ml-4 md:mt-0 md:flex md:items-center">
                  <div className="text-base font-medium text-zinc-600 dark:text-zinc-400">
                    Chris Squirrell
                  </div>

                  <svg
                    className="mx-1 hidden h-5 w-5 text-zinc-600 dark:text-zinc-400 md:block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-zinc-600 dark:text-zinc-400">
                    Founder at{' '}
                    <a href="https://www.financialcanvas.co.uk/">
                      Financial Canvas
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()

    await fetch('/api/sendgrid', {
      body: JSON.stringify({
        email: event.target['email'].value,
        fullname: event.target['full-name'].value,
        subject: 'Contact from Mulberry House Software website',
        message: event.target['message'].value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    router.push('/thank-you')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Get in touch</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Let us know about a project you&apos;ve got in mind.
      </p>
      <div className="mt-6 flex flex-col">
        <input
          type="text"
          name="full-name"
          id="full-name"
          placeholder="Full name"
          aria-label="Full name"
          autoComplete="name"
          required
          className="mb-4 min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
          aria-label="Email address"
          autoComplete="email"
          required
          className="mb-4 min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Message"
          aria-label="Message"
          required
          defaultValue={''}
          className="mb-4 min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="flex-none">
          Submit
        </Button>
      </div>
    </form>
  )
}

function Photos() {
  let rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
    'rotate-2',
  ]

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image6, image4, image5].map(
          (image, imageIndex) => (
            <div
              key={image.src}
              className={clsx(
                'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                rotations[imageIndex % rotations.length]
              )}
            >
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Mulberry House Software - Software designer, founder, and amateur
          astronaut
        </title>
        <meta
          name="description"
          content="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Create data-driven interactive stories.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Mulberry House Software can help you turn data into{' '}
            <strong>interactive visualisations</strong>,{' '}
            <strong>infographics</strong> and <strong>reports</strong>.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/dowhatimean"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com/remarkablecharts"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/johnwalley"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/company/18064811"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="pb-8 pt-16 text-center lg:pt-24">
        <div>
          <p className="font-display text-base text-zinc-600 dark:text-zinc-400">
            Trusted by
          </p>
          <ul
            role="list"
            className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
          >
            {[
              [
                {
                  name: 'Reno',
                  logo: logoReno,
                  href: 'https://www.renovatewithreno.co.uk/',
                },
                {
                  name: 'Financial Canvas',
                  logo: logoFinancialCanvas,
                  href: 'https://www.financialcanvas.co.uk/',
                },
                {
                  name: 'Vega',
                  logo: logoVega,
                  href: 'https://vega.xyz/',
                },
              ],
              [
                {
                  name: 'Strata',
                  logo: logoStrata,
                  href: 'https://www.stratasecurity.co.uk/',
                },
                {
                  name: 'Nolojy',
                  logo: logoNolojy,
                  href: 'https://nolojy.com/',
                },
              ],
            ].map((group, groupIndex) => (
              <li key={groupIndex}>
                <ul
                  role="list"
                  className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
                >
                  {group.map((company) => (
                    <li key={company.name} className="flex">
                      <a href={company.href}>
                        <Image
                          src={company.logo}
                          alt={company.name}
                          unoptimized
                          className="brightness-200 grayscale filter dark:brightness-150"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container>
        <Testimonials />
      </Container>
      <Container className="mt-12 md:mt-16">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
