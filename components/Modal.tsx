import React, { ReactNode, useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components/'

const isClient = () => typeof window !== 'undefined'

type Props = {
  children: ReactNode
  isShow: Boolean
  closeModal: () => void
}

export const Modal: React.FC<Props> = ({ children, isShow = false, closeModal }) => {
  const bodyOverflow = useRef<string>((isClient() && window.getComputedStyle(document.body).overflow) ?? '');

  useEffect(() => {
    document.body.style.overflow = isShow ? 'hidden' : bodyOverflow.current;
  }, [isShow]);

  const handleCloseModal = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  const panelRef = useRef(null);
  const [mouseDown, setMouseDown] = useState<boolean>(false);

  const handleDrag = (movementX, movementY) => {
    const draggableContent = panelRef.current;
    if (!draggableContent) {
      return;
    }

    const { x, y } = draggableContent.getBoundingClientRect();

    draggableContent.style.left = `${x + movementX}px`;
    draggableContent.style.top = `${y + movementY}px`;
  };


  useEffect(() => {
    const handleMouseUp = () => setMouseDown(false);

    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.addEventListener('mouseup', handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleDrag(e.movementX, e.movementY);

    if (mouseDown) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseDown, handleDrag]);

  const handleMouseDown = () => setMouseDown(true);

  const modal = isClient() && createPortal(
    <StyledModal onClick={handleCloseModal}>
      <StyledModalInner ref={panelRef} onMouseDown={handleMouseDown}>
        <CloseBtn onClick={handleCloseModal}>x</CloseBtn>
        <div>{children}</div>
      </StyledModalInner>
    </StyledModal>,
    document.body
  );

  return <>{isShow && modal}</>;
};

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
`

const StyledModalInner = styled.div`
  position: absolute;
  cursor: grab;
  padding: 30px 30px;
  width: 580px;
  min-height: 200px;
  background-color: #fff;
  border-radius: 8px;
`

const CloseBtn = styled.div`
  position: absolute;
  right: 10px;
  top: 4px;
  font-size: 21px;
`
