import React from 'react'
import { connect } from 'react-redux'
import { openInfoAC, closeInfoAC, setInfoAC } from '../../../../../Redux/detailPage_Reducer'
import Info from './InfoDetail'
import style from './InfoDetail.module.css'
import axios from 'axios'
import { withRouter } from 'react-router-dom';

class InfoDetailContainer extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        let detailId = this.props.match.params.detailId;
        axios.get(`http://localhost:5000/api/models/` + id + '/details/' + detailId)
            .then(res => {
                this.props.setInfo(res.data)
            })
    }

    renderModal() {
        if (this.props.modal) {
            return (
                <Info modal={this.props.info} closeInfo={this.props.closeInfo}/>
            )
        }
        return null;
    }
    render() {

        return (
            <div className={style.test_button}>
                <a onClick={this.props.openInfo}>INFORMATION</a>
                {this.renderModal()}
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        modal: state.detailPage.modal,
        info: state.detailPage.detail
    }
}

let UrlInfoDetailContainer = withRouter(InfoDetailContainer)

export default connect(mapStateToProps, {
    openInfo: openInfoAC,
    setInfo: setInfoAC,
    closeInfo: closeInfoAC
})(UrlInfoDetailContainer)