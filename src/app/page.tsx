import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto mt-5 flex gap-5">
      <Link href="/server" className="px-[10px] py-[5px] hover:text-red-600">
        Go to /Server
      </Link>
      <Link href="/client" className="px-[10px] py-[5px] hover:text-red-600">
        Go to /client
      </Link>
    </div>
  );
}
