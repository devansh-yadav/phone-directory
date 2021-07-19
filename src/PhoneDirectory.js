import React, { Component } from 'react'
import AddSubscriber from './AddSubscriber'
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscribersList: [
                {
                    id: 0,
                    name: 'Srishti',
                    phone: '9999999999'
                },
                {
                    id: 0,
                    name: 'Rahul',
                    phone: '5555555555'
                },
            ]
        }
    }

    deleteSubscriberHandler = (subscriberId) => {
        let subscribersList = this.state.subscribersList;
        let subscriberIndex = 0;
        subscribersList.forEach((subscriber, index) => {
            if(subscriber.id === subscriberId){
                subscriberIndex = index;
            }
        }, this);
        let newSubscriber = subscribersList;
        newSubscriber.splice(subscriberIndex, 1);
        this.setState({subscribers: newSubscriber});
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if(subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length -1] + 1;
        } else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({subscribersList: subscribersList})
    }

    render() {
        return(
            <Router>
                <div>
                    <Route exact path='/' render={(props) => <ShowSubscribers {...props} subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler} /> } />
                    <Route exact path='/add' render={({history}, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} />
                </div>
            </Router>
        )
    }
}

export default PhoneDirectory;
