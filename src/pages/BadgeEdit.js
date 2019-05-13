import React from 'react';
import './styles/BadgeEdit.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge.js';
import BadgeForm from '../components/BadgeForm.js';
import PageLoading from '../components/PageLoading';

import api from '../api.js';


class BadgeEdit extends React.Component{
    state = {
        loading: true,
        error: null,
        form: {
            firstName: ''
            , lastName: ''
            , email: ''
            , jobTitle: ''
            , twitter: ''
        }
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async e => {
        this.setState({loading: true, error: null});

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );

            this.setState({loading: false, form: data})
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        this.setState({loading: true, error: null});

        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form);

            this.setState({loading: false});

            this.props.history.push('/badges');
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }

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
        if(this.state.loading){
            return <PageLoading />;
        }

        return (
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img className="img-fluid BadgeEdit__hero-image" src={ header } alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName={ this.state.form.firstName || 'FIRST_NAME' } 
                                   lastName={ this.state.form.lastName || 'LAST_NAME' }
                                   jobTitle={ this.state.form.jobTitle || 'JOB_TITLE' }
                                   twitter={ this.state.form.twitter || 'twitter' }
                                   email={ this.state.form.email || 'luiggiplasencia0823@gmail.com' }
                                   avatarUrl="http://1.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60" />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={ this.handleChange }
                                       onSubmit={ this.handleSubmit }  
                                       formValues={ this.state.form }
                                       error= { this.state.error }  />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeEdit;