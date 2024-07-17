import './App.css';
import EList from './componets/EList.tsx';
import EContainer from './componets/EContainer.tsx';

function App() {

  return (
    <div style={{display:'flex',width:'500px',position:'relative',flexDirection:'column',gap:10,textAlign:'left'}} >
      <div style={{border:'1px solid black'}}>
        <div>
          <h1>1.Element List use Hook</h1>
        </div>
        <EList />
      </div>

      <div style={{border:'1px solid black'}}>
        <div>
          <h1>2.Element List use Component</h1>
        </div>
        <div>
          <h2>1.No ref added</h2>
          <EContainer/>
        </div>
        <div>
          <h2>2.Using ref</h2>
          <EContainer addRef/>
        </div>
      </div>
    </div>

  )
}

export default App
