Vue.config.devtools = true;

new Vue({
    el: "#root",
    data: {
        imgsList: [
            {
                imgUrl: 'img/01.jpg',
                title: 'Svezia',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',

            },
            {
                imgUrl: 'img/02.jpg',
                title: 'Svizzera',
                description: 'Lorem ipsum',

            },
            {
                imgUrl: 'img/03.jpg',
                title: 'Gran Bretagna',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',

            },
            {
                imgUrl: 'img/04.jpg',
                title: 'Germania',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',

            },
            {
                imgUrl: 'img/05.jpg',
                title: 'Paradise',
                description: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',

            }
        ],
        // indice dell'immagine corrente
        indexImg: 0
    },
    methods: {
        clickDown()
        {
            let newIndex = this.indexImg + 1;
            if (newIndex > this.imgsList.length - 1) {
                newIndex = 0;
            }
            this.indexImg = newIndex;
        },
        clickUp()
        {
            let newIndex = this.indexImg - 1;
            if (newIndex < 0) {
                newIndex = this.imgsList.length - 1;
            }
            this.indexImg = newIndex;
        }
    }
});

