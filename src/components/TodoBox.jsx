import Button from "./Button";
import Task from "./Task";

const TodoBox=()=>{
    const handleAddBtn=()=>{

    }

    const handleEditBtn=()=>{

    }
    const handleDeleteBtn=()=>{

    }
    return(
        <div className="h-[500px] w-[600px] bg-blue-400 px-10 py-5">
            <div className="flex justify-between">
 <h1 className="left text-3xl font-bold mb-5">Todo App</h1>
            <Button text={"Add"} className={"px-4 bg-green-600 h-[30px] py-1 mt-1"} onClick={handleAddBtn}/>
            </div>
           <div className="flex justify-between">
           <Task /> 
           <Button text={"Edit"} className={"px-4 bg-green-600 h-[50px]"} onClick={handleEditBtn}/>
           <Button text={"Delete"} className={"bg-red-600 h-[50px] px-2"} onClick={handleDeleteBtn}/>
           </div>
        </div>
    )
}
export default TodoBox;