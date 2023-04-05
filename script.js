const user = {
  firstName: "Goku",
  lastName: "Son",
  email: "ssj228@mail.ru",
  password: "genkidama",
  authorized: false,
};

const post = {
    id: 1,
    postName: "Dragon Ball",
    description: "Desc",
    author: user,
    comments: [],
    dateOfPost: new Date(),
    likes: 0,
    isLiked: false
};

const comment = {
    authorOfComment: user,
    content: "My opinion",
    commentedPost: post,
    dateOfComment: new Date()
};
post.comments.push(comment);
const posts = [
        {
         id: 1,
         postName: "Бархатные тяги",
         description: "Кефтеме",
         author: user,
         comments: [],
         dateOfPost: new Date(),
         likes: 0,
         isLiked: false
         },
         {
         id: 2,
         postName: "Дайте мне белые крылья",
         description: "Я утопаю в омуте",
         author:user,
         comments: [],
         dateOfPost: new Date(),
         likes: 2,
         isLiked: false
         }
];

function addPost(postName,description,author){
    const newPost = {
        postName: postName,
        description: description,
        author: author,
        comments: [],
        dateOfPost: new Date(),
        likes: 0,
        isLiked: false
    };
    posts.push(newPost);
};

function login(user){
    user.authorized = true;
};

function toggleLike(postId) {
  const post = posts.find(p => p.id === postId);

  if (post) {
     if (post.isLiked) {
          post.likes--;
          post.isLiked = false;
        } else {
          post.likes++;
          post.isLiked = true;
        }
  }
}