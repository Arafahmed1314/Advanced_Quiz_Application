import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBar = () => {
  const [percentage, setPercentage] = useState(75); // Example percentage value

  return (
    <div style={{ width: 200, margin: "0 auto" }}>
      <h2>Custom Colors Example</h2>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "red", // Color of the text
          pathColor: "turquoise", // Color of the circular path
          trailColor: "gold", // Color of the trail (background of the path)
        })}
      />
    </div>
  );
};

export default CircularProgressBar;
