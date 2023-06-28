import "@/styles/globals.css"
import InputForm from "@/components/InputForm";
import Todos from "@/components/Todos";
import Completed from "@/components/Completed";


export default function Home() {
  return(
  <div className="w-screen h-screen bg-gray-700">
    <InputForm/>
    <div className="grid grid-cols-7 min-h-fit min-w-fit">
      <Completed/>
      <Todos/>
    </div>
  </div>)
}
