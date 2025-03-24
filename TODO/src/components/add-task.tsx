import { FormControl, Input, InputAdornment, InputLabel, IconButton } from "@mui/material";
import { AddTask } from "@mui/icons-material";
import { ChangeEventHandler, useState } from "react"
import { useListDispatch } from "../hooks/context";

export const NewTask = () => {
    const [newTaskName, setNewTaskName] = useState("");
    const dispatch = useListDispatch();
    const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }
    const handleMouseUp = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setNewTaskName(event.target.value)
    }
    const handleClick = () => {
        dispatch({
            type: "ADD_TASK",
            payload: newTaskName,
        });
    }
    return (
        <FormControl sx={{ width: "100%", marginBottom: "20px" }}  variant="standard">
            <InputLabel htmlFor="addTaskInput">Add task</InputLabel>
            <Input
                id="addTaskInput"
                onChange={handleChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="Add new task"
                            onClick={handleClick}
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                        ><AddTask /></IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}