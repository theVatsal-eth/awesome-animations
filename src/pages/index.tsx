import { type NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <nav className="flex h-screen w-full items-center justify-around gap-3 text-2xl font-bold ">
        <ul className="rounded-lg bg-blue-400 p-3 text-white">
          <Link href="/text-effects">Text Effects</Link>
        </ul>
        <ul className="rounded-lg bg-blue-400 p-3 text-white">
          <Link href="/buttons">Buttons</Link>
        </ul>
        <ul className="rounded-lg bg-blue-400 p-3 text-white">
          <Link href="/cards">Cards</Link>
        </ul>
        <ul className="rounded-lg bg-blue-400 p-3 text-white">
          <Link href="/tabs">Tabs</Link>
        </ul>
        <ul className="rounded-lg bg-blue-400 p-3 text-white">
          <Link href="/scrolls">Scrolls</Link>
        </ul>
      </nav>
    </>
  );
};
export default Home;
