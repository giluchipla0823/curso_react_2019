import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import confLogo from '../images/badge-header.svg';

import api from '../api.js';

class Badges extends React.Component{
    state = {
        loading: true,
        error: null,
        data: undefined
    };

    constructor(props){
        super(props);

        console.log("1. constructor()");
    }

    fetchData = async () => {
        this.setState({loading: true, error: null});

        try {
            const data = await api.badges.list();

            this.setState({loading: false, data: data});
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }

    componentDidMount(){
        console.log("3. componentDidMount()");

        this.fetchData();
    }

    componentDidUpdate(prevProps, prevState){
        console.log('5. componentDidUpdate()');
    }

    componentWillUnmount(){
        console.log('6. componentWillUnmount()');
    }

    render(){
        console.log('2/4. render()');

        if(this.state.loading){
            return <PageLoading />;
        }

        if(this.state.error){
            // return `Error: ${this.state.error.message}`;

            return <PageError error={this.state.error} />;
        }

        return(
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" 
                                 src={ confLogo } 
                                 alt="Conf. logo" />
                        </div>
                    </div>
                </div>
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New badge
                        </Link>
                    </div>
                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={ this.state.data } />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges;

