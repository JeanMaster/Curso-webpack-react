import React from 'react'
import githublogo from '../assets/static/github.png'
import twitterLogo from '../assets/static/twitter.png'
import instagramLogo from '../assets/static/instagram.png'
import '../assets/styles/components/Cards.scss'

const Cards = ({ data }) => {
    return(
    <div className="card">
            <div className="card_details">
                <div className="card_photo center circle">
                    <img src={data.picture.large} alt="Pic" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new -580 439 577.9 194"
                        viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40"></circle>
                    </svg>
                </div>
                <p className="card_title">Hi, My name is</p>
                <p className="card_value">{`${data.name.first} ${data.name.last}`}</p>
            </div>
                <div className="card_userdata">
                <ul>
                    <li>{data.email}</li>
                    <li>{data.location.country}</li>
                </ul>
        </div>
        <div className="card_social">
          <a href="https://twitter.com/MagoJeanMaster">
            <img src={twitterLogo} />
          </a>
          <a href="https://github.com/JeanMaster">
            <img src={instagramLogo}/>
          </a>
          <a href="https://www.instagram.com/jean.hallak/">
            <img src={githublogo} />
          </a>
        </div>
    </div>
    )
}

export default Cards