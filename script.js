console.log("connected");

let post_btn = document.querySelector("#submitbtn")

post_btn.addEventListener('click',(e)=>{
    let postbox = document.querySelector(".posts") 
    let main_post = document.createElement('div');
    main_post.innerHTML =  postbox.appendChild(main_post);
})
