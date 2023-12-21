import { Divider, Dropdown, MenuProps, Progress, Select, Space } from "antd";
import { images } from "../../config/images";
import DashboardStyle from "./Dashboard.style";

const Dashboard = () => {
  const row1CardData = [
    {
      cardHeading: "Realtime Users",
      cardValue: "553",
      cardPer: "+21.01",
      incdec: images.dashboard.icIncrease,
      graph: images.dashboard.realtimeGraph,
    },
    {
      cardHeading: "Total Visits",
      cardValue: "32.123",
      cardPer: "+10.01",
      incdec: images.dashboard.icIncrease,
      graph: images.dashboard.totalVisitsGraph,
    },
    {
      cardHeading: "Visit Duration",
      cardValue: "1m 8s",
      cardPer: "-12.01",
      incdec: images.dashboard.icDecrease,
      graph: images.dashboard.visitDuration,
    },
    {
      cardHeading: "Bounce Rate",
      cardValue: "21.2",
      cardPer: "+21.01",
      incdec: images.dashboard.icIncrease,
      graph: images.dashboard.bounceRate,
    },
  ];
  const marketingCardData = [
    {
      cardHeading: "New Visitor",
      cardValue: "42",
      cardPer: "+21.01",
      incdec: images.dashboard.icIncrease,
    },
    {
      cardHeading: "New Customer",
      cardValue: "$41,000",
      cardPer: "-21.01",
      incdec: images.dashboard.icDecrease,
    },
    {
      cardHeading: "Reach",
      cardValue: "3241",
      cardPer: "-8.01",
      incdec: images.dashboard.icDecrease,
    },
  ];

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <DashboardStyle>
      <div className="page-header">
        <h2 className="page-name">Page Name</h2>
        <p className="page-summary">
          See your data visualization from{" "}
          <span className="page-span">27 Feb - 3 Mar</span>
        </p>
      </div>
      <div className="card-container">
        {row1CardData.map((data) => (
          <div className="card-1">
            <h4 className="card-title">{data.cardHeading}</h4>
            <div className="card-values-graph">
              <div className="card-values">
                <p className="card-value">{data.cardValue}</p>
                <p className="card-per">
                  {data.cardPer}%{" "}
                  <span>
                    <data.incdec />
                  </span>
                </p>
              </div>
              <div className="card-graph">
                <data.graph />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row-2">
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
              options={[
                {
                  value: "new-visitor",
                  label: (
                    <div className="dropdown-options">
                      <span className="rectangle"></span>
                      <p>New Visitor</p>
                      <images.dashboard.downOutlined />
                    </div>
                  ),
                },
                {
                  value: "new-customer",
                  label: (
                    <div className="dropdown-options">
                      <span className="rectangle"></span>
                      <p>New Customer</p>
                      <images.dashboard.downOutlined />
                    </div>
                  ),
                },
                {
                  value: "reach",
                  label: (
                    <div className="dropdown-options">
                      <span className="rectangle"></span>
                      <p>Reach</p>
                      <images.dashboard.downOutlined />
                    </div>
                  ),
                },
              ]}
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
                  size={["30rem", 15]}
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
      </div>
    </DashboardStyle>
  );
};

export default Dashboard;
