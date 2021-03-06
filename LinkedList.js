'use strict';


class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }

}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
        if (arguments[0]) {
            let node = new Node(arguments[0]);
            this.length++;
            this.head = node;
            for (let i = 1; i < arguments.length; i++) {
                node.next = new Node(arguments[i]);
                node = node.next;
                this.tail = node;
                this.length++;
            }
        }

    }


    get(position) {
        let current = this.head;
        for (let index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    }

    set(position, value) {
        let node = new Node(value);
        if (position === 0) {
            node.next = null;
            this.head = node;

        } else {
            let current = this.head;
            for (let index = 0; index < position - 1; index++) {
                current = current.next;
            }
            node.next = current.next.next;
            current.next = node;

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
                this.length++;
            }


        }
    }

    unshift() {
        for (let i = arguments.length - 1; i >= 0; i--) {
            const node = new Node(arguments[i]);
            node.next = this.head;
            this.head = node;
            this.length++;
        }
    }

    pop() {
        let current = this.head;
        let a;
        if (!current.next) {
            console.log('List is empty')
        } else {
            while (current.next.next) {
                current = current.next;
            }
            a = current.next.value;
            current.next = null;
        }
        this.length--;
        return a;
    }

    shift() {
        let current = this.head;
        this.head = this.head.next;
        this.length--;
        return current.value;
    }

    contains(value) {
        let flag = false;
        let current = this.head;
        while (current.next) {
            if (current.value === value) {
                flag = true;
                break;
            } else {
                current = current.next;
            }
        }
        return flag;
    }

    toString() {
        let string = '';
        let current = this.head;
        string = string + '[';
        while (current.next) {
            if (typeof current === string) {
                string = string + '\"' + current.value + '\"' + ',';
                current = current.next;
            } else if (typeof current === "object") {
                string = string + JSON.stringify(current.value) + ',';
                current = current.next;
            } else {
                string = string + current.value + ',';
                current = current.next;
            }

        }
        if (typeof current === string) {
            string = string + ' \" ' + current.value + '\"' + ']';
        } else if (typeof current === "object") {
            string = string + JSON.stringify(current.value) + ']';
        } else {
            string = string + current.value + ']';
        }
        return string;
    }

    clean() {
        this.head = null;
        this.length = null;
    }

    reverse() {
        let current = this.head;
        this.tail = current;
        this.clean();
        while (current) {
            this.unshift(current.value);
            current = current.next;
        }
        return this;
    }

    getLastItem() {
        let current = this.head;
        let prev;
        while (current) {
            prev = current;
            current = current.next;
        }
        return prev;
    }

    getFistItem() {
        return this.head;
    }
}


let sort = function mergeSort(list) {
    let leftList = new LinkedList();
    let rightList = new LinkedList();
    let left = new LinkedList();
    let right = new LinkedList();

    if (list.head.next === null) {
        return list;
    } else {
        let current = list.head;
        let lengthList = list.length / 2;
        for (let i = 0; i < list.length; i++) {
            if (i < lengthList) {
                leftList.push(current.value);
                current = current.next;
            } else {
                rightList.push(current.value);
                current = current.next;
            }
        }
        left = mergeSort(leftList);
        right = mergeSort(rightList);

    }
    return merge(left, right);
};

function merge(left, right) {
    let result = new LinkedList();
    while (left.length > 0 && right.length > 0) {
        if (left.head.value <= right.head.value) {
            result.push(left.head.value);
            left.shift();
        } else {
            result.push(right.head.value);
            right.shift();
        }
    }
    if (left.length > 0) {
        let current = left.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
    }
    if (right.length > 0) {
        let current = right.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
    }
    return result;
}

const list = new LinkedList(1, 23, 44, 'dsfs', {});


list.from = list.getFistItem();
list.to = list.getLastItem();
list[Symbol.iterator] = function () {

    let current = this.from;
    return {
        next() {
            if (current) {
                let item = current;
                current = current.next;
                return {
                    done: false,
                    value: item.value
                }
            } else {
                return {
                    done: true
                };
            }
        }

    }
};
console.log(list.tail);
/*for (let i of list) {
    console.log(i);
}*/


//___________GET_____________
//list.get(3);

//___________SET_____________
//list.set(4,10000);

//___________PUSH_____________
//list.push(2000, 'push');

//__________UNSHIFT___________
//list.unshift(10, 667);

//___________POP_____________
//list.pop();

//___________SHIFT____________
//list.shift();

//__________CONTAINS__________
//list.contains(1);

//__________REVERSE__________
list.reverse();


//console.log(sort(list).toString());
console.log(list.toString());
console.log(list.tail.value);


// loop on list
/*for (let i = 0; i < list.length; i++) {
    console.log(list.get(i));
}*/


