import { Link } from "../components";
import Doughnut from "../components/Doughnut";
import Crazyline from "../components/Crazyline";
import HorizontalBar from "../components/HorizontalBar";

export default Home;

function Home() {
  return (
    <div>
      <h1>Hello, Welcome</h1>

      <div style={{ display: "flex" }}>
        <div style={{ width: "320px", marginRight: "200px" }}>
          <Doughnut />
        </div>
        <div style={{ width: "520px" }}>
          <Crazyline />
        </div>
      </div>

      <p>
        <Link href="/users">&gt;&gt; Users</Link>
      </p>
    </div>
  );
}
