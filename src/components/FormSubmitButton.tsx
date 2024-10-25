"use client";
import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type FormSubmitButtonProps = {
  children: React.ReactNode;
  classname?: string;
} & ComponentProps<"button">;

export default function FromSubmitButton({
  children,
  className,
  ...props
}: FormSubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      disabled={pending}
      type="submit"
      className={`btn btn-primary ${className}`}
    >
      {pending && <span className="loading loading-infinity loading-lg" />}
      {children}
    </button>
  );
}
