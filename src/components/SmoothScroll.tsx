'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    const anchors = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(
        'a[href^="#"]:not([data-skip-smooth])'
      )
    )

    const handleClick = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLAnchorElement | null
      if (!target) return

      const href = target.getAttribute('href')
      if (!href || href === '#') return

      const element = document.querySelector<HTMLElement>(href)
      if (!element) return

      event.preventDefault()
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    anchors.forEach((anchor) => {
      anchor.addEventListener('click', handleClick)
    })

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener('click', handleClick)
      })
    }
  }, [])

  return null
}
