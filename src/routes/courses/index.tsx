import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { loadCourses } from "~/shared/loaders";
import type { DocumentHead } from "@builder.io/qwik-city";
import Button from "~/components/ui/button";
import { CourseCard } from "~/components/course-card";

export const head: DocumentHead = {
  title: "Daftar kursus",
};

export const useCoursesLoader = routeLoader$(() => {
  return loadCourses();
});

export default component$(() => {
  const { value: courses } = useCoursesLoader();

  return (
    <section class="mt-32 space-y-10">
      <Button href="/" size="sm" variant="secondary" style="w-fit">
        <img
          width={20}
          height={20}
          src={`${import.meta.env.PUBLIC_LUCIDE_URL}/arrow-left.svg`}
        />
        Kembali
      </Button>
      <h1 class="text-xl">Daftar kursus</h1>
      <div class="grid grid-cols-2 sm:grid-cols-4">
        {courses.map((course) => (
          <CourseCard course={course} key={course.slug} />
        ))}
      </div>
    </section>
  );
});
