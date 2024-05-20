import { createClient } from "@/utils/supabase/client";
import { sendMagicLink } from "./_actions/sendMagicLink";

export default async function Home() {
  const isLoggedIn = (await createClient().auth.getUser()).data.user !== null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={sendMagicLink}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="p-4 border-2 border-gray-300 rounded-lg mb-4"
          style={{ color: "black" }}
        />
        <button type="submit">Submit</button>
      </form>
      <div>Is logged in: {isLoggedIn.toString()}</div>
    </main>
  );
}
