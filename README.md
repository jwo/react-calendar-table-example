Calendar Example in React
==========================

I wanted a way to display a calendar table (not a popup) in React. There's nothing earth shattering here.

[Live Demo](http://jessewolgamott.com/react-calendar-table-example/)

![example](example.gif)

How to Use
----------

1. clone
2. `npm install`
3. `npm start`

What to Look For
----------------

* The App lets you change the month and year
* the `<Calendar/>` has an optional prop named `date`
* component creates the following HTML which can be styled as you see fit
```
<div class="calendar">
  <div class="week">
    <div class="day">S</div>
    <div class="day">M</div>
    <div class="day">T</div>
    <div class="day">W</div>
    <div class="day">T</div>
    <div class="day">F</div>
    <div class="day">S</div>
  </div>
  <div class="week">
    <div class="day">&nbsp;</div>
    <div class="day">&nbsp;</div>
    <div class="day">&nbsp;</div>
    <div class="day">&nbsp;</div>
    <div class="day">&nbsp;</div>
    <div class="day">&nbsp;</div>
    <div class="day">1</div>
  </div>
  <div class="week">
    <div class="day">2</div>
    <div class="day">3</div>
    <div class="day">4</div>
    <div class="day">5</div>
    <div class="day">6</div>
    <div class="day">7</div>
    <div class="day">8</div>
  </div>
  <div class="week">
    <div class="day">9</div>
    <div class="day">10</div>
    <div class="day">11</div>
    <div class="day">12</div>
    <div class="day">13</div>
    <div class="day">14</div>
    <div class="day">15</div>
  </div>
  <div class="week">
    <div class="day">16</div>
    <div class="day">17</div>
    <div class="day">18</div>
    <div class="day">19</div>
    <div class="day">20</div>
    <div class="day">21</div>
    <div class="day">22</div>
  </div>
  <div class="week">
    <div class="day">23</div>
    <div class="day">24</div>
    <div class="day">25</div>
    <div class="day">26</div>
    <div class="day">27</div>
    <div class="day">28</div>
    <div class="day">29</div>
  </div>
  <div class="week">
    <div class="day">30</div>
    <div class="day">31</div>
    <div class="day">&nbsp;</div>
    <div class="day">&nbsp;</div>
    <div class="day">&nbsp;</div>
    <div class="day">&nbsp;</div>
    <div class="day">&nbsp;</div>
  </div>
</div>
```

This uses:
----------

1. create-react-app
2. moment.js
3. left-pad
4. moment-calendar-2


TODOS:
------

1. Use this as an excuse to learn Jest for JS testing
1. Add ability to add event to the calendar (onClick for day)
1. Add ability to pass list of events for each day to render

LICENSE
-------
The MIT License (MIT)

Copyright (c) 2016 Jesse Wolgamott

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
