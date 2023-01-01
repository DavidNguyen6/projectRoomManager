import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import RegistrationRoom from "./RegistrationRoom";
import ListBtnService from "./ListBtnService";
import GridRoom from "./GridRoom";
import Calculator from "../../caculator/Caculator";
import { useQuery } from '@apollo/client';
import { getAllDataFromBE } from '../../graphql-client/queries';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
      justifyContent: "center"
    },
  })
);

const RoomManager = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(getAllDataFromBE);
  // console.log("data", data);
  
  if ( loading ) return <p> Loading rooms ...</p>
  if ( error ) return <p> Error loading </p>

  return (
    <div className={classes.container}>
      <RegistrationRoom listData={data}/>
      <ListBtnService/>
      <Calculator/>
      <GridRoom listData={data}/>
    </div>
  );
};

export default RoomManager;
