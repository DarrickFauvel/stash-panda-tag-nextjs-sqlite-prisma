import GenerateNewLabelCardComponent from "./components/card-generate-new-label";
import IntroModalComponent from "./components/modal-intro";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-6 p-8 bg-zinc-50 font-sans dark:bg-black">
      <IntroModalComponent />
      <GenerateNewLabelCardComponent />
    </main>
  );
}
