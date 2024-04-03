import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full p-8 bg-slate-200 flex justify-between max-[400px]:p-4  max-[400px]:pb-8">
      <div className="flex flex-col text-xl font-medium max-[400px]:pl-2 max-[400px]:text-[10px] ">
        <label className="max-[400px]:pb-2 ">Hello, nandhakumar.umapathy</label>
        <label className=" max-[400px]:-my-4">MindPLM</label>
      </div>
      <div className="flex flex-col  max-[400px]:text-[7px] ">
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
