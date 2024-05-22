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
        stroke="white"
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
      <circle cx={12} cy={32} r={6} fill="currentColor">
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
      <g fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
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
        fill="currentColor"
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
        fill="currentColor"
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
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        rx={8.879}
        ry={17.083}
        transform="rotate(-21.248 33.164 22.616)"
      ></ellipse>
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m37.026 38.831l-26.928-1.447A5.6 5.6 0 0 1 4.5 31.786c0-1.544.772-3.089 1.737-4.15L25.444 7.657"
      ></path>
      <path
        fill="currentColor"
        stroke="currentColor"
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

export function SolarShareBold(props: SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        d="M13.803 5.333c0-1.84 1.5-3.333 3.348-3.333A3.341 3.341 0 0 1 20.5 5.333c0 1.841-1.5 3.334-3.349 3.334a3.346 3.346 0 0 1-2.384-.994l-4.635 3.156a3.336 3.336 0 0 1-.182 1.917l5.082 3.34a3.346 3.346 0 0 1 2.12-.753a3.341 3.341 0 0 1 3.348 3.334C20.5 20.507 19 22 17.151 22a3.341 3.341 0 0 1-3.348-3.333a3.3 3.3 0 0 1 .289-1.356L9.05 14a3.346 3.346 0 0 1-2.202.821A3.34 3.34 0 0 1 3.5 11.487a3.34 3.34 0 0 1 3.348-3.333c1.064 0 2.01.493 2.623 1.261l4.493-3.059a3.317 3.317 0 0 1-.161-1.023"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function MeteoconsStarFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
    >
      <defs>
        <linearGradient
          id="meteoconsStarFill0"
          x1={187.9}
          x2={324.1}
          y1={138.1}
          y2={373.9}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fcd966"></stop>
          <stop offset={0.5} stopColor="#fcd966"></stop>
          <stop offset={1} stopColor="#fccd34"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#meteoconsStarFill0)"
        stroke="#fcd34d"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m105.7 263.5l107.5 29.9a7.9 7.9 0 0 1 5.4 5.4l29.9 107.5a7.8 7.8 0 0 0 15 0l29.9-107.5a7.9 7.9 0 0 1 5.4-5.4l107.5-29.9a7.8 7.8 0 0 0 0-15l-107.5-29.9a7.9 7.9 0 0 1-5.4-5.4l-29.9-107.5a7.8 7.8 0 0 0-15 0l-29.9 107.5a7.9 7.9 0 0 1-5.4 5.4l-107.5 29.9a7.8 7.8 0 0 0 0 15Z"
      >
        <animateTransform
          additive="sum"
          attributeName="transform"
          calcMode="spline"
          dur="6s"
          keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
          repeatCount="indefinite"
          type="rotate"
          values="-15 256 256; 15 256 256; -15 256 256"
        ></animateTransform>
        <animate
          attributeName="opacity"
          dur="6s"
          values="1; .75; 1; .75; 1; .75; 1"
        ></animate>
      </path>
    </svg>
  );
}

export function LogosWhatsappIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 258"
      {...props}
    >
      <defs>
        <linearGradient
          id="logosWhatsappIcon0"
          x1="50%"
          x2="50%"
          y1="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#1faf38"></stop>
          <stop offset="100%" stopColor="#60d669"></stop>
        </linearGradient>
        <linearGradient
          id="logosWhatsappIcon1"
          x1="50%"
          x2="50%"
          y1="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#f9f9f9"></stop>
          <stop offset="100%" stopColor="#fff"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#logosWhatsappIcon0)"
        d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
      ></path>
      <path
        fill="url(#logosWhatsappIcon1)"
        d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"
      ></path>
      <path
        fill="#fff"
        d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
      ></path>
    </svg>
  );
}

export function LineMdPhoneCallLoop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path
          strokeDasharray={64}
          strokeDashoffset={64}
          d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="64;0"
          ></animate>
          <animateTransform
            attributeName="transform"
            begin="0.6s;lineMdPhoneCallLoop0.begin+2.6s"
            dur="0.5s"
            type="rotate"
            values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"
          ></animateTransform>
        </path>
        <path
          strokeDasharray={4}
          strokeDashoffset={4}
          d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723"
          opacity={0}
        >
          <set
            id="lineMdPhoneCallLoop0"
            attributeName="opacity"
            begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s"
            to={1}
          ></set>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s"
            dur="0.2s"
            values="4;8"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.3s;lineMdPhoneCallLoop0.begin+3.3s"
            dur="0.3s"
            values="0;4"
          ></animate>
          <set
            attributeName="opacity"
            begin="1.6s;lineMdPhoneCallLoop0.begin+3.6s"
            to={0}
          ></set>
        </path>
        <path
          strokeDasharray={10}
          strokeDashoffset={10}
          d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535"
          opacity={0}
        >
          <set
            attributeName="opacity"
            begin="1s;lineMdPhoneCallLoop0.begin+3s"
            to={1}
          ></set>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1s;lineMdPhoneCallLoop0.begin+3s"
            dur="0.2s"
            values="10;20"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.5s;lineMdPhoneCallLoop0.begin+3.5s"
            dur="0.3s"
            values="0;10"
          ></animate>
          <set
            attributeName="opacity"
            begin="1.8s;lineMdPhoneCallLoop0.begin+3.8s"
            to={0}
          ></set>
        </path>
      </g>
    </svg>
  );
}

export function IconParkOutlineLeftC(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={4}
      >
        <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></path>
        <path strokeLinecap="round" d="m27 33l-9-9l9-9"></path>
      </g>
    </svg>
  );
}
