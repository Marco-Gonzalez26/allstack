"use client"

import Image from "next/image"
import { Button } from "../ui/button"
import { toast } from "sonner"
import { signIn } from "next-auth/react"
import ROUTES from "@/constants/routes"

const SocialAuthForm = () => {
  const btnClasses =
    "background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5"

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
      })
    } catch (error) {
      console.error(error)
      toast.error("Error", {
        description: error instanceof Error ? error.message : "An error occurred during sign in",
        richColors: true,
      })
    }
  }
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={btnClasses} onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          width={24}
          height={24}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with Github</span>
      </Button>
      <Button className={btnClasses} onClick={() => handleSignIn("google")}>
        <Image src="/icons/google.svg" alt="Google Logo" width={24} height={24} className="mr-2.5 object-contain" />
        <span>Log in with Google</span>
      </Button>
    </div>
  )
}

export default SocialAuthForm
