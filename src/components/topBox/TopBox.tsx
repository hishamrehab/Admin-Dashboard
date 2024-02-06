import React from "react";
import { topDealUsers } from "../../data";
const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => {
          <div className="listItem" key={user.id}>
            <div className="user"></div>
            <span className="amount">${useT}</span>
          </div>;
        })}
      </div>
    </div>
  );
};

export default TopBox;
