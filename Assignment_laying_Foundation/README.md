### Polyfill
  A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it. 
  And the good part is `Babel` includes a polyfill.

  Some browser are not support the es6 hen we nee to convert it by using "Polyfill"
  Ex WE are using es6 nap function but my old browser is not undertsnad that function the we right 
  function myMap() which is exactly work as map function and this conversion done by "bable"

  Old peace of code know as pollyfill


## babel-plugin-transform-remove-console
   Remove the console log while building using following cmd
   `npm install babel-plugin-transform-remove-console --save-dev`
   {
     "plugins": [["transform-remove-console", { "exclude": ["error", "warn"] }]]
   }

## Can not run our code without parser because babel calling webpack

## Bable is complier which create a pollyfill for you

##

