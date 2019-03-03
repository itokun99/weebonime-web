import React, { Component } from 'react';
import styles from '../../assets/cssmodule/Global.module.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


class AnimeIndex extends Component {
  render(){
    let dummy = (
      <div className="anime-item">
        <div className="anime-cover">
          <img src="https://cdn.myanimelist.net/images/anime/1993/93837.jpg" />
          <div className="overlay"></div>
          <div className="anime-title">
            <h2>Sword Art Online</h2>
          </div>
        </div>
      </div>
    );

    return(
      <div className={styles.container}>
        <div>
          <h4><span>Latest Anime Video</span></h4>
        </div>
        <div>
          <Grid container spacing={24} >
            <Grid item xs={12} sm={6} md={4} lg={3}>
              {dummy}
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              {dummy}
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              {dummy}
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              {dummy}
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              {dummy}
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              {dummy}
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              {dummy}
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              {dummy}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

const Homepage = (props) => {
  return(
    <div>
      <AnimeIndex />
    </div>
  );
}


export default Homepage;