export const PERSONAL_SITE_URL = 'https://www.walley.org.uk'

export function ArchiveBanner() {
  return (
    <div className="relative z-50 border-b border-zinc-200 bg-zinc-100 px-4 py-2.5 text-center text-sm text-zinc-700 dark:border-zinc-700/40 dark:bg-zinc-800 dark:text-zinc-300">
      <p>
        Mulberry House Software traded from 2017 to 2025 and is no longer
        operating. This site is kept as an archive.{' '}
        <a
          href={PERSONAL_SITE_URL}
          className="whitespace-nowrap font-semibold text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
        >
          Find John at walley.org.uk <span aria-hidden="true">&rarr;</span>
        </a>
      </p>
    </div>
  )
}
