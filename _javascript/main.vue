<template>

    <div class="fullpage-container">
        <div class="pager">
             <nav class="pagination button-size is-rounded" role="navigation" aria-label="pagination">
                <ul class="pagination-list vertical-flow">
                    <li v-for="p in pages">
                        <a  class="pagination-link"
                            v-bind:class="p.idx === selectedPage ? [isCurrent, currentSize] : ''"
                            :id="p.id"
                            :aria-label="p.aria"
                            @click="moveTo(p.idx)"></a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="fullpage-wp" v-fullpage="opts" ref="example">
            <div class="page-0 page">
                <p class="part-0" v-animate="{value: 'bounceInLeft'}">Home</p>
                <button @click="moveNext">next</button>
            </div>
            <div class="page-1 page">
                <p class="part-1" v-animate="{value: 'bounceInRight'}">About me</p>
            </div>
            <div class="page-2 page">
                <p class="part-2" v-animate="{value: 'bounceInRight'}">Portfolio</p>
            </div>
            <div class="page-3 page">
                <p class="part-3" v-animate="{value: 'bounceInRight'}">Keep in touch</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Main',
        data () {
            return {
                opts: {
                    start: 0,
                    dir: 'v',
                    duration: 500,
                    beforeChange: (currentSlideEl, currentIndex, nextIndex) => {

                    },
                    afterChange: (currentSlideEl, currentIndex) => {  
                        this.selectedPage = currentIndex
                    }
                },
                selectedPage: 0,
                isCurrent: 'is-current',
                currentSize: 'current-size',
                pages: [
                    { idx: 0, id: '0-page', aria: 'Go to page 0', label: 'Home' },
                    { idx: 1, id: '1-page', aria: 'Go to page 1', label: 'About me' },
                    { idx: 2, id: '2-page', aria: 'Go to page 2', label: 'Portfolio' },
                    { idx: 3, id: '3-page', aria: 'Go to page 3', label: 'Keep in touch' },
                ]
            }
        },
        methods: {
            moveNext() {
                this.$refs.example.$fullpage.moveNext();
            },
            moveTo(id) {
                console.log(id);
            }
        }
    }
</script>
