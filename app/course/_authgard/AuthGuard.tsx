import { LOGIN_ROUTE } from "../../lib/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthGuard() {
  const pathname = usePathname();

  return (
    <div className="pt-[96px] flex flex-col justify-center items-center">
      <pre>You are trying to access: {pathname}</pre>
      You have found a secret place! Please{" "}
      <Link href={`${LOGIN_ROUTE}?continueTo=${pathname}`}>Log In</Link> to
      continue.
    </div>
  );
}
