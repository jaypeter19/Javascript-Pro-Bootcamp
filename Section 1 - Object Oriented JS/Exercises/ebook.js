class Book {
    constructor(title, author, year) {
        this.title = toString(title);
        this.author = toString(author);
        this.year = parseInt(year);
    }
}

class Ebook extends Book {
    constructor(title, author, year, fileSize) {
        super(title, author, year);
        this.fileSize = parseFloat(fileSize);
    }

    download() {
        return `${this.title} is ${this.fileSize} long.`;
    }
}