"use client"
import Image from 'next/image'
import { AuthButtons } from './components/auth/buttons.component';
import { SessionInfo } from './components/auth/sessioninfo.component';

export default async function Home() {
  return (
    <main className={`w-full min-h-screen`}>
      <div className="absolute top-2 right-2">
        <div className="content-center bg-gray-100 rounded">
            <AuthButtons/>
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="p-4">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/img/cord-marston-signature.png"
            alt="Cord Marston Signature"
            width={444}
            height={158}
            priority
          />
        </div>
        <div className="flex flex-col content-center gap-y-4">
          <div className="bg-gray-100 rounded p-4 text-center">
            This is my version of a NextJS stack
          </div>
        </div>
        <div className="flex flex-col content-center gap-y-4 mt-4 w-1/2 overflow-hidden">
          <div className="bg-gray-100 rounded p-4 text-center">
            <p className="font-bold">Session Info:</p>
            <SessionInfo/>
          </div>
        </div>
      </div>
    </main>
  )
}
