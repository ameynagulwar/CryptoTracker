import React, { useState } from 'react'
import "./style.css"

function CoinInfo({name, desc}) {

       const shortDesc = desc?.slice(0, 350) + "<span style='color:var(--grey)'> Read More...</span>";
       const longDesc = desc + "<span style='color:var(--grey)'> Read Less...</span>";
       const [readMore, setReadMore] = useState(false);
    
  return (
    <div className='coins-wrapper' style={{padding: "0rem 1rem"}}>
        <h2 className='coinInfo-heading'>{name}</h2>
        {desc && desc.length > 350? (
             <p onClick={() => setReadMore(!readMore)} className='coinInfo-desc' dangerouslySetInnerHTML={{__html: !readMore ? shortDesc : longDesc}}/>
        ) : (
            <p className='coinInfo-desc' dangerouslySetInnerHTML={{__html: desc}}/>
        )}
    </div>
  )
}

export default CoinInfo