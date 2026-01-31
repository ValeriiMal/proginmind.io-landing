'use client'

import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import { 
  Moon, Sun, Menu, X, Code2, Layers, Cloud, 
  Rocket, Shield, Zap, ArrowRight, Star,
  Github, Linkedin, Twitter, Mail, Phone, MapPin,
  CheckCircle2, LucideIcon
} from 'lucide-react'
import { ContactFormValue } from './types'

interface FormValue {
  name: string
  email: string
  company: string
  message: string
}

interface Service {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

interface Project {
  title: string
  category: string
  description: string
  tech: string[]
  image: string
}

interface Testimonial {
  name: string
  role: string
  image: string
  rating: number
  text: string
}

interface SocialLink {
  icon: LucideIcon
  href: string
  label: string
}

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormValue>({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleSubmit = async (e: FormData) => {
    const value: ContactFormValue = Object.fromEntries(e.entries()) as ContactFormValue
    await fetch('/api/send', {
      method: 'POST',
      headers: new Headers([
        ['Content-Type', 'application/json']
      ]),
      body: JSON.stringify(value)
    })
  }

  const services: Service[] = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'End-to-end development with modern frameworks like React, Next.js, Node.js. We build scalable, maintainable applications.',
      features: ['React & Next.js', 'Node.js', 'RESTful & GraphQL APIs', 'Database Design']
    },
    {
      icon: Layers,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love. We focus on user experience, accessibility, and conversion optimization.',
      features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing']
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'Automated deployments, CI/CD pipelines, and cloud infrastructure on AWS for maximum reliability.',
      features: ['CI/CD Pipelines', 'Cloud Infrastructure', 'Monitoring & Logging', 'Security & Compliance']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast applications with optimized code, efficient databases, and CDN integration for global reach.',
      features: ['Code Optimization', 'Database Tuning', 'Caching Strategies', 'Load Balancing']
    },
    {
      icon: Shield,
      title: 'Security & Testing',
      description: 'Comprehensive security audits, penetration testing, and automated test suites to ensure your application is rock-solid.',
      features: ['Security Audits', 'Automated Testing', 'Code Reviews', 'Compliance']
    },
    {
      icon: Rocket,
      title: 'MVP Development',
      description: 'Rapid prototyping and MVP development to validate your ideas quickly and efficiently, perfect for startups.',
      features: ['Rapid Prototyping', 'Iterative Development', 'Scalable Architecture']
    }
  ]

  const projects: Project[] = [
    {
      title: 'FinTech Dashboard',
      category: 'Web Application',
      description: 'A comprehensive financial analytics platform for real-time market data visualization and portfolio management.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
      image: 'bg-gradient-to-br from-green-400 to-blue-500'
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile Application',
      description: 'HIPAA-compliant telemedicine app connecting patients with healthcare providers for virtual consultations.',
      tech: ['React Native', 'Firebase', 'Twilio', 'Stripe'],
      image: 'bg-gradient-to-br from-purple-400 to-pink-500'
    },
    {
      title: 'E-Commerce Platform',
      category: 'Full-Stack',
      description: 'Scalable multi-vendor marketplace with advanced search, real-time inventory, and secure payment processing.',
      tech: ['Next.js', 'GraphQL', 'MongoDB', 'AWS'],
      image: 'bg-gradient-to-br from-orange-400 to-red-500'
    },
    {
      title: 'AI-Powered Analytics',
      category: 'SaaS Product',
      description: 'Machine learning platform for predictive analytics and business intelligence with custom dashboard builder.',
      tech: ['Python', 'TensorFlow', 'React', 'Docker'],
      image: 'bg-gradient-to-br from-cyan-400 to-blue-600'
    }
  ]

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      image: '👩‍💼',
      rating: 5,
      text: 'Proginmind transformed our vision into reality. Their technical expertise and attention to detail exceeded our expectations. The app they built has been instrumental in our growth.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, DataFlow Systems',
      image: '👨‍💻',
      rating: 5,
      text: 'Working with Proginmind was seamless. They delivered a scalable, performant solution on time and within budget. Their DevOps expertise saved us months of work.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, HealthConnect',
      image: '👩‍⚕️',
      rating: 5,
      text: 'The team at Proginmind understood our healthcare compliance needs perfectly. They built a secure, user-friendly platform that our patients and providers love.'
    }
  ]

  // const socialLinks: SocialLink[] = [
  //   { icon: Github, href: '#', label: 'GitHub' },
  //   { icon: Linkedin, href: '#', label: 'LinkedIn' },
  //   { icon: Twitter, href: '#', label: 'Twitter' }
  // ]

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '35+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Proginmind
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                Services
              </a>
              <a href="#portfolio" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                Portfolio
              </a>
              <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
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
                href="#contact"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition"
              >
                Start a Project
              </a>
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
              <a href="#services" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                Services
              </a>
              <a href="#portfolio" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                Portfolio
              </a>
              <a href="#testimonials" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                Testimonials
              </a>
              <a href="#contact" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
              <a
                href="#contact"
                className="block text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start a Project
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
              <Rocket className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Trusted by 50+ Companies Worldwide</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              Build. Scale. Deliver.
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Transform your ideas into powerful digital solutions. We craft custom web and mobile applications that drive growth for startups and enterprises.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition flex items-center space-x-2"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </a>
              <a
                href="#portfolio"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition"
              >
                View Our Work
              </a>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Comprehensive solutions for your digital needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Some of our recent work that drives results</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
                  <span className="text-white text-lg font-semibold z-10">{project.category}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Hear what our clients have to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let&apos;s Build Something Great</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Get in touch to discuss your project</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <form action={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@proginmind.io" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                      info@proginmind.io
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                      {/* +1 (234) 567-890 */}
                      +48 694 594 416
                    </a>
                  </div>
                </div>

                {/* <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Office</div>
                    <p className="text-gray-600 dark:text-gray-400">
                      123 Innovation Street<br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div> */}
              </div>

              {/* <div className="pt-8">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-black text-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Proginmind</span>
              </div>
              <p className="text-gray-400 mb-4">
                Building exceptional digital experiences for startups and enterprises. Let&apos;s turn your vision into reality.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-white mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
                <li><a href="#portfolio" className="hover:text-blue-400 transition">Portfolio</a></li>
                <li><a href="#testimonials" className="hover:text-blue-400 transition">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-white mb-4">Services</h5>
              <ul className="space-y-2">
                <li className="hover:text-blue-400 transition cursor-pointer">Full-Stack Development</li>
                <li className="hover:text-blue-400 transition cursor-pointer">UI/UX Design</li>
                <li className="hover:text-blue-400 transition cursor-pointer">DevOps & Cloud</li>
                <li className="hover:text-blue-400 transition cursor-pointer">MVP Development</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Proginmind. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
