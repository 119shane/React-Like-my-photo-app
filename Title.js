import React from "react"

export default function Title({text}){
    
    return (
        <div>
            <h1 className="title text_center">{!text ? "Title" : text}</h1>
        </div>
    )
}