import "./Navbar.scss";
import image from "../../images/image.jpg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>AdminDashBoard</span>
      </div>
      <div className="links">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notifications">
          <img src="notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src={image} alt="" />
        </div>
        <img src="/setting.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
