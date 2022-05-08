new Vue({
    el: "#root",
    data: {
        list: [
            {
                id: 1,
                name: '利己的遺伝子',
                date: 198030224000
            }, {
                id: 2,
                name: '嫌われる勇気',
                date: 1386828313000
            }, {
                id: 3,
                name: 'Hillbilly Elegy',
                date: 1467043200000
            }, {
                id: 4,
                name: 'The Molecule of More',
                date: 1534194806000
            }
        ],

        totalNum: "",
        alertShow: false,
        inputName: "",
        currentClickIndex: "",

        newId: "",
        newName: "",
        newDate: "",
    },
    methods: {
        changeName(item, index) {
            this.alertShow = true
            this.inputName = item.name
            this.currentClickIndex = index
        },
        cancelClick() {
            this.alertShow = false
        },
        sureClick() {
            this.alertShow = false
            this.list[this.currentClickIndex].name = this.inputName
        },

        deleteBook(item, index) {
            this.currentClickIndex = index
            this.list.splice(this.currentClickIndex, 1)
        },
        addBook() {
            this.newDate = new Date().toLocaleString()
            this.list.push({ id: this.newId, name: this.newName, date: this.newDate })
        }
    },
    filters: {
        dateFormate(data) {
            return new Date(data).toLocaleString()
        }
    }

})