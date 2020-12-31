import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedUp News</h2>
                <InfoIcon />
            </div>
            {newsArticle("KC is making builds", "Top News - 9000+ readers")}
            {newsArticle("Elon Musk is furious with new Tesla Decision", "Top News - 1000 readers")}
            {newsArticle("Apple is making a new iphone", "Top News - 8000 readers")}
            {newsArticle("Hotel Chains are failing due to Covid-19", "Top News - 800 readers")}
            {newsArticle("Nurse gets Covid-19 a week after getting the vaccine", "Top News - 8500 readers")}
            {newsArticle("New Info about Corona Virus Vaccine", "Top News - 9000+ readers")}
        </div>
    )
}

export default Widgets
