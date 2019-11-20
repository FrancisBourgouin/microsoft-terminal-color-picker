import React from 'react';
import './WindowsTerminal.css';
import { TerminalWindow } from './TerminalWindow';
import { TerminalHeader } from './TerminalHeader';

export function WindowsTerminal(props){
    const {colorScheme} = props    
      const colorStyling = {
        background: {backgroundColor: colorScheme.background},
        black: {color: colorScheme.black},
        blue: {color: colorScheme.blue},
        brightBlack: {color: colorScheme.brightBlack},
        brightBlue: {color: colorScheme.brightBlue},
        brightCyan: {color: colorScheme.brightCyan},
        brightGreen: {color: colorScheme.brightGreen},
        brightPurple: {color: colorScheme.brightPurple},
        brightRed: {color: colorScheme.brightRed},
        brightWhite: {color: colorScheme.brightWhite},
        brightYellow: {color: colorScheme.brightYellow},
        cyan: {color: colorScheme.cyan},
        foreground: {color: colorScheme.foreground},
        green: {color: colorScheme.green},
        purple: {color: colorScheme.purple},
        red: {color: colorScheme.red},
        white: {color: colorScheme.white},
        yellow: {color: colorScheme.yellow}
      }
      return(
        <div className="windowsTerminal">
        <TerminalHeader />
        <TerminalWindow colorStyling={colorStyling} colorScheme={colorScheme}/>
      </div>
      )
}