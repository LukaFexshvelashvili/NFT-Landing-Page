import "./NFTBanner.css";
import NFTB1 from "../../Images/NFTs/Banners/NFTB1.png";

export default function NFTBanner(props: {
  image: string;
  title: string;
  user: string;
  price: number;
}) {
  return (
    <div className="NFTBanner">
      <div className="ImageS">
        <img src={props.image} alt="NFTBanner" />
      </div>
      <div className="InfoS">
        <h3>{props.title}</h3>
        <p>By {props.user}</p>
      </div>
      <div className="PriceBuy">
        <p>${props.price} ETH</p>
        <button className="DButton">Place a Bid</button>
      </div>
    </div>
  );
}
