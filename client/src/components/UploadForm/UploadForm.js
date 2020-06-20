import React from 'react';
import axios from 'axios'


class UploadForm extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            image: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('image',this.state.image);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("http://localhost:3006/api/images", formData, config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
              console.log(error)
        });
    }
    onChange(e) {
        this.setState({image:e.target.files[0]});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" name="image" onChange= {this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}

export default UploadForm;
