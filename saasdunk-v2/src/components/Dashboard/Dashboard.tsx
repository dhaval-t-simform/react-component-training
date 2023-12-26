import { Progress, Select, Space } from "antd";
import { images } from "../../config/images";
import DashboardStyle from "./Dashboard.style";
import {
  dashboardMarketingOptions,
  marketingCardData,
  row1CardData,
} from "../../dummyData";
import DashboardRowOne from "../DashboardRowOne/DashboardRowOne";
import DashboardRowTwo from "../DashboardRowTwo/DashboardRowTwo";

const Dashboard = () => {
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
          <DashboardRowOne data={data} />
        ))}
      </div>
      <DashboardRowTwo />
    </DashboardStyle>
  );
};

export default Dashboard;
