import {connect} from 'react-redux'
import React from 'react'
import Model from './Model';
import { setModelTC } from '../../../../Redux/modelPage_Reducer';
import { withRouter } from 'react-router-dom';


class ModelContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.setModel(id)
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
    setModel: setModelTC,
})(UrlModelContainer);
