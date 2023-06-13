"use client";

import { useSession } from "next-auth/react";

export const SessionInfo = () => {
  const { data: session } = useSession();
  if(session)
  {
    return (
        <pre>{JSON.stringify(session)}</pre>    
    );
  } else {
    return (
      <>
      No session Found
      </>
    );
  }
};
