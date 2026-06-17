"use client";

import { useEffect, useRef, useState } from "react";

type ContactRowProps = {
  linkedinUrl: string;
  email: string;
};

export function ContactRow({ linkedinUrl, email }: ContactRowProps) {
  const [copied, setCopied] = useState(false);
  const resetTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = email;
        textarea.setAttribute("readonly", "true");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);

      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }

      resetTimerRef.current = window.setTimeout(() => {
        setCopied(false);
        resetTimerRef.current = null;
      }, 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="mt-3 flex w-28 items-center justify-center gap-2 whitespace-nowrap text-sm leading-none text-muted-foreground md:w-32">
      <a
        className="inline-link"
        href={linkedinUrl}
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
      <span aria-hidden="true">·</span>
      <button
        type="button"
        onClick={handleCopyEmail}
        className="inline-link bg-transparent p-0 text-left"
      >
        {copied ? "Copied" : "Email"}
      </button>
    </div>
  );
}
