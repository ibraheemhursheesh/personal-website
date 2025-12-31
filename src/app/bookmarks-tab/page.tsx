import HeadingThee from "@/components/HeadingThee";
import HeadingTwo from "@/components/HeadingTwo";
import Paragraph from "@/components/Paragraph";
import { ArrowRight, Lightbulb } from "lucide-react";
import Image from "next/image";

import { Google_Sans_Code } from "next/font/google";

const spaceMono = Google_Sans_Code({
  subsets: ["latin"],
  // weight: ["100", "200", "300", "400", "500", "600", "700"],
  weight: ["400", "700"],
});

export default function page() {
  const featuresList = [
    "Drag and drop bookmarks around.",
    "Enhanced bookmark navigation experience with smooth animations.",
    "Change the background image to nature scenes or upload your own.",
    "Easily edit, move, or delete your bookmarks.",
  ];
  return (
    <div>
      {" "}
      {/* <div className="bg-red-50 text-center p-5">
        this page is still under developemnt, but the content is almost done
        written, so you can go ahead and read.
      </div> */}
      <div
        className={
          spaceMono.className + " font-normal max-w-3xl mx-auto px-6 sm:px-10"
        }
      >
        <header className="text-center">
          <h1 className="text-4xl font-bold mt-10">Bookmarks Tab</h1>
          <p className="text-zinc-600 mt-2">
            A chrome extension that takes your bookmarks and displays them in a
            clean, cosy interface on your browser new tab.
          </p>
          <p className="mt-2">On October 9th, 2025</p>
        </header>
        <main className="">
          {/* <div className="flex gap-3 "> */}
          {/* <div className="flex gap-2 items-center bg-zinc-300/50 text-zinc-900 max-w-[700px] justify-center mt-5 p-2 text-sm mx-auto rounded-sm">
       
          <Image
            className="rounded-lg size-8"
            src="/chrome.svg.png"
            width="53"
            height="53"
            alt="bookmarks tab image"
          />
          Get The Exntension
        </div> */}

          {/* <div className="flex gap-2 items-center bg-zinc-300/50 text-zinc-900 max-w-[700px] justify-center mt-5 p-2 text-sm mx-auto rounded-sm">
         
            Source Code
          </div> */}
          {/* </div> */}
          <HeadingTwo>Introduction</HeadingTwo>

          {/* <Image
          className="rounded-lg max-w-[700px] mt-5 w-full"
          src="/image2.png"
          width="1273"
          height="773"
          alt="bookmarks tab image"
        /> */}
          <video
            className="rounded-md mt-5 w-full aspect-[660/428]"
            src="/intro.webm"
            controls={true}
          />

          <Paragraph>
            Bookmarks Tab is a Chrome extension that takes your bookmarks and
            displays them in a clean, cosy interface on your browser new tab, it
            brings the native mobile experience right into your browser,
            facilitates access and navigation to your bookmarks, providing you
            with a better browsing experience. Its core features are:
          </Paragraph>
          <ul className="ml-2 sm:ml-4 mt-5">
            {featuresList.map((feature) => (
              <li
                className="mt-1 flex gap-2 items-start text-sm sm:text-base"
                key={feature}
              >
                <ArrowRight size={20} className="h-lh shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="bg-blue-200/40 py-3 px-2 sm:px-5 mt-5 rounded-sm flex items-start gap-2 sm:gap-5 ">
            <Lightbulb size={20} className="shrink-0 min-h-lh" />
            <p className="text-sm sm:text-base">
              This article aims to provide details on the extension development
              process, the kind of details that a screenshot and paragraph
              cannot usually summerize, whether you&apos;re an early-career or
              seasoned developer, I believe that you&apos;ll find something
              useful in this article.
            </p>
          </div>
          <HeadingTwo>Role and Purposes</HeadingTwo>
          <HeadingThee>Doing UI/UX</HeadingThee>
          <Paragraph>
            Since Bookmarks Tab aims to improve the user experience with
            bookmarks, my work wasn&apos;t exclusively development, I had to
            step outside my wheelhouse and handle UI/UX design, and to be
            honest, design decisions can be as challenging as technical ones, a
            single feature can be designed in multiple ways, take the folder
            navigation as an example:
          </Paragraph>
          <video
            className="rounded-md mt-5 w-full aspect-[660/428]"
            src="/folder-navigation.mp4"
            controls={true}
          />
          <Paragraph>
            I had to choose between the design shown in the video and using a
            shared element to display bookmarks inside a folder. I went for the
            shared element solution at first as it&apos;s similar to mobile
            experiences, but it was a tricky design, especially for nested
            folder navigation.
          </Paragraph>
          <HeadingThee>Why Bookmarks Tab?</HeadingThee>
          <Paragraph>
            I&apos;m a big fan of mobile interfaces, if I wasn&apos;t doing web,
            I would&apos;ve been a mobile developer, I do really want to do some
            React Native in the future. The thing that attracts me most about
            mobile devices is the small touchable screen.
          </Paragraph>

          <Image
            className="rounded-lg border-2 w-full border-zinc-500 max-w-[500px] mt-5"
            src="/mobilegestures.jpg"
            width="1273"
            height="773"
            alt="mobile gestures"
          />
          <Paragraph>
            touch gestures allow for a high-level of interactivity, and small
            handheld screens are perfect for smooth animations and delightful
            designs, consider something like drawer components, it&apos;s much
            easier to interact with a drawer using your finger than a mouse or
            trackpad.
          </Paragraph>
          <Paragraph>
            I built this extension as an attempt to bring some of that friendly
            experience to the desktop browser, small app icons for websites,
            smooth animations when navigating, drag and drop capabilities.
          </Paragraph>
          <HeadingTwo>A word on Extensions Development.</HeadingTwo>
          <Paragraph>
            If you&apos;re not familiar with Chrome extension development,
            extensions are built using standard web technologies (HTML, CSS, and
            JavaScript). This means you can use any framework or library built
            on top of these three languages. In this project, I&apos;m using
            React, Tailwind, and Shadcn. I&apos;m also using{" "}
            <a
              className="underline underline-offset-2"
              href="https://crxjs.dev/"
            >
              CRXJS
            </a>
            , a tool built on top of Vite for hot module reloading (HMR) and
            setup for extension development.
          </Paragraph>
          <Paragraph>
            The main difference with extensions is that they run in different
            contexts than regular webpages such as popups and background
            scripts, and access browser APIs that regular websites cannot use,
            one of those APIs is the Bookmarks API (
            <code
              style={{ fontFamily: "inherit" }}
              className="bg-zinc-200/70 py-0.5 px-1 text-blue-800 rounded text-sm"
            >
              chrome.bookmarks
            </code>
            ), I use this API to read, search, and manage user bookmarks, I also
            use an extension-specific storage API, it&apos;s similar to web
            storage API{" "}
            <code
              style={{ fontFamily: "inherit" }}
              className="bg-zinc-200/70 py-0.5 px-1 text-blue-800 rounded text-sm"
            >
              localStorage
            </code>
            , except that it can get unlimited storage quota by requesting the{" "}
            <code
              style={{ fontFamily: "inherit" }}
              className="bg-zinc-200/70 py-0.5 px-1 text-blue-800 rounded text-sm"
            >
              &quot;unlimitedStorage&quot;
            </code>{" "}
            permission.
          </Paragraph>
          <HeadingTwo>Drop and Drop</HeadingTwo>
          <video
            className="rounded-md mt-5 w-full aspect-[660/428]"
            src="/drag-and-drop.mp4"
            controls={true}
          />
          <Paragraph>
            The drag and drop UI was the most complex part in this project, bugs
            kept popping out of nowhere, I suddenly found myself dealing with
            collision detection algorithms, pointer events, layout shifts,
            scrollable containers, and a nightmare of{" "}
            <code
              style={{ fontFamily: "inherit" }}
              className="bg-zinc-200/70 py-0.5 px-1 text-blue-800 rounded text-sm"
            >
              useRef
            </code>
            s to track all UI changes that could affect the drag and drop
            behavior. All that effort just to allow users to move something from
            point A to B.
          </Paragraph>
          <video
            className="rounded-md mt-5 w-full aspect-[660/428]"
            src="/scrollable-container.mp4"
            controls={true}
          />
          <Paragraph>
            One of the trickiest parts about this drag and drop UI is handling
            user scroll. I&apos;ve ran into so many edge cases, like the user
            scrolling down and then dragging and an item upward, or moving from
            a non-scrollable to a scrollable container, absolutely positioned
            element being removed from the normal document flow, and so on. I
            tried to be as defensive as possible with this, though I can&apos;t
            really guarantee that some silly weird bug isn&apos;t hiding behind
            an edge case I didn&apos;t consider.
          </Paragraph>
          <div className="bg-yellow-400/40 py-3 px-5 2 sm:px-5t-5 rounded-sm flex items-start gap-2 sm:gap-5">
            <Lightbulb size={20} className="shrink-0 min-h-lh" />
            <p className="text-sm sm:text-base">
              After around two months of daily usages, I came across two bugs
              regarding the functionality, the first one is a breeze to fix,
              it&apos;s related to{" "}
              <code
                style={{ fontFamily: "inherit" }}
                className="bg-zinc-200/70 py-0.5 px-1 text-zinc-800 rounded text-sm"
              >
                position: absolute;
              </code>{" "}
              removing the dragged element from the normal document flow, but
              the second one is something I haven&apos;t figured out its cause
              yet, I&apos;ll give this a deeper inspection when I&apos;m free.
            </p>
          </div>
          <Paragraph>
            Believe it or not, I didn&apos;t use a library for this, I
            hand-crafted the feature, the library that would best suit this
            feature is{" "}
            <a
              className="underline underline-offset-2"
              href="https://dndkit.com/"
            >
              dndkit
            </a>
            , dndkit is an awesome tool, it doesn&apos;t use the infamously
            inconsistent HTML5 drag-and-drop API, it builds its own one based on
            pointer events, handles collision detection, sorting, motion
            restriction, it supports Mouse, Touch, and Keyboard drop and drop.
          </Paragraph>
          <HeadingThee>The Problem with Dndkit</HeadingThee>
          <Paragraph>
            However, this powerful API makes the ease of use of the library
            challenging, which is exactly why I couldn&apos;t incorporate it in
            my project. After reading almost the entire docs, experimenting with
            the library capabilities, I concluded that the only way for me to
            make use of dndkit is to head to the github repo and read the
            underlaying library code to understand how I could embrace it to
            build such complex feature, which I believe is much more work than
            crafting the UI by hands.
          </Paragraph>

          <HeadingTwo>The Dialog Element</HeadingTwo>
          <video
            className="rounded-md mt-5 w-full aspect-[660/428]"
            src="/dialogs.mp4"
            controls={true}
          />
          <Paragraph>
            My extension is full of floating UIs (the background image carousel,
            edit bookmark dialog, search), despite that, I don&apos;t use any of
            Shadcn floating components (context menu, dilaog, etc), I use the
            native html{" "}
            <code
              style={{ fontFamily: "inherit" }}
              className="bg-zinc-200/70 py-0.5 px-1 text-blue-800 rounded text-sm"
            >
              dialog
            </code>{" "}
            element instead, I learned about this element just recently and
            wanted to experiment with it, and you trust me,you really want to
            give it a try.
          </Paragraph>
          <Paragraph>
            The{" "}
            <code
              style={{ fontFamily: "inherit" }}
              className="bg-zinc-200/70 py-0.5 px-1 text-blue-800 rounded text-sm"
            >
              dialog
            </code>{" "}
            element manages focus trapping, provides you with a backdrop,
            handles both the Escape key and light dismiss, and supports form
            dialog, moreover,{" "}
            <a
              className="underline underline-offset-2"
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#browser_compatibility"
            >
              its baseline state on MDN
            </a>{" "}
            says that it&apos;s widely available across major browsers.
          </Paragraph>
          <Image
            className="rounded-lg max-w-[700px] mt-5 w-full"
            src="/dialog-baseline-state.png"
            width="1273"
            height="773"
            alt="dialog"
          />
          <Paragraph>
            Despite all of these advantages, UI libraries like ShadcnUI and
            RadixUI choose to throw away this built-in, vendor-tested solution
            that browsers offer for free, and create their own diloag using{" "}
            <code
              style={{ fontFamily: "inherit" }}
              className="bg-zinc-200/70 py-0.5 px-1 text-blue-800 rounded text-sm"
            >
              div role=&quot;dialog&quot;
            </code>
            , you can already guess how much Javascript you&apos;ll need to ship
            to the user in order to make a meaningless{" "}
            <code
              style={{ fontFamily: "inherit" }}
              className="bg-zinc-200/70 py-0.5 px-1 text-blue-800 rounded text-sm"
            >
              div
            </code>{" "}
            act like a{" "}
            <code
              style={{ fontFamily: "inherit" }}
              className="bg-zinc-200/70 py-0.5 px-1 text-blue-800 rounded text-sm"
            >
              dialog
            </code>
            , and guess what? it doesn&apos;t always get to fully behave like a
            true dialog.
          </Paragraph>
          <Paragraph>
            Here&apos;s something that JavaScript dialogs can&apos;t do, the
            html dialog element can be closed using swipe gestures and back
            button on mobile devices. I had an aha moment when I first learned
            about this, this addition makes web dialogs more standardized and in
            line with native mobile apps, unifying the user experience across
            different platforms.
          </Paragraph>

          <Paragraph>
            Imagine you open a dialog on your mobile browser, then you pressed
            the back button, what do you expect to happen? Do you expect the
            dialog to close or the page to navigate back to the previous URL?
          </Paragraph>
          <Paragraph>
            I would personally wait for a dialog close because that&apos;s the
            experience I get everywhere else on my mobile device, for example,
            if I try to delete a message on WhatsApp or Telegram, I&apos;ll get
            a confirmation dialog that can be closed with a back move.
          </Paragraph>
          <Paragraph>
            However, if you&apos;re on the wide, messy web, you can&apos;t tell
            what&apos;s going to happen when you move back unless you actually
            try to. It depends on whether the website uses the native element or
            implements its custom dialog solution.
          </Paragraph>
          <HeadingTwo>Extension Current State</HeadingTwo>
          <Paragraph>
            Bookmarks Tab is currently in its early stage, I&apos;ve tried to
            implement as many key features as possible, though it still lacks a
            few things, such as changing folder colors, adding user settings,
            integrating Google Search, and supporting keyboard navigation.
          </Paragraph>
          <Paragraph>
            I&apos;ll do my best to add these features as soon as possible,
            since I use this extension myself, but I&apos;m quite busy these
            days, so I can&apos;t promise they&apos;ll be implemented quickly.
          </Paragraph>
        </main>
      </div>
      <div className="mt-50"></div>
    </div>
  );
}
