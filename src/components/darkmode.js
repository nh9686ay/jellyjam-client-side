import React from 'react'
import { Link } from 'react-router-dom';
import { SearchIcon } from '../shared/AppIcons';
import '../assets/css/darkmode.css';

let content = document.getElementsByTagName('body')[0];
let darkMode = document.getElementById('dark-change');
function darkmode(){


  return(

    darkMode.addEventListener('click', function(){
        darkMode.classList.toggle('active');
        content.classList.toggle('night');

    })
  

  )}