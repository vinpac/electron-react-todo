import React from 'react';

const nonDragStyle = { background: "#333", WebkitAppRegion: "non-drag" }

class FrameHeader extends React.Component {
  render() {
    const { mainWindow } = window
    return (
      <div className="frame-header navbar" style={{ WebkitAppRegion: "drag" }}>
        <ul className="nav navbar-nav navbar-right window-buttons">
          <li>
            <button className="btn-window btn-window-minimize" onClick={() => mainWindow.minimize()}></button>
          </li>
          <li>
            <button className="btn-window btn-window-maximize" onClick={() => mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize()}></button>
          </li>
          <li>
            <button className="btn-window btn-window-close" onClick={() => mainWindow.close()}></button>
          </li>
        </ul>
      </div>
    );
  }
}

export default FrameHeader;
