
const Task=()=>{
    return(
 <div className="flex justify-between">
        <input className="h-[50px] w-3/4 bg-amber-500 py-3 px-2" />
           <Button text={"Edit"} className={"px-4 bg-green-600 h-[50px]"} onClick={handleEditBtn}/>
           <Button text={"Delete"} className={"bg-red-600 h-[50px] px-2"} onClick={handleDeleteBtn}/>
           </div>
    )
}
export default Task;