import React from 'react';
import './Header.css'
import banner1 from '../../Assets/Images/banner1.jpg'
import banner2 from '../../Assets/Images/banner2.jpg'
import banner3 from '../../Assets/Images/banner3.jpg'

const Header = () => {
    return (
        <div className="">
            <div className="main-banner">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={banner1} className="d-block w-100 h-50" alt="banner-image1" />
                            <div class="carousel-caption d-none d-md-block">
                                <h1>World Team Info</h1>
                                <h4>You Can Know your favourite Team Information just one click</h4>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={banner2} class="d-block w-100 h-50" alt="banner-image2" />
                            <div class="carousel-caption d-none d-md-block">
                                <h1>Distribute happiness</h1>
                                <h4>You can contact to your favourite team member using facebook, twitter, instagram.</h4>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={banner3} class="d-block w-100 h-50" alt="banner-image3" />
                            <div class="carousel-caption d-none d-md-block">
                                <h1>Watching Live match</h1>
                                <h4>You Can Watching Live match from their own YouTube Channel.</h4>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;