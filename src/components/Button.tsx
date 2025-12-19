import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                className={cn(
                    // Base styles
                    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary",
                    "disabled:opacity-50 disabled:pointer-events-none",
                    "active:scale-[0.98] transform-gpu",
                    // Variant styles
                    {
                        // Primary - Deep blue with glow
                        'bg-gradient-to-br from-primary to-primary/90 text-white hover:from-primary/95 hover:to-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30': variant === 'primary',

                        // Secondary - Teal with glow
                        'bg-gradient-to-br from-secondary to-secondary/90 text-white hover:from-secondary/95 hover:to-secondary shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30': variant === 'secondary',

                        // Accent - Gold with glow
                        'bg-gradient-to-br from-accent to-accent/90 text-primary hover:from-accent/95 hover:to-accent shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30': variant === 'accent',

                        // Outline - Border with hover fill
                        'border-2 border-primary/30 text-primary bg-transparent hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg hover:shadow-primary/20': variant === 'outline',

                        // Ghost - Subtle hover
                        'text-primary bg-transparent hover:bg-primary/5 hover:text-primary': variant === 'ghost',
                    },
                    // Size styles
                    {
                        'h-10 px-4 text-sm gap-2': size === 'sm',
                        'h-12 px-6 text-base gap-2': size === 'md',
                        'h-14 px-8 text-lg gap-3': size === 'lg',
                    },
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
