'use client'
import { completeTask } from "@/lib/funcs";




export default function Todos(){

    let tasks = localStorage.getItem("currentTasks");
    let taskObjs = [];
    if (tasks != null){
        taskObjs = JSON.parse(tasks);
    }
    else{
        taskObjs = [];
        return(
        <>
            <div className="items-center w-screen">
                <p className="text-white items-center w-screen">
                    No Tasks
                </p>
            </div>
        </>)
    }
   
 
   return(
   <div className="flex gap-3 pt-3 flex-wrap pl-1 pr-1 col-start-2 col-end-7">
   {Array.from(taskObjs).filter((task) => task.status === "incomplete").map((task)=>
    <div key={task.taskthing} className="bg-gray-300 h-40 w-60 grid align-center rounded-sm border border-yellow-400 drop-shadow-xl">
       <p className="items-center w-full "> 
            {task.task}
        </p>
        <p>
            Due date:
            {task.endDate}
        </p>
       <button onClick={()=>completeTask(task)} className="border border-1 border-black rounded-sm bg-cyan-300 hover:bg-red-500 ">
            Complete
        </button>
    </div>
   )}
    
   </div>
   )
}