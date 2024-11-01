import React from 'react'
import style from './about.module.scss';
import { ImageBox } from '@/components';

function About() {
  return (
    <section className={style.section}>
        <div className={style.title}>
            <h4>Merchant Khalid</h4>
        </div>
        <div style={{display:'flex'}}>
            <ImageBox />
            <ImageBox />
            <ImageBox />
            <ImageBox />
            <ImageBox />
            <ImageBox />
        </div>
    </section>
  )
}

export default About