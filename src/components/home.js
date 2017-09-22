import React from 'react';

const Home = (props) => {
    function handleClick(event){
        if(props.current){
            props.onClick();
        }
    }
    return(
        <div className="jumbotron center">
            <h1>Temporary Media Library Title Using Redux Saga!</h1>
            <div>
                <button className="btn btn-lg btn-outline-dark" onClick={handleClick}>Visit Library</button>
            </div>
        </div>
    )
};

export default Home;