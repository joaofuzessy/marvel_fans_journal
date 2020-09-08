import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Grid, Button, ButtonGroup, Dialog, DialogTitle } from '@material-ui/core';
import NotFoundResults from '../../components/NotFoundResults';
import ComicsBox from '../../components/ComicsBox';
import { useDispatch } from 'react-redux';
import * as ReadListActions from '../../store/modules/readList/actions';
import './styles.css';
 
export default function Read() {

  const readComics = useSelector(state => state.readList);
  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const dispatch = useDispatch();

  function removeFromList(comic) {
    dispatch(ReadListActions.removeFromReadList(comic));
    setModalMessage("Removed from comics you have already read!")
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
          <Button onClick={() => removeFromList(comicsItem)}>Remove from this list</Button>
        </ButtonGroup>
     </ComicsBox>
    })
  }

 return (
  <>
    <Container>
      <h1>Comics I have already read: {readComics.length}</h1>
      <Grid 
      container
      direction="row"
      spacing={3}
      >
        { readComics.length > 0 
        ? renderComics(readComics) 
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
