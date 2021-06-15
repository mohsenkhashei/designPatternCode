# Visitor Design Pattern

The Visitor pattern defines a new operation to a collection of objects without changing the objects themselves. The new logic resides in a separate object called the Visitor.

Visitors are useful when building extensibility in a library or framework. If the objects in your project provide a 'visit' method that accepts a Visitor object which can make changes to the receiving object then you are providing an easy way for clients to implement future extensions.

In most programming languages the Visitor pattern requires that the original developer anticipates functional adjustments in the future. This is done by including methods that accept a Visitor and let it operate on the original collection of objects.

## Usage of code

check index file
and run

```bash
`ts-node index`
```
