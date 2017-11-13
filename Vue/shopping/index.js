var app = new Vue({
    el: '#app',
    data: {
        list: [
            {
                id: 1,
                name: 'iPhone 7',
                price: 6188,
                count: 1
            },
            {
                id: 2,
                name: 'iPad pro',
                price: 5888,
                count: 1
            },
            {
                id: 3,
                name: 'Macbook pro',
                price: 21488,
                count: 1
            },
        ]
    },
    methods: {
        handleAdd (index) {
            this.list[index].count++;
        },
        handleRemove (index) {
            if (this.list[index].count >0) {
                this.list[index].count--;
            }
        },
        removeItem (index) {
            this.list.splice(index, 1)
        }
    },
    computed: {
        sun () {
            var total = 0;
            for(var i = 0; i < this.list.length; i++){
                var item = this.list[i]
                total += item.price*item.count;
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }
    }
})