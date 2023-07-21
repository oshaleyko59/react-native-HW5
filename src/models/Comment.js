export default class Comment {
	constructor(text, authorId, dateTimeStamp) {
		this.text = text;
		this.authorId = authorId;
		this.dateTimeStamp = dateTimeStamp;
		this.id = Math.random().toString(); //FIXME: add now
	}
}
