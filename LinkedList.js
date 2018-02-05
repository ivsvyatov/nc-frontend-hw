class LinkedList {

    constructor() {
        this.head = null;
        this.length = 0;
    }


    get(position) {
        let current = this.head;
        for (let index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    }

    set(value, position) {
        const node = {
            value: value,
            next: null
        };
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
            const node = {
                value: arguments[i],
                next: null,
            };
            var current = this.head;


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
            const node = {
                value: arguments[i],
                next: null,
            };
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
                console.log('true');
                break;
            } else {
                console.log('false');
            }
        }
    }

    toString() {
        for (let i = 0; i < list.length - 1; i++) {
            console.log("Value :" + this.get(i).value + ", next: " + this.get(i).next);
        }
    }

    reverse() {
    }
}


const list = new LinkedList();
list.set(1, 0);
list.set(23, 1);
list.set(44, 2);
list.set('dsfs', 3);
list.push('dsfs');
list.unshift(1000, 2000);

list.pop();
list.shift();
list.contains(4);
list.toString();
list.reverse();
list.toString();
// loop on list
for (let i = 0; i < list.length; i++) {
    console.log(list.get(i));
}
