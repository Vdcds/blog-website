"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Nav() {
  const { data: session } = useSession();

  const handleSignInClick = () => {
    signIn();
  };
  const handleSignOutClick = () => {
    signOut();
  };
  return (
    <nav className="bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-14">
          <Link className="flex items-center" href="/">
            <MountainIcon className="w-6 h-6" />
            <span className="sr-only">Hello sir</span>
          </Link>
          <nav className="hidden gap-4 md:flex">
            <Link
              className="flex items-center text-sm font-medium transition-colors hover:underline"
              href="/"
            >
              Home
            </Link>
            <Link
              className="flex items-center text-sm font-medium transition-colors hover:underline"
              href="/about"
            >
              About
            </Link>
            <Link
              className="flex items-center text-sm font-medium transition-colors hover:underline"
              href="/blogs"
            >
              Blogs
            </Link>
            <Link
              className="flex items-center text-sm font-medium transition-colors hover:underline"
              href="/create"
            >
              Create Blog
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {session ? (
              <Button size="sm" onClick={handleSignOutClick}>
                Sign Out
              </Button>
            ) : (
              <Button size="sm" onClick={handleSignInClick}>
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
