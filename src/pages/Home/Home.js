import React, { useContext, useEffect, useState } from 'react'
import BasicLayout from '../../components/BasicLayout/BasicLayout'
import Counter from '../../components/Counter'
import FapTimes from '../../components/FapTimes/FapTimes'
import Map from '../../components/Map/Map'

import './Home.css'
import { useDateCounter } from './hooks/useDateCounter'

function Home() {
  const { longDate, date } = useDateCounter()

  return (
    <BasicLayout>
      <section className="Home">
        <h2 className="Home__title">Fecha de Recuentro</h2>
        <h5 className="Home__date">{longDate}</h5>
        <Map />
        <Counter targetDate={date} />
        <FapTimes />
      </section>
    </BasicLayout>
  )
}

export default Home
