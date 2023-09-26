"use client";
import { FcGoogle } from "react-icons/fc";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Card() {
  const { data: session } = useSession();
  const route = useRouter();

  return (
    <div className="flex flex-col justify-center gap-4 w-64 ">
      {session !== null ? route.push("/login") : route.push("/")}
      <div className="flex justify-center">
        <p>Login with google</p>
      </div>
      <dvi className="flex justify-center p-2">
        <button
          onClick={() => {
            signIn("google");
          }}
          className="active:shadow-md flex gap-2 justify-center border p-2 w-full shadow-sm"
        >
          <p className="mt-1">
            <FcGoogle />
          </p>
          <p>Login</p>
        </button>
      </dvi>
      <dvi className="flex justify-center p-2">
        <button
          onClick={() => {
            signOut();
          }}
          className="bg-red-400 active:shadow-md flex gap-2 justify-center border p-2 w-full shadow-sm"
        >
          <p className="mt-1">
            <FcGoogle />
          </p>
          <p>Logout</p>
        </button>
      </dvi>
    </div>
  );
}
