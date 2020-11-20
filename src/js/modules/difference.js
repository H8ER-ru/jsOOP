export default class Difference {
    constructor(oldOfficer, newOfficer, items) {

        try {
            this.oldOfficer = document.querySelector(oldOfficer)
            this.newOfficer = document.querySelector(newOfficer)
            this.oldItems = this.oldOfficer.querySelectorAll(items)
            this.newItems = this.newOfficer.querySelectorAll(items)
            this.oldCount = 0
            this.newCount = 0
        }catch (e) {}

    }

    hideItems(items){
        items.forEach((item, i, arr) => {
            if( i !== arr.length - 1){
                item.style.display = 'none'
            }
        })
    }

    bindTriggers(container, items, counter ){
        container.querySelector('.plus').addEventListener('click', ()=>{
            if(counter !== items.length - 2) {
                items[counter].style.display = ' flex'
                counter++
            }else{
                items[counter].style.display = ' flex'
                items[items.length - 1].remove()
            }
        })
    }

    init(){
        try {
            this.hideItems(this.newItems)
            this.hideItems(this.oldItems)
            this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCount)
            this.bindTriggers(this.newOfficer, this.newItems, this.newCount)
        }catch (e) {}

    }

}