document.addEventListener('DOMContentLoaded', function() {
    const posts = [
        {
            title: 'Benvenuti nel mio Blog',
            content: 'Questo è il primo post del mio nuovo blog personale. Rimanete sintonizzati per ulteriori aggiornamenti!',
            link: 'post1.html'
        },
        {
            title: 'Come ho iniziato a programmare',
            content: 'In questo post, parlerò di come ho iniziato il mio viaggio nel mondo della programmazione e darò alcuni consigli ai principianti.',
            link: 'post2.html'
        }
    ];

    const postsSection = document.getElementById('posts');
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        
        const postTitle = document.createElement('h3');
        postTitle.textContent = post.title;
        
        const postContent = document.createElement('
