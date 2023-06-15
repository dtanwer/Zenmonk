import React, { useRef, useState } from 'react'
import './index.css';
import Nav from '../MusicComp/nav';
import Img from '../MusicComp/Img';
import Title from '../MusicComp/Title';
import Music from '../MusicComp/Music';
import Bar from '../MusicComp/Bar';
import MoreMusic from '../MusicComp/MoreMusic';
import List from '../List';
import db from '../../data/db.json';


function Player() {
  const myaudio = useRef(new Audio(""));
  const [isList, setIsList] = useState(false);
  const [isplay, setIsPlay] = useState(false);
  const [isSheffel, setIsSheffel] = useState(false);
  const [current, setCurrent] = useState(0);
  const handelPlay = (i = current) => {
    setCurrent(i);
    myaudio.current.src = db.data[current].srco;
    myaudio.current.play();

  }
  const handelShuffel = () => {
    const index = Math.floor(Math.random() * 6);
    handelPlay(index);
  }
  const handelNext = () => {
    if (isSheffel) {
      handelShuffel();
    }
    else {
      if (current < 5) {
        setIsPlay(true)
        const ct = current + 1;
        handelPlay(ct);
      }
    }

  }
  const handelPrev = () => {
    if (current - 1 >= 0) {
      const ct = current - 1;
      console.log(ct);
      handelPlay(ct);
      setIsPlay(true)
    }
  }
  const handelPause = () => {
    myaudio.current.pause();
  }
  return (
    <div className='player'>
      <Nav />
      <Img current={current} db={db.data} />
      <Title current={current} db={db.data} />
      <Bar />
      <Music isSheffel={isSheffel} setIsSheffel={setIsSheffel} handelPrev={handelPrev} handelNext={handelNext} handelPlay={handelPlay} handelPause={handelPause} isplay={isplay} setIsPlay={setIsPlay} />
      <MoreMusic setIsList={setIsList} db={db.data} />
      {isList === true ? <List setIsPlay={setIsPlay} setIsList={setIsList} handelPlay={handelPlay} db={db.data} /> : ""}


    </div>
  )
}

export default Player