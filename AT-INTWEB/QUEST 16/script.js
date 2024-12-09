const profilePic = document.getElementById('profilePic');
const profilePicLarge = document.getElementById('profilePicLarge');
const postImage = document.getElementById('postImage');
const likeButton = document.getElementById('likeButton');
const commentButton = document.getElementById('commentButton');
const saveButton = document.getElementById('saveButton');
const likeCount = document.getElementById('likeCount');
const commentSection = document.getElementById('commentSection');

let isLiked = false;
let isSaved = false;

profilePic.addEventListener('mouseover', () => {
    profilePicLarge.style.display = 'block';
});

profilePic.addEventListener('mouseout', () => {
    profilePicLarge.style.display = 'none';
});

function handleLike() {
    if (!isLiked) {
        isLiked = true;
        likeButton.querySelector('.icon-heart').classList.add('liked');
        likeCount.textContent = (parseInt(likeCount.textContent) + 1).toString();
    }
}

postImage.addEventListener('dblclick', handleLike);
likeButton.addEventListener('click', handleLike);

commentButton.addEventListener('click', () => {
    if (!commentSection.querySelector('input')) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Adicione um comentário...';
        input.className = 'comment-input';
        commentSection.appendChild(input);
    }
});

saveButton.addEventListener('click', () => {
    if (!isSaved) {
        isSaved = true;
        saveButton.querySelector('.icon-bookmark').classList.add('saved');
        alert('Post salvo!');
    }
});