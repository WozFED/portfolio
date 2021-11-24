import React from 'react'

const Curriculum = () => {
    return (
        <div className="home__note">
            <div className="note">
              <div className="note__about">
                <div className="note__photo"></div>
                <div className="note__info">
                  <p>CV</p>
                  <h3>Patryk Woźniak</h3>
                  <p>E-mail: pwozniakgda@gmail.com</p>
                  <p>Telefon: 511500066</p>
                  <p>Data urodzenia: 04.10.1995r.</p>
                  <p>Miasto: Gdańsk</p>
                </div>
              </div>
              <div className="note__school">
                <h2>Wykształcenie:</h2>
                <p>2000-2000</p>
                <p>VIII Liceum Ogólnokształcące w Toruniu</p>
              </div>
              <div className = "note__work">
                <h2>Doświadczenie zawodowe</h2>
              </div>
            </div>
          </div>
    )
}

export default Curriculum;