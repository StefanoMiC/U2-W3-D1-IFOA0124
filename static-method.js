// Metodi e proprietà statici nelle classi
// sono dei metodi e delle proprietù NON attribuiti alle istanze della classe, ma esisteranno solamente all'interno del costruttore stesso

class Article {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  isSameAuthorPublic(otherArticle) {
    return this.author === otherArticle.author;
  }

  static isSameAuthorStatic(articleA, articleB) {
    return articleA.author === articleB.author;
  }
}

const firstArticle = new Article("L'importanza del CSS", "Pincopallo");
const secondArticle = new Article("Cosa ne sarebbe senza l'HTML?", "Arlecchino");
const thirdArticle = new Article("L'svg in tutta la sua potenza", "Pincopallo");

console.log(firstArticle);
console.log(firstArticle.isSameAuthorPublic(secondArticle));
// il metodo pubblico esiste, per l'istanza, nel primo livello della catena prototipale

// il metodo statico esiste SOLO per il costruttore e non sarà accessibile alle sue istanze
console.log(Article.isSameAuthorStatic(firstArticle, secondArticle));
console.log(Article.isSameAuthorStatic(firstArticle, thirdArticle));
