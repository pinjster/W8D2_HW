class Counter {
    static count: number = 0

    increaseCount():void {
        Counter.count++
    }

    displayCount():void {
        console.log(`This count: ${Counter.count}`);
    }
}

const counter = new Counter()
const counter2 = new Counter()

counter.increaseCount()
counter.increaseCount()
counter.increaseCount()

counter.displayCount()
counter2.displayCount()

counter2.increaseCount()
counter.displayCount()