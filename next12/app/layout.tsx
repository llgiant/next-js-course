import Navbar from './components/Navbar'
import './globals.css'
import MyProfilePic from './components/MyProfilePic'
import type { Metadata } from 'next'


export const metadata : Metadata = {
  title: "My Blog",
  description: 'Created by llgiant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}