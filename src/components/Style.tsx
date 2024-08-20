// import React from "react";
import "./style.css";
import style from "./style.module.css"; /* usage of css modules */
function Style(props: { type: any }) {
  const className = props.type ? style.success : style.failure;
  return (
    <div>
      <h1 className={className}>Hello I am Success component</h1>
      <h1 className={style.failure}>I am failure component</h1>
    </div>
  );
}

export default Style;
