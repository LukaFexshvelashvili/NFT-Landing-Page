import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="contentContainer">
        <div className="FCol">
          <h2 className="FStart">Bravay</h2>
          <p className="FDesc">
            Better data leads to more performenece models performant models lead
            to faster deployment.
          </p>
        </div>
        <div className="FCol">
          <h2 className="FStart">Menu Items</h2>
          <p className="FDesc">About</p>
          <p className="FDesc">NFT</p>
          <p className="FDesc">What We Do</p>
        </div>
        <div className="FCol">
          <h2 className="FStart">Other Pages</h2>
          <p className="FDesc">Tearms & Condition</p>
          <p className="FDesc">Privacy Policy</p>
          <p className="FDesc">Settings</p>
        </div>
        <div className="FCol">
          <h2 className="FStart">Community</h2>
          <p className="FDesc">Help Center</p>
          <p className="FDesc">Suggest Feature</p>
          <p className="FDesc">Subscribe</p>
        </div>
      </div>
    </div>
  );
}
