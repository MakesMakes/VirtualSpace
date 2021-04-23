import {connect} from 'react-redux'
import axios from 'axios'
import React from 'react'
import Details from './Details';
import { setDetailsAC } from './../../../Redux/detailsPage_Reducer';
import { withRouter } from 'react-router-dom';


class DetailsContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get('http://localhost:5000/api/models/' + id + '/details')
            .then(res => {
                this.props.setdetails(res.data)
            })
    }

    render(){
        return <>
            <Details details={this.props.details} modelId={this.props.modelId}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return{
        details: state.detailsPage.details,
        modelId:  state.detailsPage.modelId
    }
}

let UrlDetailsContainer = withRouter(DetailsContainer)

export default connect(mapStateToProps,{
    setdetails: setDetailsAC,
})(UrlDetailsContainer);
