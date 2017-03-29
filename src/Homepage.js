import React from 'react'
import randomUsers from './randomUsers.json'
import { Link } from 'react-router-dom'
import './App.css'



const styles = {
  heading: {
    color: 'white',
    background: 'rgb(129,188,56)',
    padding:20,
    marginLeft:40
  },
  peepsname: {
  	color: 'black',
  	marginLeft:20,
    lineHeight:3
  },
  row: {
  	display: 'flex',
  	borderBottom:'solid rgb(231,231,231)',
  	marginTop:20
  },
  img: {
  	marginBottom:20,
  },
  body: {
  	marginLeft:300,
    marginRight:300
  }
}
export default React.createClass({
	render() {
		return (
			<div style={styles.body}>
          <h2 style={styles.heading}>My Peeps</h2>
          <ul>
          {randomUsers.map(randomUsers=>(
          	<Link  key={'clist' + randomUsers.id} to={'/singleview/' + randomUsers.id}>
            	<li  style={styles.row}>
            	<img style={styles.img} alt={randomUsers.name.first + randomUsers.name.last} src={randomUsers.picture.thumbnail} />
            	<div style={styles.peepsname}>{randomUsers.name.first} {randomUsers.name.last}</div>
            	</li>
            </Link>
          ))}
          </ul>
        </div>
		)
	}
})