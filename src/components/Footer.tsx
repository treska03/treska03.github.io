import { PERSONAL_LINKS } from "@/constants/links";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 p-4 text-center text-white flex flex-col gap-2">
      <p>
        © {new Date().getFullYear()} My Personal Website. All rights reserved.
      </p>
      <div className="flex justify-center gap-5">
        <Link href={`mailto:${PERSONAL_LINKS.mail}`}>
          <svg
            className="w-8 h-8 text-gray-300 hover:text-white transition"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 13.065L0 6V18h24V6l-12 7.065zM12 10.935L24 4H0l12 6.935z" />
          </svg>
        </Link>
        <Link href={PERSONAL_LINKS.github}>
          <svg
            className="w-8 h-8 text-gray-300 hover:text-white transition"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.304 3.438 9.8 8.207 11.385.6.113.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.723-4.042-1.61-4.042-1.61-.546-1.38-1.333-1.748-1.333-1.748-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.24 1.84 1.24 1.07 1.83 2.805 1.3 3.49.996.11-.775.42-1.3.76-1.6-2.665-.3-5.466-1.33-5.466-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 2-.41 3.03-.41s2.07.14 3.03.41c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.47 5.93.43.38.81 1.12.81 2.26 0 1.64-.015 2.97-.015 3.37 0 .32.19.69.8.57 4.77-1.59 8.2-6.08 8.2-11.39 0-6.63-5.37-12-12-12z" />
          </svg>{" "}
        </Link>
        <Link href={PERSONAL_LINKS.linkedin}>
          <svg
            className="w-8 h-8 text-gray-300 hover:text-white transition"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.06 20.45H3.56V9h3.5v11.45zM5.31 7.48a2.02 2.02 0 1 1 0-4.04 2.02 2.02 0 0 1 0 4.04zM20.45 20.45h-3.5v-5.57c0-1.33-.48-2.24-1.69-2.24-.92 0-1.47.62-1.71 1.22-.09.22-.12.52-.12.82v5.77h-3.5V9h3.5v1.56c.46-.7 1.28-1.69 3.11-1.69 2.28 0 4 1.48 4 4.66v6.92z" />
          </svg>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
