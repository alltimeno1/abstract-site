class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        if (this.boards.find((e) => e.name === board.name)) {
            throw new Error();
        }

        this.boards.push(board);
        board.added = this;
    }

    findBoardByName(keyword) {
        return this.boards.find((e) => e.name === keyword);
    }
}

class Board {
    constructor(name) {
        if (!name) {
            throw new Error();
        }

        this.name = name;
        this.added = null;
        this.articles = [];
    }

    publish(article) {
        if (!this.added) {
            throw new Error();
        }

        this.articles.push(article);
        article.id = `${this.name}-${this.articles.length + 1}`;
        article.added = this;
    }

    getAllArticles() {
        return this.articles;
    }
}

class Article {
    constructor({ subject, content, author }) {
        this.id = null;
        this.createdDate = new Date().toISOString();

        if (!subject || !content || !author) {
            throw new Error();
        }

        this.subject = subject;
        this.content = content;
        this.author = author;
        this.added = null;
        this.comments = [];
    }

    reply(comment) {
        if (!this.added) {
            throw new Error();
        }

        this.comments.push(comment);
    }

    getAllComments() {
        return this.comments;
    }
}

class Comment {
    constructor({ content, author }) {
        this.createdDate = new Date().toISOString();

        if (!content || !author) {
            throw new Error();
        }

        this.content = content;
        this.author = author;
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
