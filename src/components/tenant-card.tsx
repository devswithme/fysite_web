import { component$ } from "@builder.io/qwik";
import { Tenant } from "~/shared/types";

interface TenantCardProps {
  tenant: Tenant;
  isLink?: boolean;
  style?: string;
}

export const TenantCard = component$(
  ({ tenant, isLink = true, style }: TenantCardProps) => {
    const children = (
      <>
        <img
          width={20}
          height={20}
          src={tenant.logo}
          class="w-10 aspect-square h-fit"
        />
        <div class="flex-1 space-y-2">
          <h1
            class={`${isLink && "line-clamp-2"} leading-none text-sm flex items-center gap-2`}
          >
            {tenant.name}{" "}
            {tenant.isVerified && (
              <img
                width={20}
                height={20}
                src={`${import.meta.env.PUBLIC_LUCIDE_URL}/badge-check.svg`}
                class="w-3 h-3"
              />
            )}
          </h1>
          <p
            class={`${isLink && "line-clamp-2"} text-muted-foreground text-xs`}
          >
            {tenant.description}
          </p>
        </div>
      </>
    );

    const classCard = `${style} flex gap-4 border border-light p-4 ${isLink && "hover:bg-light/50"}`;

    return isLink ? (
      <a class={classCard} href={`/tenants/${tenant.slug}`}>
        {children}
      </a>
    ) : (
      <div class={classCard}>{children}</div>
    );
  }
);
