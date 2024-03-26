import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full p-8 bg-slate-200 flex justify-between">
      <div className="flex flex-col text-xl font-medium max-[400px]:text-[8px] max-[400px]:m-[-15px] ">
        <label className=" ">Hello, nandhakumar.umapathy</label>
        <label>MindPLM</label>
      </div>
      <div className="flex flex-col  max-[400px]:text-[8px] max-[400px]:m-[-15px] ">
        <label>
          MindPLM Inventory India Helpline:{" "}
          <span className="font-medium  ">9876543210</span>
        </label>
        <label>Mon-Fri 9:00 AM - 7:00 PM Toll Free</label>
      </div>
    </div>
  );
};

export default Dashboard;
