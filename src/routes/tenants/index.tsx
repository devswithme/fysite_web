import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { loadTenants } from "~/shared/loaders";
import type { DocumentHead } from "@builder.io/qwik-city";
import Button from "~/components/ui/button";
import { TenantCard } from "~/components/tenant-card";
import { Tenant } from "~/shared/types";

export const head: DocumentHead = {
  title: "Daftar tenan",
};

export const useTenantsLoader = routeLoader$(() => {
  return loadTenants();
});

export default component$(() => {
  const { value: tenants } = useTenantsLoader();

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
      <h1 class="text-xl">Daftar tenan</h1>
      <div class="grid grid-cols-1 sm:grid-cols-3">
        {tenants.map((tenant) => (
          <TenantCard tenant={tenant as Tenant} key={tenant.slug} />
        ))}
      </div>
    </section>
  );
});
