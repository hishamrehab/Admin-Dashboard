import { topDealUsers } from "../../data";
import "../../components/topBox/TopBox.scss";
const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Last customers</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="listItem" key={user.id}>


            <div className="user">
              <img src={user.img} alt="" />

              <div className="userDetails">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>

            </div>


            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
