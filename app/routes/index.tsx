import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import styleSheet from "~/styles/landingpage.css";
import shelf from "~/svgs/hylde.svg";
import books from "~/svgs/books.svg";
import pen from "~/svgs/pen.svg";
import cocktail from "~/svgs/cocktail.svg";

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
      <div className="shelf-container">
        <img className="shelf-item pen" src={pen} alt="pen" />
        <img className="shelf-item books" src={books} alt="books" />
        <Link to="cocktails">
          <img className="shelf-item cocktail" src={cocktail} alt="cocktail" />
        </Link>
        <img className="shelf" src={shelf} alt="shelf" />
      </div>
    </div>
  );
}
