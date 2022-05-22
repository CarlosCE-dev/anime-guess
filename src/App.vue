<template>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/favicon.ico" alt="" width="24" height="24" class="d-inline-block align-text-top">
                Anime Guesser
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                         <router-link to="/">Home</router-link> |
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <router-view />
</template>