import React from 'react';

import {Container} from './styles';

import Anne from '../../assets/images/image-anne.jpg';
import Colton from '../../assets/images/image-colton.jpg';
import Irene from '../../assets/images/image-irene.jpg';
import Star from '../../assets/images/icon-star.svg';

export default function Home(){
    return(
        <Container>
            <main>
                <div className="top">
                    <div className="apresentation">
                        <h1>10,000+ of our users love our products.</h1>
                        <p>
                            We only provide great products combined with excellent customer service. 
                            See what our satisfied customers are saying about our services.
                        </p>
                    </div>
                    <div className="grades">
                        <ul>
                            <li id="grade1">
                                <div>
                                    <img src={Star} alt="Estrela"/><img src={Star} alt="Estrela"/><img src={Star} alt="Estrela"/><img src={Star} alt="Estrela"/><img src={Star} alt="Estrela"/>
                                </div>
                                <span>Rated 5 Stars in Reviews</span>
                            </li>
                            <li id="grade2">
                                <div>
                                    <img src={Star} alt="Estrela"/><img src={Star} alt="Estrela"/><img src={Star} alt="Estrela"/><img src={Star} alt="Estrela"/><img src={Star} alt="Estrela"/>
                                </div>
                                <span>Rated 5 Stars in Report Guru</span>
                            </li>
                            <li id="grade3">
                                <div>
                                    <img src={Star} alt="Estrela"/><img src={Star} alt="Estrela"/><img src={Star} alt="Estrela"/><img src={Star} alt="Estrela"/><img src={Star} alt="Estrela"/>
                                </div>
                                <span>Rated 5 Stars in BestTech</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <ul className="cards">
                    <li className="card" id="card1">
                        <div className="card-header">
                            <img src={Colton} alt="Colton Smith"/>
                            <div>
                                <p>Colton Smith</p>
                                <span>Verified Buyer</span>
                            </div>
                        </div>
                        <div className="card-text">
                            <p>
                                "We needed the same printed design as the one we had ordered a week prior. 
                                Not only did they find the original order, but we also received it in time. Excellent!"
                            </p>
                        </div>
                    </li>
                    <li className="card" id="card2">
                        <div className="card-header">
                            <img src={Irene} alt="Irene Roberts"/>
                            <div>
                                <p>Irene Roberts</p>
                                <span>Verified Buyer</span>  
                            </div>
                        </div>
                        <div className="card-text">
                            <p>
                                "Customer service is always excellent and very quick turn around. 
                                Completely delighted with the simplicity of the purchase and the speed of delivery."
                            </p>
                        </div>
                    </li>
                    <li className="card" id="card3">
                        <div className="card-header">
                            <img src={Anne} alt="Anne Wallace"/>
                            <div>
                                <p>Anne Wallace</p>
                                <span>Verified Buyer</span>
                            </div>
                        </div>
                        <div className="card-text">
                            <p>
                                "Put an order with this company and can only praise them for the very high standard. 
                                Will definitely use them again and recommend them to everyone!"
                            </p>
                        </div>
                    </li>
                </ul>
            </main>
            
        </Container>
    );
}