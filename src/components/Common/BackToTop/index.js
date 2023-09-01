import React from 'react'
import NavigationRoundedIcon from '@mui/icons-material/NavigationRounded';
import './style.css'
function BackToTop() {



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let mybutton = document.getElementById("myBtn");
  console.log(mybutton)
  if (document.body?.scrollTop > 300 || document.documentElement?.scrollTop > 300) {
    mybutton.style.display = "flex";
  } 
  else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

  return (
    <div className='BackToTop-btn' id='myBtn' onClick={() => topFunction()}>
        <NavigationRoundedIcon style={{color: "var(--blue)"}}/>
    </div>
  )
}

export default BackToTop