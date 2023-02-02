import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { addDate } from '../../../../services/date.services'

function TimeToBack() {
  const [date, setDate] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDate(date)
      await toast.success('La fecha ha sido agregada con éxito')
    } catch (error) {
      toast.error('Ha ocurrido un error al agregar la fecha')
      console.log(error)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Guardar fecha</button>
    </form>
  )
}

export default TimeToBack
