import { component$, useSignal, $ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { loadCourse, loadTenants } from "~/shared/loaders";
import type { DocumentHead } from "@builder.io/qwik-city";
import Button from "~/components/ui/button";
import { formatIDR } from "~/shared/utils";
import { TenantCard } from "~/components/tenant-card";
import { Tenant } from "~/shared/types";

export const head: DocumentHead = ({ resolveValue }) => {
  const course = resolveValue(useCourseLoader);

  return {
    title: `${course.title} - ${course.tenant}`,
    meta: [
      {
        name: "description",
        content: course.description,
      },
    ],
  };
};

export const useTenantsLoader = routeLoader$(() => {
  return loadTenants();
});

export const useCourseLoader = routeLoader$(({ params }) => {
  return loadCourse(params.slug);
});

export default component$(() => {
  const { value: course } = useCourseLoader();
  const { value: tenants } = useTenantsLoader();

  const copied = useSignal(false);

  const copyToClipboard = $(() => {
    navigator.clipboard.writeText(course.code as string).then(() => {
      copied.value = true;
      setTimeout(() => (copied.value = false), 1500);
    });
  });

  return (
    <section class="space-y-10 mt-32">
      <Button href="/courses" size="sm" variant="secondary" style="w-fit">
        <img
          width={20}
          height={20}
          src={`${import.meta.env.PUBLIC_LUCIDE_URL}/arrow-left.svg`}
        />
        Kembali
      </Button>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <img
          width={20}
          height={20}
          src={course.thumbnail}
          class="bg-light sm:sticky top-28 w-full"
        />
        <div class="sm:col-span-2 space-y-5">
          <h1 class="text-2xl font-bold">{course.title}</h1>
          <p class="text-xl">{formatIDR(course.price)}</p>
          <p class="text-sm text-muted-foreground">{course.description}</p>
          <div class="flex justify-between items-center">
            <p>
              Kode kelas: <span class="bg-light">{course.code}</span>
            </p>
            {/* @ts-expect-error warning event handler */}
            <Button onClick$={copyToClipboard} size="sm">
              <img
                width={20}
                height={20}
                src={`${import.meta.env.PUBLIC_LUCIDE_URL}/copy.svg`}
                style="filter: brightness(0) invert(1);"
              />
              {copied.value ? "Disalin!" : "Salin"}
            </Button>
          </div>
          <h1 class="text-lg">Pemilik kursus</h1>
          <TenantCard
            tenant={
              tenants.filter(
                (tenant) => tenant.name == course.tenant
              )[0] as Tenant
            }
            isLink={false}
          />
          <div dangerouslySetInnerHTML={course.html} class="prose prose-sm" />
        </div>
      </div>
    </section>
  );
});
