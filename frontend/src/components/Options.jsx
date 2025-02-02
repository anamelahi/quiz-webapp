import React from "react";
import "../App.css";
// const [ans, setAns] = useState(second)
const Options = (props) => {
  // if(props.selectOption.is_correct){
  //   console.log("TRUe")
  // }

  return (
    <div className="options">
      {props.options.map((x) => (
        <button className="op"
          style={{
            border: props.selectOption?.id === x.id ? "solid black" : "none",
          }}
          key={x.id}
          onClick={() => props.handleOption(x)}
        >
          {x.description}
        </button>
      ))}
      {/* {props.selectOption && (
        <p>{props.selectOption.is_correct ? "✅ Correct Answer" : "❌ Wrong Answer"}</p>
      )} */}
      {/* <button onClick={handleCheckAns(props.selectOption)}>CHECK ANSWER</button> */}
    </div>
  );
};

export default Options;
