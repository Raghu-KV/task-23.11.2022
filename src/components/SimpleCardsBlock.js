import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faDollarSign,
  faTasks,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import Progress from "./Progress";

function SimpleCardsBlock() {
  const detail = [
    {
      title: "EARNINGS (MONTHLY)",
      num: 40000,
      isCurrency: true,
      isPercent: false,
      icon: faCalendar,
      color: "#4e73df",
    },
    {
      title: "EARNINGS (ANNUAL)",
      num: 215000,
      isCurrency: true,
      isPercent: false,
      icon: faDollarSign,
      color: "#1cc88a",
    },
    {
      title: "TASKS",
      num: 50,
      isCurrency: false,
      isPercent: true,
      icon: faTasks,
      color: "#36b9cc",
    },
    {
      title: "PENDING REQUESTS",
      num: 18,
      isCurrency: false,
      isPercent: false,
      icon: faComments,
      color: "#f6c23e",
    },
  ];
  return (
    <div className="simple-card-block">
      {detail.map((ele, index) => (
        <SimpleCards data={ele} key={index} />
      ))}
    </div>
  );
}

function SimpleCards({ data }) {
  return (
    <div
      className="simple-card-container"
      style={{ borderLeft: `${data.color} solid 4px` }}
    >
      <div>
        <h4 className="simple-card-title" style={{ color: data.color }}>
          {data.title}
        </h4>
        <h2 className="simple-card-content">
          {data.isCurrency && "$"}
          {data.num}
          {data.isPercent && "%"}
        </h2>
      </div>
      {data.isPercent && (
        <div className="progress-bar">
          <Progress color={data.color} height={7} value={data.num} />
        </div>
      )}
      <div>
        <FontAwesomeIcon icon={data.icon} className="icon" />
      </div>
    </div>
  );
}

export default SimpleCardsBlock;
