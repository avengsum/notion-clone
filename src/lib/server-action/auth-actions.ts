'use server'

import { z } from "zod";
import { FormSchema } from "../types";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function actionLogin({email,password}:z.infer<typeof FormSchema>) {
  const superbase = createRouteHandlerClient({cookies});
  const response = await superbase.auth.signInWithPassword({
    email,password
  });
  return response
}