import React, { useState } from 'react'

export default function Flashcard({flashcard}) {
    const [flip, setFlip] = useState(false)
    console.log("card"+ (flip ? ' flip' : ''))
    return (
        <div 
        className = {'card'+(flip ? ' flip' : '')}
        onClick={()=>setFlip(!flip)}>
            <div className="front">
                {flashcard.question}
                <div className="options">
                    {flashcard.options.map(option => {
                        return <div> o {option} </div>

                    })}
                </div>
            </div>
            <div className="back">{flashcard.answer}</div>
        </div>
    )
}
