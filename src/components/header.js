import React from 'react';

const Headers = (props) => {

    function clickHome(event){
        if(props.current){
            event.preventDefault();
        }else{
            props.onClick();
        }
    }
    function clickLibrary(event) {
        if(!props.current){
            event.preventDefault();
        }else{
            props.onClick();
        }
    }
    let home;
    let lib;
    //depending on state, you can click next route
    if(props.current){
        home={color:"black"};
        lib = {cursor:"pointer",color:"blue",textDecoration:"underline"};
    }else{
        home = {cursor:"pointer",color:"blue",textDecoration:"underline"};
        lib = {color:"black"};
    }

    return(
        <div>
            <div className="navbar">
                <div className="home-link" onClick={clickHome} style={home}>Home</div>
                <div className="lib-link" onClick={clickLibrary} style={lib}>Library</div>
            </div>
        </div>
    )
};

export default Headers;