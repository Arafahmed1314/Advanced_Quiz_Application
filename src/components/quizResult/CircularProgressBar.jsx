/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBar = ({ percentages }) => {
  const [percentage, setPercentage] = useState(0); // Start with 0 for animation
  const targetPercentage = percentages; // Target percentage value

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < targetPercentage) {
          return prev + 1; // Increment percentage
        } else {
          clearInterval(interval); // Clear interval when target is reached
          return prev;
        }
      });
    }, 20); // Update every 20ms for a smooth animation

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [targetPercentage]);

  return (
    <div
      className="w-[140px] my-0 mx-auto flex justify-center items-center"
      // style={{ width: 100, margin: "0 auto" }}
    >
      <h2 className="text-primary text-center font-semibold mb-4">Progress</h2>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "#4CAF50", // Green text for percentage (example: success color)
          pathColor: "#2196F3", // Blue path (example: primary color)
          trailColor: "#E0E0E0", // Light gray trail (background color)
        })}
      />
    </div>
  );
};

export default CircularProgressBar;
