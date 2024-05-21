import type { SVGProps } from "react";

export function HouseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <g fill="currentColor">
        <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207L1.354 8.853a.5.5 0 1 1-.708-.707z"></path>
        <path d="m14 9.293l-6-6l-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5zm-6-.811c1.664-1.673 5.825 1.254 0 5.018c-5.825-3.764-1.664-6.691 0-5.018"></path>
      </g>
    </svg>
  );
}

export function PlaneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.13em"
      height="1em"
      viewBox="0 0 576 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64H365.7L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1h-56.2c-10.6 0-18.3-10.2-15.4-20.4l49-171.6H112l-43.2 57.6c-3 4-7.8 6.4-12.8 6.4H14c-7.8 0-14-6.3-14-14c0-1.3.2-2.6.5-3.9L32 256L.5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14h42c5 0 9.8 2.4 12.8 6.4L112 192h102.9l-49-171.6c-3-10.2 4.7-20.4 15.3-20.4h56.2c11.5 0 22.1 6.2 27.8 16.1L365.7 192z"
      ></path>
    </svg>
  );
}

export function ContactIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 2H4V0H3v2H1.5A1.5 1.5 0 0 0 0 3.5v8A1.5 1.5 0 0 0 1.5 13h12a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 13.5 2H12V0h-1zM3 6a2 2 0 1 1 4 0a2 2 0 0 1-4 0m-.618 4.618a2.927 2.927 0 0 1 5.236 0l.33.658A.5.5 0 0 1 7.5 12h-5a.5.5 0 0 1-.447-.724zM9 6h3V5H9zm0 3h3V8H9z"
        clipRule="evenodd"
      ></path>
      <path fill="#000000" d="M15 14v1H0v-1z"></path>
    </svg>
  );
}

export function SolarUserBold(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx={12} cy={6} r={4} fill="#000000"></circle>
      <path
        fill="#000000"
        d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"
      ></path>
    </svg>
  );
}

export function LineMdMoonLoop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="white" fillOpacity={0}>
        <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
          <animate
            id="lineMdMoonLoop0"
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.7s;lineMdMoonLoop0.begin+6s"
            dur="0.4s"
            values="0;1"
          ></animate>
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdMoonLoop0.begin+2.2s"
            dur="0.4s"
            values="1;0"
          ></animate>
        </path>
        <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdMoonLoop0.begin+3s"
            dur="0.4s"
            values="0;1"
          ></animate>
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdMoonLoop0.begin+5.2s"
            dur="0.4s"
            values="1;0"
          ></animate>
        </path>
        <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdMoonLoop0.begin+0.4s"
            dur="0.4s"
            values="0;1"
          ></animate>
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdMoonLoop0.begin+2.8s"
            dur="0.4s"
            values="1;0"
          ></animate>
        </path>
        <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdMoonLoop0.begin+3.4s"
            dur="0.4s"
            values="0;1"
          ></animate>
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdMoonLoop0.begin+5.6s"
            dur="0.4s"
            values="1;0"
          ></animate>
        </path>
      </g>
      <path
        fill="white"
        stroke="#000000"
        strokeDasharray={56}
        strokeDashoffset={56}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.6s"
          values="56;0"
        ></animate>
      </path>
    </svg>
  );
}

export function LineMdSunRisingFilledLoop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      color="#ffd700"
      {...props}
    >
      <circle cx={12} cy={32} r={6} fill="#334155">
        <animate
          fill="freeze"
          attributeName="cy"
          dur="0.6s"
          values="32;12"
        ></animate>
      </circle>
      <g
        fill="yellow"
        stroke="#000000"
        strokeDasharray={2}
        strokeDashoffset={2}
        strokeLinecap="round"
        strokeWidth={2}
      >
        <path d="M0 0">
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.7s"
            dur="0.2s"
            values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.7s"
            dur="0.2s"
            values="2;0"
          ></animate>
        </path>
        <path d="M0 0">
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.9s"
            dur="0.2s"
            values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.9s"
            dur="0.2s"
            values="2;0"
          ></animate>
        </path>
        <animateTransform
          attributeName="transform"
          dur="30s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        ></animateTransform>
      </g>
    </svg>
  );
}

export function LineMdBellLoop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="#334155" stroke="#334155" strokeLinecap="round" strokeWidth={2}>
        <g>
          <path strokeDasharray={4} strokeDashoffset={4} d="M12 3V5">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.2s"
              values="4;0"
            ></animate>
          </path>
          <path
            strokeDasharray={28}
            strokeDashoffset={28}
            d="M12 5C8.68629 5 6 7.68629 6 11L6 17C5 17 4 18 4 19H12M12 5C15.3137 5 18 7.68629 18 11L18 17C19 17 20 18 20 19H12"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.2s"
              dur="0.4s"
              values="28;0"
            ></animate>
          </path>
          <animateTransform
            attributeName="transform"
            begin="0.8s"
            dur="6s"
            keyTimes="0;0.05;0.15;0.2;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 12 3;3 12 3;-3 12 3;0 12 3;0 12 3"
          ></animateTransform>
        </g>
        <path
          strokeDasharray={8}
          strokeDashoffset={8}
          d="M10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s"
            dur="0.2s"
            values="8;0"
          ></animate>
          <animateTransform
            attributeName="transform"
            begin="1s"
            dur="6s"
            keyTimes="0;0.05;0.15;0.2;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 12 8;6 12 8;-6 12 8;0 12 8;0 12 8"
          ></animateTransform>
        </path>
      </g>
    </svg>
  );
}

export function StreamlineLogout1Solid(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      {...props}
    >
      <path
        fill="#334155"
        fillRule="evenodd"
        d="M0 1.5A1.5 1.5 0 0 1 1.5 0h7A1.5 1.5 0 0 1 10 1.5v1.939a2 2 0 0 0-.734 1.311H5.75a2.25 2.25 0 1 0 0 4.5h3.516A2 2 0 0 0 10 10.561V12.5A1.5 1.5 0 0 1 8.5 14h-7A1.5 1.5 0 0 1 0 12.5zm10.963 2.807A.75.75 0 0 0 10.5 5v1H5.75a1 1 0 0 0 0 2h4.75v1a.75.75 0 0 0 1.28.53l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-.817-.163"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function MageDashboard4Fill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#334155"
        d="M11.01 6.625a4.16 4.16 0 0 1-.34 1.67a4.34 4.34 0 0 1-4 2.7a4.37 4.37 0 0 1-3.09-7.46a4.37 4.37 0 0 1 6.19 0a4.47 4.47 0 0 1 1.28 3.09zm10.75 0a4.33 4.33 0 0 1-.33 1.67a4.599 4.599 0 0 1-1 1.42a4.38 4.38 0 0 1-6.19 0a4.37 4.37 0 0 1 0-6.18a4.35 4.35 0 0 1 3.09-1.29a4.4 4.4 0 0 1 3.1 1.29a4.348 4.348 0 0 1 1.33 3.09m-10.75 10.75a4.16 4.16 0 0 1-.36 1.68a4.24 4.24 0 0 1-.94 1.42a4.35 4.35 0 0 1-3.1 1.28a4.37 4.37 0 0 1-3.09-7.46a4.371 4.371 0 0 1 6.19 0a4.47 4.47 0 0 1 1.28 3.09zm10.75 0a4.37 4.37 0 1 1-4.38-4.38a4.42 4.42 0 0 1 3.1 1.29a4.35 4.35 0 0 1 1.28 3.09"
      ></path>
    </svg>
  );
}

export function ArcticonsAdFree(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <ellipse
        cx={33.164}
        cy={22.616}
        fill="#334155"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        rx={8.879}
        ry={17.083}
        transform="rotate(-21.248 33.164 22.616)"
      ></ellipse>
      <path
        fill="#334155"
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m37.026 38.831l-26.928-1.447A5.6 5.6 0 0 1 4.5 31.786c0-1.544.772-3.089 1.737-4.15L25.444 7.657"
      ></path>
      <path
        fill="#334155"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.46 37.866c-1.93-.193-4.536-3.185-6.177-7.431c-1.64-4.15-1.737-8.011-.58-9.555m26.349 0l-9.555 8.3c2.8 4.922 6.37 7.818 8.88 6.853c3.088-1.255 3.378-8.011.675-15.153m-1.64-3.764l-9.652 8.396a7 7 0 0 1-.29-.772c-2.895-7.431-2.605-14.38.483-15.635c2.703-.965 6.563 2.51 9.459 8.01ZM19.942 38.06c0 2.026-1.64 3.57-3.764 3.57s-3.764-1.544-3.764-3.474v-.483"
      ></path>
    </svg>
  );
}

export function TypcnDelete(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8s8-3.582 8-8s-3.581-8-8-8m3.707 10.293a.999.999 0 1 1-1.414 1.414L12 13.414l-2.293 2.293a.997.997 0 0 1-1.414 0a.999.999 0 0 1 0-1.414L10.586 12L8.293 9.707a.999.999 0 1 1 1.414-1.414L12 10.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L13.414 12z"
      ></path>
    </svg>
  );
}
