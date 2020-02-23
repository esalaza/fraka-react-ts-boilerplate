import * as React from 'react';
import styled from 'styled-components';

export interface HelloProps {
  compiler: string;
  framework: string;
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Hello = ({ compiler, framework }: HelloProps) => (
  <Title>
    Hello from {compiler} and {framework}!
  </Title>
);
