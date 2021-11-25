import { useEffect, useRef, useState } from "react"
import { Buttons, Command, SlashProps } from "../../types";
import { filterItems } from "../../utils";

export default function Slash({commands}: SlashProps) { 
    const [visibleCommands, setVisibleCommands] = useState<Command []>([]);
    const [selectedItem, setSelectedItem] = useState<Command>(commands[0]);
    const [slashMode, setSlashMode] = useState(false);
    const [slashIndex, setSlashIndex] = useState<number | null | undefined>();
    const [commandSubmited, setCommandSubmited ] = useState(false);

    const text = useRef<HTMLInputElement | null>(null);

    const onChange = () => {
        const value = text.current?.value || '';
        if(value?.includes('/')) {
            setSlashMode(true);
            setVisibleCommands(filterItems(commands, value.substring(slashIndex || 1)));
        } else {
            setSlashMode(false);
        }
    }

    useEffect(() => {
        setVisibleCommands(commands);
        setSelectedItem(commands[0]);
        const txt = text.current?.value;
        if (txt && !slashMode && text.current?.value && commandSubmited) {
             text.current.value = "";
             setCommandSubmited(false);
        }
    }, [slashMode])

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if(slashMode) {
            const currentCommandIndex = commands.findIndex(c => c.id === selectedItem.id);
            switch (event.key) { 
                case Buttons.ArrowDown: 
                    const index = currentCommandIndex + 1;
                    if(index !== commands.length) { 
                        setSelectedItem(commands[index])
                    }
                    break;
                case Buttons.ArrowUp:
                    event.preventDefault();
                    if(currentCommandIndex != 0) {
                        setSelectedItem(commands[currentCommandIndex - 1])
                    }
                    break;
                case Buttons.Enter:
                    setSlashIndex(text.current?.selectionStart)
                    selectedItem.method();
                    setSlashMode(false);
                    setCommandSubmited(true);
            }
        }
      }

    return (<>
    <input onChange={onChange} type='text' ref={text} onKeyDown={handleKeyPress}  />
    <ul>
       {slashMode && visibleCommands.map(c => 
            <li
            style={selectedItem.id === c.id ? {color: 'red'} : {color: 'blue'}}
            id={c.id} onClick={() => {
                c.method(text)}
            }
                
                >{c.text}</li>
        )}
    </ul>
    </>)
}