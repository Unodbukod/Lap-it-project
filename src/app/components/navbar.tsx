import { NAV_LINKS } from "./constants";
import Image from "next/image";
import Link from "next/link";



const Navbar = () => {

  return (
    <nav className="flex items-center justify-between max-w-full px-4 py-3 bg-blue-700">

      <div>
        <Link href='/'>
          <Image src="/lapit.svg" alt="logo" width={150} height={40} className="ml-4" />
        </Link>
      </div>
      <div className="flex items-center space-x-12 text-white mr-11">
        <ul className="flex items-center space-x-12 text-white lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link href={link.href} className="text-base font-semibold hover:text-gray-300 duration-300 transition-all">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <a href="/login/signin" ><button className="bg-white w-20 h-10 rounded-md text-blue-700 font-bold">Login</button></a>
      </div>
    </nav>
  );
};

export default Navbar;


