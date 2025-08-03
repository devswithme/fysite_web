import { component$, Slot } from "@builder.io/qwik";
import Button from "~/components/ui/button";
import imgLogo from "~/../public/logo.svg";
import { DocumentHead } from "@builder.io/qwik-city";

export const head: DocumentHead = {
  links: [
    {
      rel: "icon",
      href: "/fav.svg",
    },
  ],
  meta: [
    {
      name: "description",
      content:
        "Kami siap membantu mengubah ide-ide kamu menjadi realita. #fromideatosite",
    },
  ],
};

export default component$(() => {
  return (
    <>
      <header class="fixed top-0 z-10 w-full bg-white">
        <nav class="max-w-4xl mx-auto py-8 px-6 sm:px-0 flex justify-between items-center">
          <img width={20} height={20} src={imgLogo} class="w-20 aspect-auto" />
          <div class="flex gap-2">
            <Button size="sm" href="https://wa.me/6587470061">
              Chat
            </Button>
            <Button
              size="sm"
              variant="secondary"
              href="https://tally.so/r/nPJaVx"
            >
              Karir
              <img
                width={20}
                height={20}
                src={`${import.meta.env.PUBLIC_LUCIDE_URL}/arrow-up-right.svg`}
              />
            </Button>
          </div>
        </nav>
      </header>
      <main class="max-w-4xl mx-auto my-24 px-6 sm:px-0 space-y-10">
        <Slot />
        <Button
          style="fixed bottom-10 right-10 bg-primary p-4 rounded-full"
          data-tally-open="3jAYDE"
          data-tally-align-left="1"
          data-tally-emoji-text="🚨"
          data-tally-emoji-animation="tada"
          data-tally-auto-close="5000"
          data-tally-form-events-forwarding="1"
        >
          Keranjang
          <img
            width={20}
            height={20}
            src={`${import.meta.env.PUBLIC_LUCIDE_URL}/shopping-bag.svg`}
            style="filter: brightness(0) invert(1);"
          />
        </Button>
      </main>
    </>
  );
});
