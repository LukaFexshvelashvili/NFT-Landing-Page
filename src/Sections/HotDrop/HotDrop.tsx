import { useState } from "react";
import "./HotDrop.css";
import NFTCard from "../../Components/NFTCard/NFTCard";
import NFTs from "../../NFTs/NFTs";

export default function HotDrop() {
  const [Category, setCategory] = useState(2);
  const Categories = [
    "Music",
    "Sport",
    "Art",
    "Photography",
    "Trading Card",
    "Virtual World",
    "Videos",
  ];
  interface NFTCard {
    Image: string;
    Name: string;
    User: string;
    Eth: number;
  }
  return (
    <div className="HotDrop SectionPadder">
      <div className="contentContainer">
        <div className="Title">Hot Drop</div>
        <div className="CategoryRow">
          {Categories.map((e: string, i: number) => (
            <button
              key={i}
              onClick={() => setCategory(i)}
              className={`CategoryChoose${
                Category == i ? " CategoryActive" : ""
              }`}
            >
              {e}
            </button>
          ))}
        </div>
        <div className="NFTRow">
          {NFTs.map((e: NFTCard, i: number) => (
            <NFTCard Image={e.Image} Name={e.Name} User={e.User} Eth={e.Eth} />
          ))}
        </div>
      </div>
    </div>
  );
}
