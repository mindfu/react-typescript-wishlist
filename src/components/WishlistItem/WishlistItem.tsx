import React, { FC } from 'react';
import './WishlistItem.scss';

interface WishlistItemProps {
  title: string;
  releasedDate: string;
  imageUrl: string;
  id: number;
  isAdded: boolean;
  toggleItem: (id: number) => void;
}

const WishlistItem: FC<WishlistItemProps> = ({ title, releasedDate, imageUrl, id, isAdded, toggleItem}) => (
  <div className="column is-one-quarter WishlistItem" onClick={() => toggleItem(id)}>
    <div className={`is-flex is-flex-direction-column is-align-items-center item-wrapper ${isAdded ? 'added-item' : ''}`}>
      <figure>
        <img src={imageUrl} alt={title} />
      </figure>
      <h6>{title}</h6>
      <p className="is-size-7">{releasedDate}</p>
    </div>
  </div>
);

export default WishlistItem;
