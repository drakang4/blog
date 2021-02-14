import React from 'react';
import { ThemeProvider } from './components/ThemeContext';

interface Props {
  children?: React.ReactNode;
}

const App = ({ children }: Props) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
