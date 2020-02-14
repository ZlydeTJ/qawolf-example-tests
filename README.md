# qawolf-example-tests

Contains some example QAWolf tests to check out the possibilities.

## 1. Do the data- attributes get respected? 

I used react and material-ui to see if QAWolf finds and respects the `data-qa` attribute correctly.

For this I created a small [Codesandbox](https://codesandbox.io/s/material-ui-all-components-9zjd4), 
which contains some input elements of material ui.

Then I added a new test, which tries to input some easy values into the boxes.

I used the URL from Codesandbox (https://9zjd4.csb.app/) to generate these tests:

`npx qawolf create --device 'iPad Pro 11' --script --path 'src/__tests__' -- https://9zjd4.csb.app/ sandbox`

I usually change the values a bit. If I append the filled textfield it replaces the values. 
After a while it stops and says that the element is not found.

```
(node:2198) UnhandledPromiseRejectionWarning: Error: Element not found
    at /Users/tj/dev/playgrounds/qawolf-example-tests/node_modules/@qawolf/browser/lib/find/findElement.js:46:19
    at Generator.next (<anonymous>)
    at fulfilled (/Users/tj/dev/playgrounds/qawolf-example-tests/node_modules/@qawolf/browser/lib/find/findElement.js:5:58)
    at processTicksAndRejections (internal/process/task_queues.js:94:5)
(node:2198) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:2198) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

Also, every element has a `data-qa=` attribute (not on the elements which get triggered), these are not always respected.  

Also I added a screenshot what I want to make the form look like after the test executed.

![Screenshot](/docs/img/after_test.png) 
