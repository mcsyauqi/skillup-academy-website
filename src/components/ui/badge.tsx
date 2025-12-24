import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary/10 text-primary border border-primary/20",
        secondary:
          "bg-secondary/10 text-secondary border border-secondary/20",
        success:
          "bg-emerald/10 text-emerald border border-emerald/20",
        warning:
          "bg-amber/10 text-amber border border-amber/20",
        destructive:
          "bg-red-500/10 text-red-500 border border-red-500/20",
        outline:
          "text-foreground border border-border",
        bestseller:
          "bg-amber text-white border-0",
        new:
          "bg-emerald text-white border-0",
        popular:
          "bg-primary text-white border-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
