import React, { Component } from 'react';
import Map from './Map';
import VideoBg from "reactjs-videobg";
import mp4 from "./getf.mp4";

class Home extends Component {

	render() {
		return(
			<div style={{ margin: '100px' }}>
				<VideoBg>
  					<VideoBg.Source src={mp4} type="video/mp4" />
				</VideoBg>;
				<Map
					google={this.props.google}
					center={{lat: 45.760696, lng: 21.226788}}
					height='300px'
					zoom={15}
				/>
			</div>
		);
	}
}

export default Home;
