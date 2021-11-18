import React from 'react';
import chair from '../../../images/chair.png';
import principal from '../../../images/principal.png';
import video from '../../../images/video.png';
import dbbl from '../../../images/dbbl.png';
import idea from '../../../images/idea.png';
import award from '../../../images/award.png';
import fbpage from '../../../images/fa-page.png';
import './SlideBoard.css';

const SlideBoard = () => {
    return (
        <section className="slideBoard">
            <div>
                <h4 className="nav-newsText m-0">Chairman Message</h4>
                <div className="message-box">
                    <img className="img-fluid" src={chair} alt="" />
                    <a target="_blank" href=""><p>The Rt Hon the Lord Patten of Barnes</p></a>
                </div>

                <h4 className="nav-newsText m-0">Principal Message</h4>
                <div className="message-box">
                    <img className="img-fluid" src={principal} alt="" />
                    <a target="_blank" href=""><p>Professor David Gann CBE, CEng</p></a>
                </div>
            </div>

            <div className=" bg-light">
                <h4 className="nav-newsText">Notice Board</h4>

                <marquee behavior="" direction="up" scrollamount="2">

                <div className="noticeBoard">
                <a className="notice-anchor" href="">
                    <div className="notice-box p-1 m-2">
                        <p style={{marginRight: '10px'}}>Nov 10 2021</p>
                        <p style={{borderRight: '1px solid black'}}></p>
                        <p>Admission will be start from Novemebr 25, 2021 for the class of KG to Ten</p>
                    </div>
                    </a>
                <a className="notice-anchor" href="">
                    <div className="notice-box p-1 m-2">
                        <p style={{marginRight: '10px'}}>Nov 10 2021</p>
                        <p style={{borderRight: '1px solid black'}}></p>
                        <p>Admission will be start from Novemebr 25, 2021 for the class of KG to Ten</p>
                    </div>
                    </a>
                <a className="notice-anchor" href="">
                    <div className="notice-box p-1 m-2">
                        <p style={{marginRight: '10px'}}>Nov 10 2021</p>
                        <p style={{borderRight: '1px solid black'}}></p>
                        <p>Admission will be start from Novemebr 25, 2021 for the class of KG to Ten</p>
                    </div>
                    </a>
                <a className="notice-anchor" href="">
                    <div className="notice-box p-1 m-2">
                        <p style={{marginRight: '10px'}}>Nov 10 2021</p>
                        <p style={{borderRight: '1px solid black'}}></p>
                        <p>Admission will be start from Novemebr 25, 2021 for the class of KG to Ten</p>
                    </div>
                    </a>
                <a className="notice-anchor" href="">
                    <div className="notice-box p-1 m-2">
                        <p style={{marginRight: '10px'}}>Nov 10 2021</p>
                        <p style={{borderRight: '1px solid black'}}></p>
                        <p>Admission will be start from Novemebr 25, 2021 for the class of KG to Ten</p>
                    </div>
                    </a>
                <a className="notice-anchor" href="">
                    <div className="notice-box p-1 m-2">
                        <p style={{marginRight: '10px'}}>Nov 10 2021</p>
                        <p style={{borderRight: '1px solid black'}}></p>
                        <p>Admission will be start from Novemebr 25, 2021 for the class of KG to Ten</p>
                    </div>
                    </a>
                <a className="notice-anchor" href="">
                    <div className="notice-box p-1 m-2">
                        <p style={{marginRight: '10px'}}>Nov 10 2021</p>
                        <p style={{borderRight: '1px solid black'}}></p>
                        <p>Admission will be start from Novemebr 25, 2021 for the class of KG to Ten</p>
                    </div>
                    </a>
                <a className="notice-anchor" href="">
                    <div className="notice-box p-1 m-2">
                        <p style={{marginRight: '10px'}}>Nov 10 2021</p>
                        <p style={{borderRight: '1px solid black'}}></p>
                        <p>Admission will be start from Novemebr 25, 2021 for the class of KG to Ten</p>
                    </div>
                    </a>
                <a className="notice-anchor" href="">
                    <div className="notice-box p-1 m-2">
                        <p style={{marginRight: '10px'}}>Nov 10 2021</p>
                        <p style={{borderRight: '1px solid black'}}></p>
                        <p>Admission will be start from Novemebr 25, 2021 for the class of KG to Ten</p>
                    </div>
                    </a>
                    
           
                </div>
                </marquee>
                    <div className="noticeAll text-end my-3">
                        <a  href="">See all</a>
                    </div>
            </div>

                <div className="dbbl">
                    <img className="img-fluid w-100 rounded" src={dbbl} alt="" />
                </div>

                    <div className="video-box my-3">
                        <img className="img-fluid w-100" src={video} alt="" />
                    </div>

                    <div className="fb-box">
                        <h4 className="nav-newsText">Facebook Page</h4>

                        <a target="_blank" href="https://facebook.com/"><img src={fbpage} alt="" /></a>
                    </div>

                    <div className="technology">
                        <h4 className="nav-newsText">Technology Partner</h4>
                        
                        <a target="_blank" href="https://ideasolutionbd.com/"><img src={idea} alt="" /></a>
                    </div>

                    <div className="award">
                        <h4 className="nav-newsText m-0">Wining Award</h4>
                        <img className="img-fluid w-100" src={award} alt="" />
                    </div>

        </section>
    );
};

export default SlideBoard;