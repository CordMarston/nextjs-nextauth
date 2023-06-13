"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <button onClick={() => signIn()}>Sign in</button>
  );
};