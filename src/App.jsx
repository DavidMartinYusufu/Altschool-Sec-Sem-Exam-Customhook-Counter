import "./App.css";
import CounterApp from "./CounterApp";
import AppErrorBoundary from "./Components/ErrorBoundary";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <CounterApp />
    </>
  );
}

export default App;
