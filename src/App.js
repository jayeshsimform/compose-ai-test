
import './App.css';
import { UseCommandLine } from './Hooks'
function App() {
  const {
    preDefCommand,
    commandValue,
    command,
    onCommandChange,
    onCommandKeyPress,
    resetCommand,
    inputElement,
    setCommand,
    setCommandValue
  } = UseCommandLine()


  return (
    <div className="container">
      <div className="command-wrapper">
        <div className="input-wrapper">
          <textarea
            onChange={onCommandChange}
            onKeyPress={onCommandKeyPress}
            value={commandValue}
            name="command"
            id="command"
            ref={inputElement}
            rows="2" cols="50"
          />
          <button onClick={resetCommand}>Clear</button>
        </div>
        {
          typeof commandValue === 'string' && commandValue?.startsWith("/") &&

          <ul className="command-list">
            {
              preDefCommand?.map((cmd) => {
                return (
                  <li key={cmd}>
                    <a
                      className={cmd === command ? 'active-command' : ''}
                      href="/#"
                      onClick={() => { inputElement?.current?.focus(); setCommand(cmd); setCommandValue(cmd); }}>
                      {cmd}
                    </a>
                  </li>
                )
              })
            }
          </ul>
        }
      </div>
    </div>
  );
}

export default App;
