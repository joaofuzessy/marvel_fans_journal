import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Grid, Button, ButtonGroup, Dialog, DialogTitle } from '@material-ui/core';
import NotFoundResults from '../../components/NotFoundResults';
import ComicsBox from '../../components/ComicsBox';
import { useDispatch } from 'react-redux';
import * as WishListActions from '../../store/modules/wishList/actions';
import * as ReadListActions from '../../store/modules/readList/actions';
import './styles.css';
 
export default function ToRead() {

  const comicsToRead = useSelector(state => state.wishList);
  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const dispatch = useDispatch();

  const removeFromList = comic => {
    dispatch(WishListActions.removeFromWishList(comic));
    setModalMessage("Removed from comics you want to read!");
    handleClickOpen();

  }
  
  const handleMarkAsRead = comic =>{
    dispatch(WishListActions.removeFromWishList(comic));
    dispatch(ReadListActions.addToReadList(comic));
    setModalMessage("Added to comics you have already read! You can check it out on the menu.");
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
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Done!</DialogTitle>
        <div className="modalMessage">{modalMessage}</div>
      </Dialog>
  </>
 );
}
