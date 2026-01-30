import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ProgInMind - Build. Scale. Deliver.',
  description: 'Custom web and mobile applications for startups and enterprises. Expert full-stack development, UI/UX design, and DevOps services.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
