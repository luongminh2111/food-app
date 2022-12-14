import React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ja } from "date-fns/locale";

function DateSetting(props) {
  const {date, setDate } = props;

  return (
    <LocalizationProvider locale={ja} dateAdapter={AdapterDateFns}>
      <DatePicker
        className="date__button"
        value={date}
        onChange={(newValue) => {
          setDate(newValue);
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
