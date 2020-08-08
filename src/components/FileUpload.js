import React from 'react';
import  UploadButtons from './Button_Style.js'
import "./styles.css"
import {updateInfo}  from "../redux/actions/fotoAction"
import {connect} from "react-redux"
// import landmark_icon from "./CONTACT_BUN.png"

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameLandmark : '',
      infoLandmark: '',
      encodeLandmark: ''
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
  

    fetch('/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {

        const list = JSON.parse(JSON.stringify(body));
        let my_array = []
        let i = 0;
        for(var key in list){
            my_array[i] = list[key];
            i++;
        }
        let name = my_array[3];
        let info = my_array[2];
        let img_decode = my_array[5]
        console.log(img_decode)
        this.setState({ nameLandmark: "This is " + name, encodeLandmark: img_decode});
        this.props.update({info, name});
      });
    });
  }


  render() {
    return (
      <div>
      <h2> Upload the image down below!</h2>
      <form onSubmit={this.handleUploadImage} id={"MyForm"}>
         <div className="style-buttons">
          <label class="custom-file-upload">
            <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
            Browse
          </label>
          <UploadButtons Submit={this.handleUploadImage}/>
        </div>
        <div>
        <br/> 
        <br/> 
        <h2> Here is your result</h2>
        <div className="img-style">
          <img  width="350px" height="250px" src={"data:image/jpeg;base64,"+ this.state.encodeLandmark}  alt =""/>
        </div>
        <h2> {this.state.nameLandmark} </h2>
        </div>
      </form>
      </div>
    );
  }
}

const MapDispatchToProps = (dispatch) => ({
  update: (data) => (dispatch(updateInfo(data)))
})

export default connect(null, MapDispatchToProps)(Main);