console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const userPost = document.createElement("article");
userPost.classList.add("post");
const newContent = document.createElement("p");
newContent.classList.add("post__content");
newContent.textContent = "this is a new post";
userPost.appendChild(newContent);

const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");

const newUsername = document.createElement("span");
newUsername.classList.add("post__username");
newUsername.textContent = "username2";
newFooter.appendChild(newUsername);

const newLikeButton = document.createElement("button");
newLikeButton.type = "button";
newLikeButton.classList.add("post__button");
newLikeButton.textContent = "♥ Like";
newLikeButton.addEventListener("click", handleLikeButtonClick);
newFooter.appendChild(newLikeButton);

userPost.append(newFooter);
document.body.appendChild(userPost);
