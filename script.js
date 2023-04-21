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
        console.log(post);
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
		<p class='post-title'>
			${post.title}
		</p>
		<p class='post-content'>
			aaa ${post.body}
		</p>
	</div>
		`;
        timeline.appendChild(postDiv);
    });
};

getUser();
createPosts();
