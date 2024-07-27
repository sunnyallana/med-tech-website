import React from 'react'
import HeadInfo from './HeadInfo'
import AboutUs from './AboutUs'
import Mission from './Mission'
import Values from './Values'
import Impact from '../home/Impact'
import CoverImageComponent from '../CoverImageComponent'

export default function OurStory() {
  return (
    <>
    <CoverImageComponent image="HealthCareCoverImage.jpg" title="Scripting a Legacy for 40 years and counting"/>
     <HeadInfo/> 
     <AboutUs/>
     <Mission/>
     <Values/>
     <Impact/>
    </>
  )
}
