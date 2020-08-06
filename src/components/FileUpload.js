import React from 'react';
import  UploadButtons from './Button_Style.js'
import "./styles.css"
// import landmark_icon from "./CONTACT_BUN.png"

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
      nameLandmark : '',
      infoLandmark: '',
      yearLandmark: ''
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
        const body_string = JSON.stringify(body).split(",");
        let size_sub = body_string[0].length
        let dest = body_string[0].substring(9, size_sub - 1)
        let info_size = body_string[3].length
        let info = body_string[3].substring(8, info_size - 1)
        let name_size = body_string[4].length
        let name = body_string[4].substring(17, name_size - 1)

        console.log(body_string)
        this.setState({ imageURL: dest, infoLandmark: info, nameLandmark: "This is " + name});
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
          <img  width="350px" height="250px" src= {"/uploads/"+this.state.imageURL} alt="" />
        </div>
        <h2> {this.state.nameLandmark} </h2>
        </div>
      </form>
      </div>
    );
  }
}

export default Main;