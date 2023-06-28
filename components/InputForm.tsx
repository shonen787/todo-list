'use client'
import { Tasks } from "@/types/types";
import "@/styles/globals.css"
import { clearTasks } from "@/lib/funcs";
import { SetStateAction, useState } from "react";



export default function InputForm() {
  const [task, setTask] = useState("")
  const [date, setDate] = useState("")

  const addTask = () =>{
    //Return if the task input field is empty
    if (task.trim () === ""){
      return;
    }    
    let currentTasks = JSON.parse(localStorage.getItem("currentTasks") || "[]");
    

    currentTasks.push(
      {
        task: task,
        endDate: date, 
        status: "incomplete", 
        taskthing: crypto.randomUUID(),
    });

    localStorage.setItem("currentTasks", JSON.stringify(currentTasks));
    setTask("");
    setDate("");
  };

  const handleTaskInputChange = (event: { target: { value: SetStateAction<string>; }; }) =>{
    setTask(event.target.value);
  }

  const handleDateInputChange = (event: { target: { value: any; }; }) =>{
    setDate(event.target.value);
  }


  return (
    <div className="flex flex-col items-center justify-between bg-gray-800 pb-3">
      <form className="pt-2 grid">
        <label className="text-center pb-1 text-white ">Add a task</label>
        <div className="pb-1 grid">
          <div>
            <label className="text-white pr-3">Task Name</label>
            <input type="text" id="input" value={task} onChange={handleTaskInputChange}/>
          </div>
          <div>
            <label className="text-white pr-7">End Date</label>
            <input className=""type="date" id="end-date" value={date} onChange={handleDateInputChange}></input>
          </div>
          
        </div>
        <button onClick={(addTask)} type="submit" className="rounded-full bg-blue-500 mt-1">Submit</button>
        <button onClick={(clearTasks)}className="rounded-full bg-red-500 mt-1">Clear All Tasks</button>
      </form>
      
    </div>
  )
}
