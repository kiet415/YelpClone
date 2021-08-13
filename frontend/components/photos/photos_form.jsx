import React from "react";
import BusinessHeader from "../business/business_header"
class PhotosForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoFile: null,
            photoUrl: null,
        }
    }
    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.business_id)
    }
    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result});
        };
        if (file) {
            fileReader.readAsDataURL(file);
        } else {
            this.setState({ photoUrl: "", photoFile: null });
        }
        
    }
    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        if (this.state.photoFile) {
          formData.append('business[photos]', this.state.photoFile);
          formData.append('business[url]' , this.state.photoUrl);
        }
        $.ajax({
          url: `/api/businesses/${this.props.business.id}`,
          method: 'PATCH',
          data: formData,
          contentType: false,
          processData: false
        }).then(response => {
            debugger
        })

        this.props.history.push(`/business/${this.props.business.id}`)
    }

    
    render() {
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
        if(this.props.business === undefined) return null;
        return (
            <div >
                <BusinessHeader/>
                <div className="photos-page">
                    <div className="photos-header">
                        <div>{this.props.business.name}</div>
                        <div>Add Photos</div>
                    </div>

                    <div className="photos-box">
                        <form className="photos-box-inner" onSubmit={this.handleSubmit.bind(this)}>
                            <input
                                type="file"
                                onChange={this.handleFile.bind(this)}
                                
                            />
                            <button type="submit">Add a New Photo!</button>
                        </form>
                        
                        <div className="preview">{preview}</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PhotosForm;