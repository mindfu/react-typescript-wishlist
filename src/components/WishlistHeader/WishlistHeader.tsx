import React, { FC } from 'react';
import './WishlistHeader.scss';

interface WishlistHeaderProps {
  toggleShowAll: (event: any) => void;
  totalAddedItems: number;
}

const WishlistHeader: FC<WishlistHeaderProps> = ({ toggleShowAll, totalAddedItems }) => (
  <div className="columns is-align-items-center WishlistHeader">
    <div className="column is-four-fifths">
      <p className="title">WHISHLIST MAKER</p>
    </div>
    <div className="column">
      <div className="is-flex">
        <div className="left-label">Items:</div>
        <div><strong>{totalAddedItems}</strong></div>
      </div>

      <div className="is-flex">
        <div className="left-label">Show all:</div>
        <div>
          <input type="checkbox" onClick={toggleShowAll} defaultChecked={true} />
        </div>
      </div>
    </div>
  </div>
);

export default WishlistHeader;
