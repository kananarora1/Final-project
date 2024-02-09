let postbtn = document.querySelector("#submitbtn")

postbtn.addEventListener('click',(e)=>{
    let posts_box = document.querySelector(".chat-posts");
    let main_post = document.createElement('div');
    main_post.innerHTML = 
    `<div class="main-post">
        <div class="right">    
            <div class="post-det">
                <div class="right-btns">
                    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="#">
                    <h4>Kanan Arora @kananarora_7</h4>
                </div>
            </div>
            
            <div class="post-textarea">
                <textarea name="post" id="post-area-text" cols="50" rows="10"></textarea>
            </div>
            
            <div class="like-cmnt-btns">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="#">
                <img class="likebtn" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="#">
            </div>
            <div>
                <button onclick='deletePost()' id= "delBtn" >Delete Post</button>
            </div>
            <style>
    #delBtn {
        background-color: brown;
        color: white;
        padding: 5px 10px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }
    </style>
        </div>
    </div>
    </div>`
        let post_area = document.querySelector("#post-area");
        main_post.querySelector("#post-area-text").innerHTML = post_area.value;

        posts_box.appendChild(main_post);
    })
function deletePost() {
  let post = document.querySelector(".main-post");
  post.remove();
}
let likebtn = document.querySelector(".likebtn");
likebtn.addEventListener('click',()=>{
    if(likebtn.src === "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679"){
        likebtn.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455";
}
})
