import {connect} from 'react-redux'
import { setModelsTC } from './../../Redux/modelsPage_Reducer'
import React from 'react'
import Models from './Models';


class ModelsContainer extends React.Component {
    componentDidMount() {
        this.props.setModels()
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
    setModels: setModelsTC
})(ModelsContainer);
