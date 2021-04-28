import React from 'react'
import { connect } from 'react-redux'
import { openInfoAC, closeInfoAC, setInfoTC } from '../../../../Redux/modelPage_Reducer'
import Info from './Info'
import style from './Info.module.css'
import axios from 'axios'
import { withRouter } from 'react-router-dom';

class InfoContainer extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.setInfo(id)
    }

    renderModal() {
        if (this.props.modal) {
            return (
                <Info modal={this.props.info} closeInfo={this.props.closeInfo} />
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
        modal: state.modelPage.modal,
        info: state.modelPage.info
    }
}

let UrlInfoContainer = withRouter(InfoContainer)

export default connect(mapStateToProps, {
    openInfo: openInfoAC,
    setInfo: setInfoTC,
    closeInfo: closeInfoAC
})(UrlInfoContainer)