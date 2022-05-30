import Image from "next/image";
import Link from "next/link";

const routes = [
  { name: "About", link: "/about" },
  { name: "Register", link: "/register" },
  { name: "Contact", link: "/contact" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t-8 border-[#ff9f1c] bg-black text-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="lg:grid grid-cols-12 py-8">
          <div className="relative col-span-4 w-48 h-24">
            <Image src="/logoLight.png" layout="fill" alt="logo" />
          </div>

          <div className="relative col-span-4 pt-8 lg:pt-0">
            <h1 className="uppercase font-semibold pb-2.5">Navigation</h1>
            <div className="flex flex-col space-y-2">
              {routes.map((route) => (
                <Link key={route.link} href={route.link}>
                  <a className="w-fit text-gray-300 font-medium text-sm">
                    {route.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center border-t py-4 text-sm">
          <div>©Fremont Basketball Academy. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
