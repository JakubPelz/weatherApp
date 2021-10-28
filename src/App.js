import Index from './components';
import Forecast from './components/Forecast';


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function App() {
  return (
    <>
      <div className="App">
        <Index />
      </div>
      <Forecast />
    </>
  );
}

export default App;
