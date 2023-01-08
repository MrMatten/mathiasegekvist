import type { LinksFunction } from "@remix-run/node";

import styleSheet from "~/styles/landingpage.css"

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styleSheet,
    },
  ];
};

export default function Index() {
  return (
    <div>
    </div>
  );
}
