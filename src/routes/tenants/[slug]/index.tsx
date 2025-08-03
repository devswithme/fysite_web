import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { loadCourses, loadTenant } from "~/shared/loaders";
import type { DocumentHead } from "@builder.io/qwik-city";
import Button from "~/components/ui/button";
import { TenantCard } from "~/components/tenant-card";
import { Tenant } from "~/shared/types";
import { CourseCard } from "~/components/course-card";

export const head: DocumentHead = ({ resolveValue }) => {
  const tenant = resolveValue(useTenantLoader);

  return {
    title: `${tenant.name}`,
    meta: [
      {
        name: "description",
        content: tenant.description,
      },
    ],
  };
};

export const useTenantLoader = routeLoader$(({ params }) => {
  return loadTenant(params.slug);
});

export const useCoursesLoader = routeLoader$(() => {
  return loadCourses();
});

export default component$(() => {
  const { value: tenant } = useTenantLoader();
  const { value: courses } = useCoursesLoader();

  return (
    <section class="mt-32 space-y-10">
      <Button href="/tenants" size="sm" variant="secondary" style="w-fit">
        <img
          width={20}
          height={20}
          src={`${import.meta.env.PUBLIC_LUCIDE_URL}/arrow-left.svg`}
        />
        Kembali
      </Button>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <TenantCard tenant={tenant as Tenant} isLink={false} style="h-fit" />
        <div
          dangerouslySetInnerHTML={tenant.html}
          class="prose prose-sm sm:col-span-2"
        />
      </div>
      <h1 class="text-lg sm:text-xl">Kursus</h1>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {courses
          .filter((course) => course.tenant == tenant.name)
          .map((course) => (
            <CourseCard course={course} key={course.slug} />
          ))}
      </div>
    </section>
  );
});
