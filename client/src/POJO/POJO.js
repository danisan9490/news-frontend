class Db {
  constructor() {
    this._newsTitle = [];
    this._newsTitleError = undefined;

    this._articleReadingID = "";
    this._articleReading = [];
    this._articleReadingError = undefined;
  }
}

const db = new Db();

export default db;
