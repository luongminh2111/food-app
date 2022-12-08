import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import BarChart from "./BarChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../home/Header";
import Footer from "../home/Footer";

const types = [
  {
    value: "カロリー",
  },
  {
    value: "マクロ",
  },
];
export default function Statistics() {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <>
     <Header />
    <div className="statistics__container">
 
      <div className="statistics__search">
        <Paper
          component="form"
          elevation={3}
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 800,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            // placeholder="Search Google Maps"
            // inputProps={{ "aria-label": "search google maps" }}
          />

          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      <div className="statistics__selecter">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "200px" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField select value={currency} onChange={handleChange}>
              {types.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </Box>
      </div>
      <div className="statistics__date">
        <div className="statistics__date-container">
          <FontAwesomeIcon icon={faAngleLeft} className="statistics__icon" />
          <div className="statistics__date--selected">
            <p>週ごと</p>
            <span>11月7日‐11月13日</span>
          </div>
          <FontAwesomeIcon icon={faAngleRight} className="statistics__icon" />
        </div>
      </div>
      <div className="statistics__chart">
        <BarChart />
        <div className="statistics__chart--count">平均：2171カロリー</div>
      </div>
     
    </div>
     <Footer />
    </>
   
  );
}
