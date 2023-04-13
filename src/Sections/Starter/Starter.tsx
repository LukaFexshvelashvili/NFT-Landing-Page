import "./Starter.css";
import NFTImage from "../../Images/Background/BgNFT.png";
interface Anim {
  Anims: number;
}
export default function Starter({ Anims }: Anim) {
  return (
    <div className="Starter SectionPadder">
      <div className="contentContainer">
        <div className="SectionSplitter">
          <div className={`WelcomeSide g-6${Anims ? " anim3" : ""}`}>
            <h1>
              Find Your Best Meme <span>NFTs</span>
            </h1>
            <p>
              A day doesen’t go by when you don’t come across a new meme on your
              NFTs World! Search your favourite meme and some good stuff on
              website.
            </p>
            <div className="StarterButtons">
              <button className="DButton ConnectWallet">Connect Wallet</button>
              <button className="DButton2">Learn More</button>
            </div>
            <div className="Details">
              <div className="DetC">
                <div className="DetName">Successfull Project</div>
                <div className="DetValue">33,565</div>
              </div>
              <div className="DetC">
                <div className="DetName">Happy Clients</div>
                <div className="DetValue">500+</div>
              </div>
            </div>
          </div>
          <div className={`ImageSide g-6 ${Anims ? " anim4" : ""}`}>
            <img src={NFTImage} alt="NFT Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
