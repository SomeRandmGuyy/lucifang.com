import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';

const ToggleButton = styled.button`
  position: fixed;
  top: 16px;
  right: 16px;
  background: ${({ theme }) => theme.bg.primary};
  color: ${({ theme }) => theme.text.primary};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease, color 0.3s ease;
  z-index: 1000;

  &:hover {
    background: ${({ theme }) => theme.bg.secondary};
    color: ${({ theme }) => theme.text.onPrimary};
  }

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
  }
`;

const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme}>
      🌓
    </ToggleButton>
  );
};

export default ThemeToggleButton;
