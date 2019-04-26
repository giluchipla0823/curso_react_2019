import React from 'react';

class BadgeForm extends React.Component{

    // state = {
    //     firstname: ''
    //     , lastname: ''
    //     , email: ''
    //     , jobtitle: ''
    //     , twitter: ''
    // };

    // state = {};

    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    // }

    handleClick = (event) => {
        console.log('event click');
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submitted');
    }

    render(){
        return(
            <div>
                <h1>New Attendant</h1>

                <form action="" onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input onChange={ this.props.onChange } 
                               className="form-control" 
                               type="text" 
                               name="firstname"
                               value={ this.props.formValues.firstname } />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input onChange={ this.props.onChange } 
                               className="form-control" 
                               type="text" 
                               name="lastname"
                               value={ this.props.formValues.lastname } />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input onChange={ this.props.onChange } 
                               className="form-control" 
                               type="email" 
                               name="email"
                               value={ this.props.formValues.email } />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Job title</label>
                        <input onChange={ this.props.onChange } 
                               className="form-control" 
                               type="text" 
                               name="jobtitle"
                               value={ this.props.formValues.jobtitle } />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Twitter</label>
                        <input onChange={ this.props.onChange } 
                               className="form-control" 
                               type="text" 
                               name="twitter"
                               value={ this.props.formValues.twitter } />
                    </div>

                    <button type="button" onClick={ this.handleClick } className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        )
    };
}

export default BadgeForm;