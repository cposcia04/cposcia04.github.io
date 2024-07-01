document.addEventListener("DOMContentLoaded", function() {
    const posts = [
        {
            title: "Introduzione alla Matematica",
            content: "La matematica è lo studio dei numeri, delle forme e dei modelli. È fondamentale per molte discipline scientifiche e tecniche.",
            link: "post.html?id=1"
        },
        {
            title: "Fondamenti di Informatica",
            content: "L'informatica è lo studio dei computer e dei sistemi di elaborazione delle informazioni. Include la teoria, lo sviluppo del software e la gestione dei sistemi informatici.",
            link: "post.html?id=2"
        }
    ];

    const postsSection = document.getElementById("posts");
    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        const postTitle = document.createElement("h3");
        postTitle.textContent = post.title;

        const postContent = document.createElement("p");
        postContent.textContent = post.content;

        const postLink = document.createElement("a");
        postLink.href = post.link;
        postLink.textContent = "Leggi di più";

        postElement.appendChild(postTitle);
        postElement.appendChild(postContent);
        postElement.appendChild(postLink);

        postsSection.appendChild(postElement);
    });
});
