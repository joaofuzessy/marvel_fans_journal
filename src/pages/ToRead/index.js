import React, { useState, useEffect } from 'react';
import { getComics } from '../../services/getComics';
import { Container, Grid } from '@material-ui/core';
import './styles.css';
 
export default function ToRead() {

  const [comics, setComics] = useState([]);

  useEffect(() => {
    async function loadComics() {
      const response = await getComics();
      setComics(response);
    }
  
    loadComics();
  }, []);


  const renderComics = (comicsList) => {
    return comicsList.map(comicsItem => {
      return (
      <Grid container item xs={12} sm={6}>
        <div 
        className="comicsThumb"
        style={{backgroundImage: `url(${comicsItem.thumbnail.path}.${comicsItem.thumbnail.extension})`}}
        ></div>
        <h3>{comicsItem.title}</h3>
      </Grid>
      );
    })
  }

 return (
  <>
    <Container maxWidth="sm">
      <h1>All Marvel Comics</h1>
      <Grid 
      container
      direction="row"
      spacing={3}
      >
        {renderComics(comics)}
      </Grid>
    </Container>
    
  </>
 );
}
