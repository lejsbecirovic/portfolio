'use client'

import { useState } from 'react'

type FormState = {
  name: string
  email: string
  message: string
}

type FormErrors = {
  name?: string
  email?: string
  message?: string
}

type FormStatus =
  | { type: 'idle' }
  | { type: 'submitting' }
  | { type: 'success' }
  | { type: 'error'; message: string }

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>({ type: 'idle' })

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    if (status.type !== 'idle') {
      setStatus({ type: 'idle' })
    }
  }

  const validate = (state: FormState): FormErrors => {
    const newErrors: FormErrors = {}

    if (!state.name.trim()) {
      newErrors.name = 'Bitte gib deinen Namen ein.'
    }

    if (!state.email.trim()) {
      newErrors.email = 'Bitte gib eine E-Mail-Adresse ein.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      newErrors.email = 'Bitte gib eine gültige E-Mail-Adresse ein.'
    }

    if (!state.message.trim()) {
      newErrors.message = 'Bitte gib eine Nachricht ein.'
    } else if (state.message.trim().length < 10) {
      newErrors.message = 'Deine Nachricht sollte mindestens 10 Zeichen enthalten.'
    }

    return newErrors
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validationErrors = validate(values)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      const firstErrorFieldName = Object.keys(validationErrors)[0] as keyof FormState
      const firstErrorField = document.querySelector<HTMLElement>(
        `[name="${firstErrorFieldName}"]`
      )
      firstErrorField?.focus()
      return
    }

    setStatus({ type: 'submitting' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        const data = (await response.json()) as { error?: string; code?: string }
        const isNotConfigured = data.code === 'SERVICE_NOT_CONFIGURED' || response.status === 503
        setStatus({
          type: 'error',
          message: isNotConfigured
            ? 'Auf dieser Seite ist der E-Mail-Versand nicht eingerichtet. Bitte nutze die E-Mail-Adresse weiter unten und kopiere sie in dein Mailprogramm.'
            : (data.error ?? 'Beim Versenden der Nachricht ist ein Fehler aufgetreten. Bitte versuche es später erneut oder nutze die E-Mail-Adresse unten.'),
        })
        return
      }

      setStatus({ type: 'success' })
      setValues(initialState)
    } catch (error) {
      console.error('Error submitting contact form', error)
      setStatus({
        type: 'error',
        message:
          'Die Verbindung ist fehlgeschlagen. Bitte nutze die E-Mail-Adresse weiter unten und kopiere sie in dein Mailprogramm.',
      })
    }
  }

  const isSubmitting = status.type === 'submitting'

  return (
    <form
      className="text-left space-y-6 mb-16"
      noValidate
      onSubmit={handleSubmit}
      aria-describedby="contact-form-description contact-form-status"
      aria-busy={isSubmitting ? 'true' : 'false'}
    >
      <p id="contact-form-description" className="text-sm text-right text-emerald-200 mb-2">
        Alle Felder sind Pflichtfelder.
      </p>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-white mb-2"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className="w-full rounded-lg bg-white/5 border border-emerald-500/20 px-4 py-3 text-white placeholder:text-emerald-200/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f0d]"
          value={values.name}
          onChange={handleChange}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p
            id="name-error"
            className="mt-2 text-sm text-emerald-300"
            role="alert"
          >
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-white mb-2"
        >
          E-Mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="w-full rounded-lg bg-white/5 border border-emerald-500/20 px-4 py-3 text-white placeholder:text-emerald-200/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f0d]"
          value={values.email}
          onChange={handleChange}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p
            id="email-error"
            className="mt-2 text-sm text-emerald-300"
            role="alert"
          >
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white mb-2"
        >
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg bg-white/5 border border-emerald-500/20 px-4 py-3 text-white placeholder:text-emerald-200/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f0d]"
          value={values.message}
          onChange={handleChange}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p
            id="message-error"
            className="mt-2 text-sm text-emerald-300"
            role="alert"
          >
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-700/70 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
      >
        <span>
          {isSubmitting ? 'Nachricht wird gesendet...' : 'Nachricht senden'}
        </span>
        <span>→</span>
      </button>

      <p
        id="contact-form-status"
        aria-live="polite"
        className="text-sm text-emerald-200 mt-4 min-h-[1.25rem]"
      >
        {status.type === 'success' &&
          'Danke! Deine Nachricht wurde erfolgreich versendet.'}
        {status.type === 'error' && status.message}
      </p>
    </form>
  )
}

