<template>
        <div>
            <div class="content">
                <div class="container">
                    <div class="wrapper">
                        <h1 class="homeHeader">Kaz's Portfolio</h1>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped>
.content{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    pointer-events: none;
}
.container{
    margin: 0 auto;
    min-height: calc(100vh - 156px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.homeHeader{
    display: block;
    font-size:5rem;
}
</style>
