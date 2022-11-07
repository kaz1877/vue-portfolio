<template>
    <div class="container my-4 px-3">
        <div class="section-title-block" style="text-align: center;">
            <h1 class="mb-4">
                <font-awesome-icon icon="comment" />
                Contact
            </h1>
            <p>何かありましたら、下記TwitterにDMする形でお気軽にご連絡ください！</p>
        </div>
        <div class="contact-wrapper">
            <div class="contact-list">
                <a href="https://twitter.com/kazengineer0502">
                    <img src="../../assets/twitter_icon1.png" class="rounded-circle border border-dark" alt="contact-img"/>
                    <span class="contact-list-span">Twitter</span>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.contact-list{
    padding:20px 0;
    text-align: center;
}
a{
    text-decoration: none;
    font-size:100%;
    vertical-align: baseline;
    background: transparent;
}
a:hover{
    text-decoration:underline ;
}
img{
    margin: 0 auto;
    width: 100px;
    height: 100px;
    background-color: antiquewhite;
}
.contact-list-span{
    margin:10px;
}
</style>
