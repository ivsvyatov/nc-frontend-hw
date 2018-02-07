class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }

}

class LinkedList {

    constructor() {
        let node = new Node(arguments[0]);
        this.head = node;
        for(let i = 1; i<arguments.length;i++){
            node.next = new Node(arguments[i]);
            node = node.next;
        }
        this.length = 0;
    }


    get(position) {
        let current = this.head;
        for (let index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    }

    set(position, value) {
        const node = new Node(value);
        if (position === 0) {
            node.next = null;
            this.head = node;

        } else {
            const prev = this.get(position - 1);
            node.next = prev.next;
            prev.next = node;
        }

        this.length++;
    }

    push() {
        for (let i = 0; i < arguments.length; i++) {
            const node = new Node(arguments[i]);
            let current = this.head;

            if (!current) {
                this.head = node;
                this.length++;
            } else {
                while (current.next) {
                    current = current.next;
                }
                current.next = node;
            }

            this.length++;
        }
    }

    unshift() {
        for (let i = 0; i < arguments.length; i++) {
            const node = new Node(arguments[i]);
            node.next = this.head;
            this.head = node;
            this.length++;
        }
    }

    pop() {
        let b = this.get(list.length - 2);
        b.next = null;
        this.length--;
    }

    shift() {
        this.head = this.head.next;
    }

    contains(value) {
        let flag = false;
        for (let i = 0; i < list.length - 1; i++) {
            if (value === this.get(i).value) {
                flag = true;
                console.log(flag);
            }
        }
        console.log(flag);
    }

    toString() {
        let current = this.head;
        while (current){
            console.log(current.value);
            current = current.next
        }
    }
    clear(){
        this.head = null;
        this.length = null;
    }
    reverse() {
        let current = this.head;
        list.clear();
        while (current){
            list.unshift(current.value);
            current = current.next;
        }
    }
}


const list = new LinkedList();
list.set(0, 1);
list.set(1, 23);
list.set(2, 44);
list.set(3, 'dsfs');
list.push('dsfs');
list.unshift(1000, 2000);

//list.pop();
//list.shift();
//list.contains(4);
list.toString();
list.reverse();
list.toString();



// loop on list
/*for (let i = 0; i < list.length; i++) {
    console.log(list.get(i));
}*/
