import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const P = styled.p`
  margin-top: 20px;
`;

const Editor: FC = () => (
  <div>
    <Link to="/">Home</Link>
    <P>TODO: Editor</P>
  </div>
);

export default Editor;
