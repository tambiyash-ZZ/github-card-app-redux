import React, {Component} from 'react';
import {connect} from 'react-redux';
import MemberItem from './MemberItem';
import '../../style/bootstrap/bootstrap.css';
import '../../style/App.css';



class Members extends Component {
    render() {
        var memberitems;
        if(this.props.memdata){
            memberitems=this.props.memdata.map(member => {
                return(
                    <MemberItem className="memberItems" key={member.username} memberdata={member} />
                );
            });
        }
        return (
        <div id="cardLayout">
            {memberitems}
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        memdata: state.memberDetails
    };
}

export default connect(mapStateToProps)(Members);