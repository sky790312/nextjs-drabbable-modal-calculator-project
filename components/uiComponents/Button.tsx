import React, { ReactNode } from 'react'
import styled from 'styled-components/'

interface Props extends StyledButtonProps {
  children: ReactNode
  onClick: () => void
}

type StyledButtonProps = {
  size?: 'md' | 'block'
  buttonStyle?: 'blue' | 'gray' | 'darkGray'
}

const defaultStyle: StyledButtonProps = {
  size: 'md',
  buttonStyle: 'gray'
}

export const Button: React.FC<Props> = React.memo(({ children, size = defaultStyle.size, buttonStyle = defaultStyle.buttonStyle, onClick }) => {
  return <StyledButton buttonStyle={buttonStyle} size={size} onClick={onClick}>{children}</StyledButton>;
});

const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  outline: none;
  font-size: 24px;

  ${props => {
    switch (props.buttonStyle) {
      case 'gray':
        return `
          color: ${props.theme.colors.black};
          background-color: ${props.theme.colors.gray};
        `
      case 'blue':
        return `
          color: ${props.theme.colors.white};
          background-color: ${props.theme.colors.blue};
        `
      case 'darkGray':
        return `
          color: ${props.theme.colors.white};
          background-color: ${props.theme.colors.darkGray};
        `
    }
  }}

  ${props => {
    switch (props.size) {
      case 'md':
        return `
          width: 80px;
          height: 80px;
          border-radius: 50%;
        `
      case 'block':
        return `
          width: 100%;
          height: 80px;
          border-radius: 40px;
        `
    }
  }}
`