import React from 'react';
import SmallCard from './SmallCard';

let moviesInDataBase = {
    color:"primary",
    titulo:"Productos Data Base",
    valor:21,
    icono:"fas fa-film",
}

let totalAwards = {
    color:"success",
    titulo:"Usuarios",
    valor:79,
    icono:"fas fa-award",
}

let actorsQuantity = {
    color:"warning",
    titulo:"Macetas",
    valor:49,
    icono:"fas fa-user",
}

let cardProps = [moviesInDataBase, totalAwards, actorsQuantity];

function ContentRowMovies() {
    return (
        <div className="row">
            {
                cardProps.map((producto, index)=>{
                    return <SmallCard {...producto} key={index}/>
                })
            }             
        </div>
    );
}

export default ContentRowMovies;