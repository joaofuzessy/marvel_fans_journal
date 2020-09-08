import React, { useState, useEffect } from 'react';
import { getComics } from '../../services/getComics';
import { Container, Grid, Button, ButtonGroup, Dialog, DialogTitle } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import * as ReadListActions from '../../store/modules/readList/actions';
import * as WishListActions from '../../store/modules/wishList/actions';
import NotFoundResults from '../../components/NotFoundResults';
import ComicsBox from '../../components/ComicsBox';
import CircularProgress from '@material-ui/core/CircularProgress';

import './styles.css';

export default function Home() {

  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadComics() {
      setLoading(true);
      const response = await getComics();
      setComics(response);
      setLoading(false);
    }
  
    loadComics();
  }, []);

  function handleAddComicToReadList(comic) {
    dispatch(ReadListActions.addToReadList(comic));
    dispatch(WishListActions.removeFromWishList(comic));
    setModalMessage("Added to comics you have already read! You can check it out on the menu.")
    handleClickOpen();
  }

  function handleAddComicToWishList(comic) {
    dispatch(WishListActions.addToWishList(comic));
    dispatch(ReadListActions.removeFromReadList(comic));
    setModalMessage("Added to comics you want to read! You can check it out on the menu.");
    handleClickOpen();
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const renderComics = (comicsList) => {
    return comicsList.map(comicsItem => {
      return (
     <ComicsBox data={comicsItem} key={comicsItem.id}>
       <ButtonGroup size="small" aria-label="small outlined button group">
          <Button onClick={() => handleAddComicToWishList(comicsItem)}>
            Add to Reading List
          </Button>
          <Button onClick={() => handleAddComicToReadList(comicsItem)}>
            Mark as Read
          </Button>
        </ButtonGroup>
     </ComicsBox>
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
        {comics.length > 0 
        ? renderComics(comics) 
        : loading 
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
