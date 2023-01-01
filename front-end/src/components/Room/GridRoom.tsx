import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

const columns: GridColDef[] = [
  { field: "id", headerName: "Mã hóa đơn", width: 200 },
  { field: "categoryRoom", headerName: "Loại phòng", width: 130 },
  { field: "lineName", headerName: "dẩy phòng", width: 130 },
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
    width: 110
  },
  {
    field: "electricNumberNew",
    headerName: "Số điện Mới",
    type: "number",
    width: 100
  },
  {
    field: "electricNumberOld",
    headerName: "Số điện củ",
    type: "number",
    width: 100
  },
  {
    field: "waterNumberNew",
    headerName: "Số nước Mới",
    type: "number",
    width: 100
  },
  {
    field: "waterNumberOld",
    headerName: "Số nước củ",
    type: "number",
    width: 100
  },
  {
    field: "totalPrice",
    headerName: "Tổng tiền",
    type: "number",
    width: 110
  },
  {
    field: "date",
    headerName: "thời gian",
    type: "number",
    width: 100
  },
  {
    field: "username",
    headerName: "Tên khách hàng",
    type: "string",
    width: 100
  },
  {
    field: "phone",
    headerName: "Số điện thoại",
    type: "Number",
    width: 100
  },
  {
    field: "identityNumber",
    headerName: "CMND",
    type: "Number",
    width: 100
  },
  {
    field: "address",
    headerName: "Địa chỉ",
    type: "string",
    width: 100
  },
/*   {
    field: "password",
    headerName: "Mật khẩu",
    type: "string",
    width: 100
  }, */
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
  const formatDataFromGraph = [] as any;
  listData.bills.map((item: any, index: any) => {
    formatDataFromGraph.push(
      {
        "nameRoom": item.room.nameRoom,
        "roomCode": item.room.roomCode,
        "categoryRoom": item.room.categoryRoom,
        "priceRoom": item.room.priceRoom,
        "statusRoom": item.room.statusRoom,
        
        "id": item.id,
        "lineName" : item.room.line.lineName,
        "waterNumberNew": item.waterNumberNew,
        "waterNumberOld" : item.waterNumberOld,
        "electricNumberOld" : item.electricNumberOld,
        "electricNumberNew" : item.electricNumberNew,
        "totalPrice" : item.totalPrice,
        "date" : item.date,

        "username": item.customer.username,
        "phone": item.customer.phone,
        "identityNumber": item.customer.identityNumber,
        "address": item.customer.address,
        "password": item.customer.password,

      });
  });
  return (
    <Box sx={{ height: 400, width: "100%", margin: 5 }}>
      <DataGrid
        rows={formatDataFromGraph.filter((val: any) => val.id != null)}
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
