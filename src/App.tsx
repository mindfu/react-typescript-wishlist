import React, { FunctionComponent, useEffect, useState } from 'react';
import WishlistHeader from './components/WishlistHeader/WishlistHeader';
import 'bulma/css/bulma.min.css';
import WishlistItem from './components/WishlistItem/WishlistItem';
import './App.scss';
import { getUpcomingVideoGames } from './services/video-games.service';
import InfiniteScroll from 'react-infinite-scroller';

export interface AppProps { }

export const App: FunctionComponent<AppProps> = () => {
  const [videoGames, setVideoGames] = useState<any[]>([]);
  const [nextApi, setNextApi] = useState();
  const [hasMore, setHasMore] = useState(true);
  const [addedItems, setAddedItems] = useState<any[]>([]);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    getUpcomingVideoGames()
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        handleResponeData(json);
      })
      .catch(e => {
        console.log(e);
      })
  }, []);

  const toggleShowAll = (event: any) => {
    const isChecked = event.target.checked;
    setShowAll(isChecked);
  }

  const fetchMoreData = () => {
    console.log('fetchMoreData');
    if (nextApi) {
      fetch(nextApi)
        .then((res) => res.json())
        .then((json) => {
          handleResponeData(json);
        })
        .catch(e => {
          console.log(e);
        })
    }
  }

  const handleResponeData = (json: any) => {
    if (json) {
      const clonedVideoGames: any[] = [...videoGames];
      const newVideoGames = clonedVideoGames.concat(json.results);

      setVideoGames(newVideoGames);
      setNextApi(json.next);

      const isEmptyNextApi = !json.next;
      setHasMore(!isEmptyNextApi);
    }
  }

  const toggleItem = (id: number) => {
    const clonedVideoGames: any[] = [...videoGames];
    const selectedItem = clonedVideoGames.find(it => it.id === id);
    selectedItem.isAdded = !selectedItem.isAdded;
    setVideoGames(clonedVideoGames);

    const newAddedItems = clonedVideoGames.filter(it => it.isAdded);
    setAddedItems(newAddedItems);
  };

  return (
    <div>
      <WishlistHeader totalAddedItems={addedItems.length} toggleShowAll={toggleShowAll} />
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchMoreData}
        hasMore={hasMore}
        loader={<div className="loader" key={0}></div>}
      >
        <div className="columns is-flex-wrap-wrap wishlist-items">
          {
            showAll ? videoGames.map((videoGame: any, index) => <React.Fragment key={index}><WishlistItem title={videoGame.name} releasedDate={videoGame.released} imageUrl={videoGame.background_image} id={videoGame.id} isAdded={videoGame.isAdded} toggleItem={toggleItem} /></React.Fragment>)
              : addedItems.map((videoGame: any, index) => <React.Fragment key={index}><WishlistItem title={videoGame.name} releasedDate={videoGame.released} imageUrl={videoGame.background_image} id={videoGame.id} isAdded={videoGame.isAdded} toggleItem={toggleItem} /></React.Fragment>)
          }
        </div>
      </InfiniteScroll>
    </div>
  )
};
