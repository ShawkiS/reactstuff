import './App.css';
import MenuContextProvider from './components/menu/menuProvider';
import MenuDetails from './components/menu/MenuDetails';
import MenuItem from './components/menu/MenuItem';
import BulletPointViewer from './components/bulletPointViewer/BulletPointViewer';
import { useDispatch, useSelector } from 'react-redux';
import { addBullet, changeInputId } from './redux/actions';
import { State } from './types';
import { MutableRefObject, useRef } from 'react';
import { useIsRootAdd } from './components/bulletPointViewer/useIsRootAdd';
import Slash from './components/slash';


function App() {
  const dispatch = useDispatch();
  const bulletRootNode: State = useSelector((state: State) => state);

  const text = useRef<HTMLInputElement | null>(null);
  const color = useRef<HTMLInputElement | null>(null);
  const rootinput = useRef<HTMLInputElement | null>(null);

  const isRoot = useIsRootAdd();

  const addRoot = () => {
    dispatch(addBullet(text.current?.value!, color.current?.value!));
  }

  const rootAdd = () => {
    if(rootinput.current?.checked) {
    dispatch(changeInputId(0))
    }
  }

  const sayHello = () => {
    alert("hi");
  };

  return (
   <>
    <MenuContextProvider 
    isActiveId= "3" 
    isActiveStyle={{color: 'black', borderBottomColor: 'blue', borderBottomStyle: 'solid'}}
    notActiveStyle={{color: 'gray'}}
    >
      <ul id="items"> 
      <MenuItem id="1"> 
       <li>GM</li>
      </MenuItem>

      <MenuItem id="2"> 
        <li>GN</li>
      </MenuItem>
      <MenuItem id="3"> 
        <li>Ga</li>
      </MenuItem>
    </ul>

      <MenuDetails id="1"> 
        <h1>GMMMMMm</h1>
      </MenuDetails>

      <MenuDetails id="2"> 
        <input ref={text} />
        <input ref={color} />
        <input checked={isRoot} onChange={()=> rootAdd()} ref={rootinput} type='checkbox' /> 
        <label> Root</label>
        <button onClick={async () => addRoot()}>Add</button>      
       {<BulletPointViewer rootNode={bulletRootNode.bullet} />}
      </MenuDetails>

      <MenuDetails id="3"> 
       <Slash commands={[
    {id: "1", text: "Say Hello", method: sayHello, shortcut: "" },
    {id: "2", text: "Say", method: sayHello, shortcut: "" },
]} />
      </MenuDetails>

      </MenuContextProvider>
   </>
  );
}

export default App;
