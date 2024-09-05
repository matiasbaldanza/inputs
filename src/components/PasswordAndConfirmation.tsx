"use client"

import * as React from "react"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { CheckCircledIcon } from "@radix-ui/react-icons"

const defaultLabels = {
  password: "Password",
  confirmPassword: "Confirm Password",
}

interface PasswordAndConfirmationProps extends React.HTMLAttributes<HTMLDivElement> {
  labels?: {
    password?: string
    confirmPassword?: string
  }
}

const PasswordAndConfirmation = React.forwardRef<
  HTMLDivElement,
  PasswordAndConfirmationProps
>(({ className, labels = defaultLabels, ...props }, ref) => {
  const [password, setPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")

  const styleMatch = "text-green-600 bg-green-100"
  const styleNoMatch = "text-red-600 bg-red-100"

  return (
    <div className={cn(
      "relative flex flex-col gap-2",
      className
    )}
      ref={ref}
    >
      <div className="relative">
        <Input
          id="password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="absolute inset-2 translate-x-1 translate-y-1/2flex pointer-events-none ">
          {/* Replace input placeholder with label */}
          {!password
            ? <span className="text-gray-500 font-medium text-sm">
              {labels.password}
            </span>
            : ""
          }
          {/* Inline password confirmation validation */}
          {password.length > 0 && confirmPassword.length > 0
            && confirmPassword.split("").map((char, index) => (
              <span
                key={index}
                className={cn("font-light tracking-tighter ",
                  password[index] === char ? styleMatch : styleNoMatch
                )}>
                &bull;
              </span>
            ))}
        </div>
      </div>
      <div className="relative">
        <Input
          id="confirmPassword"
          placeholder={labels.confirmPassword}
          value={confirmPassword}
          type="password"
          onChange={(e) => {
            if (e.target.value.length <= password.length) {
              setConfirmPassword(e.target.value)
            }
          }}
        />
        <span className={cn(
          "absolute top-0 translate-y-1/2 right-2 text-sm",
          "text-green-600",
          confirmPassword.length > 0 && confirmPassword === password ? "opacity-100" : "opacity-0",
          "transition-opacity duration-300"
        )}>
          <CheckCircledIcon className="w-5 h-5" />
        </span>
      </div>
    </div>
  )
})

PasswordAndConfirmation.displayName = "PasswordAndConfirmation"

export { PasswordAndConfirmation }
