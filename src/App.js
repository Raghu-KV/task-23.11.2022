import "./App.css";
import SimpleCardsBlock from "./components/SimpleCardsBlock";
import BlockTwoCharts from "./components/BlockTwoCharts";
import Progress from "./components/Progress";

function App() {
  return (
    <div className="container">
      <h1 className="dash">Dashboard</h1>
      <SimpleCardsBlock />
      <BlockTwoCharts />
      <BlockThree />
    </div>
  );
}

// ----- BLOCK 3 -----------------------------------------------------------------------------------------------
function BlockThree() {
  return (
    <div className="block-three-container">
      <div className="splitter-one">
        <Project />
        <ColorCards />
      </div>
      <div className="splitter-two">
        <Illustration />
        <DevelopmentApproch />
      </div>
    </div>
  );
}

function Project() {
  const data = [
    {
      title: "Server Migration",
      value: 20,
      color: "#e74a3b",
      height: 13,
    },
    {
      title: "Sales Tracking",
      value: 40,
      color: "#f6c23e",
      height: 13,
    },
    {
      title: "Customer Database",
      value: 60,
      color: "#4e73df",
      height: 13,
    },
    {
      title: "Payout Details",
      value: 80,
      color: "#36b9cc",
      height: 13,
    },
    {
      title: "Account Setup",
      value: 100,
      color: "#1cc88a",
      height: 13,
    },
  ];

  return (
    <div className="project-container">
      <h4 className="title">Projects</h4>
      {data.map((data) => (
        <div className="single-project">
          <div className="project-detail">
            <h5 className="project-sub-detail">{data.title}</h5>
            <h5 className="project-sub-detail">{data.value}%</h5>
          </div>
          <Progress
            color={data.color}
            height={data.height}
            value={data.value}
          />
        </div>
      ))}
    </div>
  );
}

function Illustration() {
  return (
    <div className="project-container">
      <h4 className="title">Illustratiob</h4>
      <div className="img-warpper">
        <img
          src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
          alt="img"
          className="illustration-img"
        />
      </div>
      <p>
        Add some quality, svg illustrations to your project courtesy of unDraw,
        a constantly updated collection of beautiful svg images that you can use
        completely free and without attribution!
      </p>
      <p>Browse Illustrations on unDraw →</p>
    </div>
  );
}

function ColorCards() {
  const colorData = [
    {
      title: "Primary",
      bgColor: "#4e73df",
      textColor: "#f8f9fc",
    },
    {
      title: "Success",
      bgColor: "#1cc88a",
      textColor: "#f8f9fc",
    },
    {
      title: "Info",
      bgColor: "#36b9cc",
      textColor: "#f8f9fc",
    },
    {
      title: "Warning",
      bgColor: "#f6c23e",
      textColor: "#f8f9fc",
    },
    {
      title: "Danger",
      bgColor: "#e74a3b",
      textColor: "#f8f9fc",
    },
    {
      title: "Secondary",
      bgColor: "#858796",
      textColor: "#f8f9fc",
    },
    {
      title: "Dark",
      bgColor: "#5a5c69",
      textColor: "#f8f9fc",
    },
    {
      title: "Light",
      bgColor: "#f8f9fc",
      textColor: "#858796",
    },
  ];
  return (
    <div className="color-card-container">
      {colorData.map((colorData) => (
        <div
          className="color-cards"
          style={{ backgroundColor: colorData.bgColor }}
        >
          <h4
            className="color-cards-title"
            style={{ color: colorData.textColor }}
          >
            {colorData.title}
          </h4>
          <h6 className="color-code" style={{ color: colorData.textColor }}>
            {colorData.bgColor}
          </h6>
        </div>
      ))}
    </div>
  );
}

function DevelopmentApproch() {
  return (
    <div className="project-container">
      <h4 className="title">Development approch</h4>
      <p>
        SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order
        to reduce CSS bloat and poor page performance. Custom CSS classes are
        used to create custom components and custom utility classes.
      </p>
      <p>
        Before working with this theme, you should become familiar with the
        Bootstrap framework, especially the utility classes.
      </p>
    </div>
  );
}
export default App;
