import GenerateNewLabelCardComponent from "./components/card-generate-new-label";
import IntroModalComponent from "./components/modal-intro";

export default function Home() {
  return (
    <main className="bg-zinc-50 font-sans dark:bg-black">
      <IntroModalComponent />
      <GenerateNewLabelCardComponent />
    </main>
  );
}
