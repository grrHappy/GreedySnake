export default class Snake {
    element: HTMLElement;
    head: HTMLElement;
    bodies: HTMLCollection;

    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div')! as HTMLElement;
        this.bodies =  this.element.getElementsByTagName('div')!;
    }

    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }
    set X(value: number) {
        if(this.X === value) return;
        if(value <0 || value > 290) {
            throw new Error('πζε’δΊ')
        }

        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if(value > this.X) {
                // εε·¦θ΅°ζΆεηζε€΄
                value = this.X - 10;
            } else {
                // εε³θ΅°ζΆεηζε€΄
                value = this.X + 10;
            }
        }

        this.moveBody();
        this.head.style.left = value + 'px';

        console.log('???', this.head.style.left)
        this.checkHeadBody();
    }

    set Y(value: number) {
        if(this.Y === value) return;
        if(value <0 || value > 290) {
            throw new Error('πζε’δΊ')
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if(value > this.Y) {
                // εδΈθ΅°ζΆεηζε€΄
                value = this.Y - 10;
            } else {
                 // εδΈθ΅°ζΆεηζε€΄
                value = this.Y + 10;
            }
        }
        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkHeadBody();
    }

    addBody() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>');
    }

    moveBody() {
        for(let i = this.bodies.length - 1; i > 0; i--) {
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    checkHeadBody() {
        for(let i = 1; i<this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('ζε°θͺε·±δΊγ')
            }
        }
    }

}