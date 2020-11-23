import React from 'react';
import './Card.styles.css';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';

function Card({src,headline,description,date}) {

    const divStyle = {
        backgroundImage: 'url(' + src + ')',
      };

    return (
        <div className="card">
            <div className="img__container">
                <div class="img" style={divStyle}></div>
                {/* <img src={src} alt=""/> */}
            </div>
            <div className="card__info">
                <h2>{headline}</h2>
                <h4>{description}</h4>
                <div className="card__info__bottom">
                    <h6>{date}</h6>
                    <CollectionsBookmarkIcon/>
                </div>
            </div>
        </div>
    )
}

export default Card;
