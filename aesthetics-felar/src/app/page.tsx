/** @format */

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Apple, ArrowDownToLine, CheckCircle } from "lucide-react";
import Link from "next/link";
const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description: "Get your products delivered to you in seconds.",
  },
  {
    name: "Guaranteed Quantity",
    Icon: CheckCircle,
    description:
      "All assets are verified by our team to ensure high standards.",
  },
  {
    name: "Apple Reseller",
    Icon: Apple,
    description: "Best Apple reseller on the market.",
  },
];
export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center mx-width-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high-quality{" "}
            <span className="text-blue-600">Apple products.</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to Austhetics Felar. Every asset on our platform is verified
            by our team to ensure the highest standards
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse trending
            </Link>
            <Button variant="ghost">Our quality products &rarr;</Button>
          </div>
        </div>

        {/* TODO: product list */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div 
              key={perk.name}
              className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
              <div className="md:flex-shrink-0 flex justify-center">
               <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gray-100 text-black-900">
                {<perk.Icon className="w-1/3 h-1/3"/>}
               </div>
              </div>
              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3  className="text-base font-medium text-gray-900">
                  {perk.name}
                </h3>
                <p className="mt-6 text-sm text-muted-foreground">
                  {perk.description}
                </p>
              </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
