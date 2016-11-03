import React from 'react'
import HomeView from './routes/home/HomeView';
import FrameHeader from './components/elements/FrameHeader';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <FrameHeader />
        <HomeView />
      </div>
    );
  }
}

export default App;
