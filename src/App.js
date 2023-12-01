import "./App.css";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <Box  sx={{background: 'linear-gradient(96deg, rgba(255,27,107,1) 0%, rgba(69,202,255,1) 61%)', minHeight: '100vh', position: 'relative'}}>
        <Navbar />
        <Box
        sx={{
          maxWidth: '1020px',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 3,
          mb: 3,
          m: 'auto',
          p: 5,
          position: 'relative'
        }}>
        <Form />
        <TaskList />
        </Box>
      </Box>
    </>
  );
}

export default App;
