"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function LabelContent() {
  const searchParams = useSearchParams();
  const labelId = searchParams.get("id") ?? "";

  useEffect(() => {
    if (labelId) {
      window.print();
      const handleAfterPrint = () => window.close();
      window.addEventListener("afterprint", handleAfterPrint);
      return () => window.removeEventListener("afterprint", handleAfterPrint);
    }
  }, [labelId]);

  return (
    <article className="label">
      <h1>{labelId}</h1>
    </article>
  );
}

export default function LabelPage() {
  return (
    <Suspense>
      <LabelContent />
    </Suspense>
  );
}
