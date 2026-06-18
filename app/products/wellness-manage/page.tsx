'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  Moon, Sun, Menu, X, Code2, ArrowRight, ChevronDown,
  Calendar, Users, UserCheck, BarChart3, Tag, Mail,
  Globe, FileText, Smartphone, CheckCircle2, Zap, Heart, Shield
} from 'lucide-react'
import { ContactFormValue } from '@/app/types'

const productScreenshots = [
  {
    src: '/images/wellness-manage/dashboard-overview.jpg',
    alt: 'Wellness Manage dashboard with KPI cards and upcoming appointments schedule',
    title: 'Your business at a glance',
    description:
      'Real-time metrics for clients, revenue, and staff — plus a clear view of upcoming appointments.',
  },
  {
    src: '/images/wellness-manage/analytics-charts.jpg',
    alt: 'Wellness Manage analytics with appointment status and revenue by category charts',
    title: 'Insights that drive growth',
    description:
      'Track appointment outcomes and see which services generate the most revenue.',
  },
] as const

export default function WellnessManagePage() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState<boolean>(false)
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false)
  const [formError, setFormError] = useState<boolean>(false)
  const formLoadedAtRef = useRef<number | null>(null)
  const contactSectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    formLoadedAtRef.current = Date.now()
  }, [])

  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = async (e: FormData) => {
    if (e.get('email2')) return
    const value: ContactFormValue = Object.fromEntries(e.entries()) as ContactFormValue
    const loadedAt = formLoadedAtRef.current
    if (loadedAt != null && Date.now() - loadedAt < 2000) return
    setFormError(false)
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: new Headers([['Content-Type', 'application/json']]),
        body: JSON.stringify({ ...value, _loadedAt: loadedAt })
      })
      if (res.ok) {
        setFormSubmitted(true)
      } else {
        setFormError(true)
      }
    } catch {
      setFormError(true)
    }
  }

  const primaryFeatures = [
    {
      icon: Calendar,
      title: 'Appointments',
      description: 'Schedule and manage every booking with ease. Assign services and staff, track statuses, and never lose sight of what\'s coming up.',
      features: [
        'Visual appointment scheduling',
        'Service & staff assignment',
        'Status tracking (upcoming, completed)',
        'Dashboard overview of upcoming sessions'
      ]
    },
    {
      icon: Users,
      title: 'Client Management',
      description: 'Maintain rich client profiles, track membership history, and keep your client list organized and instantly searchable.',
      features: [
        'Full profiles with photo upload',
        'Search and filter client list',
        'Membership status tracking',
        'Join date and activity history'
      ]
    },
    {
      icon: UserCheck,
      title: 'Staff Management',
      description: 'Invite your team, define which services they deliver, set their availability, and manage roles — all from one place.',
      features: [
        'Invite staff by email',
        'Assign services per staff member',
        'Availability schedule management',
        'Role-based access control'
      ]
    }
  ]

  const secondaryFeatures = [
    {
      icon: BarChart3,
      title: 'Revenue Dashboard',
      description: 'KPI cards, revenue over time charts, appointment status breakdowns, and revenue by service category.'
    },
    {
      icon: Tag,
      title: 'Service Catalog',
      description: 'Create services with name, description, duration, and pricing. Organize into custom categories.'
    },
    {
      icon: Mail,
      title: 'Staff Invitations',
      description: 'Invite team members by email with secure, expiring invitation links. Staff set their own passwords.'
    },
    {
      icon: Globe,
      title: 'Multi-Currency',
      description: 'Per-organization currency configuration — supports wellness businesses around the world.'
    },
    {
      icon: FileText,
      title: 'Invoice History',
      description: 'Full billing history with downloadable PDF invoices and payment method display.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-Friendly',
      description: 'Fully responsive design — works great on desktop, tablet, and mobile devices.'
    }
  ]

  const steps = [
    {
      step: '01',
      title: 'Submit the form below',
      desc: 'Tell us about your wellness center — name, email, and a bit about your business.'
    },
    {
      step: '02',
      title: 'We set up your account',
      desc: 'We\'ll create your organization and send you a personalized setup link within 24 hours.'
    },
    {
      step: '03',
      title: 'Complete onboarding',
      desc: 'Follow the link to set your password and configure your organization name and currency.'
    },
    {
      step: '04',
      title: 'Start your free trial',
      desc: '14 days of full access, zero restrictions. No credit card required.'
    }
  ]

  return (
    <div className="min-h-screen">

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <a href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Proginmind
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/#services" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                Services
              </a>
              <a href="/#portfolio" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                Portfolio
              </a>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-teal-600 dark:text-teal-400 font-medium">
                  <span>Products</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-52 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <a
                    href="/products/wellness-manage"
                    className="flex items-center space-x-2 px-4 py-3 text-teal-600 dark:text-teal-400 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl"
                  >
                    <span className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0"></span>
                    <span>Wellness Manage</span>
                  </a>
                </div>
              </div>
              <a href="/#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                Contact
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <a
                href="https://wellness-manage.proginmind.io"
                className="px-5 py-2 border-2 border-teal-500 text-teal-600 dark:text-teal-400 rounded-lg font-medium hover:bg-teal-50 dark:hover:bg-teal-900/20 transition"
              >
                Login
              </a>
              <button
                onClick={scrollToContact}
                className="px-5 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="px-4 py-4 space-y-3">
              <a href="/#services" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                Services
              </a>
              <a href="/#portfolio" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                Portfolio
              </a>
              <div>
                <button
                  className="flex items-center space-x-1 w-full py-2 text-teal-600 dark:text-teal-400 font-medium"
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileProductsOpen && (
                  <div className="pl-4 mt-1">
                    <a
                      href="/products/wellness-manage"
                      className="flex items-center space-x-2 py-2 text-teal-600 dark:text-teal-400 font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0"></span>
                      <span>Wellness Manage</span>
                    </a>
                  </div>
                )}
              </div>
              <a href="/#contact" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
              <div className="flex flex-col space-y-3 pt-2">
                <a
                  href="https://wellness-manage.proginmind.io"
                  className="block text-center px-6 py-3 border-2 border-teal-500 text-teal-600 dark:text-teal-400 rounded-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </a>
                <button
                  onClick={() => { scrollToContact(); setMobileMenuOpen(false) }}
                  className="block text-center px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-lg font-medium"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 dark:from-gray-900 dark:via-teal-900/20 dark:to-emerald-900/20 -z-10"></div>
        {/* Decorative blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-200/30 dark:bg-teal-800/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-emerald-200/30 dark:bg-emerald-800/20 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-teal-100 dark:bg-teal-900/40 rounded-full mb-6">
              <Heart className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
                14-day free trial · No credit card required
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-teal-800 to-emerald-700 dark:from-white dark:via-teal-200 dark:to-emerald-200 bg-clip-text text-transparent">
              Wellness Manage
            </h1>

            <p className="text-2xl sm:text-3xl font-semibold text-teal-700 dark:text-teal-300 mb-10">
              All-in-one management for wellness centers
            </p>
          </div>

          <div className="mx-auto mb-12 flex max-w-4xl flex-col gap-10">
            {productScreenshots.map((screenshot) => (
              <figure key={screenshot.src} className="text-center">
                <div className="relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-2xl shadow-teal-900/10 ring-1 ring-black/5 dark:border-gray-700/80 dark:bg-gray-800 dark:shadow-black/30">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={1200}
                    height={750}
                    priority
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-4 px-1">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {screenshot.title}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {screenshot.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Schedule appointments, manage clients and staff, and track your revenue — all in one place.
              Built for massage studios, yoga centers, physiotherapy practices, and more.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={scrollToContact}
                className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition flex items-center space-x-2"
              >
                <span>Setup an Account</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
              <a
                href="https://wellness-manage.proginmind.io"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition"
              >
                Login to your account
              </a>
            </div>

            <p className="mt-5 text-sm text-gray-500 dark:text-gray-400">
              Already have an account?{' '}
              <a href="https://wellness-manage.proginmind.io" className="text-teal-600 dark:text-teal-400 hover:underline font-medium">
                Login here
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Primary Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Built for your daily workflow</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Three core tools that power your wellness business, working together seamlessly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {primaryFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-teal-400 dark:hover:border-teal-500"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((f, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Features Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Everything else you need</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A complete platform so you can focus on your clients, not your software
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition border border-gray-100 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Trial Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-3xl p-10 sm:p-14 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-6">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">No credit card required</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Start your free 14-day trial</h2>
              <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto">
                Full access to every feature. No credit card, no commitment. Cancel anytime — no questions asked.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-teal-600 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition"
                >
                  <span>Request an Owner Account</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex items-center space-x-4 text-white/70 text-sm">
                  <span className="flex items-center space-x-1">
                    <Shield className="w-4 h-4" />
                    <span>Secure & private</span>
                  </span>
                  <span>·</span>
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Account Request Form */}
      <section
        id="contact"
        ref={contactSectionRef}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Set up your account</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Fill out the form and we&apos;ll get your organization set up within 24 hours
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {/* Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Request received!</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Thanks for reaching out. We&apos;ll review your request and send you a setup link within 24 hours.
                  </p>
                </div>
              ) : (
                <form action={handleSubmit} className="relative space-y-6">
                  <input type="hidden" name="source" value="wellness-manage" />

                  <div>
                    <label htmlFor="wm-name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="wm-name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-teal-500 outline-none transition"
                      placeholder="Jane Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="wm-email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="wm-email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-teal-500 outline-none transition"
                      placeholder="jane@yourwellnesscenter.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="wm-company" className="block text-sm font-medium mb-2">
                      Organization / Business Name *
                    </label>
                    <input
                      type="text"
                      id="wm-company"
                      name="company"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-teal-500 outline-none transition"
                      placeholder="Serene Wellness Studio"
                    />
                  </div>

                  <div>
                    <label htmlFor="wm-message" className="block text-sm font-medium mb-2">
                      Tell us about your center <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="wm-message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-teal-500 outline-none transition resize-none"
                      placeholder="What type of wellness services do you offer? How many staff members do you have?"
                    ></textarea>
                  </div>

                  {/* Honeypot */}
                  <div className="absolute opacity-0 pointer-events-none -z-10 h-0 w-0 overflow-hidden" aria-hidden>
                    <input type="text" name="email2" tabIndex={-1} autoComplete="off" />
                  </div>

                  {formError && (
                    <p className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-4 py-3 rounded-lg">
                      Something went wrong. Please try again or email us directly at{' '}
                      <a href="mailto:info@proginmind.io" className="underline font-medium">
                        info@proginmind.io
                      </a>
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition"
                  >
                    Request an Owner Account
                  </button>
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                    We&apos;ll respond within 24 hours · No credit card needed
                  </p>
                </form>
              )}
            </div>

            {/* What happens next */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-3">What happens next?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  After you submit the form, we&apos;ll create your organization in Wellness Manage and send you everything you need to get started.
                </p>
              </div>

              <div className="space-y-5">
                {steps.map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-teal-600 dark:text-teal-400">{item.step}</span>
                    </div>
                    <div>
                      <div className="font-semibold mb-0.5">{item.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-black text-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-1">
              <a href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Proginmind</span>
              </a>
              <p className="text-gray-400 text-sm max-w-xs">
                Wellness Manage is a product by Proginmind — a software development company building tools that help businesses thrive.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-white mb-4">Wellness Manage</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={scrollToContact} className="hover:text-teal-400 transition text-left">
                    Setup an Account
                  </button>
                </li>
                <li>
                  <a href="https://wellness-manage.proginmind.io" className="hover:text-teal-400 transition">
                    Login
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-white mb-4">Proginmind</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="/#services" className="hover:text-blue-400 transition">Services</a></li>
                <li><a href="/#portfolio" className="hover:text-blue-400 transition">Portfolio</a></li>
                <li><a href="/#contact" className="hover:text-blue-400 transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Proginmind. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
