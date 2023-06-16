fetch('data.json') //getting data from the json file 
  .then(response => response.json())
  .then(data => {
    
    console.log(data)
      
    
    data.forEach((item, index) => {
      let postContainer = document.getElementsByClassName('post-container')[index];
      let postImg = postContainer.querySelector('img[id^="post-img"]');
      let profilePic = postContainer.querySelector('img[id^="profile-picture"]');
      let name = postContainer.querySelector('h2[id^="name"]');
      let likes = postContainer.querySelector('p[id^="likes"]');
      let caption = postContainer.querySelector('p[id^="content"]');
      let date = postContainer.querySelector('.date');

      postImg.src = item.image;
      profilePic.src = item.profile_image;
      name.innerText = item.name;
      likes.innerText = 'Likes:' + item.likes;
      caption.innerText = item.caption;
      date.innerText = item.date;
    });
   
   
  })
  


let clickCounter = 0; //Loading 4 new posts on click
function LoadMore(){
 clickCounter++
 let posts2 = document.getElementById('posts2');
 let posts3 = document.getElementById('posts3');
 let posts4 = document.getElementById('posts4');
 let posts5 = document.getElementById('posts5');
 let btn = document.getElementById('btn');
 if(clickCounter == 1){
  posts2.classList.remove('hide');
 }else if(clickCounter == 2){
  posts3.classList.remove('hide');
 }else if(clickCounter == 3){
  posts4.classList.remove('hide');
 }else if(clickCounter == 4){
  posts5.classList.remove('hide');
  btn.classList.add('hide');
 }
 
}


function darkMode(){ //Dark Mode on/off
  let menu = document.getElementById('menu');
  let container = document.getElementById('container'); 
  let text = document.querySelectorAll('a');
  let body = document.querySelector('body');
  let changeBtn = document.getElementById('colorMode');

  

  console.log(text);
  btn.classList.toggle('dark');
  body.classList.toggle('dark');
  menu.classList.toggle('dark');
  container.classList.toggle('dark');
  changeBtn.classList.toggle('dark');
  if(changeBtn.classList.contains('dark')){
    changeBtn.innerText = "Light Mode";
  }else{
    changeBtn.innerText = "Dark Mode";
  }
}