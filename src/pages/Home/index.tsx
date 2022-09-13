import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  & > a {
    margin-right: 20px;
  }
`;

const Home: FC = () => (
  <div>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/editor">Editor</Link>
    </Nav>
    <main>
      <Outlet />
    </main>
  </div>
);

export default Home;
