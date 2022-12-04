import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
// import { TextField } from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputContainer: {
      display: "flex",
      margin: "10px",
      flexDirection: "column",
      minWidth: "200px"
    },

    gridContainer: {
      marginTop: "20px",
    },
    selectContainer: {},

    wrapperWater: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    wrapperElectric: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    roomSelect: {
      marginLeft: 20,
    },
  })
);

const RegistrationRoom = () => {
  const classes = useStyles();
  const handleLogin = async () => {};
  const handleUsernameChange = async () => {};
  const handlePasswordChange = async () => {};
  const handleKeyPress = async () => {};
  const [age, setAge] = React.useState("vui lòng chọn phòng");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const [value, setValue] = React.useState<Dayjs | null>(null);

  return (
    <div className={classes.inputContainer}>
      <div className={classes.selectContainer}>
        <FormControl sx={{ m: 0, minWidth: 120, marginRight: 5 }}>
          <InputLabel id="demo-select-small">Phòng</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={age}
            label=""
            onChange={handleChange}
          >
            <MenuItem value={1}>Tháng 1</MenuItem>
            <MenuItem value={2}>Tháng 2</MenuItem>
            <MenuItem value={3}>Tháng 3</MenuItem>
            <MenuItem value={4}>Tháng 4</MenuItem>
            <MenuItem value={5}>Tháng 5</MenuItem>
            <MenuItem value={6}>Tháng 6</MenuItem>
            <MenuItem value={7}>Tháng 7</MenuItem>
            <MenuItem value={8}>Tháng 8</MenuItem>
            <MenuItem value={9}>Tháng 9</MenuItem>
            <MenuItem value={10}>Tháng 10</MenuItem>
            <MenuItem value={11}>Tháng 11</MenuItem>
            <MenuItem value={12}>Tháng 12</MenuItem>
          </Select>
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Ngày/tháng/năm"
            value={value}
            onChange={newValue => {
              setValue(newValue);
            }}
            renderInput={params => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>

      <TextField
        label="Tên phòng"
        variant="outlined"
        id="username"
        type="email"
        placeholder="Vui lòng nhập tên phòng"
        margin="normal"
        size="small"
        onChange={handleUsernameChange}
        onKeyPress={handleKeyPress}
      />

      <TextField
        id="password"
        type="password"
        size="small"
        label="Giá phòng"
        placeholder="Vui lòng nhập giá phòng"
        margin="normal"
        variant="outlined"
        onChange={handlePasswordChange}
        onKeyPress={handleKeyPress}
      />

      <div className={classes.wrapperWater}>
        <TextField
          id="password"
          type="password"
          size="small"
          label="Số nước mới"
          placeholder="Vui lòng số nước mới"
          margin="normal"
          variant="outlined"
          onChange={handlePasswordChange}
          onKeyPress={handleKeyPress}
        />

        <div>&ensp; - &ensp; </div>

        <TextField
          id="password"
          type="password"
          size="small"
          label="Số nước củ"
          placeholder="Vui lòng số nước củ"
          margin="normal"
          variant="outlined"
          onChange={handlePasswordChange}
          onKeyPress={handleKeyPress}
        />

        <div>&ensp; = &ensp; </div>

        <TextField
          disabled
          id="filled-disabled"
          defaultValue="0"
          variant="filled"
          size="small"
          label="Tổng số nước"
          margin="normal"
          onChange={handlePasswordChange}
          onKeyPress={handleKeyPress}
        />
      </div>

      <div className={classes.wrapperElectric}>
        <TextField
          id="password"
          type="password"
          size="small"
          label="Số điện mới"
          placeholder="Vui lòng số điện mới"
          margin="normal"
          variant="outlined"
          onChange={handlePasswordChange}
          onKeyPress={handleKeyPress}
        />

        <div>&ensp; - &ensp; </div>

        <TextField
          id="password"
          type="password"
          size="small"
          label="Số điện củ"
          placeholder="Vui lòng số điện củ"
          margin="normal"
          variant="outlined"
          onChange={handlePasswordChange}
          onKeyPress={handleKeyPress}
        />

        <div>&ensp; = &ensp; </div>

        <TextField
        disabled
        id="filled-disabled"
        defaultValue="0"
        variant="filled"
        label="Tổng số điện"
        margin="normal"
        onChange={handlePasswordChange}
        onKeyPress={handleKeyPress}
        />
      </div>

      <TextField
        disabled
        id="filled-disabled"
        label="Tổng tiền"
        defaultValue="0"
        variant="filled"
        onChange={handlePasswordChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default RegistrationRoom;
