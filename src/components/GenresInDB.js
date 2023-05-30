import React from 'react';
import Genre from './Genre';

let genres = [
    { genre: 'Producto' },
    { genre: 'Usuario' },
]

function GenresInDB() {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Generos en Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        {
                            genres.map((genre, index) => {
                                return <Genre {...genre} key={index} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GenresInDB;
