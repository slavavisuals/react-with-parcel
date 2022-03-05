import ReactDOM from 'react-dom';
import Test from './components/Test';

const App = () => {
  return (
    <>
      {/* <h1>Hello from React</h1> */}
      <Test />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
