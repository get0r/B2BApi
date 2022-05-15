import React from 'react';

import { TypographyType, ImageType, ContainerType } from '../../assets/styles/theme';


const Logo = () => {
    return (
        <a className={ ContainerType.flexCenter } href="#">
            <img className={ ImageType.logoImage } alt="Logo" />
            <p className={ TypographyType.brandText }>Simien</p>
        </a>
    );
};

export default Logo;