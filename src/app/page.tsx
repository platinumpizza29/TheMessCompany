"use client";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { AnimatedLineGrid } from "~/components/animated-line-grid";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export default function App() {
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      if (localStorage.getItem("user_token") === "ADMIN") {
        return redirect("/admin");
      } else {
        return redirect("/home");
      }
    }
  }, []);

  return (
    <div className="font-inter min-h-[100dvh]">
      <div className="flex flex-col place-content-center">
        <header className="flex h-14 items-center px-4 lg:px-6">
          <AnimatedLineGrid />
          <Link className="flex items-center justify-center" href="#" rel="ugc">
            <h2 className="text-2xl font-bold tracking-wide">TheMessCompany</h2>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="/sponsor"
              rel="ugc"
            >
              Our Sponsors
            </Link>
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="/auth/signin"
              rel="ugc"
            >
              Sign-In
            </Link>
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="/auth/signup"
              rel="ugc"
            >
              Sign-Up
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-1 place-items-center gap-12 space-y-4 text-center md:grid-cols-2 md:text-start">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Sorting the Mess in Life
                  </h1>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Get real-time updates, detailed performance analysis, and
                    personalized feedback to help you succeed.
                  </p>
                  <a
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                    rel="ugc"
                  >
                    View Gradebook
                  </a>
                </div>
                <Image src="/Mess.png" alt="logo" width={450} height={450} />
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
          {/* Meet out team section */}

          <section className="container mx-auto px-4 py-12">
            <h1 className="mb-8 text-3xl font-bold">Meet the Team</h1>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="rounded-lg bg-muted p-6 shadow-md">
                <div className="mb-4 flex items-center">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Aryan Karsude</h3>
                    <p className="text-muted-foreground">CEO</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  John is the founder and CEO of Acme Inc. He has over 15 years
                  of experience in the industry and is passionate about building
                  innovative products.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-6 shadow-md">
                <div className="mb-4 flex items-center">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="Jane Smith" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Nivedita</h3>
                    <p className="text-muted-foreground">COO</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Jane is the Chief Technology Officer at Acme Inc. She has a
                  background in computer science and has been with the company
                  since the beginning.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-6 shadow-md">
                <div className="mb-4 flex items-center">
                  <Avatar>
                    <AvatarImage
                      src="/placeholder-user.jpg"
                      alt="Bob Johnson"
                    />
                    <AvatarFallback>BJ</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Keyur Bilgi</h3>
                    <p className="text-muted-foreground">Head of Engineering</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Bob is the Head of Engineering at Acme Inc. He has over 10
                  years of experience in software development and is responsible
                  for leading the engineering team.
                </p>
              </div>
            </div>
          </section>
        </main>
        <footer className="container mx-auto grid grid-cols-1 gap-12 p-10 px-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <div className="space-y-4">
              <Link href="#" className="flex items-center" prefetch={false}>
                <span className="ml-2 text-xl font-bold">TheMessCompany</span>
              </Link>
              <p>123 Main St, Anytown USA</p>
              <p>&copy; 2024 Acme Inc. All rights reserved.</p>
            </div>
          </div>
          <div className="">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <form className="space-y-4">
              <Input placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Textarea placeholder="Message" className="min-h-[100px]" />
              <Button type="submit">Submit</Button>
            </form>
          </div>
          <div className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="grid gap-2">
                <Link href="#" className="hover:underline" prefetch={false}>
                  Meet the Team
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
