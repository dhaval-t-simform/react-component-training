import DashboardRowOneStyle from "./DashboardRowOne.style";

const DashboardRowOne = ({ data }) => {
  return (
    <DashboardRowOneStyle>
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
    </DashboardRowOneStyle>
  );
};

export default DashboardRowOne;
