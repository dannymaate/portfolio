import { Link } from "react-router-dom";
import Template from "../components/Template";

export default function App() {
    return (
        <Template title="Dan Morgan">
            <p>See my <Link to={`/works`}>published work</Link>.</p>
        </Template>
    );
}