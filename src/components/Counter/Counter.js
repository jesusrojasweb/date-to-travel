import React, { useState, useEffect } from 'react'

import './Counter.css'

const Counter = ({ targetDate }) => {
  const [months, setMonths] = useState(0)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime()
      const date = new Date(targetDate)
      const timeLeft = date.getTime() - currentTime

      setMonths(Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30)))
      setDays(Math.floor(timeLeft / (1000 * 60 * 60 * 24)))
      setHours(
        Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      )
      setMinutes(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)))
      setSeconds(Math.floor((timeLeft % (1000 * 60)) / 1000))
    }, 1000)

    return () => clearInterval(intervalId)
  }, [targetDate])

  const padWithZero = (number) => {
    return number.toString().padStart(2, '0')
  }

  return (
    <div className="Counter">
      <div className="Counter__item">
        {months} <span className="Counter__type">Meses</span>
      </div>
      <div className="Counter__item">
        {days} <span className="Counter__type">Días</span>
      </div>
      <div className="Counter__item">
        {padWithZero(hours)} <span className="Counter__type">Horas</span>
      </div>
      <div className="Counter__item">
        {padWithZero(minutes)} <span className="Counter__type">Minutos</span>
      </div>
      <div className="Counter__item">
        {padWithZero(seconds)} <span className="Counter__type">Segundos</span>
      </div>
    </div>
  )
}

export default Counter
