import { TASK } from "../hooks/reducer"
import { ChangeEventHandler, useState } from "react";
import { FormControl, Checkbox, Input, InputAdornment, InputLabel, IconButton, FormGroup, FormControlLabel } from "@mui/material";
import { Done, ModeEdit, DeleteOutline } from "@mui/icons-material";
import { useListDispatch } from "../hooks/context";

interface TASK_ITEM_PROPS {
    task: TASK
}

const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
}
const handleMouseUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
}

const InProgressItem = ({ task }: TASK_ITEM_PROPS) => {
    const [editTaskValue, setEditTaskValue] = useState("");
    const [editStatus, setEditStatus] = useState(false);
    const [errorStatus, setErrorStatus] = useState(false)
    const dispatch = useListDispatch();
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setEditTaskValue(event.target.value)
    }
    if (editStatus) {
        return (
            <FormControl sx={{ width: "100% " }} variant="outlined">
                <InputLabel htmlFor="editTaskInput">{errorStatus ? "Error! Task text is empty" : "Edit task"}</InputLabel>
                <Input
                    id="editTaskInput"
                    onChange={handleChange}
                    error={errorStatus === true}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="Add new task"
                                onClick={() => {
                                    if (editTaskValue.trim().length <= 0) {
                                        setErrorStatus(true)
                                    } else {
                                        dispatch({ type: "EDIT_TASK", payload: { id: task.id, text: editTaskValue } })
                                        setErrorStatus(false)
                                        setEditStatus(false)
                                    }
                                }}
                                onMouseDown={handleMouseDown}
                                onMouseUp={handleMouseUp}
                            ><Done /></IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        )
    } else {
        return (
            <FormControl sx={{ width: "100%", }} component="fieldset" key={task.id}>
                <FormGroup sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} aria-label="position" row>
                    <FormControlLabel
                        control={<Checkbox />}
                        label={task.text}
                        labelPlacement="end"
                        onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })} />
                    <div>
                        <IconButton
                            sx={{ position: "end" }}
                            aria-label="Edit task"
                            onClick={() => setEditStatus(true)}
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                        ><ModeEdit /></IconButton>
                        <IconButton
                            aria-label="Delete task"
                            onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                        ><DeleteOutline /></IconButton>
                    </div>
                </FormGroup>
            </FormControl>
        )
    }
}
const DoneItem = ({ task }: TASK_ITEM_PROPS) => {
    const dispatch = useListDispatch();
    return (
        <FormControl sx={{ width: "100%" }} component="fieldset" key={task.id}>
            <FormGroup sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} aria-label="position" row>
                <FormControlLabel
                    control={<Checkbox checked />}
                    label={task.text}
                    labelPlacement="end"
                    onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
                />
                <IconButton
                    aria-label="Delete task"
                    onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                ><DeleteOutline /></IconButton>
            </FormGroup>
        </FormControl>
    )
}

export const SortItems = ({ task }: TASK_ITEM_PROPS) => {
    if (task.status) {
        return (<DoneItem task={task} />)
    } else {
        return (<InProgressItem task={task} />)
    }
}