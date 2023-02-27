import React, { useState } from 'react'
import Modal from '../../../Modal/Modal'

function FapModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeText="Cerrar">
      <h1>hola</h1>
    </Modal>
  )
}

export default FapModal
