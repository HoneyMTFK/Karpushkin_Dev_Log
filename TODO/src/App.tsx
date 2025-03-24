import './App.css'
import { Box } from '@mui/material';
import { NewTask } from './components/add-task'
import { TaskList } from './components/task-list'
import { ListProvider } from './hooks/provider';

function App() {
  return (
    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center",
     minWidth: "250px", width: "450px"}}>
      <ListProvider>
        <h1>TODO</h1>
        <NewTask />
        <TaskList />
      </ListProvider>
    </Box>
  );
}
export default App
