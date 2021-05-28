class Db {
  constructor() {
    this._newsTitle = [];
    this._newsTitleError = undefined;

    this._articleReadingID = "";
    this._articleReading = [];
    this._articleReadingError = undefined;

    this._nextArticle = [];
    this._nextArticleError = undefined;

    this._prevArticle = [];
    this._prevArticleError = undefined;
  }
}

const db = new Db();

export default db;
