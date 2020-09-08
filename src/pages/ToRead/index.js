import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Grid, Button, ButtonGroup } from '@material-ui/core';
import NotFoundResults from '../../components/NotFoundResults';
import ComicsBox from '../../components/ComicsBox';
import { useDispatch } from 'react-redux';
import * as WishListActions from '../../store/modules/wishList/actions';
import * as ReadListActions from '../../store/modules/readList/actions';
import './styles.css';
 
export default function ToRead() {

  const comicsToRead = useSelector(state => state.wishList);
  const dispatch = useDispatch();

  function removeFromList(comic) {
    dispatch(WishListActions.removeFromWishList(comic));
  }
  
  function handleMarkAsRead (comic){
    dispatch(WishListActions.removeFromWishList(comic));
    dispatch(ReadListActions.addToReadList(comic));
  }

  const renderComics = (comicsList) => {
    return comicsList.map(comicsItem => {
     return <ComicsBox data={comicsItem} key={comicsItem.id}>
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button onClick={() => handleMarkAsRead(comicsItem)}>Mark as read</Button>
          <Button onClick={() => removeFromList(comicsItem)}>Remove from this list</Button>
        </ButtonGroup>
     </ComicsBox>
    })
  }

 return (
  <>
    <Container>
        <h1>Comics I Want to Read: {comicsToRead.length}</h1>
        <Grid 
        container
        direction="row"
        spacing={3}
        >
          { comicsToRead.length > 0 
          ? renderComics(comicsToRead) 
          : <NotFoundResults></NotFoundResults>
          }
        </Grid>
      </Container>
  </>
 );
}
