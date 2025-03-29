import React from 'react';
import Button from './Button';

const GoogleBoutton = () => {
    const googleLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/google";
    };

    return (
        <div>
          
            <Button 
                bgBtn="#CB2027" 
                login={googleLogin} 
                logo={
                <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
                  <span className="text-[#CB2027] font-bold text-xl bg-white rounded-full px-2">G</span>
                </span>
              } 
              text={"login with google"}
            />
        </div>
    );
};

export default GoogleBoutton;
