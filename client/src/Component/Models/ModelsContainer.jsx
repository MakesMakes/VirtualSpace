import {connect} from 'react-redux'
import { setModelsAC } from './../../Redux/modelsPage_Reducer'
import axios from 'axios'
import React from 'react'
import Models from './Models';


class ModelsContainer extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:5000/api/models')
            .then(res => {
                debugger;
                this.props.setmodels(res.data)
            })
    }

    render(){
        return <>
            <Models models={this.props.models} />
        </>
    }
}

let mapStateToProps = (state) => {
    return{
        models: state.modelsPage.models
    }
}

export default connect(mapStateToProps,{
    setmodels: setModelsAC,
})(ModelsContainer);
