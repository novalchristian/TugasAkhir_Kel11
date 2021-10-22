import React, { useContext } from "react";
import { AppsContext } from "./sosial";

export default function Content(props) {
  const { apps } = useContext(AppsContext);

  return (
    <div style={{paddingTop:"10vh"}}>
      <h1 style={{textAlign:"center", color:"#6f32a8", fontSize:60}}>{props.title}</h1>
      <p style={{textAlign:"center"}}>{apps.description}</p>
    </div>
  );
}