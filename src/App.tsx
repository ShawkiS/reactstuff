import './App.css';
import MenuContextProvider from './components/menu/menuProvider';
import MenuDetails from './components/menu/MenuDetails';
import MenuItem from './components/menu/MenuItem';
import BulletPointViewer from './components/bulletPointViewer/BulletPointViewer';
import { BulletPointNode } from './components/types';


const EXAMPLE_TREE: BulletPointNode = {
  text: "A",
  color: "red",
  children: [
    {
      text: "1",
      children: []
    },
    {
      text: "2",
      children: [
        {
          text: "A",
          children: [{
            text: "A",
            children: [{
              text: "A",
              children: []
            },
    
            {
              text: "B",
              color: "blue",
              children: [{
                text: "A",
                children: []
              },
      
              {
                text: "B",
                color: "red",
                children: []
              },
      
              {
                text: "C",
                children: [ {
                  color: 'orange',
                  text: "C",
                  children: [{
                    color: 'orange',
                    text: "C",
                    children: []
                  }]
                }]
              }]
            },
    
            {
              text: "C",
              children: [{
                text: "A",
                children: []
              },
      
              {
                text: "B",
                color: "red",
                children: []
              },
      
              {
                text: "C",
                color: 'green',
                children: []
              }]
            }]
          },
  
          {
            text: "B",
            color: "red",
            children: []
          },
  
          {
            color: 'green',
            text: "C",
            children: []
          }]
        },

        {
          text: "B",
          color: "red",
          children: []
        },

        {
          text: "C",
          children: []
        }
      ]
    },
    {
      text: "3",
      children: []
    }
  ]
};

function App() {
  return (
   <>
    <MenuContextProvider 
    isActiveId= "1" 
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
    </ul>

      <MenuDetails id="1"> 
        <h1>GMMMMMm</h1>
      </MenuDetails>

      <MenuDetails id="2"> 
      <h1>GNNNNNNn</h1>
        <BulletPointViewer rootNode={EXAMPLE_TREE} />
      </MenuDetails>

      </MenuContextProvider>
   </>
  );
}

export default App;
