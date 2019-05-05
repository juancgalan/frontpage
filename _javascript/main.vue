<template>
    <div class="fullpage-container">
        <nav class="pagination" role="navigation" aria-label="pagination">
            <a class="pagination-previous">Previous</a>
            <a class="pagination-next">Next page</a>
            <ul class="pagination-list">
                <li>
                    <a class="pagination-link" aria-label="Goto page 1">1</a>
                </li>
                <li>
                    <span class="pagination-ellipsis">&hellip;</span>
                </li>
                <li>
                    <a class="pagination-link" aria-label="Goto page 45">45</a>
                </li>
                <li>
                    <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
                </li>
                <li>
                    <a class="pagination-link" aria-label="Goto page 47">47</a>
                </li>
                <li>
                    <span class="pagination-ellipsis">&hellip;</span>
                </li>
                <li>
                    <a class="pagination-link" aria-label="Goto page 86">86</a>
                </li>
            </ul>
        </nav>
        <div class="fullpage-wp" v-fullpage="opts" ref="example">
            <div class="page-1 page">
                <p class="part-1" v-animate="{value: 'bounceInLeft'}">fullpage-vue</p>
                <p class="part-1">aoensuhaoeuhue</p>
                <button @click="moveNext">next</button>
            </div>
            <div class="page-2 page">
                <p class="part-2" v-animate="{value: 'bounceInRight'}">fullpe-vue</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'app',
        data () {
            return {
                opts: {
                    start: 0,
                    dir: 'v',
                    duration: 500,
                    beforeChange: (currentSlideEl, currentIndex, nextIndex) => {

                    },
                    afterChange: (currentSlideEl, currentIndex) => {

                    }
                }
            }
        },
        methods: {
            moveNext() {
                this.$refs.example.$fullpage.moveNext();
            }
        }
    }
</script>
