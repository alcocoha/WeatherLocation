import React, { Component } from 'react';
import LocationListContainer from './containers/LocationListContainer';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import './App.css';

const cities = [
	"México, City",
	"Buenos Aires, AR",
	"Bogota, Col",
	"Madrid, Esp",
];

class App extends Component {
	render() {
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
						<LocationListContainer cities={cities} />
					</Col>
					<Col xs={12} md={6}>
						<Paper>
							<div className='detail'>
								<ForecastExtendedContainer/>
							</div>
						</Paper>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default App;
