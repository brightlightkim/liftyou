<template>
  <div class="home">
    <section class="image-gallery">
      <div class="image">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5603AQGKeSgyvA5s3Q/profile-displayphoto-shrink_400_400/0/1517878491032?e=1654732800&v=beta&t=G6AH6Co0OLMUPZNBitz2k-DbS6P3DJRkOcPMsKBYCRU"
          alt
        />
        <div class="text">
          <h3>Sample</h3>
          <p>
            Textaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas;
            dlkjsd;agkjsd;agkjsad;gkjsd;agkjsad;gkjsad;gkjsda;gksladjg;sdjkg;skdajg;
            ;saldkgj;lsdkjg;lsadjg;lksdajg;lksdjg;lskadjg;lsdkajg;sldakjg;lsdajg;lsdakjg
            ;lsdajgl;asdjg;lsdja;gljsad;lgkjasd;lgjks;daljkg;sadlkgj;lsadkjg;lksdajg;sadkljg;
            sdlakgj;lsadjg;lskdjag;lasdjg;kljsad;lgjs;dlajg;lsdaj;gljsdal;kgjl;asdjg;klsdjakl;g
            jksda;ljgl;ksdajg;lskadj;gljsad;ljg;lasdkjg;sdlkjg;asjg;lasdkjg;lkasdj;glkj
            asdfasdfas
            asdfsadfsad
            asdfsadfsadasdfsad
            asdfsadasdfasdfsdafasdfsadfsdafsdafasdfsadfsdafsdafsadfsadfsdafsdafsadfsdafsdafsadfsdafsdafsdfsdafasdfsdafsdafsda
          </p>
          <div class="commentContainer">

            <div class="comment">
              <img src="https://www.seekpng.com/png/detail/46-462910_person-icon-black-avatar-png.png" alt="">
              <p>Username: Comment</p>
            </div>
          </div>
          <hr>
          <div class="summaryBar">
            <div class="summary">
              <img src="https://icones.pro/wp-content/uploads/2021/04/icone-noire-noir.png" alt="">
              <img src="https://cdn2.iconfinder.com/data/icons/medical-healthcare-26/28/Chat-2-512.png" alt="">
              <img src="https://www.pikpng.com/pngl/b/78-782135_share-png-share-icon-free-download-clipart.png" alt="">
            </div>
            <div class="bookmark">
              <img src="https://cdn.iconscout.com/icon/free/png-256/bookmark-1773018-1508960.png" alt="">
            </div>            
          </div>
          <hr>
          <div class="navigationBar">
            <div class="upliftButton">Uplift</div>
            <div class="commentButton">Comment</div>
            <div class="shareButton">Share</div>
          </div>
        </div>
      </div>
      <div class="image">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5603AQGKeSgyvA5s3Q/profile-displayphoto-shrink_400_400/0/1517878491032?e=1654732800&v=beta&t=G6AH6Co0OLMUPZNBitz2k-DbS6P3DJRkOcPMsKBYCRU"
          alt
        />
        <div class="text">
          <h3>Sample</h3>
          <p>Text</p>
        </div>
      </div>
      <div class="image" v-for="item in items" :key="item.id">
        <img :src="item.path" />
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
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
      items: [],
    }
  },
  created() {
    this.getItems();

  },
  methods: {
    async getItems() {//GetItems do not work..
      try {
        console.log("get items");
        //Do you think that I have to change something here?
        let response = await axios.get("/api/items");

        console.log(response.data);

        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
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

.image-gallery {
  width: 1000px;
}

hr {
  border-top: 1px solid #f45656;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  margin-top: 2em;
  border-radius: 20px;
}

.image img {
  flex: 1;
  border-radius: 20px 0px 0px 20px;
}

.text {
  flex: 1;
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

.navigationBar, .summaryBar {
  display: flex;
  align-items: center;
  width: 100%;
}

.navigationBar {
  justify-content: space-around;
  height: 30px;
}

.summaryBar {
  justify-content: space-between;
  height: 20px;
  margin-bottom: 3px;
}

.summary {
  padding-left: 25px;
  display: flex;
  justify-content: left;
  height: 20px;
}

.bookmark{
  padding-right: 25px;
  display: flex;
  justify-content: right;
  height: 20px;
}

.summary img, .bookmark img {
  height: 20px;
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

.commentContainer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 90%;
  height: 150px;
  overflow-y: scroll;
}

.comment {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 30px;
  border-radius: 15px;
}

.comment img{
  height: 30px;
  border-radius: 15px;
  background-color: #f9a1a1;
}

.comment p{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 30px;
  border-radius: 15px;
  background-color: #f9a1a1;
}

</style>