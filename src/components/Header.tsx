import HomePageLanding from "./HomePageLanding";

export default function Header() {
  return (
    <div className="relative">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width={622}
        height={319}
        fill="none"
        viewBox="0 0 622 319"
        className="h-auto"
        data--h-bstatus="0OBSERVED"
        style={{ width: "100%", position: "absolute", inset: 0 }}
      >
        <g clipPath="url(#clip0_359_1453)" data--h-bstatus="0OBSERVED">
          <g filter="url(#filter0_i_359_1453)" data--h-bstatus="0OBSERVED">
            <path
              fill="#F8F8F8"
              d="M245.559 146.249c9.49-1.097 18.358 3.212 23.526 10.486 3.964-6.087 10.509-10.43 18.289-11.329 12.357-1.429 23.66 6.309 27.111 17.823 13.829-1.544 26.314 8.383 27.914 22.218a25.17 25.17 0 0 1-3.739 16.4 25.16 25.16 0 0 1 7.38 15.112c1.6 13.834-8.29 26.347-22.105 28-.733 11.997-9.972 22.11-22.329 23.539-7.78.899-15.142-1.835-20.39-6.857-3.372 8.261-11.023 14.481-20.513 15.578-8.436.975-16.381-2.322-21.672-8.176a25.19 25.19 0 0 1-16.205 8.564c-12.356 1.428-23.66-6.31-27.112-17.823-13.827 1.541-26.31-8.385-27.909-22.218a25.17 25.17 0 0 1 3.736-16.398 25.17 25.17 0 0 1-7.381-15.114c-1.6-13.834 8.29-26.347 22.104-28.001.733-11.998 9.974-22.111 22.331-23.539a25.2 25.2 0 0 1 17.73 4.639c3.816-6.907 10.799-11.929 19.234-12.904"
              data--h-bstatus="0OBSERVED"
            />
          </g>
          <g filter="url(#filter1_i_359_1453)" data--h-bstatus="0OBSERVED">
            <circle
              cx="201.931"
              cy="293.495"
              r="9.417"
              fill="#F8F8F8"
              transform="rotate(-6.595 201.931 293.495)"
              data--h-bstatus="0OBSERVED"
            />
          </g>
          <g filter="url(#filter2_i_359_1453)" data--h-bstatus="0OBSERVED">
            <circle
              cx="184.93"
              cy="314.008"
              r="4.913"
              fill="#F8F8F8"
              transform="rotate(-6.595 184.93 314.008)"
              data--h-bstatus="0OBSERVED"
            />
          </g>
          <g filter="url(#filter4_i_359_1453)" data--h-bstatus="0OBSERVED">
            <path
              fill="#F8F8F8"
              d="M14.896 133.161c4.09 9.715 8.508 20.268 10.663 25.567.817 2.007.064 4.171-1.78 5.308l-11.055 6.815a4.914 4.914 0 0 0-1.143 7.392l7.762 8.998a4.914 4.914 0 0 1 .01 6.407L1.33 214.675c-3.036 3.542.11 8.924 4.687 8.017l25.49-5.055a4.914 4.914 0 0 1 5.706 3.56l3.91 14.74c.897 3.376 4.93 4.765 7.715 2.657l11.864-8.979a4.914 4.914 0 0 1 5.979.037l14.674 11.395c2.88 2.236 7.106.667 7.83-2.906l3.373-16.668a4.913 4.913 0 0 1 6.234-3.73l16.686 5.028c4.468 1.346 8.12-3.709 5.439-7.528l-14.584-20.776a4.913 4.913 0 0 1 .896-6.614l16.079-13.25c2.858-2.355 2.183-6.903-1.234-8.327l-12.92-5.384a4.91 4.91 0 0 1-2.878-5.719l5.328-21.472c1.13-4.551-4.15-7.947-7.823-5.032l-19.59 15.547c-2.559 2.031-6.35 1.045-7.596-1.974l-6.553-15.882c-1.48-3.586-6.337-4.124-8.565-.948l-9.606 13.693a4.913 4.913 0 0 1-6.476 1.434l-23.507-13.552c-4.082-2.353-8.82 1.832-6.993 6.174"
              data--h-bstatus="0OBSERVED"
            />
          </g>
          <g filter="url(#filter5_i_359_1453)" data--h-bstatus="0OBSERVED">
            <path
              fill="#F8F8F8"
              d="M367.27 21.417c-2.317-9.36 10.658-14.171 15.564-5.87 2.973 5.03 10.083 5.68 13.821 1.188l4.123-4.955c8.221-9.88 24.263-3.102 22.91 9.68l-.678 6.41c-.615 5.811 4.807 10.455 10.487 9.08 9.371-2.268 14.965 10.389 6.64 15.252-5.132 2.998-5.591 10.24-.88 13.862l5.654 4.347c10.746 8.261 3.5 25.412-9.914 23.466l-7.058-1.023c-5.881-.853-10.753 4.524-9.325 10.293 2.316 9.359-10.658 14.171-15.565 5.871-2.973-5.031-10.083-5.681-13.821-1.189l-4.123 4.954c-8.221 9.88-24.263 3.102-22.91-9.679l.678-6.41c.615-5.812-4.807-10.456-10.487-9.08-9.371 2.267-14.965-10.39-6.64-15.253 5.132-2.998 5.591-10.239.88-13.861l-5.654-4.347c-10.746-8.262-3.5-25.412 9.914-23.467l7.058 1.024c5.881.853 10.753-4.524 9.326-10.293"
              data--h-bstatus="0OBSERVED"
            />
          </g>
          <g filter="url(#filter6_i_359_1453)" data--h-bstatus="0OBSERVED">
            <path
              fill="#F8F8F8"
              d="M216.154 23.607c6.663-4.711 15.869-3.23 20.717 3.333a15 15 0 0 0 9.525 5.869c8.042 1.38 13.504 8.937 12.292 17.006a15 15 0 0 0 2.585 10.885c4.711 6.662 3.23 15.868-3.333 20.717a15 15 0 0 0-5.869 9.524c-1.38 8.042-8.937 13.505-17.006 12.292a15 15 0 0 0-10.885 2.585c-6.662 4.711-15.869 3.23-20.717-3.333a15 15 0 0 0-9.525-5.869c-8.042-1.38-13.504-8.937-12.292-17.006a15 15 0 0 0-2.585-10.885c-4.711-6.662-3.229-15.868 3.334-20.716a15 15 0 0 0 5.869-9.525c1.379-8.042 8.937-13.505 17.006-12.292a15 15 0 0 0 10.884-2.585"
              data--h-bstatus="0OBSERVED"
            />
          </g>
          <g filter="url(#filter7_i_359_1453)" data--h-bstatus="0OBSERVED">
            <path
              fill="#F8F8F8"
              d="M553.224 118.392c42.396 5.809 72.841 39.158 68 74.488-1.536 11.212-6.442 21.277-13.78 29.607-6.141 6.973-8.217 17.404-2.728 24.901l1.828 2.496a6.7 6.7 0 0 1 1.082 2.304c1.427 5.683-4.672 10.293-9.75 7.368l-20.817-11.989a16.37 16.37 0 0 0-9.304-2.147l-2.455.17c-9.352 1.811-19.359 2.146-29.605.742-42.395-5.809-72.839-39.158-67.999-74.487 4.841-35.33 43.133-59.261 85.528-53.453"
              data--h-bstatus="0OBSERVED"
            />
          </g>
          <g filter="url(#filter8_i_359_1453)" data--h-bstatus="0OBSERVED">
            <path
              fill="#F8F8F8"
              d="M425.22 236.654c18.25-3.283 35.706 8.851 38.989 27.101s-8.851 35.706-27.101 38.988l-29.079 5.231a33.42 33.42 0 0 1-19.555-2.351 7.9 7.9 0 0 1-1.279 1.919 19.72 19.72 0 0 1-11.137 6.181l-1.753.316c-1.918.344-3.473-1.545-2.766-3.361l.617-1.58a13.1 13.1 0 0 0 .688-7.078l-3.804-21.147h.001c-3.283-18.25 8.85-35.706 27.1-38.989z"
              data--h-bstatus="0OBSERVED"
            />
          </g>
        </g>
        <defs data--h-bstatus="0OBSERVED">
          <filter
            id="filter0_i_359_1453"
            width="182.221"
            height="132.541"
            x="163.99"
            y="145.236"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            data--h-bstatus="0OBSERVED"
          >
            <feFlood
              floodOpacity={0}
              result="BackgroundImageFix"
              data--h-bstatus="0OBSERVED"
            />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
              data--h-bstatus="0OBSERVED"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              data--h-bstatus="0OBSERVED"
            />
            <feOffset data--h-bstatus="0OBSERVED" />
            <feGaussianBlur stdDeviation="6.551" data--h-bstatus="0OBSERVED" />
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
              data--h-bstatus="0OBSERVED"
            />
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              data--h-bstatus="0OBSERVED"
            />
            <feBlend
              in2="shape"
              result="effect1_innerShadow_359_1453"
              data--h-bstatus="0OBSERVED"
            />
          </filter>
          <filter
            id="filter1_i_359_1453"
            width="18.838"
            height="18.837"
            x="192.512"
            y="284.076"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            data--h-bstatus="0OBSERVED"
          >
            <feFlood
              floodOpacity={0}
              result="BackgroundImageFix"
              data--h-bstatus="0OBSERVED"
            />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
              data--h-bstatus="0OBSERVED"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              data--h-bstatus="0OBSERVED"
            />
            <feOffset data--h-bstatus="0OBSERVED" />
            <feGaussianBlur stdDeviation="6.551" data--h-bstatus="0OBSERVED" />
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
              data--h-bstatus="0OBSERVED"
            />
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              data--h-bstatus="0OBSERVED"
            />
            <feBlend
              in2="shape"
              result="effect1_innerShadow_359_1453"
              data--h-bstatus="0OBSERVED"
            />
          </filter>
          <filter
            id="filter2_i_359_1453"
            width="9.828"
            height="9.828"
            x="180.016"
            y="309.095"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            data--h-bstatus="0OBSERVED"
          >
            <feFlood
              floodOpacity={0}
              result="BackgroundImageFix"
              data--h-bstatus="0OBSERVED"
            />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
              data--h-bstatus="0OBSERVED"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              data--h-bstatus="0OBSERVED"
            />
            <feOffset data--h-bstatus="0OBSERVED" />
            <feGaussianBlur stdDeviation="6.551" data--h-bstatus="0OBSERVED" />
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
              data--h-bstatus="0OBSERVED"
            />
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              data--h-bstatus="0OBSERVED"
            />
            <feBlend
              in2="shape"
              result="effect1_innerShadow_359_1453"
              data--h-bstatus="0OBSERVED"
            />
          </filter>
          <filter
            id="filter3_i_359_1453"
            width="16.381"
            height="17.199"
            x="281.443"
            y="219.526"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            data--h-bstatus="0OBSERVED"
          >
            <feFlood
              floodOpacity={0}
              result="BackgroundImageFix"
              data--h-bstatus="0OBSERVED"
            />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
              data--h-bstatus="0OBSERVED"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              data--h-bstatus="0OBSERVED"
            />
            <feOffset dy="-0.819" data--h-bstatus="0OBSERVED" />
            <feGaussianBlur stdDeviation="0.409" data--h-bstatus="0OBSERVED" />
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
              data--h-bstatus="0OBSERVED"
            />
            <feColorMatrix
              values="0 0 0 0 1 0 0 0 0 0.745098 0 0 0 0 0.145098 0 0 0 0.12 0"
              data--h-bstatus="0OBSERVED"
            />
            <feBlend
              in2="shape"
              result="effect1_innerShadow_359_1453"
              data--h-bstatus="0OBSERVED"
            />
          </filter>
          <filter
            id="filter4_i_359_1453"
            width="124.969"
            height="118.764"
            x="0.131"
            y="123.319"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            data--h-bstatus="0OBSERVED"
          >
            <feFlood
              floodOpacity={0}
              result="BackgroundImageFix"
              data--h-bstatus="0OBSERVED"
            />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
              data--h-bstatus="0OBSERVED"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              data--h-bstatus="0OBSERVED"
            />
            <feOffset data--h-bstatus="0OBSERVED" />
            <feGaussianBlur stdDeviation="6.551" data--h-bstatus="0OBSERVED" />
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
              data--h-bstatus="0OBSERVED"
            />
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              data--h-bstatus="0OBSERVED"
            />
            <feBlend
              in2="shape"
              result="effect1_innerShadow_359_1453"
              data--h-bstatus="0OBSERVED"
            />
          </filter>
          <filter
            id="filter5_i_359_1453"
            width="114.312"
            height="110.447"
            x="335.785"
            y="7.058"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            data--h-bstatus="0OBSERVED"
          >
            <feFlood
              floodOpacity={0}
              result="BackgroundImageFix"
              data--h-bstatus="0OBSERVED"
            />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
              data--h-bstatus="0OBSERVED"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              data--h-bstatus="0OBSERVED"
            />
            <feOffset data--h-bstatus="0OBSERVED" />
            <feGaussianBlur stdDeviation="6.551" data--h-bstatus="0OBSERVED" />
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
              data--h-bstatus="0OBSERVED"
            />
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              data--h-bstatus="0OBSERVED"
            />
            <feBlend
              in2="shape"
              result="effect1_innerShadow_359_1453"
              data--h-bstatus="0OBSERVED"
            />
          </filter>
          <filter
            id="filter6_i_359_1453"
            width="87.717"
            height="87.716"
            x="176.309"
            y="20.855"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            data--h-bstatus="0OBSERVED"
          >
            <feFlood
              floodOpacity={0}
              result="BackgroundImageFix"
              data--h-bstatus="0OBSERVED"
            />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
              data--h-bstatus="0OBSERVED"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              data--h-bstatus="0OBSERVED"
            />
            <feOffset data--h-bstatus="0OBSERVED" />
            <feGaussianBlur stdDeviation="6.551" data--h-bstatus="0OBSERVED" />
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
              data--h-bstatus="0OBSERVED"
            />
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              data--h-bstatus="0OBSERVED"
            />
            <feBlend
              in2="shape"
              result="effect1_innerShadow_359_1453"
              data--h-bstatus="0OBSERVED"
            />
          </filter>
          <filter
            id="filter7_i_359_1453"
            width="154.539"
            height="142.938"
            x="467.191"
            y="117.523"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            data--h-bstatus="0OBSERVED"
          >
            <feFlood
              floodOpacity={0}
              result="BackgroundImageFix"
              data--h-bstatus="0OBSERVED"
            />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
              data--h-bstatus="0OBSERVED"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              data--h-bstatus="0OBSERVED"
            />
            <feOffset data--h-bstatus="0OBSERVED" />
            <feGaussianBlur stdDeviation="6.551" data--h-bstatus="0OBSERVED" />
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
              data--h-bstatus="0OBSERVED"
            />
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              data--h-bstatus="0OBSERVED"
            />
            <feBlend
              in2="shape"
              result="effect1_innerShadow_359_1453"
              data--h-bstatus="0OBSERVED"
            />
          </filter>
          <filter
            id="filter8_i_359_1453"
            width="96.24"
            height="77.962"
            x="368.504"
            y="236.118"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            data--h-bstatus="0OBSERVED"
          >
            <feFlood
              floodOpacity={0}
              result="BackgroundImageFix"
              data--h-bstatus="0OBSERVED"
            />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
              data--h-bstatus="0OBSERVED"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              data--h-bstatus="0OBSERVED"
            />
            <feOffset data--h-bstatus="0OBSERVED" />
            <feGaussianBlur stdDeviation="6.551" data--h-bstatus="0OBSERVED" />
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
              data--h-bstatus="0OBSERVED"
            />
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              data--h-bstatus="0OBSERVED"
            />
            <feBlend
              in2="shape"
              result="effect1_innerShadow_359_1453"
              data--h-bstatus="0OBSERVED"
            />
          </filter>
          <clipPath id="clip0_359_1453" data--h-bstatus="0OBSERVED">
            <path fill="#fff" d="M0 0h622v319H0z" data--h-bstatus="0OBSERVED" />
          </clipPath>
        </defs>
      </svg> */}

      <div className="relative pt-7.5">
        <div className="w-fit mx-auto text-center px-5">
          {/* <h1 className="text-4xl font-medium">I'm Ibrahim</h1> */}
          <h1 className="text-[3rem] leading-18 max-w-3xl mx-auto font-semibold text-center">
            Ibrahim Harchiche
          </h1>
        </div>
        <div className="text-zinc-600 px-10  max-w-prose mx-auto mt-1.5 text-center">
          {" "}
          <p className="">
            I’m a self-taught front-end developer, based in Morocco, I enjoy
            building pixel-perfect web experiences. Throughout the last two
            years, I’ve been honing my front-end development skills and building
            a strong foundation in web technologies. I use React, Next.js,
            Typescript, and Tailwind as my core development stack.
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
            contribute to impactful projects, help a company acheive their
            goals, and take on new challenges.
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
        </div>{" "}
      </div>
    </div>
  );
}
