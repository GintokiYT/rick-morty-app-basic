import { Fragment } from "react"

import Header from "./components/Header"
import Characters from "./components/Characters"

const App = () => {
  return (
    <Fragment>
      <Header 
        title="Rick and Morty API"
      />
      <Characters />
    </Fragment>
  )
}

export default App
