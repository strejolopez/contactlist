import React from 'react'
import Homepage from './Homepage'
import Singleview from './Singleview'
import './App.css'


import {BrowserRouter as Router, Route} from 'react-router-dom'



export default React.createClass({
  render() {
    return (
      <Router>
       <div>
          <Route exact={true} path="/" component={Homepage} />
          <Route path="/singleview/:singleviewId" component={Singleview} />
        </div>
      </Router>
    )
  }
})