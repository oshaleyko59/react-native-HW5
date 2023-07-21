import { LoremIpsum } from "lorem-ipsum";
import Post from "./Post";
import Comment from "./Comment";

const dummyGallery = [
	require("./dummyImgs/IMG1.jpg"),
	require("./dummyImgs/IMG2.jpg"),
	require("./dummyImgs/IMG3.jpg"),
	require("./dummyImgs/IMG4.jpg"),
	require("./dummyImgs/IMG5.jpg"),
	require("./dummyImgs/IMG6.jpg"),
	require("./dummyImgs/IMG7.jpg"),
];

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const dummyPosts = [];
  (() => {
  for (i = 0; i < dummyGallery.length; i = i + 1) {
    const location = { lat: 37 + Math.random(), lng: -120 + Math.random() };
    dummyPosts[i] = new Post(lorem.generateWords(1), lorem.generateWords(2), location, dummyGallery[i]);
    }
    for (i = 0; i < 5; i = i + 1){
      dummyPosts[0].comments[i] = new Comment(lorem.generateSentences(1), Math.random().toString(), Date.now()-Math.floor(Math.random()*1000000000));
    }
})();

console.log("dummyPosts>>", dummyPosts);
console.log("dummyPosts[0]>>", dummyPosts[0].comments.length);
export default dummyPosts;
