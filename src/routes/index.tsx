import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { loadCourses, loadTenants } from "~/shared/loaders";
import Button from "~/components/ui/button";
import { TenantCard } from "~/components/tenant-card";
import { CourseCard } from "~/components/course-card";
import { Tenant } from "~/shared/types";
import wavyLine from "~/../public/wavy-line.svg";

export const head: DocumentHead = {
  title: "Beranda",
};

export const useCoursesAndTenantsLoader = routeLoader$(() => {
  return {
    courses: loadCourses(),
    tenants: loadTenants(),
  };
});

export default component$(() => {
  const { value: data } = useCoursesAndTenantsLoader();

  return (
    <>
      <div class="border bg-radial-[at_50%_200%] from-primary via-[#851BFF] to-dark to-80% w-full h-40 sm:h-58 p-10 flex flex-col items-center justify-center gap-2 text-center relative">
        <div class="bg-[url('/noise.png')] w-full h-full absolute top-0 left-0 opacity-70" />
        <img width={20} height={20} src={wavyLine} class="w-16 sm:w-24" />
        <h1 class="text-xl sm:text-4xl text-light font-bold tracking-tighter">
          * Hello World!
        </h1>
        <p class="text-xs sm:text-sm text-light/90">
          Jelajahi kursus atau gabung menjadi tenan!
        </p>
      </div>
      <div class="space-y-5">
        <div class="flex justify-between items-center">
          <h1 class="text-lg sm:text-xl">Tenan</h1>
          <Button size="sm" href="/tenants" variant="link">
            Lihat semua
            <img
              width={20}
              height={20}
              src={`${import.meta.env.PUBLIC_LUCIDE_URL}/arrow-up-right.svg`}
            />
          </Button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {data.tenants.map((tenant) => (
            <TenantCard key={tenant.slug} tenant={tenant as Tenant} />
          ))}
        </div>
      </div>
      <div class="space-y-5">
        <div class="flex justify-between items-center">
          <h1 class="text-lg sm:text-xl">Kursus</h1>
          <Button size="sm" href="/courses" variant="link">
            Lihat semua
            <img
              width={20}
              height={20}
              src={`${import.meta.env.PUBLIC_LUCIDE_URL}/arrow-up-right.svg`}
            />
          </Button>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {data.courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </>
  );
});
