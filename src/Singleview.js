 import React from 'react'
 import randomUsers from './randomUsers.json'
 import Icon from 'react-fa'
 import './App.css'


 const styles = {
 	backButton: {
 		position:'absolute',
 		top:10,
 		left:10
 	},
 	imageContainer: {
 		background: 'rgb(129,188,56)',
 		textAlign: 'center',
 		position: 'relative',
 		height:300
 	},
 	body: {
  	marginLeft:300,
    marginRight:300
  },
  profilepic:{
  	width:200,
    marginTop:50,
  },
  row:{
  	borderBottom:'solid rgb(231,231,231)',
  	marginBottom:20,
  	paddingBottom:20,
  	display:'flex',
  	marginLeft:-40
  },
  westside: {
  	marginRight:10,
  	marginLeft:15
  },
  height: {
  	lineHeight:1
  }
 }

 export default React.createClass({
 	getInitialState() {
 		return{
 			randomUsers: randomUsers.filter(singleview=>{
 				return Number(singleview.id) === Number(this.props.match.params.singleviewId)
 			})[0]
 		}
 	},
 	handleBack(e) {
 		e.preventDefault()
 		this.props.history.goBack()
 	},
 	render() {
 		var randomUsers = this.state.randomUsers
 		return (
 			<div style={styles.body}>
 				<div style={styles.imageContainer}>
 					<p style={styles.backButton} onClick={this.handleBack}><Icon name="arrow-left" arrow-left size="2x"/></p>
 					<img style={styles.profilepic} alt={randomUsers.name.first + randomUsers.name.last} src={this.state.randomUsers.picture.medium} />
 				</div>
 				<ul>
 					<li style={styles.row}><p style={styles.westside}><Icon name="user" user size="1x"/></p><p style={styles.height}>{randomUsers.name.first} {randomUsers.name.last}</p></li>
 					<li style={styles.row}><p style={styles.westside}><Icon name="envelope" envelope size="1x"/></p><p style={styles.height}>{randomUsers.email}</p></li>
 					<li style={styles.row}><p style={styles.westside}><Icon name="mobile" mobile size="1x"/></p><p style={styles.height}>{randomUsers.phone}</p></li>
 					<li style={styles.row}><p style={styles.westside}><Icon name="globe" globe size="1x"/></p><p style={styles.height}>{randomUsers.location.state}, {randomUsers.location.city}</p></li>
 				
 				</ul>
 			</div>
 		)
 	}
 })