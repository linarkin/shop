import React from 'react';
import {withRouter} from 'react-router-dom';

import './menuItem.styles.scss';

function MenuItem({title, imageUrl, id, size, history, linkUrl, match}) {
  return (
    <div className={`${size} menu-item`}
        style={{backgroundImage: `url(${imageUrl})`}}
        onClick={() => history.push(`${match.url}${linkUrl}`) }
    >
      <div className="content">
        <div className="title">{title}</div>
        <div className="subtitle">Shop now</div>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
