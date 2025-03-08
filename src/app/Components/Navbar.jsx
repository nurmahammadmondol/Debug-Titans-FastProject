import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  const Links = (
    <div className=" flex items-center gap-7">
      <Link href="/">Home</Link>
      <Link href="/">Courses</Link>
      <Link href="/">About</Link>
    </div>
  );

  return (
    <nav>
      <div className="navbar bg-[#135276]  text-white py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#135276]  z-1 mt-1  p-2 shadow"
            >
              {Links}
            </ul>
          </div>

          <div>
            <Image
              src="/assets/images/learnicaNavlogo.webp"
              alt="Logo"
              width={160}
              height={50}
            />
          </div>
        </div>

        <div className="navbar-end flex items-center gap-7">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{Links}</ul>
          </div>
          <div>
            <a className="btn text-[#135276] font-bold">Sign-In</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
