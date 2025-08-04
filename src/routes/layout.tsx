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
        <nav class="max-w-4xl mx-auto py-8 px-6 lg:px-0 flex justify-between items-center">
          <a href="/">
            <img
              width={20}
              height={20}
              src={imgLogo}
              class="w-20 aspect-auto"
            />
          </a>
          <Button size="sm" href="https://app.fysite.id">
            LMS Platform
            <img
              width={20}
              height={20}
              src={`${import.meta.env.PUBLIC_LUCIDE_URL}/arrow-up-right.svg`}
              style="filter: brightness(0) invert(1);"
            />
          </Button>
        </nav>
      </header>
      <main class="max-w-4xl mx-auto my-24 px-6 lg:px-0 space-y-10">
        <Slot />
        <Button
          style="fixed -bottom-4 right-6 sm:bottom-0 sm:right-10 bg-primary p-4 rounded-full"
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
        <footer class="mt-24 w-full border-t border-t-light py-16 text-sm">
          <nav class="grid grid-cols-1 sm:grid-cols-4 gap-10">
            <div>
              <a href="/">
                <img
                  width={20}
                  height={20}
                  src={imgLogo}
                  class="w-20 mb-2 aspect-auto"
                />
              </a>
              <p>#fromideatosite</p>
            </div>
            <div class="[&_a]:block [&_a]:text-muted-foreground space-y-2">
              <h1 class="mb-5">Informasi</h1>
              <a href="/about">Tentang kami</a>
              <a href="/terms">Ketentuan</a>
              <a href="/privacy">Kebijakan privasi</a>
              <a href="https://tally.so/r/nPJaVx">Menjadi seller</a>
            </div>
            <div class="[&_a]:block [&_a]:text-muted-foreground space-y-2">
              <h1 class="mb-5">Sosial media</h1>
              <a href="https://instagram.com/fysite.id">Instagram</a>
              <a href="https://tiktok.com/@fysite.id">Tiktok</a>
            </div>
            <div class="[&_a]:block [&_a]:text-muted-foreground space-y-2">
              <h1 class="mb-5">Respon cepat</h1>
              <a href="https://wa.me/6587470061">WhatsApp</a>
              <a href="mailto:cs@fysite.id">Email</a>
            </div>
          </nav>
        </footer>
      </main>
    </>
  );
});
