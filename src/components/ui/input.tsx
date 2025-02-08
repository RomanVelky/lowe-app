import * as React from "react";
import { cn } from "@/lib/utils";

//customized input to prevent increment/decrement on scroll

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    React.useEffect(() => {
      const handleWheel = (e: WheelEvent) => {
        if (document.activeElement === inputRef.current) {
          e.preventDefault();
        }
      };

      const inputElement = inputRef.current;
      if (inputElement) {
        inputElement.addEventListener("wheel", handleWheel);
      }

      return () => {
        if (inputElement) {
          inputElement.removeEventListener("wheel", handleWheel);
        }
      };
    }, []);

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={inputRef}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
