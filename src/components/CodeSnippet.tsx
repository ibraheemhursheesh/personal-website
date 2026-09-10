"use client";

import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { Check, Copy } from "lucide-react";

type CodeSnippetProps = {
  code: string;
  lang?: string;
  filename?: string;
};

export default function CodeSnippet({
  code,
  lang = "tsx",
  filename,
}: CodeSnippetProps) {
  const [html, setHtml] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let active = true;
    codeToHtml(code, {
      lang,
      theme: "github-light",
    }).then((result) => {
      if (active) setHtml(result);
    });
    return () => {
      active = false;
    };
  }, [code, lang]);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-b-xl border border-t-0 overflow-hidden bg-[#fff] text-sm max-w-xl mx-auto">
      {/* <div className="flex items-center justify-between border-b bg-zinc-50 px-4 py-2">
        <span className="font-mono text-xs text-zinc-500">{filename}</span>
      </div> */}
      {html ? (
        <div className="relative"> 
          {/* <button
            type="button"
            onClick={copy}
            aria-label="Copy code"
            className="flex items-center gap-1 rounded px-2 py-1 text-xs text-zinc-500 hover:bg-zinc-200/70 hover:text-zinc-800 transition-colors absolute right-2 top-2"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Copied" : "Copy"}
          </button> */}
          <div
            className="shiki-snippet overflow-x-auto p-4 [&_pre]:!bg-transparent [&_pre]:m-0"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      ) : (
        <pre className="overflow-x-auto p-4 font-mono text-zinc-800">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}
