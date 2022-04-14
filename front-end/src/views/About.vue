<template>
    <div class="about">
        <img src="https://assets.ldscdn.org/aa/d0/aad08a1142435d4be4a44b87af628526add264bf/book_of_mormon_stories.jpeg" alt="">
        <div class="flexView">
            <h3>LiftYou</h3>
            <p>
                LiftYou is a special Platform to share uplifting thoughts with others. <br>
                <br>
                You can share your insights on the Book of Mormon, Bible, and other uplifting thoughts <br>
                <br>
                You are welcome to provide us with feedback.
                <br>
                Developer: Taeyang, Kim :)

            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style>
img {
    margin-top: 20px;
    border-radius: 50px 50px 0px 0px;
}

.flexView{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color: white;
    padding: 5%;
    border-radius: 0px 0px 50px 50px;
    margin-bottom: 100px;
}


</style>