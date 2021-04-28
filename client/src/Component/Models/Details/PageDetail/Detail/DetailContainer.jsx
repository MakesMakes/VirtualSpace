import { connect } from 'react-redux'
import axios from 'axios'
import React from 'react'
import Detail from './Detail';
import { setDetailTC } from '../../../../../Redux/detailPage_Reducer'
import { withRouter } from 'react-router-dom';


class DetailContainer extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        let detailId = this.props.match.params.detailId
        this.props.setDetail(id, detailId)
    }

    render() {
        return <>
            <Detail detail={this.props.detail} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        detail: state.detailPage.detail
    }
}

let UrlDetailContainer = withRouter(DetailContainer)

export default connect(mapStateToProps, {
    setDetail: setDetailTC,
})(UrlDetailContainer);
