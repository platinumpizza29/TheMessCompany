"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
export default function App() {
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      if (localStorage.getItem("user_token") === "STUDENT") {
        return redirect("/home");
      } else {
        return redirect("/admin");
      }
    }
  }, []);

  return (
    <div className="min-h-[100dvh]">
      <div className="flex flex-col place-content-center">
        <header className="flex h-14 items-center px-4 lg:px-6">
          <a className="flex items-center justify-center" href="#" rel="ugc">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-6 w-6"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
            </svg>
            <span className="sr-only">Gradebook</span>
          </a>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <NavigationMenu>
              <NavigationMenuItem>
                <Link href="/auth/signin" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Sign-In
                  </NavigationMenuLink>
                </Link>
                <Link href="/auth/signup" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Sign-Up
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenu>
            {/* <a
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="#"
              rel="ugc"
            >
              Features
            </a>
            <a
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="#"
              rel="ugc"
            >
              Testimonials
            </a>
            <a
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="#"
              rel="ugc"
            >
              About
            </a>
            <a
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="#"
              rel="ugc"
            >
              Contact
            </a> 
            <a
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="/auth/signin"
              rel="ugc"
            >
              Sign-In
            </a>
            <a
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="/auth/signup"
              rel="ugc"
            >
              Sign-Up
            </a>*/}
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Ace Your Psychology Test with Our Gradebook
                  </h1>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Get real-time updates, detailed performance analysis, and
                    personalized feedback to help you succeed.
                  </p>
                </div>
                <a
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                  rel="ugc"
                >
                  View Gradebook
                </a>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Key Features
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Unlock Your Potential with Our Gradebook
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our gradebook is designed to help you stay on top of your
                    studies and achieve your academic goals.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Real-Time Updates</h3>
                  <p className="text-sm text-muted-foreground">
                    Get instant notifications on your test scores and progress.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Detailed Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Dive into your performance data and identify areas for
                    improvement.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Personalized Feedback</h3>
                  <p className="text-sm text-muted-foreground">
                    Get tailored recommendations to help you excel in your
                    psychology test.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Study Planner</h3>
                  <p className="text-sm text-muted-foreground">
                    Create a personalized study plan to stay on track and
                    maximize your learning.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Peer Collaboration</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with classNamemates, share resources, and learn from
                    each other.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Instructor Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive valuable feedback and guidance from your instructor.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  What Our Students Say
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from real students who have used our gradebook to ace
                  their psychology tests.
                </p>
              </div>
              <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <div
                  className="flex flex-col gap-4 rounded-lg border bg-background p-6 text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-muted"></div>
                    <div>
                      <h4 className="text-lg font-medium">Emily Johnson</h4>
                      <p className="text-sm text-muted-foreground">
                        Psychology Major
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    &quot;The Gradebook has been a game-changer for me. The
                    real-time updates and personalized feedback have helped me
                    stay on top of my studies and ace my psychology test.&quot;
                  </p>
                </div>
                <div
                  className="flex flex-col gap-4 rounded-lg border bg-background p-6 text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-muted"></div>
                    <div>
                      <h4 className="text-lg font-medium">Michael Chen</h4>
                      <p className="text-sm text-muted-foreground">
                        Psychology Minor
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    &quot;I was struggling with my psychology course, but the
                    Gradebook&apos;s detailed performance analysis and study
                    planner helped me identify my weaknesses and improve my test
                    scores.
                  </p>
                </div>
                <div
                  className="flex flex-col gap-4 rounded-lg border bg-background p-6 text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-muted"></div>
                    <div>
                      <h4 className="text-lg font-medium">Sarah Lee</h4>
                      <p className="text-sm text-muted-foreground">
                        Psychology Enthusiast
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    &quot;The Gradebook&apos;s peer collaboration feature has
                    been invaluable. I&apos;ve learned so much from my
                    classNamemates and feel more confident going into my
                    psychology test.&quot;
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
          <p className="text-xs text-muted-foreground">
            © 2024 Gradebook. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:ml-auto sm:gap-6">
            <a
              className="text-xs underline-offset-4 hover:underline"
              href="#"
              rel="ugc"
            >
              Terms of Service
            </a>
            <a
              className="text-xs underline-offset-4 hover:underline"
              href="#"
              rel="ugc"
            >
              Privacy
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
}
