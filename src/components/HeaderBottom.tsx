import { signOut } from "@/auth";
import { getSession } from "../hooks";
import SidebarButton from "./SidebarButton";

const HeaderBottom = async () => {
  const session = await getSession();

  return (
    <div className="bg-amazonLight text-white/80">
      <div className="flex items-center space-x-3 py-1 pl-6 text-sm">
        <SidebarButton />
        <div className="flex items-center space-x-3 hidden md:inline-flex">
          <p className="link">Today&apos;s Deals</p>
          <p className="link">Customer Service</p>
          <p className="link">Registry</p>
          <p className="link">Gift Cards</p>
          <p className="link">Sell</p>
        </div>
        {session && (
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button type="submit" className="link">
              Log out
            </button>
          </form>
        )}
        {!session && (
          <p className="text-amazonYellowDark tracking-wide underline underline-offset-2 decoration-[1px]">
            please signin to access your cart!
          </p>
        )}
      </div>
    </div>
  );
};

export default HeaderBottom;
