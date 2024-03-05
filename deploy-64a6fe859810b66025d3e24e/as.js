var posts = []; // 게시물 배열

document.getElementById('post-form').addEventListener('submit', function(event) {
  event.preventDefault(); // 기본 동작인 폼 전송을 막음

  // 사용자가 입력한 제목과 내용 가져오기
  var title = document.getElementById('title').value;
  var content = document.getElementById('content').value;

  // 새로운 게시물 생성
  var post = {
    title: title,
    content: content
  };

  // 게시물 배열에 추가
  posts.push(post);

  // 게시물 목록 업데이트
  updatePostsList();

  // 입력 필드 초기화
  document.getElementById('title').value = '';
  document.getElementById('content').value = '';
});

function updatePostsList() {
  var postsList = document.getElementById('posts-list');
  postsList.innerHTML = '';

  for (var i = 0; i < posts.length; i++) {
    var post = posts[i];

    var postElement = document.createElement('div');
    postElement.classList.add('post');

    var postTitle = document.createElement('h3');
    postTitle.classList.add('title');
    postTitle.textContent = post.title;

    var postContent = document.createElement('p');
    postContent.classList.add('content');
    postContent.textContent = post.content;

    postElement.appendChild(postTitle);
    postElement.appendChild(postContent);

    postsList.appendChild(postElement);
  }
}

