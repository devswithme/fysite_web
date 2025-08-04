import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import wavyLine from "~/../public/wavy-line.svg";

export const head: DocumentHead = {
  title: "Ketentuan penggunaan",
};

export default component$(() => {
  return (
    <>
      <div class="border bg-radial-[at_50%_200%] from-primary via-primary to-dark to-80% w-full h-40 sm:h-58 p-10 flex flex-col items-center justify-center gap-2 text-center relative">
        <div class="bg-[url('/noise.png')] w-full h-full absolute top-0 left-0 opacity-70" />
        <h1 class="text-xl sm:text-4xl text-light font-bold tracking-tighter">
          Ketentuan penggunaan
        </h1>
        <p class="text-xs sm:text-sm text-light/90">#fromideatosite</p>
        <img width={20} height={20} src={wavyLine} class="w-16 sm:w-24" />
      </div>
      <div class="prose prose-sm">
        <h2>Deskripsi</h2>
        <p>
          Berikut adalah peraturan yang wajib dipatuhi dan informasi tambahan
          berdasarkan peran anda.
        </p>
        <h2>Student (Murid)</h2>
        <ul>
          <li>
            Mohon selesaikan pembayaran setelah redirect ke halaman checkout
            untuk mencegah tidak bisanya melakukan pembayaran selanjutnya karena
            duplikasi.
          </li>
          <li>
            Kumpul proyek dengan submission dengan sabar menunggu. Hindari Spam.
          </li>
        </ul>
        <h2>Seller (Tenan)</h2>
        <ul>
          <li>
            Kursus yang anda rancang akan bisa dilihat di beranda apabila sudah
            disetujui oleh admin.
          </li>
          <li>
            Anda dapat melihat jumlah dan nama murid yang terdaftar sebagai
            bukti dan rekap penualan per bulan
          </li>
          <li>
            Sebagai seller, anda wajib menilai submission murid-murid
            secepatnya.
          </li>
          <li>
            Mohon untuk memberikan link invitasi ke WhatsApp group bila
            memungkinkan untuk meningkatkan interaksi dan kepuasan murid.
          </li>
        </ul>
      </div>
    </>
  );
});
