import React, { ComponentType } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router"
import { ReduxStateType } from "../redux/redux-store";

type MapStatePropsType = { isAuth: boolean };
let mapStateToPropsForRedirect = (state: ReduxStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
});


export function WithAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStatePropsType) => {

        let {isAuth, ...restProps} = props;

        if (!isAuth) return <Redirect to={'/login'} />
        return <Component {...restProps as T} />

    }

    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedRedirectComponent
}