import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import LastProduct from './LastProduct';
import GenresInDB from './GenresInDB';



function ContentRowTop() {
	return (
		<div className="container-fluid">
			<div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
			</div>
			<ContentRowMovies />
			
			<div className="row">
				<LastProduct />
				<GenresInDB />
			</div>
		</div>
	)
}

export default ContentRowTop;