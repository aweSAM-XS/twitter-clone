let names = document.querySelectorAll('.name');
let usernames = document.querySelectorAll('.username');
let timeline = document.querySelector('.timeline');

const getUser = async () => {
    let user = await fetch('https://jsonplaceholder.typicode.com/users/7').then(
        (response) => response.json()
    );
    names.forEach((name) => {
        name.innerText = user.name;
    });
    usernames.forEach((username) => {
        username.innerText = `@ ${user.username}`;
    });
    return user;
};

const createPosts = async () => {
    let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((response) => response.filter((post) => post['userId'] == 7));
    let user = await getUser();
    posts.forEach((post) => {
        let postDiv = document.createElement('div');
        postDiv.className = 'posts';
        postDiv.innerHTML = `
<img
    src="https://fastly.picsum.photos/id/661/400/400.jpg?grayscale&hmac=RhK4QJh-BHiZAsrf7hplXmymJfTySLlOELe_LTilu44"
    alt="profile-picture"
    class="profile-img" />
<div class="post-content">
    <div class="username-container">
        <h4 class="name">${user.name}</h4>
        <p class="username">@${user.username}</p>
        <p>&nbsp; &#183; &nbsp; Mar 21</p>
    </div>
    <div>
        <p class="post-title">${post.title}</p>
        <p class="post-content">aaa ${post.body}</p>
        <div class="tweet-actions">
            <div class="comments">
                <i
                    class="fa-sharp fa-regular fa-comment fa-flip-horizontal"
                    style="color: #aab8c2"></i>
                <p>23</p>
            </div>
            <div class="retweets">
                <i class="fa-solid fa-retweet" style="color: #aab8c2"></i>
                <p>42</p>
            </div>
            <div class="likes">
                <i class="fa-regular fa-heart" style="color: #aab8c2"></i>
                <p>23k</p>
            </div>
            <div class="engagement">
                <i class="fa-solid fa-chart-simple" style="color: #aab8c2"></i>
                <p>42k</p>
            </div>
            <i
                class="fa-sharp fa-solid fa-arrow-up-from-bracket"
                style="color: #aab8c2"></i>
        </div>
    </div>
</div>
		`;
        timeline.appendChild(postDiv);
    });
};

getUser();
createPosts();
