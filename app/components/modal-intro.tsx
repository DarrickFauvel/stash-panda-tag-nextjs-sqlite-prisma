"use client";

import { useRef } from "react";
import WelcomeComponent from "./intro";

export default function IntroModalComponent() {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  return (
    <div>
      <button className="btn" onClick={() => modalRef.current?.showModal()}>
        open modal
      </button>
      <dialog
        id="welcome-modal"
        className="modal bg-black/40 backdrop-blur-sm"
        ref={modalRef}
      >
        <div className="modal-box w-sm h-2/3">
          <h3 className="font-bold text-lg">Hello!</h3>

          <WelcomeComponent />

          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
