'use client'
import { clearTasks } from "@/lib/funcs";

export default function Completed(){
    let tasks = localStorage.getItem("currentTasks");
    let taskObjs = [];

    if (tasks != null){
        taskObjs = JSON.parse(tasks);
    }
    else{
        console.log("test")
        return(<></>)
    }

    if (taskObjs === "null"){
        return(<></>)
    }

    return(
    <div className="grid mt-2 bg-gray-400 h-fit min-w-min border-3 border-black">
        {Array.from(taskObjs)
        .filter((task) => task.status === "complete")
        .map((task) =>
        <div className="pb-5 border-black  border-solid border-2 " >
            <p className="pb-1">Task: {task.task}</p>
            <p>Completed On: {task.endDate}</p>
            <button className="rounded-rull bg-red-500 border-2 border-black hover:bg-cyan-200" >Mark Incomplete</button>
        </div>
        )}

    </div>)
}