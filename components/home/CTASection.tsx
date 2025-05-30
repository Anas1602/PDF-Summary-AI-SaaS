import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to save Hours of Reading Time?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Transform Lengthy Documents into clear, actionable insights with
              out AI-powered summarizer
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 min-[400px]:flex-row">
            <div>
              <Button
                size={"lg"}
                variant={"link"}
                className="flex items-center justify-center w-full min-[400px]:w-auto bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 text-white hover:text-white transition-all duration-300 hover:no-underline">
                <Link
                  href="/#pricing"
                  className="flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
