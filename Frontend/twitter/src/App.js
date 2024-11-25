import "./App.css";
import Body from "./components/Body";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-black">
      <Body />
      <Toaster />
    </div>
  );
}

export default App;
