import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import Users from "../../NFTs/Users";
import "./Sellers.css";

export default function Sellers() {
  interface ProfCard {
    image: string;
    name: string;
    proffesion: string;
  }
  return (
    <div className="Sellers SectionPadder">
      <div className="contentContainer">
        <h1 className="Title titleSeller">
          Our Amazing Top Sellers Based on This Week
        </h1>
      </div>
      <div className="UsersGet">
        <div className="UsersRow">
          {Users.map((e: ProfCard, i: number) => (
            <ProfileCard
              key={i}
              image={e.image}
              name={e.name}
              proffesion={e.proffesion}
            />
          ))}
        </div>
      </div>

      <div className="contentContainer SectionPadder CommunityB">
        <div className="CommunityBlock">
          <h1>Join Our Community</h1>
          <p>
            Meet the Luaval team, artist and collectors for platform updates,
            announcements, and more...
          </p>
          <div className="BBlock">
            <button className="DButton">Launch Discord</button>
          </div>
        </div>
      </div>
    </div>
  );
}
