"use client";

import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

export const AuthButtons = () => {
  const { data: session } = useSession();
  if(session)
  {
    return (
      <button className="p-4 rounded hover:bg-gray-200" onClick={() => signOut()}>Sign out</button>
    );
  } else {
    return (
      <button className="p-4 rounded hover:bg-gray-200" onClick={() => signIn()}>Sign in</button>
    );
  }
};
