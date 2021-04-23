import {connect} from 'react-redux'
import axios from 'axios'
import React from 'react'
import Detail from './Detail';
import { setDetailAC } from '../../../../../Redux/detailPage_Reducer'
import { withRouter } from 'react-router-dom';


class DetailContainer extends React.Component {
    // componentDidMount() {
    //     let id = this.props.match.params.id;
    //     let detailId = this.props.match.params.detailId
    //     axios.get(`http://localhost:5000/api/models/` + id + `/details/` + detailId)
    //         .then(res => {
    //             debugger;
    //             this.props.setdetail(res.data)
    //         })
    // }

    componentDidMount() {
        let id = this.props.match.params.id;
        let detailId = this.props.match.params.detailId
        axios.get(`http://localhost:5000/api/models/` + id + `/details/` + detailId)
            .then(res => {
                this.props.setdetail(res.data)
            })
    }

    render(){
        return <>
            <Detail  detail={this.props.detail} />
        </>
    }
}

let mapStateToProps = (state) => {
    return{
        detail: state.detailPage.detail
    }
}

let UrlDetailContainer = withRouter(DetailContainer)

export default connect(mapStateToProps,{
    setdetail: setDetailAC,
})(UrlDetailContainer);
