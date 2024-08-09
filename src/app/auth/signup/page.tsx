"use client";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import axios from "axios"
import 'ldrs/ring'

export default function SignUpPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isPending, data, error } = useMutation({
    mutationFn: async () => {
      const response = await axios.post('/api/register', {
        name: name,
        email: email,
        password: password
      })
      localStorage.setItem("token", response.data!.token);
      localStorage.setItem("user_role", response.data!.role);
      // Redirect to a different page or update UI as needed
      if (response.data.role === "ADMIN") {
        router.push('/admin')
      } else {
        router.push('/home')
      }
      return response.data;
    }
  })

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault(); // Prevent default form submission
    mutate();
    console.log(data)
  };

  return (
    <div className="grid min-h-[100dvh] min-w-[100dvw] grid-cols-1 md:grid-cols-2">
      <div className="relative h-full w-full">
        <Image src={"/login.png"} alt="logo" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col place-content-center">
        <form className="space-y-4 p-4" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold">Welcome to your Gradebook</h1>
          <h1 className="text-2xl font-bold">Sign Up</h1>
          {error && <p className="text-red-500">{error.message}</p>}
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            disabled={isPending}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            disabled={isPending}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            disabled={isPending}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" disabled={isPending}>
            {isPending ? "Loading..." : "SignUp"}
          </Button>
        </form>
      </div>
    </div>
  );
}
