import React from 'react'
import HotIndexCard from './HotIndexCard.js'
import '../styles/hotAccess.css'

function HotAccessiories({music,musicCover}) {
  return (
    <div className='hotAccess'>
        <div>
            <img src={musicCover}></img>
        </div>
        <div>
            {
                music.map((item,index)=>{
                  return   <HotIndexCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  ></HotIndexCard>
                })
            }
        </div>

    </div>
  )
}

export default HotAccessiories