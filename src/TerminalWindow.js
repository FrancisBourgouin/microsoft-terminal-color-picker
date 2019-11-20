import React from 'react';
import './TerminalWindow.css';

export function TerminalWindow(props) {
    const {colorStyling} = props;

    return(
        <main style={colorStyling.background}>
          <section className="commandPrompt">
            <span style={colorStyling.brightGreen}>francis@francisle.ninja</span>
            <span style={colorStyling.foreground}>:</span>
            <span style={colorStyling.blue}>~/windows-terminal-color-picker</span>
            <span style={colorStyling.foreground}>$ ls</span>            
          </section>
          <section className="lsResult">
            <span style={colorStyling.blue} >secret-project-folder</span>
            <span style={colorStyling.brightGreen} >exec-chicken-dance.sh</span>
            <span style={colorStyling.brightYellow} >media-device</span>
            <span style={colorStyling.brightCyan} >valid-symlink</span>
            <span style={colorStyling.brightPurple} >image-file.png</span>
            <span style={colorStyling.brightRed} >tar-file.tar.gz</span>
            <span style={colorStyling.brightRed} ></span>
            <span style={colorStyling.brightRed} ></span>
          </section>
          <section className="commandPrompt">
          <span style={colorStyling.brightGreen}>francis@francisle.ninja</span>
            <span style={colorStyling.foreground}>:</span>
            <span style={colorStyling.blue}>~/windows-terminal-color-picker</span>
            <span style={colorStyling.foreground}>$ yarn add @something/examplepackage</span>           
          </section>
          <section className="yarnResult">
            <p>
            <span style={colorStyling.brightYellow} >warning</span>  
            <span style={colorStyling.foreground} >"react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.17.1" has unmet peer dependency.</span>  
            </p>
            <p>
              <span style={colorStyling.brightBlack}>[4/4]</span>
              <span style={colorStyling.foreground}>Building fresh packages...</span>
            </p>
            <p>
              <span style={colorStyling.blue}>success</span>
              <span style={colorStyling.foreground}> Saved lockfile</span>
            </p>
            <p>
              <span style={colorStyling.blue}>success</span>
              <span style={colorStyling.foreground}> Saved 1 new dependency</span>
            </p>
            <p>
              <span style={colorStyling.foreground}>Done in 10.03s.</span>
            </p>
          </section>
          <section className="commandPrompt">
          <span style={colorStyling.brightGreen}>francis@francisle.ninja</span>
            <span style={colorStyling.foreground}>:</span>
            <span style={colorStyling.blue}>~/windows-terminal-color-picker</span>
            <span style={colorStyling.foreground}>$ </span>           
          </section>
        </main>
    )
}