import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Grid, Button, ButtonGroup } from '@material-ui/core';
import NotFoundResults from '../../components/NotFoundResults';
import ComicsBox from '../../components/ComicsBox';

import './styles.css';
 
export default function Read() {

  const readComics = useSelector(state => state.readList);

  const amount = useSelector(state =>
    state.readList.length
  );
  
  const renderComics = (comicsList) => {
    return comicsList.map(comicsItem => {
     return <ComicsBox data={comicsItem} key={comicsItem.id}>
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button>Remove from this list</Button>
        </ButtonGroup>
     </ComicsBox>
    })
  }

 return (
  <>
    <Container>
      <h1>Comics I have already read: {amount}</h1>
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
    
  </>
 );
}
