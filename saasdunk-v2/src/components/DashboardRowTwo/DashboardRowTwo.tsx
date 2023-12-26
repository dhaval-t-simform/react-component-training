import { Progress, Select, Space } from "antd";
import { images } from "../../config/images";

import DashboardRowTwoStyle from "./DashboardRowTwo.style";
import { dashboardMarketingOptions, marketingCardData } from "../../dummyData";

const DashboardRowTwo = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <DashboardRowTwoStyle>
      <div className="marketing-card">
        <div className="marketing-head">
          <div>
            <h2>Marketing</h2>
            <p>See your marketing fluctuative</p>
          </div>
          <Select
            className="select"
            suffixIcon={null}
            defaultValue="new-visitor"
            style={{ width: "17rem", height: "4rem" }}
            onChange={handleChange}
            options={dashboardMarketingOptions}
          />
        </div>
        <div className="marketing-stat">
          {marketingCardData.map((data) => (
            <div className="marketing-card-row">
              <h4 className="marketing-card-title">{data.cardHeading}</h4>
              <div className="marketing-card-values">
                <p className="marketing-card-value">{data.cardValue}</p>
                <p className="marketing-card-per">
                  {data.cardPer}%{" "}
                  <span>
                    <data.incdec />
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="marketing-graph">
          <images.dashboard.marketing />
        </div>
      </div>
      <div className="marketing-col-2">
        <div className="marketing-user">
          <div className="user-row-1">
            <div className="user-report">
              <p>User Report</p>
              <span>67%</span>
            </div>
            <Space
              direction="horizontal"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <Progress
                percent={60}
                showInfo={false}
                strokeColor={"#9390F3"}
                size={["30rem", 20]}
                className="progress-bar"
                trailColor="#EAEDF7"
              />
            </Space>
          </div>
          <div className="user-row-2">
            <div className="user-row-2-col-1">
              <p>Target</p>
              <span>$4000</span>
            </div>
            <div className="user-row-2-col-2">
              <p>Last Month</p>
              <span>$3200</span>
            </div>
          </div>
        </div>
        <div className="marketing-members">
          <p>Members</p>
          <div className="marketing-graph">
            <images.dashboard.memberChart />
          </div>
          <div className="user-row-2">
            <div className="members-col">
              <p>Users</p>
              <span>3241</span>
            </div>
            <div className="members-col">
              <p>VIP</p>
              <span>3241</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardRowTwoStyle>
  );
};

export default DashboardRowTwo;
