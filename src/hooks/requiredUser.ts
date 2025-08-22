import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const requierdUser = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/signin");
  }
};
