import React from 'react';
import { connect } from 'react-redux';
import { Setting } from './Setting';
import { ReduxStateType } from '../../redux/redux-store';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { savePhotoTC } from '../../redux/profileReducer';

type MapDispatchPropsType = {
    savePhotoTC: (e: any) => void
}



export class SettingContainer extends React.Component<any>  {

    render() {
        return <Setting {...this.props} savePhoto={this.props.children} />
    }
}
const mapStateToProps = (state: ReduxStateType) => ({

});

export default compose<React.ComponentType>(
    connect(mapStateToProps, { savePhotoTC }),
    withRouter,
)(SettingContainer)
