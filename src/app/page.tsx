'use client';

import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Any initialization logic can go here
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center px-4 pt-10">
      {/* App Name */}
      <h1 className="text-2xl font-bold mb-8">idioma</h1>

      {/* Placeholder Image/Logo Area */}
      <div className="w-full max-w-sm aspect-[4/5] bg-gray-300 rounded-3xl mb-6">
        {/* Replace with actual image when ready */}
      </div>

      {/* Description Text */}
      <p className="text-gray-500 text-center max-w-[280px] mb-auto">
        Lorem ipsum dolor sit amet consectetur. Mollis fames amet gravida quisque. Enim egestas.
      </p>

      {/* Action Buttons */}
      <div className="w-full max-w-sm space-y-4 mb-6">
        <Link 
          href="/auth/signup" 
          className="w-full bg-black text-white py-4 rounded-full flex items-center justify-center font-medium"
        >
          Create An Account
        </Link>

        <div className="text-center">
          <span className="text-gray-500">Already have an account? </span>
          <Link href="/auth/login" className="text-black font-medium">
            Login
          </Link>
        </div>
      </div>
    </main>
  )
}
