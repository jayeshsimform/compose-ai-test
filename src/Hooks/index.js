import { useState, useRef } from "react";

export const UseCommandLine = () => {
    //Predefined Command
    const preDefCommand = ['/add:', '/uppercase:'];
    //Command value for textarea
    const [commandValue, setCommandValue] = useState('');
    //Set Current Command
    const [command, setCommand] = useState('');

    //Set Textarea ref value
    const inputElement = useRef();

    //Set Textarea Value
    const onCommandChange = (e) => {
        const value = e.target.value;
        setCommandValue(value);
    }

    //Fire Command action on Enter key
    const onCommandKeyPress = (e) => {
        const value = e.target.value;
        if (e.key === 'Enter') {
            if (!value.startsWith("/")) {
                resetCommand('')
            }
            else {
                switch (command) {
                    case '/uppercase:':
                        textUpperCase();
                        e.preventDefault();
                        break;
                    case '/add:':
                        textToSum();
                        e.preventDefault();
                        break;
                    default:
                        resetCommand()
                }
            }
        }
    }

    //Conver text to uppercase
    const textUpperCase = () => {
        const tempValue = commandValue?.split('/uppercase:');
        setCommandValue(tempValue?.[1]?.toUpperCase());
        setCommand('')
    }
    //Get multiple values sum 
    const textToSum = () => {
        const numbers = commandValue?.split('/add:');
        const sumValue = numbers?.[1]?.split(' ');

        // eslint-disable-next-line array-callback-return
        var filtered = sumValue?.filter((item) => {
            if (item) {
                return !isNaN(item);
            }

        }).reduce((a, b) => parseInt(a) + parseInt(b), 0);

        setCommandValue(filtered);
        setCommand('')
    }

    //Clear Text are value
    const resetCommand = () => {
        setCommand('');
        setCommandValue('');
        inputElement?.current?.focus();
    }

    return {
        preDefCommand,
        commandValue,
        command,
        setCommand,
        setCommandValue,
        onCommandChange,
        onCommandKeyPress,
        textUpperCase,
        textToSum,
        resetCommand,
        inputElement
    }
}


