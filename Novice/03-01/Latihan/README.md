## Explanation

### Clean Up Case
by using finally, we can guarantees Cleap up in any condition, otherwise we can not do clean up if there are errors in try block.

### Inherit Case
```javascript
class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
```