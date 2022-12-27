import { useState, useEffect } from "react";

const Footer = () => {
  
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

const [dateState, setDateState] = useState(new Date());

useEffect(() => {
  setInterval(() => setDateState(new Date()), 30000);
}, []);


  return (
    <footer>
      <p>
        <b>
          Developed by Jacob Beck <small>Gran Canaria</small>
        </b>
        &copy; {date.getFullYear() - 1} - {date.getFullYear()}
      </p>
      <div className="actual-time">
        <p>
          Time &nbsp;
          {dateState.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
        <p>
          Date &nbsp;
          {dateState.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
