import React from "react";
import "../App.css"

const Options = (props) => {
  return (
    <div className="options">
      {/* <p>{JSON.stringify(props.options.id)}</p> */}
      {props.options.map((x) => (
        // <p key={x.id}>{x.description}</p>
        <div className="op" key={x.id}>
          <input  type="radio" name="option" value={x.description} />
          <label htmlFor="">{x.description}</label>
        </div>
      ))}
      {/* <button className="submit-btn">SUBMIT</button> */}
    </div>
  );
};

export default Options;
