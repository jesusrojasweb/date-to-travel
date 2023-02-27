import React from 'react'
import {
  Modal as ModalChakra,
  ModalOverlay,
  ModalFooter,
  ModalHeader,
  ModalBody,
  ModalContent,
  Button
} from '@chakra-ui/react'

import './Modal.css'

function Modal({
  isOpen,
  onClose,
  title,
  children,
  modalClass,
  size = '2xl',
  scrollBehavior = 'inside',
  footer,
  closeText
}) {
  return (
    <ModalChakra
      isOpen={isOpen}
      onClose={onClose}
      closeOnEsc
      isCentered
      size={size}
      className="Modal"
      scrollBehavior={scrollBehavior}
    >
      <ModalOverlay />
      <ModalContent>
        {title ? (
          <ModalHeader textAlign="center">
            <h4>{title}</h4>
          </ModalHeader>
        ) : null}
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button className="Modal__button" onClick={onClose} margin="0 auto">
            {closeText}
          </Button>
          {footer}
        </ModalFooter>
      </ModalContent>
    </ModalChakra>
  )
}

export default Modal
