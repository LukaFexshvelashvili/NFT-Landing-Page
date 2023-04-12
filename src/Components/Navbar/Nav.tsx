import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <div className="contentContainer">
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
