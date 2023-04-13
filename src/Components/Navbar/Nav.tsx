import { useState } from "react";
import "./Nav.css";
interface Anim {
  Anims: number;
}

export default function Nav({ Anims }: Anim) {
  const [Nav, setNav] = useState<boolean>(false);
  return (
    <nav>
      <div
        className={`contentContainer${Anims ? " anim1" : ""}${
          Nav ? " NavGet" : ""
        }`}
      >
        <div className="LogoSide">Bravay</div>
        <ul>
          <li className="liActive">Home</li>
          <li>About</li>
          <li>NFT’s</li>
          <li>Blog</li>
        </ul>
        <div className="ButtonSide">
          <button className="DButton SignUp">Sign Up</button>
        </div>
      </div>
      <div
        className={`navToggle${Nav ? " navToggleActive" : ""}`}
        onClick={() => setNav(!Nav)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
