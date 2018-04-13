import React from "react";
import DatePicker from "material-ui/DatePicker";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

/**
 * The Date Picker defaults to a portrait dialog. The `mode` property can be set to `landscape`.
 * You can also disable the Dialog passing `true` to the `disabled` property.
 * To display the year selection first, set the `openToYearSelection` property to `true`.
 */
const DatePickerExampleSimple = () => (
  <MuiThemeProvider>
    <div>
      <DatePicker hintText="Choose Date" />
    </div>
  </MuiThemeProvider>
);

export default DatePickerExampleSimple;
