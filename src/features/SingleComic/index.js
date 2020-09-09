import React from 'react';
import { Grid } from '@material-ui/core';
import ReactHtmlParser from 'react-html-parser';
import './styles.css';

export default function SingleComic(props){
  const { data, children } = props;

  const ellipsizeTextBox = (content, substrSize = 150) => content.length > substrSize? content.substr(0, substrSize)+"..." : content;

  return (
    <Grid container item xs={12} sm={6} md={4} lg={3} className="comicsBox">
      <div 
      className="comicsThumb"
      style={{backgroundImage: `url(${data.thumbnail.path}.${data.thumbnail.extension})`}}
      ></div>
      <div className="comicTitle">
        <h3>{ellipsizeTextBox(data.title, 50)}</h3>
      </div>
      <div className="comicDescription">
        {
          data.description
          ? (ReactHtmlParser(ellipsizeTextBox(data.description))) 
          : "No description available"
        }
      </div>
      <div className="buttonGroup">
        {children}
      </div>
    </Grid>
    );
}
