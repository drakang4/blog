import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';

const useTheme = () => useContext(ThemeContext);

export default useTheme;
