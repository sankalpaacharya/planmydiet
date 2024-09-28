import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function radialprogress() {
  const percentage = 66;
  return (
    <div className="w-[9rem] h-[9rem]">
      <CircularProgressbar
        styles={buildStyles({
          pathColor: "#4ade80",
          textColor: "white",
          textSize: "13px",
        })}
        value={percentage}
        text={`600 kal`}
      />
    </div>
  );
}
