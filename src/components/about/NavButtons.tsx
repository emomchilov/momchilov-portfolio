import { Link } from "react-router-dom";
import Button from "../shared/Button";

export function NavButtons() {
  return (
    <div className="flex flex-col pb-12">
      <Link to="/tech">
        <Button onClick={() => null}>tech</Button>
      </Link>
      <Link to="https://github.com/emomchilov">
        <Button onClick={() => null}>github</Button>
      </Link>
      <Link to="https://www.linkedin.com/in/edenmomchilov/">
        <Button onClick={() => null}>linkedin</Button>
      </Link>
    </div>
  );
}
