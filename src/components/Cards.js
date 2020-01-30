import React from 'react'

const Cards = props => {
    return (
        <div className="card text-center shadow" style={{height: '25rem'}}>
            <div className="overflow">
                <img src={props.imgsrc} alt='app1' className="card-img-top"/>
            </div>

            <div className="card-body text-dark">
            <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.subtext}</p>
                <a className="btn btn-primary" href={props.link} target="_blank" rel="noopener noreferrer">View</a>
            </div>
        </div>
    )
}

export default Cards