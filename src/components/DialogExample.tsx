"use client";

import { useRef } from "react";
import { ChevronDownIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// `<selectedcontent>` is a valid HTML element used by the customizable select,
// but it isn't part of React's built-in JSX types yet. Aliasing the tag name to
// a string component renders it as-is while keeping TypeScript happy.
const SelectedContent = "selectedcontent" as unknown as React.FC<
  React.HTMLAttributes<HTMLElement>
>;

export default function DialogExample() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <div className="my-8">
      {/* Plain white stage: 1px border, rounded corners, trigger centered. */}
      <div className="mx-auto flex aspect-[1.8/1] max-w-xl items-center justify-center rounded-xl border bg-white sm:aspect-[3/1]">
        <Button onClick={() => dialogRef.current?.showModal()}>
          Open Dialog
        </Button>
      </div>

      {/* Native <dialog> styled to match shadcn's dialog content. */}
      <dialog
        ref={dialogRef}
        closedby="any"
        className="m-auto w-full max-w-[calc(100%-2rem)] gap-4 rounded-xl border-0 bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 outline-none open:grid backdrop:bg-black/10 backdrop:backdrop-blur-xs sm:max-w-sm"
      >
        <textarea className="border-3" />
        <button
          type="button"
          aria-label="Close"
          onClick={() => dialogRef.current?.close()}
          className="absolute top-2 right-2 inline-flex size-7 cursor-pointer items-center justify-center rounded-[min(var(--radius-md),12px)] text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 [&_svg]:size-4"
        >
          <XIcon />
        </button>

        <div className="flex flex-col gap-2">
          <h3 className="text-base leading-none font-medium">
            Are you absolutely sure?
          </h3>
          <p className="text-sm text-muted-foreground">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          {/* <label
            htmlFor="theme-select"
            className="text-sm font-medium text-foreground"
          >
            Theme
          </label> */}

          {/*
            Native customizable <select>. The trigger box mirrors shadcn's
            SelectTrigger; the ::picker(select) dropdown mirrors SelectContent;
            each <option> mirrors SelectItem. `appearance: base-select` is the
            opt-in and has no Tailwind utility, so it goes through the arbitrary
            property/variant syntax.
          */}
          <select
            id="theme-select"
            defaultValue="system"
            className="flex h-8 w-[180px] cursor-pointer items-center rounded-lg border border-input bg-transparent text-sm text-foreground transition-colors outline-none select-none [appearance:base-select] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [&::picker(select)]:mt-1 [&::picker(select)]:min-w-36 [&::picker(select)]:rounded-lg [&::picker(select)]:border [&::picker(select)]:border-border [&::picker(select)]:bg-popover [&::picker(select)]:p-1 [&::picker(select)]:text-popover-foreground [&::picker(select)]:shadow-md [&::picker(select)]:ring-1 [&::picker(select)]:ring-foreground/10 [&::picker(select)]:[appearance:base-select] [&::picker-icon]:hidden"
          >
            <button className="flex w-full cursor-pointer items-center justify-between gap-1.5 border-0 bg-transparent py-2 pr-2 pl-2.5 text-left outline-none">
              <SelectedContent className="flex flex-1 items-center gap-2" />
              <ChevronDownIcon className="size-4 shrink-0 text-muted-foreground" />
            </button>

            <option
              value="system"
              className="flex cursor-default items-center gap-2 rounded-md py-1 pr-2 pl-1.5 text-sm select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground checked:font-medium [&::checkmark]:order-1 [&::checkmark]:ml-auto [&::checkmark]:text-current"
            >
              System
            </option>
            <option
              value="light"
              className="flex cursor-default items-center gap-2 rounded-md py-1 pr-2 pl-1.5 text-sm select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground checked:font-medium [&::checkmark]:order-1 [&::checkmark]:ml-auto [&::checkmark]:text-current"
            >
              Light
            </option>
            <option
              value="dark"
              className="flex cursor-default items-center gap-2 rounded-md py-1 pr-2 pl-1.5 text-sm select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground checked:font-medium [&::checkmark]:order-1 [&::checkmark]:ml-auto [&::checkmark]:text-current"
            >
              Dark
            </option>
          </select>
        </div>

        {/* Footer mirrors shadcn's DialogFooter. */}
        {/* <div className="-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="inline-flex h-8 cursor-pointer items-center justify-center rounded-lg bg-primary px-2.5 text-sm font-medium text-primary-foreground transition-all outline-none hover:bg-primary/80 focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            Done
          </button>
        </div> */}
      </dialog>
    </div>
  );
}
