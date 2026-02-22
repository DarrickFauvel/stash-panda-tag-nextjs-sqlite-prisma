"use client";

import { useEffect, useRef } from "react";

export default function IntroModalComponent() {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (!localStorage.getItem("visited")) {
      modalRef.current?.showModal();
      localStorage.setItem("visited", "true");
    }
  }, []);

  return (
    <div>
      <button
        className="btn btn-ghost btn-sm"
        onClick={() => modalRef.current?.showModal()}
      >
        ℹ️ About
      </button>
      <dialog
        id="welcome-modal"
        className="modal bg-black/40 backdrop-blur-sm"
        ref={modalRef}
      >
        <div className="modal-box max-w-md">
          <h2 className="text-2xl font-bold mb-1">🐼 Welcome to Stash Panda Tag</h2>
          <p className="text-base-content/70 text-sm mb-6">
            Generate and print unique labels for your stored items using a
            connected DYMO label printer.
          </p>

          <ol className="space-y-3 mb-8">
            <li className="flex gap-3 items-start">
              <span className="font-bold text-primary min-w-5">1.</span>
              <p className="text-sm">
                A unique label ID is generated for you automatically.
              </p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="font-bold text-primary min-w-5">2.</span>
              <p className="text-sm">
                Tap the label preview to edit it, or use{" "}
                <strong>↻ Generate a different ID</strong> to get a new one.
              </p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="font-bold text-primary min-w-5">3.</span>
              <p className="text-sm">
                Click <strong>🖨️ Print Label</strong> to send it to your DYMO
                printer.
              </p>
            </li>
          </ol>

          <form method="dialog">
            <button className="btn btn-primary btn-block">Get Started</button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
