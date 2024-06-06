import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const SmoothScrollLink = ({ to, children }) => (
    <ScrollLink
        to={to}
        smooth={true}
        duration={500}
        offset={-50}
    >
        {children}
    </ScrollLink>
);

export default SmoothScrollLink;
