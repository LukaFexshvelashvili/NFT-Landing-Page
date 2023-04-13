import NFTsBanners from "../../NFTs/NFTsBanners";
import NFTBanner from "../../Components/NFTBanner/NFTBanner";
import "./Discover.css";

export default function Discover() {
  interface NFTCardB {
    Image: string;
    Name: string;
    User: string;
    Eth: number;
  }
  return (
    <div className="Discover SectionPadder">
      <div className="contentContainer">
        <div className="DiscTitle">Discover</div>
        <div className="FilterSwap">
          <div className="FRow">
            <button className="DButton2">Category</button>
            <button className="DButton2">Collection</button>
            <button className="DButton2">Price Range</button>
          </div>
          <div className="SRow">
            <button className="DButton2">Fielter & Short</button>
          </div>
        </div>
        <div className="NFTBannerRow">
          {NFTsBanners.map((e: NFTCardB, i: number) => (
            <NFTBanner
              key={i}
              image={e.Image}
              title={e.Name}
              user={e.User}
              price={e.Eth}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
