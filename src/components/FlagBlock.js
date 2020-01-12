import React from 'react'; 

const FlagBlock = props => (
    <div>
        {props.flag === undefined ? (
                <div></div> 
            ):(
                <div>
                    <img className='flag-img' alt='flag' src={props.flag}/>
                </div>  
            )   
        }
    </div>
)

export default FlagBlock;