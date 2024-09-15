const blogPosts = [
    {
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
    blogPosts.push(post)
}