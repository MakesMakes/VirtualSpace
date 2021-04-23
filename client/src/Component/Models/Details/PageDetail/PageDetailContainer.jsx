import { connect } from 'react-redux';
import PageDetail from './PageDetail';
import React from 'react'
import { openInfoAC } from '../../../../Redux/detailPage_Reducer';

class PageDetailContainer extends React.Component {
    
    
    render() {
        return <>
            <PageDetail openInfo = {this.props.openInfo}/>
        </>

    }
}


export default connect(null,{
    openInfo: openInfoAC
})(PageDetailContainer)


