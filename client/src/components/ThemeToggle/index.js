import React from 'react';
import { useTheme } from 'context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import styled from 'styled-components/macro';

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.text};
  transition: background-color 0.2s ease;
  font-size: 1.2rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }

  &:focus {
    outline: none;
  }
`;

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </ToggleButton>
  );
}

export default ThemeToggle;

