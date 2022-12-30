import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items.center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https://www.w3schools.com/howto/img_avatar.png"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1>Beki's Blog</h1>
      </div>

      <div>
        <Link
          href="/studio"
          rel="noopener noreferrer"
          className="px-2 py-3 text-sm md:text-base bg-[#8F00FF] text-[#FFF] hover:bg-[#483248] flex items-center rounded-lg text-center"
        >
          Check out The BackEnd
        </Link>
      </div>
    </header>
  );
};

export default Header;
