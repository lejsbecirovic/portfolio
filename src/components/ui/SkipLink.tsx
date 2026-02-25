'use client'

export default function SkipLink() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const mainElement = document.getElementById('main-content')
    if (mainElement) {
      mainElement.focus()
      mainElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <a
      href="#main-content"
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:p-2 focus:bg-emerald-600 focus:text-white focus:rounded-lg"
      data-skip-smooth
    >
      Zum Hauptinhalt springen
    </a>
  )
}
