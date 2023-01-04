import React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ja } from "date-fns/locale";

function DateSetting(props) {
  const {dateSelect, setDateSelect } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        className="date__button"
        value={dateSelect}
        onChange={(newValue) => {
          setDateSelect(newValue.getTime());
        }}
        renderInput={(params) => (
          <TextField
            sx={{
              "& fieldset": { border: "none" },
            }}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
}
export default DateSetting;
