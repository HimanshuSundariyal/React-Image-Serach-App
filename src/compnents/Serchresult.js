import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
class Searchform extends Component {
  constructor(props) {
    super(props);
	    this.state = {
      imgurl: '',
      isOpen: false,
    };
  }
  
  render() {  
	const { error, isLoaded, items } = this.props;
	const { photoIndex, isOpen, imgurl } = this.state;
  return (
		<div className="row">
			{items.map(item => (
			<div className="col-sm-2 images_box" key={item.id}>
              <img src={item.previewURL} onClick={() => this.setState({ imgurl:item.largeImageURL, isOpen: true })}/>
            </div>
          ))}
		  {isOpen && (<Lightbox mainSrc={imgurl} onCloseRequest={() => this.setState({ isOpen: false })} />)}
	 </div>
    );
  }
}

export default Searchform;
