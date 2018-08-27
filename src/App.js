import React, { Component } from 'react';
import LocationList from './components/LocationList';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ForecastExtenden from './components/ForecastExtended';
// import MenuIcon from '@material-ui/icons/Menu';
import './App.css';

const cities = [
	"México, City",
	"Buenos Aires, AR",
	"Bogota, Col",
	"Madrid, Esp",
]

class App extends Component {

	constructor() {
		super();
		this.state = {
			city: 'México, City'
		}
	}

	handleSelectedLocation = city => {
		// console.log("handleSelectedLocation", city);
		this.setState({ city });
	}

	render() {
		const { city } = this.state;
		return (
			<Grid className="App">
				<Row>
					<Col xs={12}>
						<AppBar>
							<Toolbar>
								<IconButton color="inherit" aria-label="Menu">
									{/* <MenuIcon /> */}
								</IconButton>
								<Typography variant="title" color="inherit">
									Wheater App
          						</Typography>
								{/* <Button color="inherit">Login</Button> */}
							</Toolbar>
						</AppBar>
					</Col>
				</Row>
				<Row style={{ marginTop: '100px' }}>
					<Col xs={12} md={6}>
						<LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} />
					</Col>
					<Col xs={12} md={6}>
						<Paper>
							<div className='detail'>
								<ForecastExtenden city={city}></ForecastExtenden>
							</div>
						</Paper>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default App;
