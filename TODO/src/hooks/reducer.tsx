import { v4 as uuidv4 } from 'uuid';

export interface TASK {
    id: string,
    text: string,
    status: boolean
}

export type ACTION =
    | { type: "ADD_TASK"; payload: string }
    | { type: "DELETE_TASK"; payload: string }
    | { type: "TOGGLE_TASK"; payload: string }
    | { type: "EDIT_TASK"; payload: { id: string; text: string } };

export const innitialState = [
    {
        id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        text: "React",
        status: false
    },
    {
        id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcg7n",
        text: "MUi",
        status: false
    },
    {
        id: "9b1fab4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        text: "TypeScript",
        status: false
    },
    {
        id: "1b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        text: "HTML",
        status: true
    },
    {
        id: "5b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcg7n",
        text: "CSS",
        status: true
    },
    {
        id: "9b2fab4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        text: "JavaScript",
        status: true
    },
];

export const listReducer = (state: TASK[], action: ACTION) => {
    switch (action.type) {
        case "ADD_TASK": {
            return [
                ...state,
                { id: uuidv4(), text: action.payload, status: false },
            ];
        }
        case "DELETE_TASK": {
            return state.filter((task) => task.id !== action.payload)
        }
        case "EDIT_TASK": {
            return state.map((task) => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        text: action.payload.text
                    }
                } else {
                    return (task)
                }
            })
        }
        case "TOGGLE_TASK": {
            const toggleStatusTask = state.map((task) => {
                if (task.id !== action.payload) {
                    return task;
                } else {
                    return {
                        ...task,
                        status: !task.status,
                    };
                }
            });
            return toggleStatusTask;
        }
        default: {
            throw Error("Unknown action: " + (action as { type: string }).type);
        }
    }
}
