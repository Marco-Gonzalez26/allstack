import { auth, signOut } from "@/auth"
import { Button } from "@/components/ui/button"
import ROUTES from "@/constants/routes"
import Image from "next/image"

const Home = async () => {
  const session = await auth()
  return (
    <div className="">
      <h1 className="font-space-grotesk"> Wellcome to AllStack</h1>
      <form className="px-10 pt-25" action={async () => {
        'use server'
        await signOut({redirectTo: ROUTES.SIGN_IN})
      }}>
        <Button type="submit">Logout</Button>
      </form>
    </div>
  )
}

export default Home
