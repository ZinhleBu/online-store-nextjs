/** @format */

import Link from "next/link";

type Prop = {
  category: string;
  isActive: boolean;
};
export default function NavLink({ category, isActive }: Prop) {
  return (
    <Link
      href={`/news/${category}`}
      className={`navLink ${
        isActive &&
        "underline decoration-orange-400 underline-offset-4 font-bold text-lg"
      }`}
    >
      {category}
    </Link>
  );
}
