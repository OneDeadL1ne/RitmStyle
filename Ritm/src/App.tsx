import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
    return (
        <div className="bg-green-300 h-screen w-screen flex justify-center items-center ">
            <div>
                <Input />
                <Button>Нажми меня</Button>
            </div>
        </div>
    );
}

export default App;
