import { LoremIpsum } from "lorem-ipsum";
import Post from "./Post";

const dummyGallery = [
	require("./dummyUserImgs/IMG1.jpg"),
	require("./dummyUserImgs/IMG2.jpg"),
	require("./dummyUserImgs/IMG3.jpg"),
	require("./dummyUserImgs/IMG4.jpg"),
	require("./dummyUserImgs/IMG5.jpg"),
	require("./dummyUserImgs/IMG6.jpg"),
	require("./dummyUserImgs/IMG7.jpg"),
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
    const location = { lat: 37 + Math.random(), lon: -120 + Math.random() };
    dummyPosts[i] = new Post(lorem.generateWords(1), lorem.generateWords(2), location, dummyGallery[i]);
  }
})();

console.log("dummyPosts>>", dummyPosts);

export default dummyPosts;
