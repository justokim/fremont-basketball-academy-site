import Image from "next/image";
import Link from "next/link";

const routes = [
  { name: "About", link: "/about" },
  { name: "Register", link: "/register" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  return (
    <div className="h-20 z-10 fixed w-full  bg-darkgray text-white shadow-2xl">
      <div className="max-w-screen-xl mx-auto">
        <div className="px-6 lg:px-8 flex items-center justify-between">
          <Link href="/">
            <a className="relative w-36 h-20">
              <Image
                src="/logoLight.png"
                alt="logo"
                layout="fill"
                objectFit="contain"
              />
            </a>
          </Link>
          <div className="flex items-center space-x-12 ml-12">
            {routes.map((route) => (
              <Link href={route.link} key={route.link}>
                <a className="text-lg">{route.name}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
