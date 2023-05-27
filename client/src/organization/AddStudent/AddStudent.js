import React, { useEffect } from "react";
import "./AddStudent.css";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

function AddStudent({ UserDataData }) {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [email, setEmail] = useState("");
  const [tempUserData, setTemUserData] = useState({});
  const [resultList, setResultList] = useState([]);

  const BASEURL = process.env.REACT_APP_SAMPLE;

  function sendAcceptanceEmailToCandidate(candidateEmail, candidatename) {
    const subject = "Congratulations!! Smart Hire Acceptance Mail";
    const body = `Dear [${candidatename}],
  
  I hope this email finds you well. I am pleased to inform you that you have been selected for the position at Smart Hire. Your skills and experience impressed us, and we believe that you will be a valuable addition to our team.
  
  We would like to formally offer you the position of [Job Title] at Smart Hire. Please let us know if you accept this offer, and we can discuss the next steps.
  
  Congratulations once again, and we look forward to working with you.
  
  Best regards,
  [Hrushikesh Ambike]`;

    const mailToLink = `mailto:${candidateEmail}?subject=${subject}&body=${encodeURIComponent(
      body
    )}`;
    window.location.href = mailToLink;
  }

  // Obtaining list of students below
  // Obtaining list of students below
  // Obtaining list of students below
  // Obtaining list of students below
  // Obtaining list of students below

  // Obtaining list of students below

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
        }
      })
      .catch((ErrorR) => {
        console.log("kkkkk", ErrorR);
      });
  };

  useEffect(() => {
    setTemUserData(UserDataData);
    if (tempUserData) {
      ViewInterviewResults();
    }
  }, []);

  return (
    <div className="">
      <div className="container mx-auto py-8">
        <div className="flex w-2/4 mx-auto">
          <div className="max-w-2xl mx-auto px-4  ">
            <div className="flex justify-between items-center mx-auto">
              <h1 className="text-2xl font-bold text-gray-800 mx-auto ">
                Add Students to the list
              </h1>
            </div>
            <div className="my-4">
              <p className="text-gray-600 italic">
                Please add the name and email of the students which are to be
                allowed
              </p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="text-lg font-bold">Interview Topic</div>
          <div className="text-lg">Date of Interview</div>
        </div>
        <div className="flexRowReverse">
          <Formik>
            <Form className="card cardStudent width30 max-h-[300px]">
              <h2 className="w-full text-lg font-bold mb-4 borderBottom">
                Add Candidate
              </h2>

              <div className="bg-white rounded-lg p-4 mb-4 flex">
                <label className=" mt-2 font-bold" htmlFor="name">
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="Enter Name"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 ml-2"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>

              <div className="bg-white rounded-lg p-4 mb-4 flex">
                <label className=" mt-2 font-bold" htmlFor="email">
                  Email
                </label>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter Email"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 ml-2"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>

              <button
                type="button"
                onClick={() => {
                  const newItem = { name: name, email: email };
                  setList([...list, newItem]);
                  setName("");
                  setEmail("");
                }}
                className="ml-4 buttonBlack text-white font-bold py-2 px-4 rounded-lg"
              >
                Add Candidate
              </button>
            </Form>
          </Formik>
          <div className="mb-8 card min-h-[400px]  flex flex-col">
            <h2 className="text-lg font-bold mb-4 w-full borderBottom">
              Candidate List
            </h2>
            <div className="bg-white rounded-lg w-full p-4">
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell className="font-bold">Name</TableCell>
                      <TableCell className="font-bold">Email</TableCell>
                      <TableCell className="font-bold">Send Mail</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {resultList?.map((user, index) => (
                      <TableRow key={index}>
                        <TableCell>{user.Candidate_Name}</TableCell>
                        <TableCell>{user.Candidate_Email}</TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() =>
                              sendAcceptanceEmailToCandidate(
                                `${user.Candidate_Email}`,
                                `${user.Candidate_Name}`
                              )
                            }
                            endIcon={<SendIcon />}
                          >
                            Send acceptance
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
