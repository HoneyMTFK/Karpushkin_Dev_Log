import { useList } from "../hooks/context";
import { SortItems } from "./task-item";

export const TaskList = () => {
    const list = useList()
    const tasksDone = list.filter((task) => task.status === true)
    const tasksInProgress = list.filter((task) => task.status === false)
    const inProgressLength = tasksInProgress.length;
    const doneLength = tasksDone.length;
    const inProgressListElements = () => tasksInProgress.map((task) => {
        return(<SortItems key={task.id} task={task}/>)
    })
    const doneListElements = () => tasksDone.map((task) => {
        return(<SortItems key={task.id} task={task}/>)
    })
    return (
           <>
                {inProgressLength !== 0 && (
                    <p>В плане: {`(${inProgressLength})`}</p> 
                )}
                {inProgressListElements()}
                {doneLength !== 0 && (
                    <p>Готово: {`(${doneLength})`}</p> 
                )}
                {doneListElements()}
           </>
    )
}