import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router"
import { ReduxStateType } from "../redux/redux-store";
type  MapStatePropsType = {isAuth:boolean};
let mapStateToPropsForRedirect = (state: ReduxStateType): MapStatePropsType => ({     //!-----------------<<<<<<<<<<<<<<<
    isAuth: state.auth.isAuth
});


export const WithAuthRedirect = (Component:any) => {

   const RedirectComponent =(props:any)=> {
       
            if (!props.isAuth) return <Redirect to={'/login'} />
            return <Component {...props} />
      
    }

    
    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);



    return ConnectedRedirectComponent
}