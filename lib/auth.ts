import { cookies } from "next/headers";

export function isAuthenticated() {
  return cookies().get("evanalysis_auth")?.value === "1";
}
