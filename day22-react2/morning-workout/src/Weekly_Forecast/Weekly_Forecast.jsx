import React from "react";
import "./index.scss";

export default class Weekly_Forecast extends React.Component {
  render() {
    return (
      <>
        <h1>Weekly Weather Forecast</h1>

        <div className='week-forecast'>
        { this.props.content }
        </div>
      </>
    );
  }
}
