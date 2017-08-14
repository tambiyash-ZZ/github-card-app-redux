import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import store from '../store/store.js';
import {removeMember} from '../actions/index'
import '../../style/bootstrap/bootstrap.css';
import '../../style/App.css';

export default class MemberItem extends Component {

    removeUser(username){
        store.dispatch(removeMember(username));
    }

  render() {
    return (
    <div className="col-lg-3 col-xs-12 col-md-6" id="cards"> 
        <div className="card">
            <img className="card-img-top" src={this.props.memberdata.avatar} alt="Github User"/>
            <div className="card-block">
                <a href="#" className="btn btn-default btn-lg"><span className="glyphicon glyphicon-star"></span><b> {this.props.memberdata.name}</b></a>
                <p className="desc"><b>{this.props.memberdata.name} having username "{this.props.memberdata.username}" lives in {this.props.memberdata.location}</b></p>
                <div className="overlay">
                    <a href="#" className="btn btn-danger" onClick={this.removeUser.bind(this, this.props.memberdata.username)}><span className="glyphicon glyphicon-trash"></span><b> Delete</b></a>
                    <a href="#" className="btn btn-success"><span className="glyphicon glyphicon-share"></span><b> Open</b></a>
                    <a href="#" className="btn btn-primary"><span className="glyphicon glyphicon-print"></span><b> Print</b></a>
                </div>
            </div>
        </div>
    </div>
    );
  }
}