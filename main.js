// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.querySelector('#modal');
const heart = document.querySelectorAll('.like-glyph');

heart.forEach(function(z, y){

  z.addEventListener('click', function(){


    if(z.innerText == EMPTY_HEART){
      mimicServerCall()
      .then(function(x){
        heart[y].classList.add('activated-heart')
        heart[y].innerText = FULL_HEART
        console.log(x)
      })
      .catch(function(x){
        modal.classList.remove('hidden')
        console.log(x)
  
        const errorRemove = function(){
          modal.classList.add('hidden')
        }
  
        setTimeout(errorRemove, 3000)
  
      })
  
    } else if(z.innerText == FULL_HEART) {
      z.innerText = EMPTY_HEART
      z.classList.remove('activated-heart')
    }
  
  })
  


})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
