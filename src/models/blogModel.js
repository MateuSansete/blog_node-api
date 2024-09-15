const { v4: uuidv4 } = require('uuid');

let blogPosts = [
    {
        id: '12345678',
        title: 'Ta pago',
        subtile: 'importancia de treinar',
        text: 'Para manter uma alimentção saudável e uma rotina de qualidade é importante praticar exercício físico',
        likes: 2,
        dislike: 0
    }
];


exports.findPosts = () => {
    return blogPosts;
};

exports.createPost = (post) => {
    const payload = {
        id: uuidv4(),
        ...post
    }

    blogPosts.push(payload);
    return blogPosts;
}

exports.findByIdAndUpdate = (idPost, updatePost) => {
    let post = blogPosts.find(item => item.id === idPost);
    let update = { ...post, ...updatePost};
    return blogPosts = blogPosts.map(i => (i.id === idPost ? update : i))
}

exports.findByIdAndDelte = (idPost) => {
    let indexToRemove = blogPosts.findIndex(item => item.id === idPost);

    if (indexToRemove !== -1) {
        // Remove 1 item a partir do índice encontrado
        blogPosts.splice(indexToRemove, 1);
    }

   return blogPosts;
}

