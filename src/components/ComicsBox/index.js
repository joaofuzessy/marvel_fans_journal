import React from 'react';
import { Grid } from '@material-ui/core';

export default function ComicsBox(props){
  const { data, children } = props;
  return (
    <Grid container item xs={12} sm={6}>
      <div 
      className="comicsThumb"
      style={{backgroundImage: `url(${data.thumbnail.path}.${data.thumbnail.extension})`}}
      ></div>
      <h3>{data.title}</h3>
      {children}
    </Grid>
    );
}
