import { auth } from "@/app/auth";  // Adjust this path to where your auth.ts is
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);