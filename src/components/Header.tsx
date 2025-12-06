export default function Header() {
  return (
    <header className="mt-25 w-fit mx-auto text-center px-5">
      {/* <h1 className="text-4xl font-medium">I'm Ibrahim</h1> */}
      <h1 className="text-[3.5rem] leading-18 max-w-3xl mx-auto font-bold text-center">
        Ibrahim Hursheesh
      </h1>
      <div className="text-zinc-600 lg:text-lg max-w-prose mt-1">
        {" "}
        <p className="">
          I’m a self-taught front-end developer, based in Morocco, I enjoy
          building pixel-perfect web experiences. Throughout the last two years,
          I’ve been honing my front-end development skills and building a strong
          foundation in web technologies. I use React, Next.js, Typescript, and
          Tailwind as my core development stack.
        </p>
        <p className="mt-4">
          I did some technical writing back in the past on{" "}
          <a
            className="underline underline-offset-4"
            href="https://eqraatech.com/author/ibrahimharchiche/"
          >
            eqraatech.com
          </a>
          , an arabic platform that aims to enrich technical content and
          encourage arabians to learn programming in their native language.
        </p>
        <p className="mt-4">
          I'm currently seeking a front-end developer role where I can
          contribute to impactful projects, help a company acheive their goals,
          and take on new challenges.
        </p>
        <p className="mt-4">
          You can contact me on{" "}
          <a
            className="underline underline-offset-4"
            href="https://www.linkedin.com/in/ibrahim-harchiche-415a51259/"
          >
            LinkedIn
          </a>{" "}
          or{" "}
          <a
            className="underline underline-offset-4"
            href="https://x.com/ibrahim_hrsh"
          >
            Twitter
          </a>
          {/* , I also do freelancing on{" "}
            <a
              className="underline underline-offset-4"
              href="https://www.upwork.com/freelancers/~014ce4d152e17b2b6a"
            >
              Upwork
            </a> */}
          .
        </p>
      </div>

      {/* <p
        className="text-gray-600 mt-2
        "
      >
        I build web interfaces that look good..
      </p> */}
    </header>
  );
}
