<template>
    <div class="sticky-top">
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">Kaz Portfolio</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#responsiveMenu"
                aria-controls="responsiveMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="responsiveMenu">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/profile">
                                <font-awesome-icon :icon="['fas','user']" />
                                About
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/works">
                                <font-awesome-icon :icon="['fas','folder-open']" />
                                Works
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/skill">
                                <font-awesome-icon :icon="['fas','database']" />
                                Skill
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/contact">
                                <font-awesome-icon :icon="['fas','comment']" />
                                Contact
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
