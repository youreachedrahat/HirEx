import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Cookies from "universal-cookie";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    overflow: "auto",
    padding: theme.spacing(2),
  },
  card: {
    marginBottom: theme.spacing(3),
  },
  table: {
    marginTop: theme.spacing(2),
  },
}));

function Results({ UserDataData }) {
  const [tempUserData, setTemUserData] = useState({});
  const [resultList, setResultList] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const cookies = new Cookies();
  const ViewInterviewResults = async () => {
    console.log("wewewe");
    const Temp = await axios
      .post(`${BASEURL}/FindResult`, {
        Res_Company_Name: tempUserData.Name,
      })
      .then((Data) => {
        console.log("Data--->", Data);
        if (Data.data.message === "Interview result found successfully !") {
          setResultList(Data.data.data);
          setLoading(false);
        }
      })
      .catch((ErrorR) => {
        console.log("kkkkk", ErrorR);
      });
  };

  const classes = useStyles();
 

  useEffect(() => {
    setTemUserData(UserDataData);
    if (tempUserData) {
      ViewInterviewResults();
    }
  }, [loading]);
  // Sort students by score in descending order
  return (
    <>
      {loading ? (
        <>Loading ...</>
      ) : (
        <>
          {" "}
          <div className={classes.root}>
            <Card className={classes.card}>
              <CardHeader title="Your Final Scoring !" />
              <Divider />
              <CardContent>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Performance Score (%)</TableCell>
                      <TableCell>Time Score (%)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {resultList.map((Item, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell>
                            <Typography variant="body1">
                              {Item.Candidate_Name}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body1">
                              {Item.Candidate_Email}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body1">
                              {Item.Text_Percentage}%
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body1">
                              {Item.Time_Percentage}%
                            </Typography>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </>
  );
}

export default Results;
