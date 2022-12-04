import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "categoryRoom", headerName: "Loại phòng", width: 130 },
  { field: "lineId", headerName: "dẩy phòng", width: 130 },
  {
    field: "nameRoom",
    headerName: "Tên phòng",
    type: "number",
    width: 90,
  },
  {
    field: "statusRoom",
    headerName: "Trạng thái phòng",
    type: "boolean",
    width: 160,
  },
  {
    field: "roomCode",
    headerName: "Mã phòng",
    type: "number",
    width: 90,
  },
  {
    field: "priceRoom",
    headerName: "Giá phòng",
    type: "number",
    width: 160
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
  })
);

const GridRoom = ({ listData }: any) => {
  const classes = useStyles();
  console.log("listData", listData.rooms);

  return (
    <Box sx={{ height: 400, width: "100%", margin: 5 }}>
      <DataGrid
        rows={listData.rooms.filter((val: any) => val.id != null)}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default GridRoom;
