import React from 'react';

const Carousel = props => { 
    return (
        <div id="carouselExampleIndicators" className="carousel slide" style={{zIndex:-10}} data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
				</ol>
                
				<div className="carousel-inner">
                    {props.images.map((items,index) => ( 
                        <div className={ index===0 ? 'carousel-item active' : 'carousel-item'} key={index} >
                            <img  height="600"
                         src={items.url} className="d-block w-100" alt="Inka-Grid" />
                        </div>
                    ))}
							
				</div>
				<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
			
    );
}

export default Carousel;