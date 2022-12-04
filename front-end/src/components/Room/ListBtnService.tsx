import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Button, TextField } from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Container: {
      display: "flex",
      margin: "20px",
      flexDirection: "column",
      gap: "20px"
    },
  })
);

const ListBtnService = () => {
  const classes = useStyles();

  return (
    <div className={classes.Container}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Xoá
      </Button>

      <Button variant="contained" size="medium">
        Thêm
      </Button>

      <Button variant="outlined">Sửa</Button>

      <Button variant="contained" endIcon={<SendIcon />}>
        In hóa đơn
      </Button>
    </div>
  );
};

export default ListBtnService;
