import * as React from "react"

import { cn } from "../../lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-[40px]  rounded-md border border-white/10 focus:border-accent bg-primary text-base placeholder:text-white/60 font-light  px-4 py-5 outline-none" ,
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
