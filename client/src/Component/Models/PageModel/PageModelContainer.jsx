import { connect } from 'react-redux';
import { openInfoAC } from '../../../Redux/modelPage_Reducer';
import PageModel from './PageModel';
import React from 'react'

class PageModelContainer extends React.Component {
    
    
    render() {
        return <>
            <PageModel openInfo = {this.props.openInfo} />
        </>

    }
}


export default connect(null,{
    openInfo: openInfoAC
})(PageModelContainer)


