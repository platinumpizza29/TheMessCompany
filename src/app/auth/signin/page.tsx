"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import 'ldrs/bouncy'
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

// Default values shown  


export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter()

  const { data, mutate, isPending } = useMutation({
    mutationFn: async () => {
      const response = await axios.post("/api/login", {
        email: email,
        password: password
      })
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user_role', response.data.role)
      console.log("Login successful", response.data);
      // Redirect to a different page or update UI as needed
      if (response.data.role === "ADMIN") {
        router.push('/admin')
      } else {
        router.push('/home')
      }
      return response.data
    }
  })

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault(); // Prevent default form submission
    mutate()
  };

  return (
    <div className="grid min-h-[100dvh] min-w-[100dvw] grid-cols-1 md:grid-cols-2">
      <div className="relative h-full w-full">
        <Image src={"/login2.png"} alt="logo" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col place-content-center">
        <form className="space-y-4 p-4" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold">Welcome to your Gradebook</h1>
          <h1 className="text-2xl font-bold">Sign in</h1>
          {error && <p className="text-red-500">{error}</p>}
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" disabled={isPending}>{isPending ? "Loading..." : "SignIn"}</Button>
        </form>
      </div>
    </div>
  );
}
