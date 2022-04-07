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
          <p>Text</p>
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

.image-gallery div {
  margin-top: 2em;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
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
  padding: 0 0 0 2em;
  column-gap: 1em;
}

.text h3 {
  width: 90%;
}

.text p {
  height: 200px;
  width: 90%;
  overflow-y: hidden;
}

</style>