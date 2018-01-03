// For hot reload settings
declare var module: { hot: any }
declare var require: {
  (path: string): any
  <T>(path: string): T
  (paths: string[], callback: (...modules: any[]) => void): void
  ensure: (
    paths: string[],
    callback: (require: <T>(path: string) => T) => void
  ) => void
}

import RX = require('reactxp')
import App = require('./App')

RX.App.initialize(true, true)

if (RX.Platform.getType() === 'web') {
  const { AppContainer } = require('react-hot-loader')

  if (module.hot) {
    module.hot.accept()
  }

  RX.UserInterface.setMainView(
    <AppContainer>
      <App />
    </AppContainer>
  )
} else {
  RX.UserInterface.setMainView(<App />)
}
