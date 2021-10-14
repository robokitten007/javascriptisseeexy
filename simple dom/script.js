document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items
 const handleSbumit =(e)=>{
   e.preventDefault();
   const favInput = document.querySelector('.favorite-input')
   const favName = favInput.value;
   //clear the input txtfield
   favInput.value = '';
   const newLi=document.createElement('li')
   newLi.textContent = favName;
   const favList = document.getElementById('sf-places')
   favList.appendChild(newLi)
 }

 const submitButton = document.querySelector('.favorite-submit')
 submitButton.addEventListener('click', handleSbumit);
  



  // adding new photos

  
const showPhoto = (e)=>{
  const photoFormDiv = document.querySelector('.photo-form-container')
  if(photoFormDiv.className === 'photo-form-container'){
    photoFormDiv.className = "photo-form-container hidden"
  } else {
    photoFormDiv.className = 'photo-form-container';
  }
}

const photoButton = document.querySelector('.photo-show-button')
photoButton.addEventListener('click', showPhoto)

const handlePhotoSubmit = (e)=>{
  e.preventDefault();
  const photoURL = document.querySelector('.photo-url-input')
  const URL = photoURL.value;
  photoURL.value= '';
  
  const newIMG = document.createElement('img')
  newIMG.src = URL
  
  const newPhotoLi = document.createElement('li')
  newPhotoLi.appendChild(newIMG)
  
  const photoList = document.querySelector('.dog-photos')
  photoList.appendChild(newPhotoLi)
}

const photoSubmitButton = document.querySelector('.photo-url-submit')
photoSubmitButton.addEventListener('click', handlePhotoSubmit)

});
