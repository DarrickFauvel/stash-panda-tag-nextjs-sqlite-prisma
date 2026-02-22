import GenerateNewLabelCardComponent from "./components/card-generate-new-label";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-6 p-4 sm:p-8 bg-base-200 font-sans">
      <GenerateNewLabelCardComponent />
    </main>
  );
}
