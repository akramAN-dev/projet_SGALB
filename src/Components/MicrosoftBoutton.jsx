import React from 'react';
import Button from './Button';
import miscrosoftImage from '../assets/images/microsoft.png'

const MiscrosoftBoutton = () => {
    const miscrosoftLogin = () => {
        window.location.href = "#";
    };

    return (
        <div>
            <Button 
                bgBtn="#1E1E1E" 
                login={miscrosoftLogin} 
                logo={
                    <div className='w-6 h-6'>
                        <img src={miscrosoftImage}/>
                    </div>
                }
                text={"login with miscrosoft"}
            />
        </div>
    );
};

export default MiscrosoftBoutton;
