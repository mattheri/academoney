import Calculator from "@/calculator";

export default function Home() {
  return (
    <main className="grid">
      <Calculator autoInit focusKeyboardInputs />
    </main>
  );
}
