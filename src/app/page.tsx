import Image from 'next/image'
import { LoginButton } from './components/auth/buttons.component';
import { authOptions } from "./lib/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <main className={`w-full min-h-screen`}>
      <div className="absolute top-0 right-0">
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
        <div className="flex flex-col content-center gap-y-4 mt-4">
          <div className="bg-gray-100 rounded p-4 text-center">
            <LoginButton />
          </div>
        </div>
        <div className="flex flex-col content-center gap-y-4 mt-4 w-1/2 overflow-hidden">
          <div className="bg-gray-100 rounded p-4 text-center">
            <pre>{JSON.stringify(session, null, 2)}</pre>
          </div>
        </div>
      </div>
    </main>
  )
}
