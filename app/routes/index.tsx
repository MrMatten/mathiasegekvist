import type { LinksFunction } from "@remix-run/node";

import styleSheet from "~/styles/landingpage.css"
import shelf from "~/svgs/hylde.svg"

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
        <img src={shelf} />
    </div>
  );
}
