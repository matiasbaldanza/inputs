import { PasswordAndConfirmation } from "@/components/PasswordAndConfirmation"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <PasswordAndConfirmation
        className="w-full max-w-sm"
        labels={{
          password: "Contraseña",
          confirmPassword: "Confirmar contraseña",
        }}
      />
    </main>
  );
}
