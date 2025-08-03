import { component$ } from "@builder.io/qwik";
import { Course } from "~/shared/types";
import { formatIDR } from "~/shared/utils";

export const CourseCard = component$(({ course }: { course: Course }) => {
  return (
    <a
      href={`/courses/${course.slug}`}
      class="space-y-4 border border-light hover:bg-light/50"
    >
      <img
        width={20}
        height={20}
        src={course.thumbnail}
        class="w-full aspect-square bg-light"
      />
      <div class="space-y-1 p-4 pt-0 text-sm">
        <p class="text-xs">{formatIDR(course.price)}</p>
        <h1 class="line-clamp-2">{course.title}</h1>
        <p class="text-xs text-muted-foreground mt-2">{course.tenant}</p>
      </div>
    </a>
  );
});
