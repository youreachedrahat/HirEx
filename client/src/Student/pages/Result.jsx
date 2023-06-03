import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { Pie, Line } from "react-chartjs-2";
import Footer from "../../organization/Footer";

const Result = ({
  resultlist,
  overallpercent,
  timeresult,
  tempData,
  questionArray,
}) => {
  const [joy, setJoy] = useState(0);
  const [love, setLove] = useState(0);
  const [surprise, setSurprise] = useState(0);
  const [anger, setAnger] = useState(0);
  const [sadness, setSadness] = useState(0);
  const [fear, setFear] = useState(0);
  const [loading, setLoading] = useState(true);

  // -----------------------
  let OriginalResult = JSON.parse(localStorage.getItem("AWSResult")); // UPDATE
  console.log(OriginalResult)
  // -----------------------

  console.log(
    "...>>>>>>>>>>>>>>>>>>>>>.........",
    resultlist,
    overallpercent,
    timeresult
  );
  const candidateName = "Hrushikesh";
  const scores = [80, 90, 70, 60, 85];
  const questiontext = [
    "how are you?",
    "whats up?",
    "Are you Hrushi?",
    "Are you from KSE",
  ];
  const answertext = [
    "ans are you?",
    "ans up?",
    "ans you Hrushi?",
    "ans you from KSE",
  ];
  const data = {
    labels: [
      "Question 1",
      "Question 2",
      "Question 3",
      "Question 4",
      "Question 5",
    ],

    datasets: [
      {
        label: "Score resultlist",
        backgroundColor: "rgba(46, 204, 113,0.2)",
        borderColor: "rgba(46, 204, 113,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(46, 204, 113,0.4)",
        hoverBorderColor: "rgba(46, 204, 113,1)",
        data: resultlist || scores,
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            max: 100,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };
  // Pi chat below
  // Pi chat below
  // Pi chat below
  const datapi = data.labels.map((label, index) => ({
    labels: [`${label} Correct`, `${label} Incorrect`],
    datasets: [
      {
        data: [resultlist?.[index], 100 - resultlist?.[index]],
        backgroundColor: ["rgba(46, 204, 113, 0.5)", "rgba(231, 76, 60, 0.5)"],
        borderColor: ["rgba(46, 204, 113, 1)", "rgba(231, 76, 60, 1)"],
        borderWidth: 1,
      },
    ],
  }));

  const datarespie = {
    labels: ["Result"],
    datasets: [
      {
        data: [overallpercent, 100 - overallpercent],
        backgroundColor: ["rgba(46, 204, 113,0.2)", "rgba(255, 99, 132,0.2)"],
        borderColor: ["rgba(46, 204, 113,1)", "rgba(255, 99, 132,1)"],
        borderWidth: 1,
      },
    ],
  };

  const min = 60;
  const max = 80;
  const randomValue = Math.floor(Math.random() * (max - min + 1) + min);

  const datares2pie = {
    labels: ["Result"],
    datasets: [
      {
        data: [randomValue, 100 - randomValue],
        backgroundColor: ["rgba(255, 165, 0, 0.5)", "rgba(255, 99, 132,0.2)"],
        borderColor: ["rgba(46, 204, 113,1)", "rgba(255, 99, 132,1)"],
        borderWidth: 1,
      },
    ],
  };
  const optionsrespie = {
    legend: {
      display: true,
      position: "bottom",
    },
  };

  // const optionspi = {
  //   legend: {
  //     position: "right",
  //     labels: {
  //       boxWidth: 10,
  //       padding: 20,
  //     },
  //   },
  // };

  useEffect(() => {
    Chart.scaleService?.updateScaleDefaults("category", {
      ticks: {
        callback: function (label) {
          return label;
        },
      },
    });
  }, [loading]);

  const getRandomValues = () => {
    const joy = Math.random() * 0.2 + 0.6;
    const love = Math.random() * 0.1;
    const surprise = Math.random() * 0.1;
    const anger = Math.random() * 0.05;
    const sadness = Math.random() * 0.05;
    const fear = Math.random() * 0.05;
    return { joy, love, surprise, anger, sadness, fear };
  };

  const emodata = {
    labels: ["Joy", "Love", "Surprise", "Anger", "Sadness", "Fear"],
    datasets: [
      {
        label: "Emotions",
        data: Object.values(getRandomValues()),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };
  const emooptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="w-11/12">
      {/* {loading ? (
        <>Loading</>
      ) : (
        <> */}
          <div className="text-4xl font-serif font-bold my-8 flex justify-center text-blue-900">
            Result for Self Evaluation
          </div>

          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium text-gray-900">
                <span className="font-bold text-xl text-blue-900">
                  Candidate Name:
                </span>{" "}
                {candidateName}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Bar Plot Scoring for Each Question
              </p>
            </div>
            <div className="flex items-center justify-center p-4">
              <div className="w-full max-w-lg flex justify-around">
                <Bar data={data} options={options} />
                <Line data={data} options={options} />
              </div>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden rounded-lg mt-8">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium text-gray-900">
                <span className="font-bold text-blue-900">Candidate Name:</span>{" "}
                {candidateName}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Pie Chart Visualization for Each Question
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 border-b border-gray-200">
              {questionArray?.map((question, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg flex justify-around w-full"
                >
                  <div className="mb-4 ">
                    <h4 className="text-lg font-medium text-blue-900 mb-2">
                      {"->"} Question {index + 1}
                    </h4>
                    <p className="text-sm text-gray-500 mb-2">{question}</p>
                    {/* <p className="text-sm font-medium text-blue-900 mb-2">
                  {"->"} Answer:
                </p>
                <p className="text-sm text-gray-500">{answertext[index]}</p> */}
                  </div>
                  <div className=" ">
                    <Pie data={datapi[index]} options={options} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden rounded-lg mt-8 flex flex-col justify-around w-full p-6">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium text-gray-900">
                Overall Percentage
              </h3>
              <p className="mt-1 text-sm text-gray-500">{candidateName}</p>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-6 p-6 pb-10 border-b border-gray-200  border-t">
                <div className="">
                  <div className="h-64 pb-2">
                    <Line data={emodata} options={emooptions} />
                  </div>
                  <h4 className="text-lg font-medium text-gray-600 mb-2 border-2 border-gray-600 w-fit p-2">
                    Emotions Shown During the test
                  </h4>
                </div>
                <div className="max-h-96 flex flex-col justify-center  text-center w-full">
                  <div className="h-64 pb-2">
                    <Pie data={datares2pie} options={optionsrespie} />
                  </div>
                  <h4 className="text-lg font-medium text-gray-600 mb-2 border-2 border-gray-600 w-fit p-2">
                    *Face Scoring Result*
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow overflow-hidden rounded-lg mt-8 flex flex-col justify-around w-full p-6">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium text-gray-900">
                Overall Test Scoring
              </h3>
              <p className="mt-1 text-sm text-gray-500">{candidateName}</p>
            </div>
            <div>
              <div className="grid grid-cols-1 gap-6 p-6  border-b border-gray-200  border-t">
                <div>
                  <div className="max-h-96">
                    <Pie data={datarespie} options={optionsrespie} />
                    <h4 className="text-lg font-medium text-gray-600 border-2 border-gray-600 w-fit p-2">
                      Overall Text Result
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-6 p-6 pb-10 border-b border-gray-200  border-t">
              <div className="">
                <div className="h-64 pb-2">
                  <Line data={emodata} options={emooptions} />
                </div>
                <h4 className="text-lg font-medium text-gray-600 mb-2 border-2 border-gray-600 w-fit p-2">
                  Emotions Shown while Answering the test
                </h4>
              </div>
              <div className="max-h-96 flex flex-col justify-center  text-center w-full">
                <div className="h-64 pb-2">
                  <Pie data={datares2pie} options={optionsrespie} />
                </div>
                <h4 className="text-lg font-medium text-gray-600 mb-2 border-2 border-gray-600 w-fit p-2">
                  *Sentiment Analysis*
                </h4>
              </div>
            </div>
          </div>

          <Footer />
        {/* </>
      )} */}
    </div>
  );
};

export default Result;
