import React, { ReactNode, useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components/'

const isClient = () => typeof window !== 'undefined'

interface Props extends StyledModalProps {
  children: ReactNode
  isShow: boolean
  closeModal: () => void
}

type StyledModalProps = {
  view: 'pc' | 'mobile'
}

const defaultStyle: StyledModalProps = {
  view: 'pc',
}

export const Modal: React.FC<Props> = ({
  children,
  isShow = false,
  view = defaultStyle.view,
  closeModal,
}) => {
  const bodyOverflow = useRef<string>(
    (isClient() && window.getComputedStyle(document.body).overflow) ?? '',
  )

  useEffect(() => {
    document.body.style.overflow = isShow ? 'hidden' : bodyOverflow.current
  }, [isShow])

  const handleCloseModal = (event: {target: EventTarget, currentTarget: EventTarget}) => {
    if (event.target === event.currentTarget) {
      closeModal()
    }
  }

  const modalContentRef = useRef(null)
  const [mouseDown, setMouseDown] = useState<boolean>(false)

  useEffect(() => {
    const handleMouseUp = () => setMouseDown(false)

    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.addEventListener('mouseup', handleMouseUp)
    }
  }, [])

  useEffect(() => {
    const handleDrag = (movementX: number, movementY: number) => {
      const draggableContent = modalContentRef.current
      if (!draggableContent) {
        return
      }

      const { x, y } = draggableContent.getBoundingClientRect()

      draggableContent.style.left = `${x + movementX}px`
      draggableContent.style.top = `${y + movementY}px`
    }

    const handleMouseMove = (e: MouseEvent) =>
      handleDrag(e.movementX, e.movementY)

    if (mouseDown) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseDown])

  const handleMouseDown = () => setMouseDown(true)

  const modal =
    isClient() &&
    createPortal(
      <StyledModal onClick={handleCloseModal}>
        <StyledModalInner
          view={view}
          ref={modalContentRef}
          onMouseDown={handleMouseDown}
        >
          <CloseBtn onClick={handleCloseModal}>x</CloseBtn>
          <div>{children}</div>
        </StyledModalInner>
      </StyledModal>,
      document.body,
    )

  return <>{isShow && modal}</>
}

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.lightGray};
  z-index: 99;
`

const StyledModalInner = styled.div<StyledModalProps>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;

  ${props => {
    switch (props.view) {
      case 'pc':
        return `
          min-height: 200px;
          cursor: grab;
        `
      case 'mobile':
        return `
          bottom: 0;
          width: 100%;
          height: 50%;
          overflow: auto;
        `
    }
  }}
`

const CloseBtn = styled.div`
  position: absolute;
  right: 10px;
  top: 4px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.color};
`
