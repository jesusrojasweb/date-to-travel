import React from 'react'
import BasicLayout from '../../components/BasicLayout/BasicLayout'
import Counter from '../../components/Counter'
import Map from '../../components/Map/Map'

import './Home.css'

function Home() {
  return (
    <BasicLayout>
      <section className="Home">
        <Map />
        <Counter targetDate={'2023-05-23'} />
      </section>
    </BasicLayout>
  )
}

export default Home
