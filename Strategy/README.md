# Strategy Design Pattern

The Strategy pattern encapsulates alternative algorithms (or strategies) for a particular task. It allows a method to be swapped out at runtime by any other method (strategy) without the client realizing it. Essentially, Strategy is a group of algorithms that are interchangeable.

Say we like to test the performance of different sorting algorithms to an array of numbers: shell sort, heap sort, bubble sort, quicksort, etc. Applying the Strategy pattern to these algorithms allows the test program to loop through all algorithms, simply by changing them at runtime and test each of these against the array. For Strategy to work all method signatures must be the same so that they can vary without the client program knowing about it.

## Usage

checkout index
and run

```bash
`ts-node index`
```

### similarity

The Strategy pattern is somehow similar to State design pattern but
we use these patterns to change the behaviour of an object.
the difference between them is in State pattern object have single state and all the behaviour represented are subclass of interface,
in contrast in Strategy pattern we don't have single state different behaviour are represneted using different strategy objects.
