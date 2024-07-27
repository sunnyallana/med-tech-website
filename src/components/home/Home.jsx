import React from 'react';
import ImageSlider from './ImageSlider';
import WhoWeAre from './WhoWeAre';
import Principles from './Principles';
import StateProvider from './StateProvider';
import Solutions from './Solutions';
import Impact from './Impact';
import InTouch from './InTouch';
import JoinUsComponent from '../Contact/JoinUsComponent';


export default function Home() {
  return (
    <>
    <ImageSlider/>
    <WhoWeAre/>
    <Principles/>
    <StateProvider/>
    <Solutions/>
    <Impact/>
    <InTouch/>
    <JoinUsComponent/>
    </>
  );
}
