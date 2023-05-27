import React from "react";
import template from "./template.png";

function Templates({ setTemNo }) {
  return (
    <div>
      <div className=" p-5 flex justify-center flex-col text-center pt-16">
        <div className="flex justify-center font-semibold italic text-2xl mb-5">
          Choose Your Template!!
        </div>
        <div className="grid lg:grid-cols-4 lg:gap-5  justify-center  sm:gap-2 sm:grid-cols-2">
          <button
            to="/template1"
            onClick={() => {
              setTemNo(1);
            }}
          >
            <span className="font-bold p-2">Template 1</span>
            <img
              src={template}
              alt="img"
              height="400"
              width="400"
              className=" hover:opacity-60 border-1 border-black"
            />
          </button>
          <button
            to="/template2"
            onClick={() => {
              setTemNo(2);
            }}
            className="h-80"
          >
            <span className="font-bold p-2">Template 2</span>

            <img
              src={template}
              alt="img"
              height="400"
              width="400"
              className=" hover:opacity-60 object-fill"
            />
          </button>
          <button
            to="/template1"
            onClick={() => {
              setTemNo(3);
            }}
          >
            <span className="font-bold p-2">Template 3</span>

            <img
              src={template}
              alt="img"
              height="400"
              width="400"
              className=" hover:opacity-60"
            />
          </button>
          <button
            to="/template2"
            onClick={() => {
              setTemNo(4);
            }}
            className="h-80"
          >
            <span className="font-bold p-2">Template 4</span>

            <img
              src={template}
              alt="img"
              height="400"
              width="400"
              className=" hover:opacity-60 object-fill"
            />
          </button>
        </div>
      </div>
      {/* <img src={template} alt="img" /> */}
    </div>
  );
}

export default Templates;
