import "./ProfileCard.css";
export default function ProfileCard(props: {
  image: string;
  name: string;
  proffesion: string;
}) {
  return (
    <div className="ProfileCard">
      <img src={props.image} alt="ProfileImage" />
      <div className="infoP">
        <h3>{props.name}</h3>
        <p>{props.proffesion}</p>
      </div>
    </div>
  );
}
