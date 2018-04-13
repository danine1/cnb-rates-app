import React from "react";
import FlatButton from "material-ui/FlatButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const FlatButtonExampleSimple = () => (
  <MuiThemeProvider>
    <div>
      <FlatButton label="Ascending" primary={true} />
      <FlatButton label="Descending" secondary={true} />
    </div>
  </MuiThemeProvider>
);

export default FlatButtonExampleSimple;
