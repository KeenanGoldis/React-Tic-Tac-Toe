import React, { Component } from 'react';
import PlayerTurn from './PlayerTurn.js'
import './App.css';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let playerTurn = 'X';

//this checks to see if determines if someone can make a move.
//Then it checks to see if someone has one.
//If not, then it switches the person who's turn it is.
  $('[data-cell]').on('click', function(){
    if($(this).text()=== ''){
      $(this).text(playerTurn);
      checkForWin();

      if(playerTurn === 'X'){
        playerTurn = 'O';
      } else {
        playerTurn = 'X';
      }
    }
  })

export default App;
