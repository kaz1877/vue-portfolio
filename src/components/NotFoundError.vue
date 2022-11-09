<template>
    <div class="container my-4 px-3">
        <h1 class="my-5">404 Not Found</h1>
        <h2 class="mb-3">お探しのページは見つかりませんでした。</h2>
        <p>
            申し訳ありませんお探しのページが見つかりませんでした。<br/>
            下記のリンクから選択してください。
        </p>
        <div class="d-flex justify-content-center">
            <router-link class="p-2" to="/profile">About</router-link>
            <router-link class="p-2" to="/works">Works</router-link>
            <router-link class="p-2" to="/skill">Skill</router-link>
            <router-link class="p-2" to="/contact">Contact</router-link>
        </div>
    </div>
</template>
