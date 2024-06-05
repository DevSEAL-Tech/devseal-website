import { IndustriesHero, IndustriesSubSection } from '@/components'
import React from 'react'

type Props = {}

const Industries = (props: Props) => {
  return (
    <main>
      <IndustriesHero/>
      <IndustriesSubSection />
    </main>
  )
}

export default Industries