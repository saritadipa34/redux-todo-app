import Button from "./Button";

const TodoBox=()=>{
    const handleAddBtn=()=>{
console.log("add")
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
          {

          }
        </div>
    )
}
export default TodoBox;