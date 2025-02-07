import EmailForm from "@/components/EmailForm";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />

      <section className="w-screen h-dvh grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:h-full h-80 relative overflow-hidden">
          <Image
            src="/garage_image.png"
            alt="Garage image"
            fill
            className="object-cover object-bottom left-0"
          />
        </div>

        <main className="flex flex-col gap-8 mt-8 justify-center px-6 pb-10">
          <h1 className="font-semibold tracking-tight text-zinc-900 text-3xl leading-tight md:text-4xl max-w-lg">
            Empty Space? Future Income. Join Our Waitlist
          </h1>
          <p className="text-gray-500">
            Join the waitlist to be notified when our site is up and running!
          </p>

          <EmailForm />
        </main>
      </section>
    </>
  );
}

