import { useEffect, useState } from 'react'
import { getDate } from '../../../services/date.services'

export const useDateCounter = () => {
  const [longDate, setLongDate] = useState('')
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const gettingDate = async () => {
      const { date: newDate } = await getDate()
      setDate(newDate)
    }
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    const newDate = new Date(date).toLocaleDateString('es', options)
    setLongDate(newDate)
    gettingDate()
  }, [date])

  return { date, longDate }
}
