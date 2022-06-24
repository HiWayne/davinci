import { FC } from "react";
import { Link, Outlet } from "react-router-dom";

const Home: FC = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/editor">Editor</Link>
    </nav>
    <main>
      <Outlet />
    </main>
  </div>
);

export default Home;
