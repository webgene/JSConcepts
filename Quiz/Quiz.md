1) 

var foo = function foo() {
    console.log(foo === foo);  
};
foo(); // true

2) 

function aaa() {
    return
    {
        test: 1
    };
}
alert(typeof aaa()); // undefined

Analysis :

-- Returns undefined since returned object is in different line.

function aaa() {
    return {
        test: 1
    };
}
alert(typeof aaa()); // alerts 'object'

3)

Number("1") - 1

4)

(true + false) > 2 + true;

Analysis:

Step 1 : (true + false) = 1 + 0 = 1
Step 2 : 2 + true = 2 + 1 = 3 
// + operator precedence is greater than > operator
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
Step 3 : 1 > 3 // false


5)

function bar() {
    return foo;
    foo = 10;
    function foo() {}
    var foo = '11';
}
alert(typeof bar()); // function

Analysis:

Hoisting - http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html

6)

"1" - - "1" // 2

7)

var x = 3;

var foo = {
    x: 2,
    baz: {
        x: 1,
        bar: function() {
            return this.x;
        }
    }
}

var go = foo.baz.bar;

alert(go()); // 3
alert(foo.baz.bar()); // 1

Analysis :

-- The environment where "go" is created has a x value as 3
-- Can be resolved using bind,  following example from : https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind

this.x = 9;    // this referes to global "window" object here in the browser
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();   
// returns 9 - The function gets invoked at the global scope

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global var x with module's property x
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81

8)  

new String("This is a string") instanceof String; // true

Analysis: 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

9) 

[] + [] + 'foo'.split(''); // "f,o,o"

Analysis :

Step 1 : 'foo'.split(''); gets executed and returns ['f','o','o']
Step 2 : Left-to-Right expression is evaluated as [].toString()+[].toString()+['f','o','o'].toString()
		 -- Since concatenation operator is used, arrays are converted to String.
		 
10) 

new Array(5).toString(); // ",,,,"
		 
Analysis:

-- new Array(5) = [undefined × 5] = [undefined,undefined,undefined,undefined,undefined]

11) 

var myArr = ['foo', 'bar', 'baz'];
myArr.length = 0; 
myArr.push('bin');
console.log(myArr); // ['bin']

Analysis:

-- myArr.length = 0; // Clears all elements in the array.
-- myArr.length = 1;
   console.log(myArr); // ['foo']
   
12) 

String('Hello') === 'Hello'; // true

13)

var x = 0;
function foo() {
    x++;
    this.x = x;
    return foo;
}
var bar = new new foo;
console.log(bar.x); // undefined

Analysis :

-- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
-- new foo === new new foo // true
-- new foo === new foo() // true 
	-- as constructor function with out parameters can be instantiated without parenthesis
	
14) 

"This is a string" instanceof String; // false, only String objects are instance of String not literals

Analysis :

--	Same for Numbers too.

	--	1 instanceof Number // false
	--	Number("1") instanceof Number // false
	--	new Number("1") instanceof Number // true

15) 

var bar = 1,
    foo = {};

foo: {
    bar: 2;
    baz: ++bar;
};
foo.baz + foo.bar + bar; // NaN

Analysis :

--	var bar = 1,
    foo = {};

	foo: {
   	 bar: 2;
   	 baz: ++bar;
	}; // prints 2 if executed in Console, this is the value of baz
	
--	foo.baz = undefined
	foo.bar = undefined
	foo.baz+foo.bar = NaN
	NaN + bar = NaN
	
16) 

var myArr = ['foo', 'bar', 'baz'];
myArr[2];
console.log('2' in myArr); // true

Analysis:

--	Above array can be defined as Object : var myArr = {0: 'foo', 1: 'bar', 2: 'baz'};
-- 2 in myArr or '2' in myArr will return true.
-- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

17)

var arr = [];
arr[0]  = 'a';
arr[1]  = 'b';
arr.foo = 'c';
alert(arr.length); // 2

Analysis:

--	Any property other than the numeric key is not considered an Array Element.
--	arr[50] = 'x'; // arr.length = 51

18)

10 > 9 > 8 === true; // false

Analysis:

Step 1: Left-to-Right, 10>9 is true
Step 2: true>8 = 1>8 = false
Step3: false === true // false


19)

function foo(a, b) {
    arguments[1] = 2;
    alert(b);
}
foo(1); // undefined

Analysis :

--	Although argument values can be set but it is not assign to formal parameter if the parameter is not passed at all.
-- In the following case arguments[1] sets the b value as b is passed.
	
	function foo(a, b) {
  		arguments[1] = 3; 
		alert(b);
	}
	foo(1,2); // 3
	
20)

NaN === NaN // false






Quiz-2
----------

CSS
----

1) 

ul {
    MaRGin: 10px;
}

Are CSS property names case-sensitive? // No

2)

Does setting margin-top and margin-bottom have an affect on an inline element? // No

3)

Does setting padding-top and padding-bottom on an inline element add to its dimensions? //No

4)

If you have a <p> element with font-size: 10rem, will the text be responsive when the user resizes / drags the browser window? // No

5) 

The pseudo class :checked will select inputs with type radio or checkbox, but not <option> elements. //False

6)

In a HTML document, the pseudo class :root always refers to the <html> element. //True

7)

The translate() function can move the position of an element on the z-axis.//False

8)

HTML :

<ul class="shopping-list" id="awesome">
    <li><span>Milk</span></li>
    <li class="favorite" id="must-buy"><span class="highlight">Sausage</span></li>
</ul>

CSS:

ul {
    color: red;
}
li {
    color: blue;
}

What is the color of the text Sausage ? // Blue

9)

HTML:

<ul class="shopping-list" id="awesome">
    <li><span>Milk</span></li>
    <li class="favorite" id="must-buy"><span class="highlight">Sausage</span></li>
</ul>

CSS :

ul li {
    color: red;
}
#must-buy {
    color: blue;
}

What is the color of the text Sausage ? //Blue

10)

HTML:

<ul class="shopping-list" id="awesome">
    <li><span>Milk</span></li>
    <li class="favorite" id="must-buy"><span class="highlight">Sausage</span></li>
</ul>

CSS :

.shopping-list .favorite {
    color: red;
}
#must-buy {
    color: blue;
}

What is the color of the text Sausage ? //Blue

Note: Refer https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/ to learn Specificity


11)

HTML:

<ul class="shopping-list" id="awesome">
    <li><span>Milk</span></li>
    <li class="favorite" id="must-buy"><span class="highlight">Sausage</span></li>
</ul>

CSS :

ul#awesome {
    color: red;
}
ul.shopping-list li.favorite span {
    color: blue;
}

What is the color of the text Sausage ? //Blue

12) 

HTML:

<ul class="shopping-list" id="awesome">
    <li><span>Milk</span></li>
    <li class="favorite" id="must-buy"><span class="highlight">Sausage</span></li>
</ul>

CSS :

ul#awesome #must-buy {
    color: red;
}
.favorite span {
    color: blue!important;
}

What is the color of the text Sausage ? //Blue

Note: Without !important also it is Blue.


13) 

HTML:

<ul class="shopping-list" id="awesome">
    <li><span>Milk</span></li>
    <li class="favorite" id="must-buy"><span class="highlight">Sausage</span></li>
</ul>

CSS :

ul.shopping-list li .highlight {
    color: red;
}
ul.shopping-list li .highlight:nth-of-type(odd) {
    color: blue;
}

What is the color of the text Sausage ? //Blue

14) 

HTML:

<ul class="shopping-list" id="awesome">
    <li><span>Milk</span></li>
    <li class="favorite" id="must-buy"><span class="highlight">Sausage</span></li>
</ul>

CSS :

#awesome .favorite:not(#awesome) .highlight {
    color: red;
}
#awesome .highlight:nth-of-type(1):nth-last-of-type(1) {
    color: blue;
}

What is the color of the text Sausage ? //Red

15) 

HTML:

<p id="example">Hello</p>


CSS :

#example {
    margin-bottom: -5px;
}

What will happen to the position of #example? // All elements succeeding #example will move 5px upward


16) 

HTML:

<p id="example">Hello</p>


CSS :

#example {
    margin-left: -5px;
}

What will happen to the position of #example? // It Will Move 5px Left

17) 

HTML:

<div id="test1">
    <span id="test2"></span>
</div>


CSS :

#i-am-useless {
    background-image: url('mypic.jpg');
}

Are unused style resources still downloaded by the browser? // No

18) 

HTML:

<div id="test1">
    <span id="test2"></span>
</div>


CSS :

#test2 {
    background-image: url('mypic.jpg');
    display: none;
}

On page load, will mypic.jpg get downloaded by the browser? //Yes


19) 

HTML:

<div id="test1">
    <span id="test2"></span>
</div>


CSS :

#test1 {
    display: none;
}
#test2 {
    background-image: url('mypic.jpg');
    visibility: hidden;
}

On page load, will mypic.jpg get downloaded by the browser? //No

19) 

HTML:

<div>
    <p>I am floated</p>
    <p>So am I</p>
</div>

CSS :

div {
    overflow: hidden;
}
p {
    float: left;
}

Does overflow: hidden create a new block formatting context? //Yes

Reference : https://www.sitepoint.com/understanding-block-formatting-contexts-in-css/

20)

CSS:

@media only screen and (max-width: 1024px) {
    margin: 0;
}

Does the screen keyword apply to the device's physical screen or the browser's viewport? // Viewport


HTML
-------

1)

Is <keygen> a valid HTML5 tag? // Yes

2) 

Does the <bdo> tag change the direction of text? //Yes

3)

<figure>
	<img src="myimage.jpg" alt="My image">
	<figcaption>
		<p>This is my self portrait.</p>
	</figcaption>
</figure>

Is the above HTML valid? //Yes

4)

In what situation should you use the <small> tag?

Options :

When you want to create subheading after a <h1> element
When you want to add copyright information inside a <footer> // Correct
Both situations
Skip

5)

If a web page contains organic, multiple <h1> tags, will it affect the SEO negativley? //No

6)

If you have a page of search results and want to highlight the search term, what HTML tag would you use? //<mark>

7)

HTML :

<article>
    <h1>Hello World</h1>
    <style scoped>
        p {
            color: #FF0;
        }
    </style>
    <p>This is my text</p>
</article>
 
<article>
    <h1>This is awesome</h1>
    <p>I am some other text</p>
</article>

What does the scoped attribute do?
//Applies style rules to all children of the scoped parent element

8)

<article>
    <a href="#">
        <h1>Hello</h1>
        <p>I am some text</p>
    </a>
</article>

Does HTML5 support block-level links? // Yes

9)

<img src="mypic.jpg" style="visibility: hidden" alt="My picture">

Does the HTML above trigger a http request when the page first loads ?// Yes

10)

<div style="display: none;">
    <img src="mypic.jpg" alt="My photo">
</div>

Does the HTML above trigger a http request when the page first loads? //Yes

11) 

<head>
    <link href="main1.css" rel="stylesheet">
    <script>
        alert('Hello World');
    </script>
</head>

Does main1.css have to be downloaded and parsed before Hello World is alerted? //Yes

12)

<head>
    <link href="main1.css" rel="stylesheet">
    <link href="main2.css" rel="stylesheet">
</head>

Does main1.css have to be downloaded and parsed before main2.css can be fetched? //No

13)

<head>
    <link href="main1.css" rel="stylesheet">
</head>
<body>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <link href="main2.css" rel="stylesheet">
</body>

Does main2.css have to be downloaded and parsed before Paragraph 1 is rendered on the page? //Yes



Javascript
-----------

1)

"1" + 2 + "3" + 4;

What does the above statement evaluate to? //1234

2)

4 + 3 + 2 + "1"

What does the above statement evaluate to? //91

3)

var foo = 1;
function bar() {
	foo = 10;
	return;
	function foo() {}
}
bar();
alert(foo); //1

4)

function bar() {
    return foo;
    foo = 10;
    function foo() {}
    var foo = 11;
}
alert(typeof bar());// function

5)

var x = 3;

var foo = {
    x: 2,
    baz: {
        x: 1,
        bar: function() {
            return this.x;
        }
    }
}

var go = foo.baz.bar;

alert(go()); // 3

6)

var x   = 4,
    obj = {
        x: 3,
        bar: function() {
            var x = 2;
            setTimeout(function() {
                var x = 1;
                alert(this.x);
            }, 1000);
        }
    };
obj.bar(); //4


7)

x = 1;
function bar() {
    this.x = 2;
    return x;
}
var foo = new bar();
alert(foo.x); // 2

Analysis:

-- Differs from example 13 in the Javascript Quiz
-- Reason : https://www.bennadel.com/blog/2522-providing-a-return-value-in-a-javascript-constructor.htm

8)

function foo(a) {
    alert(arguments.length);
}
foo(1, 2, 3); //3

9)

var foo = function bar() {}; 
alert(typeof bar);//undefined

10)

Repeat question : No 17 in Javascript above

11)

function foo(a) {
    arguments[0] = 2;
    alert(a);
}
foo(1); //2

12)

function foo(){}
delete foo.length;
alert(typeof foo.length); // number






