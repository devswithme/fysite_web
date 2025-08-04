import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import wavyLine from "~/../public/wavy-line.svg";

export const head: DocumentHead = {
  title: "Kebijakan privasi",
};

export default component$(() => {
  return (
    <>
      <div class="border bg-radial-[at_50%_200%] from-primary via-primary to-dark to-80% w-full h-40 sm:h-58 p-10 flex flex-col items-center justify-center gap-2 text-center relative">
        <div class="bg-[url('/noise.png')] w-full h-full absolute top-0 left-0 opacity-70" />
        <h1 class="text-xl sm:text-4xl text-light font-bold tracking-tighter">
          Kebijakan privasi
        </h1>
        <p class="text-xs sm:text-sm text-light/90">#fromideatosite</p>
        <img width={20} height={20} src={wavyLine} class="w-16 sm:w-24" />
      </div>
      <div class="prose prose-sm">
        <h2>Deskripsi</h2>
        <p>
          Semua data yang anda input disini adalah sepenuhnya milik anda. Kami
          menyimpan pada CMS (Content Management System) multi-tenan yang mana
          seller dapat melihat sekilas Nama tertaut saja dalam proses pengecekan
          proyek dan pembayaran. Detail informasi anda lainnya bisa diakses oleh
          admin yang sudah dipercaya untuk alasan monitoring dan rekap.
        </p>
        <h2>Pihak ketiga</h2>
        <ul>
          <li>
            <h4>Tally</h4>
            <p>
              Kami menggunakan Tally untuk mendapatkan data Nama, Email, dan
              Nomor Telepon serta kursus yang dipilih untuk membuka akses dan
              dikirimkan ke Tripay untuk melakukan pembayaran.
            </p>
          </li>
          <li>
            <h4>Tripay</h4>
            <p>
              Kami menggunakan Tripay sebagai payment gateway dengan menyertakan
              Nama, Email, dan Nomor Telepon anda.
            </p>
          </li>
        </ul>
        <h2>Data publik</h2>
        <p>
          Seller dan murid lainnya hanya bisa melihat nama anda alih-alih email
          dan informasi penting lainnya.
        </p>
        <h2>Penghapusan data</h2>
        <p>
          Anda berhak meminta untuk penghapusan data secara komplit di platform
          ini dengan cara kontak pada Email atau WhatsApp kami.
        </p>
      </div>
    </>
  );
});
