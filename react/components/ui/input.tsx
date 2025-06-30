import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex w-full min-w-0 border border-border rounded-lg px-4 py-2 bg-transparent text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-text-secondary selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus:ring-2 focus:ring-primary focus:border-primary",
        "aria-invalid:ring-error/20 aria-invalid:border-error",
        className
      )}
      {...props}
    />
  )
}

export { Input }
