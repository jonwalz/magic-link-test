"use server"
import { createClient } from "@/utils/supabase/server"

export async function sendMagicLink(formData: FormData) {
  // Get the email from the form
  const email = formData.get('email') as string
  const supabase = createClient()

  console.log("EMAIL: ", email)

  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      // set this to false if you do not want the user to be automatically signed up
      shouldCreateUser: true,
      emailRedirectTo: 'https://example.com/welcome',
    }})

    console.log("Magic link data: ", data)
    console.log("Magic Link send error: ", error)
}
