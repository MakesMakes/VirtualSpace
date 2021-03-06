import {connect} from 'react-redux'
import axios from 'axios'
import React from 'react'
import Details from './Details';
import { setDetailsTC } from './../../../Redux/detailsPage_Reducer';
import { withRouter } from 'react-router-dom';


class DetailsContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.setDetails(id)
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
    setDetails: setDetailsTC,
})(UrlDetailsContainer);
