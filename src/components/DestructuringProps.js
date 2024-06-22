import React from 'react'
function DestructuringProps({mousename}){
    //can also destructure like this...
    //const {mousename} = props
    //if we use the above approach we should mention props on line 2...
return(
    <>
    My Mouse: {mousename}
    </>
);
}
export default DestructuringProps;

//destructuring props in function can also be done..
// const {mousename} = props
//destructuring props in class component is...
// below render method, type..
//const {name} = this.props
