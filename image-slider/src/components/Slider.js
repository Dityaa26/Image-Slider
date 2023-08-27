import React, {useState} from 'react'
import './Slider.css'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'

const Slider = ({data}) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () =>{
        // if(slide < (data.length-1)){
        //     setSlide(slide + 1)
        // }
        setSlide(slide === data.length-1 ? 0 : slide+1)
    }

    const prevSlide = () =>{
        // if(slide > 0){
        //     setSlide(slide - 1)
        // }
        setSlide(slide === 0 ? data.length-1 : slide-1)
    }

  return (
    <div className="slider">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
      {data.map((item) => {
        return (
          <img key={item.id} src={item.src} alt={item.alt} className={slide === item.id ? "slide" : "slide slide-hidden"} />
        );
      })}
      <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
      <span className='indicators'>
        {data.map((item) => {
          return <button key={item.id} onClick={()=>setSlide(item.id)} className={slide === item.id ? "indicator" : "indicator indicator-inactive"}></button>;
        })}
      </span>
    </div>
  );
}

export default Slider