"use client";
import { useSession, signOut, signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const { data: session, status, update } = useSession();
  console.log(session);
  console.log(status);
  if (status === "loading") {
    return (
      <main className="flex justify-center items-center h-screen">
        <p className="animate-pulse">Loading...</p>
      </main>
    );
  }
  if (session !== null) {
    return (
      <main className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center h-screen items-center gap-4 w-64">
          <p> Login successfully.</p>
          <button
            className="border p-2 w-full flex justify-center gap-2"
            onClick={() => {
              signOut();
            }}
          >
            <p className="mt-1">
              <FcGoogle />
            </p>
            Logout
          </button>
          <div className="mt-6 flex flex-col justify-center items-center gap-4">
            <div>
              <img
                src={session?.user?.image}
                alt="User not found an image."
                className="rounded-full border-4 border-gray-200"
              />
            </div>
            <div>
              <p>Hello, {session?.user?.name}</p>
            </div>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center h-screen items-center gap-4 w-64">
          <p> Logout successfully.</p>
          <button
            className="border p-2 w-full flex justify-center gap-2"
            onClick={() => {
              signIn("google");
            }}
          >
            <p className="mt-1">
              <FcGoogle />
            </p>
            Login
          </button>
        </div>
      </main>
    );
  }
}
