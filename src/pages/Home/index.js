import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Grid, Button, ButtonGroup, Dialog, DialogTitle } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import * as ReadListActions from '../../features/ReadList/actions';
import * as WishListActions from '../../features/WishList/actions';
import NotFoundResults from '../../features/NotFoundResults';
import SingleComic from '../../features/SingleComic';
import CircularProgress from '@material-ui/core/CircularProgress';
import { loadComics } from '../../features/Comics/comicsSlice'
import './styles.css';

export default function Home() {
  const comics = useSelector(state => state.comics.comicsList);
  const status = useSelector(state => state.comics.status);
  //const error = useSelector(state => state.comics.error)

  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(loadComics());
    }
  }, [status, dispatch])

  const handleAddComicToReadList = comic => {
    dispatch(ReadListActions.addToReadList(comic));
    dispatch(WishListActions.removeFromWishList(comic));
    setModalMessage("Added to comics you have already read! You can check it out on the menu.")
    handleClickOpen();
  }

  const handleAddComicToWishList = comic => {
    dispatch(WishListActions.addToWishList(comic));
    dispatch(ReadListActions.removeFromReadList(comic));
    setModalMessage("Added to comics you want to read! You can check it out on the menu.");
    handleClickOpen();
  }

  const handleClickOpen = () => setOpen(true);

  const handleClose = value => setOpen(false);

  const renderComics = (comicsList) => {
    return comicsList.map(comicsItem => {
      return (
     <SingleComic data={comicsItem} key={comicsItem.id}>
       <ButtonGroup size="small" aria-label="small outlined button group">
          <Button onClick={() => handleAddComicToWishList(comicsItem)}>
            Add to Reading List
          </Button>
          <Button onClick={() => handleAddComicToReadList(comicsItem)}>
            Mark as Read
          </Button>
        </ButtonGroup>
     </SingleComic>
      );
    })
  }

 return (
  <>
    <Container>
      <h1>All Marvel Comics</h1>
      <Grid 
      container
      direction="row"
      spacing={3}
      >
        {comics && comics.length > 0 
        ? renderComics(comics) 
        : status === 'loading'
          ? <div className="loader"><CircularProgress disableShrink /></div>
          : <NotFoundResults></NotFoundResults>}
      </Grid>
    </Container>
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Done!</DialogTitle>
      <div className="modalMessage">{modalMessage}</div>
    </Dialog>
  </>
 );
}
