import "./NFTCard.css";
import eth from "../../Images/Icons/eth.png";

export default function NFTCard(props: {
  Image: string;
  Name: string;
  User: string;
  Eth: number;
}) {
  return (
    <div className="NFTCard">
      <div className="CardImage">
        <img src={props.Image} alt="NFT" />
      </div>
      <div className="CardInfo">
        <h3>{props.Name}</h3>
        <p className="User">@{props.User}</p>
        <h2>{props.Eth} ETH</h2>
        <img className="ethIcon" src={eth} alt="etherium" />
      </div>
      <div className="CardButton">
        <button className="CollectNow">Collect Now</button>
      </div>
    </div>
  );
}
