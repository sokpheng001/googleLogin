import Link from "next/link";

export default function Card() {
  return (
    <div className="flex flex-col justify-center gap-4 w-64 ">
      <Link className="border p-3 w-full text-center shadow-lg" href={"/login"}>Login with google</Link>
    </div>
  );
}
