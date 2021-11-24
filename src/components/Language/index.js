import React, {useState} from 'react'

const Language = () =>{
    const [show, setShow] = useState(true)
    return ( 
        <div className = 'language'
        onClick = {() => setShow(!show)}> 
        <div>
        <p>Wybierz język</p>    
        </div>
        {show ? <div className = "language__chose">halo?</div> : 
        null
        }
            
        </div>
        
    )
}

export default Language;