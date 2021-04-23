import {connect} from 'react-redux'
import axios from 'axios'
import React from 'react'
import Model from './Model';
import { setModelAC } from '../../../../Redux/modelPage_Reducer';
import { withRouter } from 'react-router-dom';


class ModelContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get(`http://localhost:5000/api/models/` + id )
            .then(res => {
                this.props.setmodel(res.data)
            })
    }

    render(){
        return <>
            <Model  model={this.props.model} />
        </>
    }
}

let mapStateToProps = (state) => {
    return{
        model: state.modelPage.model
    }
}

let UrlModelContainer = withRouter(ModelContainer)

export default connect(mapStateToProps,{
    setmodel: setModelAC,
})(UrlModelContainer);
