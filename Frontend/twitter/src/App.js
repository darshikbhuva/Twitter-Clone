import { useSelector } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import { Toaster } from "react-hot-toast";

function App() {
  const { user } = useSelector((store) => store.user);
  return (
    <div className="bg-black">
      <Body />
      <Toaster />
    </div>
  );
}

export default App;
