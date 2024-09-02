import React from 'react'
import Vector from"./assets/1st.jpg"

const Card = (props) => {
    console.log(props)
    return (
        <div>
              <div className={`flex flex-col justify-center ${props.color} p-4 rounded shadow-lg`}>
        <img src={Vector}
         alt="" className="w-80"/>
        <h1 className="text-2x1 font-medium">{props.heading}</h1>
        <p className="text-gray-600">{props.desc}</p>
      </div>
        </div>
    )
}

export default Card
