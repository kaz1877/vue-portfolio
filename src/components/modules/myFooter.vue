<template>
    <footer class="footer mx-auto">
        <nav class="navbar navbar-expand navbar-dark">
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/profile">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/works">Works</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/skill">Skill</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Contact</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <p class="copyright">Copyright©Kazuki Tsunoda. All Rights Reserved.</p>
    </footer>
</template>

<style>
.footer {
    margin-top: auto;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: #333;
}
.copyright{
    font-size:10px;
    color:#8c8c8c;
    text-align: center;
}
</style>
