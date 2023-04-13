import "./Nav.css";
interface Anim {
  Anims: number;
}

export default function Nav({ Anims }: Anim) {
  return (
    <nav>
      <div className={`contentContainer${Anims ? " anim1" : ""}`}>
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
    </nav>
  );
}
