import React from 'react'

const Header = (props) => <h2>{props.city.name ? `Weather in ${props.city.name}, ${props.city.country}:` : ''}</h2>
    
export default Header;