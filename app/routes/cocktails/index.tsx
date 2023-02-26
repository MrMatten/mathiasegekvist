import type { LinksFunction } from "@remix-run/node";

import styleSheet from "~/styles/cocktail.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styleSheet,
    },
  ];
};

const menu: CocktailDetails[] = [
  {
    title: "Gin & Tonic",
    imgSrc: "https://images.unsplash.com/photo-1573459312070-c30bbfeaee33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    ingredientList: ["Gin", "Tonic"]
  }
]

export default function Cocktails() {
  return (
    <div>
      <div className="shelf-container">
        {menu.map((cocktail, index) => <CocktailCard cocktail={cocktail} key={`cocktail-${index}`} />)}
      </div>
    </div>
  );
}

function CocktailCard({ cocktail }: { cocktail: CocktailDetails }) {
  return (
    <div className="cocktail-card">
      <h1>{cocktail.title}</h1>
      <img src={cocktail.imgSrc} alt="cocktail" />
      {cocktail.ingredientList.map((ingredient, index) => <p key={`ingredient-${index}`}>{ingredient}</p>)}
    </div>
  )
}

interface CocktailDetails {
  title: string,
  imgSrc: string,
  ingredientList: string[]
}
