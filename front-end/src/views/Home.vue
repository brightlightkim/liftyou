<template>
  <div class="home">
    <section class="image-gallery">
      <div class="image" v-for="item in items" :key="item.id">
        <img :src="item.path" />
        <div v-if="editMode" class="text">
          <div class="spaceBetween">
            <div class="left">{{ findItem.title }}</div>
            <div class="right" @click="editItem(findItem)">Finish</div>
          </div>
          <input v-model="findTitle" placeholder="Title" />
          <p></p>
          <textarea v-model="findDescription" placeholder="Description" />
          <p></p>
          <div class="buttonHolder">
            <input type="file" name="photo" @change="fileChanged" />
            <button @click="editItem(findItem)">Upload</button>
          </div>
        </div>
        <div v-else class="text">
          <div class="left">{{ item.title }}</div>
          <p>{{ item.description }}</p>
          <div class="text">
            Text
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      editMode: false,
      title: "",
      description: "",
      file: null,
      comments: [],
      addItem: null,
      items: [],
      findTitle: "",
      findDescription: "",
      findItem: null,
      findItemComments: {
        comments: [],
        commentLike: 0,
        share: 0,
      }
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editItem(item) {
      try {
        await axios.put("/api/items/" + item._id, {
          title: this.findItem.title,
          description: this.findItem.description
        });
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    changeEditMode() {
      if (this.editMode == false) { this.editMode = true; }
    },
  },
}
</script>

<style scoped>
*,
*:before,
*:after {
  box-sizing: inherit;
}

.right {
  display: flex;
  justify-content: right;
  align-content: center;
  font-weight: bold;
  font-size: 18px;
}

.right:hover {
  color: darkslategray;
  cursor: pointer;
}

.left {
  display: flex;
  justify-content: left;
  align-content: center;
  font-weight: bold;
  font-size: 20px;
}

.spaceBetween {
  display: flex;
  justify-content: space-between;
  width: 90%;
}

.image-gallery {
  width: 1000px;
}

hr {
  border-top: 1px solid #f45656;
}

.commentHolder {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.submitButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 19%;
  height: 38px;
  border-radius: 19px;
  margin-left: 3px;
  color: white;
  background-color: black;
  cursor: pointer;
}

.submitButton:hover {
  background-color: rgb(59, 59, 59);
}

.inputHolder {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 80%;
  height: 38px;
  border-radius: 19px;
  border: 2px solid black;
}

input {
  margin-left: 10px;
  width: 90%;
  height: 30px;
  border: white;
}

input:focus {
  outline: none;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  height: max-content;
  margin-top: 2em;
  border-radius: 20px;
}

.image img {
  width: 500px;
  border-radius: 20px 0px 0px 20px;
}

.text {
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text h3 {
  width: 90%;
}

.text p {
  height: 150px;
  width: 90%;
  white-space: normal;
  word-break: break-all;
  overflow-y: scroll;
  overflow-x: hidden;
}

.text div {
  margin: none;
}

.navigationBar {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  height: 30px;
}

.summaryBar {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  height: 20px;
  margin-top: 10px;
  margin-bottom: 3px;
}

.summary {
  padding-left: 25px;
  display: flex;
  justify-content: left;
  height: 20px;
}

.summary img {
  cursor: pointer;
}

.bookmark {
  padding-right: 25px;
  display: flex;
  justify-content: right;
  height: 20px;
  cursor: pointer;
}

.summary img,
.bookmark img {
  height: 20px;
  width: 20px;
  margin-left: 5px;
}

.upliftButton,
.commentButton,
.shareButton {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
}

.upliftButton:hover,
.commentButton:hover,
.shareButton:hover {
  color: darkslategray;
}

.commentContainer {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-content: center;
  width: 90%;
  height: 100px;
  overflow-y: scroll;
}

.comment {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 15px;
}

.comment img {
  height: 30px;
  width: 30px;
  border-radius: 15px;
}

.clickable {
  cursor: pointer;
}

.comment span {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80%;
  height: 30px;
  margin-left: 3px;
  border-radius: 15px;
  border: 2px solid black;
}
</style>