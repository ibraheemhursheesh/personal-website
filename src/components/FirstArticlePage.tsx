"use client";
import HeadingThee from "@/components/HeadingThee";
import HeadingTwo from "@/components/HeadingTwo";
import Paragraph from "@/components/Paragraph";
import CallOut from "@/components/CallOut";
import { useRef } from "react";

import DialogExample from "@/components/DialogExample";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ArrowRight, Code, EllipsisVertical } from "lucide-react";

import Image from "next/image";

import { Gentium_Book_Plus } from "next/font/google";
import CodeLine from "@/components/CodeLine";
import CodeSnippet from "@/components/CodeSnippet";

const gentiumBookPlus = Gentium_Book_Plus({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function FirstArticlePage() {
  const featuresList = [
    "Keyboard-navigatable: if it's a dialog, it should be focus trapped, it's a select, it should navigate using arrow keys, etc.",
    "Escape key dismissal",
    "These floating element/pop ups should, under all circumstances, appear above the rest of the page content, and as we will see, there are different mechanisms to approach this.",
    "Mobile back button/swipe gesture: you probably didn't think about it, but on desktop, you use Escape key to close, but what do you do on mobile? If you're like me on Android, you can close things using the back button or swipe gesture, our dialog/select should support that too, otherwise, it's gonna jump the browser back in history, which creates a bad user experience, especially if we're building something that will be heavily used by mobile users, like a social media app or something, I've tested this on multiple social media apps like Facebook and Twitter (not going to call it X whatsoever), they all, either fully or partially, support back button press in some form. For example, on Facebook, I tried every possible menu or dialog I could think of, and they all close when I hit back button (and it's awesome).",
  ];
  const dialogRef = useRef<HTMLDialogElement>(null);

  const items = [
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
    { label: "System", value: "system" },
  ];

  return (
    <div className="relative">
      <div
        className={
          gentiumBookPlus.className +
          " font-normal max-w-3xl mx-auto px-6 sm:px-10"
        }
      >
        <header className="text-center">
          <h1 className="text-4xl font-bold mt-10">
            HTML is eating JavaScript UI libraries
          </h1>
          <p className="text-zinc-600 mt-2">
            A look into how HTML is evolving to take on more complex UI patterns
            that were previously only possible with JavaScript libraries.
          </p>
          <p className="mt-2">On September 7th, 2026</p>
        </header>
        <main className="">
          <HeadingTwo>Introduction</HeadingTwo>
          <Paragraph>
            We&apos;ve all probably heard about the HTML dialog element, popover
            API, and customizable select, but I think a lot of people don&apos;t
            realize how powerful and battle-tested they are and also might not
            know about some of the inconsistencies these elements have and that
            they might encounter when using them. And this is what this post is
            about, I&apos;m not going to go over the syntax and basic
            API&apos;s, if you&apos;re unfamiliar with them, I would suggest you
            read some MDN pages and Chrome For Devs blog posts before you jump
            into this article. I would like to focus more on in-depth details
            and edge cases. The article will be a comparison between these
            native elements and UI libraries like Shadcn, React Aria, etc.
          </Paragraph>
          {/* <CallOut>
            I&apos;m not going to go over the syntax and API&apos;s for these elements, if
            you&apos;re unfimilar with them, I would recommand you read some MDN
            pages or Chrome blog posts before you continue reading this post.
          </CallOut> */}
          <Paragraph>
            Let&apos;s start by listing out some of the common features you
            would expect from a robust dialog, select, or popover, whether
            it&apos;s native or custom JS one.
          </Paragraph>
          <ul className="list-disc mt-4 pl-6 sm:pl-10">
            {featuresList.map((feature) => (
              <li className="mt-2 text-base sm:text-[1.1rem]" key={feature}>
                {/* <ArrowRight size={20} className="h-lh shrink-0" /> */}
                {feature}
              </li>
            ))}
          </ul>
          {/* <ul className="list-disc">
            <li>one</li>
            <li>one</li>
            <li>one</li>
            <li>one</li>
          </ul> */}
          <Paragraph>
            I don&apos;t know if I missed something, but let&apos;s just focus
            on these four features for now and see how native elements vs UI
            libraries approach them, as we&apos;ll see, there&apos;s a lot to
            unpack in here.
          </Paragraph>
          <Paragraph>
            For keyboard navigation and Escape key dismissal, the HTML dialog,
            select, popover, and all the upcoming elements have this built-in,
            you almost don&apos;t need any JavaScript at all for any of this to
            work, but for JS libraries, it&apos;s an entirely different story,
            you&apos;d be shipping tons and tons (or even hundreds) of lines of
            JS for Escape key dismissal, arrow keys navigation, focus trapping,
            etc. All of this just to re-invent what the browser gives you for
            free.
          </Paragraph>
          <Paragraph>
            For back button/swipe gesture, this is also already built-in in the
            native components, all of them close on back button press on
            Android, but in UI libraries like Radix UI or React Aria, they
            don&apos;t even have this feature at all, despite that it can be
            added using JavaScript.
          </Paragraph>
          <Paragraph>
            In order to add support for back button press and swipe gestures,
            you can use the <CodeLine>CloseWatcher</CodeLine> API, as MDN says:
            it allows a custom UI component with open and close semantics to
            respond to device-specific close actions in the same way as a
            built-in component.
          </Paragraph>
          <Paragraph>
            The browser compatibility for the <CodeLine>CloseWatcher</CodeLine>{" "}
            API is decent, it&apos;s been in Chrome and Edge since June 2024,
            Firefox added it in May this year (2026), it&apos;s not available in
            Safari yet, but this is a progressive enhancement feature, if
            it&apos;s available, your users are going to enjoy a better
            experience, if it&apos;s not, it&apos;s not a big deal. Also, you
            can build this same behavior using the <CodeLine>History</CodeLine>
            API if you need it that much.
          </Paragraph>
          <HeadingTwo>The Top Layer</HeadingTwo>
          <Paragraph>
            One thing I want to compare is how native elements and UI libraries
            make sure things appear on top of other page content and also above
            each other. To better explain this, let&apos;s take the following
            example from Notion webapp, here we have the settings dialog and
            inside we have a select that we can choose our preferred theme from.
            The question is how do we ensure the dialog appears above other
            content and the select appears above the dialog.
          </Paragraph>
          <Image
            src="/notion-setting-dialog.png"
            width={1278}
            height={859}
            alt="Notion Dialog Example"
            className="rounded-md mt-5 w-full"
          />
          <Paragraph>
            For our native elements, the answer is the Top Layer, each of our
            dialog and select will live in Top Layer, a separate layer that the
            browser maintains internally, it allows our elements to appear on
            top of all other stuff in the DOM, and it bypasses any stacking
            context that could be locking it and beats any{" "}
            <CodeLine>z-index</CodeLine> value, even your favorite 9999, if more
            than one element exists in the Top Layer, they&apos;re going to be
            stacked on top of each other according to the order they were opened
            in.
          </Paragraph>
          <DialogExample />
          <Paragraph>
            The example above is using the <CodeLine>dialog</CodeLine> and{" "}
            <CodeLine>select</CodeLine> elements, if you&apos;re using Chrome,
            keep both of them open, then use the devtools to see the Top Layer
            at the bottom of HTML documents.
          </Paragraph>
          <Image
            src="/toplayer.png"
            width={1278}
            height={859}
            alt="Top Layer Example"
            className="rounded-md mt-5 w-full max-w-lg mx-auto"
          />
          <Paragraph>
            The fact that stuff like dialog and popover lives in Top Layer has
            an important implication; it doesn&apos;t matter where you put them
            in your HTML markup. Even if your element is nested deep in the DOM
            or inside an element that has a <CodeLine>z-index</CodeLine> of 2,{" "}
            <CodeLine>opacity</CodeLine> of 0.5, or any other css property that
            creates a stacking context. the dialog will still show up above all
            other content.
          </Paragraph>
          <HeadingTwo>
            What about JS libraries? How do they handle this?
          </HeadingTwo>
          <Paragraph>
            You might think that the answer is managing stacking context, but
            that is not true. Managing stacking context could turn into a
            nightmare, especially if you have a lot of floating elements in your
            UI. A simple <CodeLine>transform</CodeLine> or{" "}
            <CodeLine>opacity</CodeLine> can lock an element behind a certain
            stacking context level (good luck debugging that), that&apos;s why
            native elements use Top Layer and don&apos;t let you manage stacking
            context manually in the first place. The front end developer
            community has learned this and moved toward a better approach, and
            it&apos;s what all UI libraries use (portals).
          </Paragraph>
          <Paragraph>
            The way portals work is pretty simple, instead of putting the
            floating element next to its trigger in the DOM, i.e., a dialog next
            to a button that opens it, and start fussing with{" "}
            <CodeLine>z-index</CodeLine>. Let&apos;s just put the element at the
            end of the body element and use JavaScript to position according to
            its anchor (if needed). This way, none of its parents is gonna have
            a stacking context locking it.
          </Paragraph>
          <Paragraph>
            if we have more than one element that needs to appear above other
            content, we&apos;re going to stack them, add the dialog first, then
            add the select.
          </Paragraph>
          <div className="aspect-[1.8/1] sm:aspect-[3/1] bg-white border rounded-xl mt-5 flex items-center justify-center max-w-xl mx-auto">
            <DialogTrigger>
              <Button>Open Dialog</Button>
              <Dialog className={gentiumBookPlus.className}>
                <DialogHeader>
                  <DialogTitle className={gentiumBookPlus.className}>
                    Are you absolutely sure?
                  </DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>

                <Select placeholder="Theme">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className={gentiumBookPlus.className}>
                    <SelectGroup>
                      {items.map((item) => (
                        <SelectItem key={item.value} id={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Dialog>
            </DialogTrigger>
          </div>
          <Paragraph>
            This second example is using Shadcn/React Aria dialog and select
            components, it&apos;s quite hard to see them in the devtools because
            there&apos;s a lot of DOM nodes and wrappers that the library is
            adding for things like overlays and accessibility, but if you
            inspect, you&apos;ll see something like this:
          </Paragraph>
          <Image
            src="/shadcn-dialog-select.png"
            width={1278}
            height={859}
            alt="Shadcn Dialog and Select Example"
            className="rounded-md mt-5 w-full max-w-lg mx-auto"
          />
          <Paragraph>
            There are a lot of details in here, but what we care about is the
            structure and order; how the elements are appended to the end of the
            <CodeLine>body</CodeLine> element and how the dialog comes first
            (first arrow) then the select (second arrow).
          </Paragraph>
          <Paragraph>
            You might have noticed something interesting in here; both Portals
            and Top Layer fix the exact same problem, the complexity of managing
            stacking context, and both work very similarly, stack elements in
            their order of opening and put in a place where they&apos;re very
            unlikely to be affected by CSS properties like{" "}
            <CodeLine>z-index</CodeLine>. The difference is how it&apos;s done,
            Top Layer requires no JavaScript to work, the stack of opened
            elements is maintained internally by the browser, while Portals use
            JavaScript to keep track of all opened elements, whether
            they&apos;re dialogs, menus, whatever, and close them in order.
          </Paragraph>
          <Paragraph>
            That last statement is as important as the first, the reason why we
            need to keep a stack of opened elements isn&apos;t to just manage
            their visibility (display in order), but also to make sure they
            close in order; in the two demos above, if you hit Escape key or
            click outside (light dismiss), the select will close first, then you
            have to hit Escape or click outside one more time for the dialog to
            close second.
          </Paragraph>
          <Paragraph>
            Closing on back button in order? As I mentioned, it only works with
            native elements, libraries can actually provide this functionality
            with <CodeLine>CloseWatcher</CodeLine>&apos;s or{" "}
            <CodeLine>History</CodeLine> API, but for some reason they
            don&apos;t!
          </Paragraph>
          <HeadingTwo>
            The Inconsistencies with Combining Top Layer and Portals
          </HeadingTwo>
          <Paragraph>
            After we discussed how Top Layer and Portals work, the last thing I
            want to draw your attention to is what happens when you combine both
            of them, because you&apos;re very likely to do so if you decided to
            use native elements.
          </Paragraph>
          <Paragraph>
            As we&apos;ve seen, there are three types of elements that can live
            in Top Layer as of now, dialog, popovers, and customizable select,
            if you happen to need something beyond that, say a menu, you would
            like to reach for your favorite UI library, and that&apos;s where
            things get interesting and also inconsistent.
          </Paragraph>
          <CallOut>
            There are some proposals on adding more native elements like menus,
            datepickers, comboboxes, etc, and they&apos;ll surely be added, but
            you don&apos;t expect them to come around soon.
          </CallOut>
          <Paragraph>
            So let&apos;s say you&apos;re working on a dialog with a menu inside
            of it, and you decided to use the battle-tested HTML dialog element
            and some UI libraries for your menu, say Shadcn. The problem
            you&apos;re gonna have is that the dialog lives in Top Layer, but
            your Shadcn menu is a portal, which means even if you nest it inside
            the dialog element, it is going to be appended at the end of the
            body element.
          </Paragraph>
          <Paragraph>
            Since the dialog element lives in top layer, it is going to appear
            on top of your menu instead of the menu being on top of it. This
            happens because as we&apos;ve mentioned earlier, things in top layer
            appear above all other content in the web page.
          </Paragraph>

          <div className="aspect-[1.8/1] sm:aspect-[3/1] bg-white border rounded-t-xl mt-5 flex items-center justify-center max-w-xl mx-auto">
            <Button
              type="button"
              variant="outline"
              onClick={() => dialogRef.current?.showModal()}
            >
              Open dialog
            </Button>
            <dialog
              closedby="any"
              ref={dialogRef}
              className="max-w-md mx-5 my-auto md:mx-auto rounded-md"
            >
              <div className="p-4 ">
                <DropdownMenuTrigger>
                  <Button className="ml-auto block" variant="destructive">
                    <EllipsisVertical size={20} />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuGroup>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenu>
                </DropdownMenuTrigger>
                <p className="mt-2">
                  Click the three dots, Shadcn <CodeLine>DropdownMenu</CodeLine>{" "}
                  will show up below this dialog, because the dialog lives in
                  Top Layer while the <CodeLine>DropdownMenu</CodeLine> lives in
                  &quot;the normal layer&quot;
                </p>
              </div>
            </dialog>
          </div>
          <CodeSnippet
            // filename="DialogWithMenu.tsx"
            code={`// although in the code the DropDownMenu is nested inside the dialog, the library will use React portals to mount it at the end of the body element.
<dialog>
  <DropdownMenu>
    <DropdownMenuContent>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</dialog>`}
          />
          <Paragraph>
            This problem doesn&apos;t have a straightforward fix, because we
            can&apos;t force our Shadcn menu to go into Top Layer. The Top Layer
            is managed internally by the browser. This leaves us with two
            choices to get our menu to appear above the dialog.
          </Paragraph>
          <Paragraph>
            The first option we have is to rely on stacking context: instead of
            appending our menu to the end of the body element, we&apos;ll insert
            it inside the dialog element in Top Layer, this will make it follow
            its stacking context.
          </Paragraph>
          <CallOut>
            Elements placed in the top layer generate a new stacking context.
            Says MDN.
          </CallOut>
          <Paragraph>
            most UI libraries provide a way, e.g., a{" "}
            <CodeLine>container</CodeLine> property, to choose where your portal
            elements are mounted.
          </Paragraph>
          <Paragraph>
            The second option is to only use these elements when we don&apos;t
            have anything nested inside of them that doesn&apos;t have a native
            element that lives in Top Layer.
          </Paragraph>
          <Paragraph>
            not yet having enough elements that live in Top Layer shouldn&apos;t
            prevent us from using these elements at all, if your dialog
            doesn&apos;t have something like a menu or datepicker inside of it,
            e.g just a standalone dialog, you can still use the dialog element
            without worrying about managing stacking context or things showing
            below each other.
          </Paragraph>
          <HeadingTwo>Is Anyone Using This Stuff?</HeadingTwo>
          <Paragraph>
            Yes, LinkedIn uses dialog and popover in many places across their
            site, MDN is using the dialog element for their search box, I&apos;m
            using them for a Chrome Extension with nine users, and you should
            too.
          </Paragraph>
        </main>
      </div>
      <div className="mt-50"></div>
    </div>
  );
}
