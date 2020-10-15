import React from 'react'
import './header.style.scss'

import {ReactComponent as FbLogo} from '../../Assets/facebook-brands.svg'

import {ReactComponent as Logo} from './search-solid.svg'
import ButtonExampleCompact from './Right-Header/Buttons'

const  Header=()=>(
    <div className="header-container">
        <div className="Search-header">
        <div className="logo">
           <FbLogo className="fb" />
        </div>

        <div className="Search-box">
            
        <div className="Search-box2">
            <div className="serarch-logo">
            <Logo/>
            </div>
            <input className="input-style" type="text" placeholder="search facebook" />

</div>
                </div>
            

        </div>
        <div className="Center-Box">
            
            </div>

            <div className="left-header">
            <ButtonExampleCompact/>
            </div>
            
    </div>
)
export default Header;