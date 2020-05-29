import React from 'react';
import ReactDOM from 'react-dom';

// import Chess from './components/Chess';
import Board from 'components/Board';
import Chess from 'components/Chess';

class App extends React.Component {
  render() {
    return (
      <>
        <Board>
          <Chess />
        </Board>
      </>
    );
  }
}
const root = document.getElementById('root');
ReactDOM.render(<App />, root);
