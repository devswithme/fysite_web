import { component$, Slot } from "@builder.io/qwik";

interface ButtonProps {
  variant?: "default" | "secondary" | "outline" | "link";
  size?: "default" | "sm" | "icon";
  href?: string;
  style?: string;
}

export const Button = component$(
  ({
    variant = "default",
    size = "default",
    href,
    style,
    ...props
  }: ButtonProps) => {
    let variantClasses = "";

    switch (variant) {
      case "default":
        variantClasses = "bg-primary text-light hover:bg-primary/90";
        break;
      case "secondary":
        variantClasses = "bg-light text-dark hover:bg-light/80";
        break;
      case "outline":
        variantClasses = "border border-dark text-dark";
        break;
      case "link":
        variantClasses =
          "!p-0 text-dark hover:underline hover:underline-offset-2";
    }

    let sizeClasses = "";

    switch (size) {
      case "default":
        sizeClasses =
          "h-9 gap-2 px-4 py-2 text-sm [&_img]:invert-0 [&_img]:brightness-0";
        break;
      case "sm":
        sizeClasses = "h-8 gap-1.5 px-3 text-xs";
        break;
      case "icon":
        sizeClasses = "size-9";
        break;
    }

    const classNames = `${style} flex items-center justify-center [&_img]:size-4 hover:cursor-pointer ${sizeClasses} ${variantClasses}`;

    return href ? (
      <a href={href} class={classNames} {...props}>
        <Slot />
      </a>
    ) : (
      <button class={classNames} {...props}>
        <Slot />
      </button>
    );
  }
);

export default Button;
