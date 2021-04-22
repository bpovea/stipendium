import React from 'react';

import { Github,Linkedin } from 'react-bootstrap-icons';

// state less Component
const BottomSection = () => (
    <div>
        <h5>Powered by <a href="https://bpovea.github.io/" target="_blank" rel="noreferrer">Byron Povea</a></h5>
        <h5><a href="https://github.com/bpovea" target="_blank" rel="noreferrer"><Github/> GitHub</a></h5>
        <h5><a href="https://www.linkedin.com/in/bpovea/" target="_blank" rel="noreferrer"><Linkedin/> Linkedin</a></h5>
    </div>
);

export default BottomSection;