import { useOutletContext } from "react-router-dom";
import HomePageLanding from "./HomePageLanding";
import Projects from "./Projects";
/* eslint-disable */
export default function Homepage({}) {
  const { isDark } = useOutletContext();
  return (
    <div className="home-page" id="sdfs">
      <HomePageLanding />
      <div className="introduction">
        {/* <h1>I'm Ibrahim Hursheesh</h1>
        <p>I try to make the web a better place to spend your day at..</p> */}
        <h1 className="text-[3.5rem] leading-18 max-w-3xl mx-auto font-bold text-center pt-28">
          Turning your expertise into revenue just got asier
        </h1>
        <p className="text-zinc-600 lg:text-lg max-w-prose mt-1">
          Our courses don't just tell you to copy and paste code. We focus on
          the why behind the code, showing you how to build apps like a seasoned
          developer.
        </p>
      </div>
      <div className="home-page-content">
        <h2>Brief Background</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="305"
          height="10"
          viewBox="0 0 305 10"
        >
          <path
            stroke="#fca100"
            d="M 5 7 Q 55 1 100 5 Q 130 8 160 5 Q 180 3 200 5 Q 245 10 270 8 Q 280 7 300 5"
            fill="none"
            strokeWidth="3px"
            strokeLinecap="round"
          ></path>
        </svg>
        <div className="description">
          <p>
            I'm a self-taught web developer from Morocco. In March 2023, I
            dropped out of school at the age of 18 to shift to web development
            since my major did not seem very promising. it was not an easy,
            risk-free decision to make, but …. It's been over two years since
            then, and during this time, I've been honing my web development
            skills from scratch? — starting from writing my first HTML tag to
            crafting modern web experiences using the React ecosystem..
          </p>
          <p>
            I'm a self-taught web developer from Morocco. In March 2023, I
            dropped out of school at the age of 18 to shift to web development
            since my major did not seem very promising. it was not an easy,
            risk-free decision to make, but …. It's been over two years since
            then, and during this time, I've been honing my web development
            skills from scratch? — starting from writing my first HTML tag to
            crafting modern web experiences using the React ecosystem..
          </p>
          <p></p>
        </div>
        {/* <div className="skill-set">
          <h2>Skillset</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="154"
            height="10"
            viewBox="0 0 154 10"
          >
            <path
              stroke="#fca100"
              d="M 5 7 Q 55 0 100 4 Q 130 9 150 5"
              fill="none"
              strokeWidth="3px"
              strokeLinecap="round"
            ></path>
          </svg>
         
          <blockquote>
            "Every skill you acquire doubles your odds of success. "
          </blockquote>

          <ul>
            <li>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14Z"
                    stroke={isDark ? "#ffffff" : "#0d0f12"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M20 6C21.1046 6 22 5.10457 22 4C22 2.89543 21.1046 2 20 2C18.8954 2 18 2.89543 18 4C18 5.10457 18.8954 6 20 6Z"
                    stroke={isDark ? "#ffffff" : "#0d0f12"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M20 22C21.1046 22 22 21.1046 22 20C22 18.8954 21.1046 18 20 18C18.8954 18 18 18.8954 18 20C18 21.1046 18.8954 22 20 22Z"
                    stroke={isDark ? "#ffffff" : "#0d0f12"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z"
                    stroke={isDark ? "#ffffff" : "#0d0f12"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M6 12H18"
                    stroke={isDark ? "#ffffff" : "#0d0f12"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M18 4H14C12 4 11 5 11 7V17C11 19 12 20 14 20H18"
                    stroke={isDark ? "#ffffff" : "#0d0f12"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <div>Data Structures</div>
            </li>

            <li>
              <svg
                fill={isDark ? "#ffffff" : "#0d0f12"}
                height="200px"
                width="200px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 508.116 508.116"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M42.4,154.333c-23.3,0-42.4,19-42.4,42.3v30.3c0,23.3,19,42.3,42.3,42.3s42.4-18.9,42.4-42.3v-30.3 C84.7,173.333,65.7,154.333,42.4,154.333z M56.5,226.932c0,7.8-6.3,14.1-14.1,14.1c-7.8,0-14.1-6.3-14.1-14.1v-30.3 c0-7.8,6.3-14.1,14.1-14.1c7.8,0,14.1,6.3,14.1,14.1V226.932z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M98.8,0.132c-23.3,0-42.3,19-42.3,42.3v30.3c0,23.4,18.9,42.3,42.3,42.3c23.3,0,42.3-19,42.3-42.3v-30.3 C141.1,19.132,122.1,0.132,98.8,0.132z M112.9,72.732c0,7.8-6.3,14.1-14.1,14.1s-14.1-6.3-14.1-14.1v-30.3 c0-7.8,6.3-14.1,14.1-14.1s14.1,6.3,14.1,14.1V72.732z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M14.1,0.132c-7.8,0-14.1,6.3-14.1,14.1v86.7c0,7.8,6.3,14.1,14.1,14.1c7.8,0,14.1-6.3,14.1-14.1v-86.7 C28.2,6.432,21.9,0.132,14.1,0.132z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M268.1,0.132c-23.3,0-42.3,19-42.3,42.3v30.3c0,23.4,19,42.3,42.3,42.3c23.3,0,42.3-19,42.3-42.3v-30.3 C310.4,19.132,291.4,0.132,268.1,0.132z M282.2,72.732c0,7.8-6.3,14.1-14.1,14.1s-14.1-6.3-14.1-14.1v-30.3 c0-7.8,6.3-14.1,14.1-14.1c7.8,0,14.1,6.3,14.1,14.1V72.732z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M183.5,0.132c-7.8,0-14.1,6.3-14.1,14.1v86.7c-0.1,7.8,6.3,14.1,14.1,14.1s14.1-6.3,14.1-14.1v-86.7 C197.6,6.432,191.3,0.132,183.5,0.132z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M437.4,0.132c-23.3,0-42.3,19-42.3,42.3v30.3c0,23.4,19,42.3,42.3,42.3s42.3-19,42.3-42.3v-30.3 C479.7,19.132,460.7,0.132,437.4,0.132z M451.5,72.732c0,7.8-6.3,14.1-14.1,14.1c-7.8,0-14.1-6.3-14.1-14.1v-30.3 c0-7.8,6.3-14.1,14.1-14.1c7.8,0,14.1,6.3,14.1,14.1V72.732z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M352.8,0.132c-7.8,0-14.1,6.3-14.1,14.1v86.7c0,7.8,6.3,14.1,14.1,14.1s14.1-6.3,14.1-14.1v-86.7 C366.9,6.432,360.6,0.132,352.8,0.132z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M98.8,304.532c-23.3,0-42.3,19-42.3,42.3v30.3c0,23.3,19,42.3,42.3,42.3c23.3,0,42.3-19,42.3-42.3v-30.3 C141.1,323.532,122.1,304.532,98.8,304.532z M112.9,377.132c0,7.8-6.3,14.1-14.1,14.1s-14.1-6.3-14.1-14.1v-30.3 c0-7.8,6.3-14.1,14.1-14.1s14.1,6.3,14.1,14.1V377.132z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M14.1,304.532c-7.8,0-14.1,6.3-14.1,14.1v86.7c0,7.8,6.3,14.1,14.1,14.1c7.8,0,14.1-6.3,14.1-14.1v-86.7 C28.2,310.832,21.9,304.532,14.1,304.532z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M432.8,269.132C433.2,269.232,433.5,269.232,432.8,269.132L432.8,269.132z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M495.7,435.632l-28.7-28.4c7.9-7.7,12.8-18.4,12.8-30.1v-30.3c-1.2-21.3-15.7-43.2-46.1-42.1c1.3-11.7,0.9-23.6-0.9-35.6 c-0.4,0-0.8-0.1,0-0.1c23.3,0,47-13.4,47-42.2v-30.3c0-23.3-19-42.3-42.3-42.3c-21.5,0-39.4,16.2-42,37 c-26.4-28.4-64-46.2-105.7-46.2c-36.6,0-69.9,13.7-95.4,36.2c-6.2-15.8-21.5-27-39.4-27c-23.3,0-42.3,19-42.3,42.3v30.3 c0,20.6,14.7,37.7,34.2,41.5c-1,7-1.8,14.1-1.8,21.4c0,79.8,64.9,144.7,144.7,144.7c24.5,0,47.6-6.2,67.9-17l78.1,78.1 c15.5,16.3,44,16.9,59.9,0C512.8,478.532,511.7,451.632,495.7,435.632z M437.4,332.732c7.8,0,14.1,6.3,14.1,14.1v30.3 c0,4-1.7,7.6-4.4,10.2l-23.8-23.8v-16.7C424.5,338.332,429,333.432,437.4,332.732z M423.3,196.632c0-7.8,6.3-14.1,14.1-14.1 c7.8,0,14.1,6.3,14.1,14.1v30.3c0,7.8-6.3,14.1-14.1,14.1c-7.8,0-14.1-6.3-14.1-14.1V196.632z M169.1,210.132 c-6.3,9.6-11.4,19.9-15.3,30.8h-0.1c-7.2-0.7-12.8-6.7-12.8-14v-30.3c0-7.8,6.3-14.1,14.1-14.1s14.1,6.3,14.1,14.1V210.132z M289.8,406.332c-64.3,0-116.5-52.1-116.5-116.5c0-64.3,52.1-116.5,116.5-116.5s116.5,52.1,116.5,116.5 C406.2,354.232,354.1,406.332,289.8,406.332z M475.6,475.732c-5.3,5.3-14.6,5.3-19.9,0l-74.1-74.1c7.3-6,14-12.7,19.9-19.9 l74.1,74.1C480.7,461.232,481.4,470.032,475.6,475.732z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M289.8,211.432c-7.8,0-14.1,6.3-14.1,14.1v73.3c0,7.8,6.3,14.1,14.1,14.1s14.1-6.3,14.1-14.1v-73.3 C303.9,217.833,297.6,211.432,289.8,211.432z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M289.8,331.932c-7.8,0-14.1,6.3-14.1,14.1v8.2c0,7.8,6.3,14.1,14.1,14.1s14.1-6.3,14.1-14.1v-8.2 C303.9,338.232,297.6,331.932,289.8,331.932z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <div>Algorithms</div>
            </li>

            <li>
              <svg
                viewBox="0 0 256 256"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path
                      d="M 40 0 L 216 0 C 256 0 256 0 256 40 L 256 216 C 256 256 256 256 216 256 L 40 256 C 0 256 0 256 0 216 L 0 40 C 0 0 0 0 40 0 z"
                      fill={isDark ? "#ffffff" : "#0d0f12"}
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026"
                      fill={isDark ? "#0d0f12" : "hsl(227 68% 92% / 1)"}
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413"
                      fill={isDark ? "#0d0f12" : "hsl(227 68% 92% / 1)"}
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>
              </svg>

              <div>JavaScript</div>
            </li>

            <li>
              <svg
                fill={isDark ? "#ffffff" : "#0d0f12"}
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>React icon</title>
                  <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"></path>
                </g>
              </svg>
              <div>
                <div>
                  <a href="https://react.dev/">React</a>
                </div>
              </div>
            </li>

            <li>
              <svg
                fill={isDark ? "#ffffff" : "#0d0f12"}
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>React Router icon</title>
                  <path d="M12.118 5.466a2.306 2.306 0 00-.623.08c-.278.067-.702.332-.953.583-.41.423-.49.609-.662 1.469-.08.423.41 1.43.847 1.734.45.317 1.085.502 2.065.608 1.429.16 1.84.636 1.84 2.197 0 1.377-.385 1.747-1.96 1.906-1.707.172-2.58.834-2.765 2.117-.106.781.41 1.76 1.125 2.091 1.627.768 3.15-.198 3.467-2.196.211-1.284.622-1.642 1.998-1.747 1.588-.133 2.409-.675 2.713-1.787.278-1.02-.304-2.157-1.297-2.554-.264-.106-.873-.238-1.35-.291-1.495-.16-1.879-.424-2.038-1.39-.225-1.337-.317-1.562-.794-2.09a2.174 2.174 0 00-1.613-.73zm-4.785 4.36a2.145 2.145 0 00-.497.048c-1.469.318-2.17 2.051-1.35 3.295 1.178 1.774 3.944.953 3.97-1.177.012-1.193-.98-2.143-2.123-2.166zM2.089 14.19a2.22 2.22 0 00-.427.052c-2.158.476-2.237 3.626-.106 4.182.53.145.582.145 1.111.013 1.191-.318 1.866-1.456 1.549-2.607-.278-1.02-1.144-1.664-2.127-1.64zm19.824.008c-.233.002-.477.058-.784.162-1.39.477-1.866 2.092-.98 3.336.557.794 1.96 1.058 2.82.516 1.416-.874 1.363-3.057-.093-3.746-.38-.186-.663-.271-.963-.268z"></path>
                </g>
              </svg>
              <div>
                <a href="https://reactrouter.com/">React Router</a>
              </div>
            </li>

            <li>
              <svg
                fill={isDark ? "#ffffff" : "#0d0f12"}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M22.177 22.005c1.161-0.099 2.057-1.12 2-2.339-0.063-1.219-1.063-2.197-2.276-2.197h-0.084c-1.255 0.041-2.239 1.099-2.197 2.359 0.041 0.641 0.301 1.156 0.661 1.536-1.401 2.719-3.495 4.715-6.677 6.396-2.135 1.115-4.391 1.537-6.588 1.235-1.839-0.255-3.276-1.077-4.156-2.396-1.319-2-1.439-4.151-0.339-6.312 0.801-1.557 2-2.699 2.796-3.256-0.197-0.52-0.437-1.395-0.557-2.057-5.916 4.235-5.312 10.032-3.515 12.767 1.339 2 4.072 3.276 7.067 3.276 0.803 0 1.641-0.057 2.459-0.261 5.199-1 9.131-4.115 11.385-8.708zM29.307 17.011c-3.093-3.636-7.651-5.636-12.843-5.636h-0.683c-0.333-0.735-1.115-1.197-1.995-1.197h-0.057c-1.26 0-2.24 1.083-2.199 2.339 0.043 1.197 1.057 2.197 2.276 2.197h0.1c0.9-0.041 1.677-0.599 2-1.401h0.739c3.079 0 5.991 0.901 8.652 2.657 2.031 1.337 3.495 3.099 4.312 5.197 0.719 1.713 0.677 3.396-0.063 4.797-1.135 2.192-3.057 3.353-5.588 3.353-1.599 0-3.156-0.5-3.959-0.859-0.479 0.396-1.281 1.057-1.86 1.459 1.761 0.796 3.537 1.255 5.256 1.255 3.896 0 6.792-2.193 7.891-4.312 1.197-2.396 1.099-6.433-1.959-9.891zM8.651 22.724c0.043 1.197 1.057 2.197 2.281 2.197h0.079c1.281-0.041 2.255-1.099 2.197-2.359 0-1.199-1.036-2.199-2.255-2.199h-0.084c-0.077 0-0.197 0-0.301 0.043-1.656-2.797-2.355-5.797-2.095-9.032 0.157-2.437 0.959-4.552 2.396-6.312 1.199-1.495 3.453-2.24 4.995-2.276 4.313-0.084 6.115 5.296 6.251 7.432l2 0.599c-0.464-6.552-4.536-9.989-8.432-9.989-3.656 0-7.032 2.656-8.391 6.552-1.855 5.199-0.636 10.188 1.64 14.188-0.197 0.255-0.317 0.719-0.281 1.156z"></path>{" "}
                </g>
              </svg>
              <div>
                <a href="https://redux.js.org/">Redux</a>
              </div>
            </li>

            <li>
              <svg
                fill={isDark ? "#ffffff" : "#0d0f12"}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
                  ></path>
                </g>
              </svg>
              <div>
                <a href="https://tailwindcss.com/">Tailwindcss</a>
              </div>
            </li>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <g id="Ð¡Ð»Ð¾Ð¹_1">
                  <path
                    fill="none"
                    stroke={isDark ? "#ffffff" : "#0d0f12"}
                    strokeMiterlimit="10"
                    strokeWidth="3"
                    d="M23.5,30.5v-24c0-1.9-2.3-2.7-3.4-1.2l-16,21c-1.3,1.7-0.1,4.2,2,4.2H23.5z"
                  ></path>
                  <path
                    fill="none"
                    stroke={isDark ? "#ffffff" : "#0d0f12"}
                    strokeMiterlimit="10"
                    strokeWidth="3"
                    d="M23.5,18.5v24c0,1.9,2.4,2.7,3.6,1.2l16.8-21c1.4-1.7,0.1-4.2-2.1-4.2H23.5z"
                  ></path>
                </g>
              </svg>
              <div>
                <a href="https://supabase.com/">Supabase</a>
              </div>
            </li>
          </ul>
        </div> */}
        <div className="projects-section">
          <h2>Projects</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="154"
            height="10"
            viewBox="0 0 154 10"
          >
            <path
              stroke="#fca100"
              d="M 5 7 Q 55 0 100 4 Q 130 9 150 5"
              fill="none"
              strokeWidth="3px"
              strokeLinecap="round"
            ></path>
          </svg>
          <div>
            <div className="bookmarks-tab">
              <img src="./bookmarks_tab1.png" alt="" />
              <div>
                <h3>Bookmarks Tab</h3>
                <p>
                  A chrome extension that takes your bookmarks and displays them
                  in a nice-looking, cosy interface on your browser new tab,
                  ficilitates access and navigation to your bookmarks, providing
                  you with a better browsing experience.
                </p>
                {/* <div className="links">
                  <a href="#sdfs">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      class="lucide lucide-chromium-icon lucide-chromium"
                    >
                      <path
                        d="M10.88 21.94 15.46 14"
                        
                      />
                      <path d="M21.17 8H12"  />
                      <path
                        d="M3.95 6.06 8.54 14"
                        
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="4"
                        
                      />
                    </svg>
                    <span>Install Extension</span>
                  </a>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      class="lucide lucide-notebook-text-icon lucide-notebook-text"
                    >
                      <path d="M2 6h4"  />
                      <path d="M2 10h4"  />
                      <path d="M2 14h4"  />
                      <path d="M2 18h4"  />
                      <rect
                        width="16"
                        height="20"
                        x="4"
                        y="2"
                        rx="2"
                        
                      />
                      <path d="M9.5 8h5"  />
                      <path d="M9.5 12H16"  />
                      <path d="M9.5 16H14"  />
                    </svg>
                    <span>Project Details</span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* <ol>
        <li>
          desc
          <ol>
            <li>self-taught</li>
            <li>free time</li>
          </ol>
        </li>
        <li>skills</li>
      </ol> */
