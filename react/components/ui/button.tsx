import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive w-full sm:w-auto",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-sm hover:shadow-md hover:bg-primary-dark",
        destructive:
          "bg-error text-white shadow-sm hover:bg-error/90 focus-visible:ring-error/20 dark:focus-visible:ring-error/40",
        outline:
          "border border-border text-text-primary bg-surface shadow-sm hover:bg-background",
        secondary:
          "bg-secondary text-white shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-text-primary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "py-3 px-4 has-[>svg]:px-3",
        sm: "py-2 px-3 has-[>svg]:px-2.5",
        lg: "py-3 px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
})

Button.displayName = "Button"

export { Button, buttonVariants }
