import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import wavyLine from "~/../public/wavy-line.svg";

export const head: DocumentHead = {
  title: "Tentang kami",
};

export default component$(() => {
  return (
    <>
      <div class="border bg-radial-[at_50%_200%] from-primary via-primary to-dark to-80% w-full h-40 sm:h-58 p-10 flex flex-col items-center justify-center gap-2 text-center relative">
        <div class="bg-[url('/noise.png')] w-full h-full absolute top-0 left-0 opacity-70" />
        <h1 class="text-xl sm:text-4xl text-light font-bold tracking-tighter">
          Tentang kami
        </h1>
        <p class="text-xs sm:text-sm text-light/90">#fromideatosite</p>
        <img width={20} height={20} src={wavyLine} class="w-16 sm:w-24" />
      </div>
      <div class="prose prose-sm">
        <h2>Deskripsi</h2>
        <p>
          <b>fysite.id</b> adalah sebuah agensi pembuatan website pada awalnya
          yang didirikan pada bulan April 2024 oleh Nathan Limahardja sebuah
          anak SMA kelas 11.
        </p>
        <p>
          Bermula dari pembuatan reels tutorial coding hal-hal menarik mengenai
          website, fysite.id kini mampu mendapat engangement sampai 2M+ views
          dan 7K+ followers di sosial media.
        </p>
        <h2>Latar belakang</h2>
        <p>
          Kami tau keluh kesah susahnya belajar website tanpa roadmap ataupun
          hanya mengikuti tutorial di youtube. Anda mungkin merasa metode
          pembelajaran tersebut kurang interaktif dan repetitif.
        </p>
        <p>
          Atau, anda ingin mempelajari hal-hal baru dengan cepat dan
          menyenangkan tanpa khawatir kehilangan arah dan tidak relevan?
        </p>
        <p>
          Kini, fysite.id adalah platform akademi multi-tenan yang memungkinkan
          anda berjualan materi sekaligus belajar dalam satu akun. Kami
          mengadopsi metode <i>project-based learning</i>, dan akses selamanya
          sekaligus anda juga mendapatkan update terbarunya bila ada.
        </p>
        <h2>Misi</h2>
        <ol>
          <li>
            Menjadikan talenta digital bukan hanya belajar namun bisa
            menghasilkan pendapatan dari pengetahuan yang dimilikinya di
            platform kami.
          </li>
          <li>
            Mendorong UMKM, tidak hanya materi mengenai teknologi, semua dapat
            bergabung sebagai penjual untuk membagikan ilmunya disini.
          </li>
        </ol>
        <h2>Visi</h2>
        <ol>
          <li>
            Menjadikan platform gamifikasi agar metode pembelajaran lebih
            interaktif dan seru.
          </li>
          <li>
            Menjadikan talenta-talenta siap dalam karir dan menyalurkannya ke
            berbagai perusahaan.
          </li>
        </ol>
      </div>
    </>
  );
});
