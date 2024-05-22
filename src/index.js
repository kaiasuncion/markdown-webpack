import "./styles/main.scss";

// Function to load and render Markdown content
function loadPost(content) {
    document.getElementById('content').innerHTML = content;
}

// Dynamically load all Markdown files
const postsContext = require.context('./posts', false, /\.md$/);
console.log(postsContext);
const posts = postsContext.keys().map(postsContext);
console.log(posts);

// Generate a list of posts
const postList = document.getElementById('post-list');
console.log(postList);
posts.forEach((post, index) => {
    console.log(post)
    const postLink = document.createElement('a');
    postLink.href = '#';
    postLink.textContent = `Post ${index + 1}`;
    postLink.onclick = (event) => {
        event.preventDefault();
        loadPost(post.default);
    };
    postList.appendChild(postLink);
    postList.appendChild(document.createElement('br'));
});

// Load the first post by default
if (posts.length > 0) {
    loadPost(posts[0].default);
}




// import placeHolder from "./assets/blank-gradient-00.png";
// import post from "./posts/my-first-post.md";

// const placeholderImg = document.getElementById("placeholderImg");
// placeholderImg.src = placeHolder;

// document.addEventListener('DOMContentLoaded', function() {
//     const article = document.querySelector('article');
//     article.innerHTML = post;
// })

// console.log(someFunction());
