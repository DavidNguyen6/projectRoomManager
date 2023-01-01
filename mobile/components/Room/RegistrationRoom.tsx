import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
// import { TextField } from "@material-ui/core";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {Dayjs} from 'dayjs';
import TextField from '@mui/material/TextField';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {Box} from '@mui/material';

const listMonth = [
  'Tháng một',
  'Tháng hai',
  'Tháng ba',
  'Tháng tư',
  'Tháng năm',
  'Tháng sáu',
  'Tháng bảy',
  'Tháng tám',
  'Tháng chín',
  'Tháng mười',
  'Tháng mười một',
  'Tháng mười hai',
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputContainer: {
      display: 'flex',
      margin: '10px',
      flexDirection: 'column',
      minWidth: '200px',
    },

    gridContainer: {
      marginTop: '20px',
    },
    selectContainer: {},

    wrapperWater: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    wrappterCustomer: {
      display: 'grid',
      'grid-template-columns': '300px 300px',
      gap: '10px',
    },

    wrapperElectric: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    roomSelect: {
      marginLeft: 20,
    },
  }),
);

const RegistrationRoom = () => {
  const classes = useStyles();
  console.log("fffff");
  const handleMouthChange = ( val ) => { 
    console.log("fffff", val);
  };
  const handlePasswordChange = async () => {};
  const handleKeyPress = async () => {};
  const [age, setAge] = React.useState('vui lòng chọn phòng');
  // const [month, setMonth] = React.useState('tháng 1');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const [value, setValue] = React.useState<Dayjs | null>(null);

  return (
    <div className={classes.inputContainer}>
      <h1>Tính tiền phòng</h1>

      <div className={classes.wrappterCustomer}>
        <FormControl sx={{m: 0, minWidth: 120, marginRight: 5}}>
          <InputLabel id="demo-select-small">Tháng</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={age}
            label=""
            onChange={handleMouthChange}>
            {listMonth.map(mouth => (
              <MenuItem value={mouth}>{mouth}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Ngày thuê"
            value={value}
            onChange={newValue => {
              setValue(newValue);
            }}
            renderInput={params => <TextField {...params} />}
          />
        </LocalizationProvider>

        <Box sx={{minWidth: 120, marginTop: 2}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Phòng</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{minWidth: 120, marginTop: 2}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Tên người thuê
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      <div className={classes.wrappterCustomer}>
        <TextField
          label="Tên phòng"
          variant="outlined"
          id="outlined-disabled"
          type="email"
          disabled
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
          disabled
          placeholder="Vui lòng nhập giá phòng"
          margin="normal"
          variant="outlined"
          onChange={handlePasswordChange}
          onKeyPress={handleKeyPress}
        />

        <TextField
          id="password"
          type="password"
          size="small"
          label="Địa chỉ"
          disabled
          margin="normal"
          variant="outlined"
          onChange={handlePasswordChange}
          onKeyPress={handleKeyPress}
        />

        <TextField
          id="password"
          type="password"
          size="small"
          label="CMND"
          disabled
          margin="normal"
          variant="outlined"
          onChange={handlePasswordChange}
          onKeyPress={handleKeyPress}
        />

        <TextField
          id="password"
          type="password"
          size="small"
          label="Số điện thoại"
          disabled
          margin="normal"
          variant="outlined"
          onChange={handlePasswordChange}
          onKeyPress={handleKeyPress}
        />

        <TextField
          id="password"
          type="password"
          size="small"
          label="Số điện thoại"
          disabled
          margin="normal"
          variant="outlined"
          onChange={handlePasswordChange}
          onKeyPress={handleKeyPress}
        />

        <TextField
          id="password"
          type="password"
          size="small"
          label="tài khoản đăng nhập"
          disabled
          margin="normal"
          variant="outlined"
          onChange={handlePasswordChange}
          onKeyPress={handleKeyPress}
        />

        <TextField
          id="password"
          type="password"
          size="small"
          label="Mật khẩu"
          disabled
          margin="normal"
          variant="outlined"
          onChange={handlePasswordChange}
          onKeyPress={handleKeyPress}
        />

        <TextField
          id="password"
          type="password"
          size="small"
          label="Trạng thái phòng thuê"
          disabled
          margin="normal"
          variant="outlined"
          onChange={handlePasswordChange}
          onKeyPress={handleKeyPress}
        />
      </div>

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
