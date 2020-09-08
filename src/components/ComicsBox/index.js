import React from 'react';
import { Grid } from '@material-ui/core';
import ReactHtmlParser from 'react-html-parser';
import './styles.css';

export default function ComicsBox(props){
  const { data, children } = props;

  
  const ellipsizeTextBox = (content, substrSize = 150) => content.length > substrSize? content.substr(0, substrSize)+"..." : content;

  return (
    <Grid container item xs={12} sm={3}>
      <div 
      className="comicsThumb"
      style={{backgroundImage: `url(${data.thumbnail.path}.${data.thumbnail.extension})`}}
      ></div>
      <div className="comicTitle">
        <h3>{ellipsizeTextBox(data.title, 60)}</h3>
      </div>
      <div className="comicDescription">
        {
          data.description
          ? (ReactHtmlParser(ellipsizeTextBox(data.description))) 
          : "No description available"
        }
      </div>
      {children}
    </Grid>
    );
}
