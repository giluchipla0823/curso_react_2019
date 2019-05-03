import React from 'react';
import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge.js';
import BadgeForm from '../components/BadgeForm.js';


class BadgeNew extends React.Component{
    state = {
        form: {
            firstname: ''
            , lastname: ''
            , email: ''
            , jobtitle: ''
            , twitter: ''
        }
    };

    handleChange = e => {
        // const nextForm = this.state.form;

        // nextForm[e.target.name] = e.target.value;


        // this.setState({
        //     form: nextForm
        // })

   
        this.setState({
            form: {
                ... this.state.form,
                [e.target.name]: e.target.value

            }
        })
    };


    render(){
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={ header } alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstname={ this.state.form.firstname } 
                                    lastname={ this.state.form.lastname }
                                    jobTitle={ this.state.form.jobtitle }
                                    twitter={ this.state.form.twitter }
                                    url="http://1.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60" />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={ this.handleChange }
                                       formValues={ this.state.form }  />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;