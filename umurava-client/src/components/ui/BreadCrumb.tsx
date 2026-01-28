"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function Breadcrumbs() {
  const router = useRouter();
  const pathname = usePathname();

  // Split pathname into segments and remove empty strings
  const segments = pathname
    .split("/")
    .filter((segment) => segment !== "")
    .map((segment, index, array) => ({
      title: segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      href: `/${array.slice(0, index + 1).join("/")}`,
    }));

  return (
    <nav className="flex items-center space-x-4 px-4 py-3">
      <button
        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
        onClick={() => router.back()}
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Go Back
      </button>
      {segments.length > 0 && (
        <>
          <span className="text-gray-600 dark:text-gray-400">/</span>
          <div className="flex items-center">
            {segments.map((segment, index) => (
              <div key={segment.href} className="flex items-center">
                {index > 0 && (
                  <span className="mx-2 text-gray-600 dark:text-gray-400">/</span>
                )}
                <Link
                  href={segment.href}
                  className={`transition-colors duration-200 ${
                    pathname === segment.href
                      ? "text-blue-500 dark:text-blue-400"
                      : "text-gray-900 dark:text-gray-100 hover:text-blue-light dark:hover:text-blue-400"
                  }`}
                >
                  {segment.title}
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </nav>
  );
}
