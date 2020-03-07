import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinux } from '@fortawesome/free-brands-svg-icons';
import { faTimes, faChevronDown, faSquare, faHorizontalRule, faPlus } from '@fortawesome/pro-light-svg-icons';
import './TerminalHeader.css'

export function TerminalHeader(){
    return(
        <header>
          <section>
          <FontAwesomeIcon icon={faLinux} />
            <span>francis@francisle.ninja: ~/home/pequenopollo</span>
            <FontAwesomeIcon icon={faTimes} />
          </section>
          <FontAwesomeIcon icon={faPlus} />
          <FontAwesomeIcon icon={faChevronDown} />
          <section>
            <FontAwesomeIcon icon={faHorizontalRule} />
            <FontAwesomeIcon icon={faSquare} />
            <FontAwesomeIcon icon={faTimes} />
          </section>
        </header>
    )
}