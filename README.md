# NovaSearch

Search box for angular 6+ applications which can filter any item set with or without any accent in different languages like Spanish, French etc. 

# Features

1). Search dropdown list
2). Consider language accents while searching
3). Angular forms support
4). Angular v6 and above supported
5). Cross browser support

# Installation

Run `npm install nova-search`

# Configuration

import NovaSearchModule into your app.module.

`import { NovaSearchModule } from 'nova-search';`

`@NgModule({
  imports: [
    ...,
    NovaSearchModule
  ],
  ...
})`

Use nova-search component inside your HTML and pass values for inputs.
Example: 
`<nova-search [items]="itemList" [options]="{ key:'value', display:'value' }" [skipAccents]="false"
      [inputCss]="'custom-css-1'" [optionCss]="'custom-css-2'" [control]="formGroup.controls.search"
      [elementId]="'nova-search-element'" [placeholder]="'search here'"
      (onItemSelected)="onItemSelected($event)"></nova-search>`

Add a css class named 'bold' globally to make matched letters more readable while searching.

`.bold {
    font-weight: bold;
}`

Input

*[items] - Any search item list.

*[options] - This needs a object with type `{ key : string, display : string }`. 
             1). 'key' is the property name which will be used to filter item set.
             2). 'display' will be the property which will appear in search results.

*[control] - angular form control

[elementId] - HTML element id

[placeholder] - Input placeholder

[inputCss] - Css class names for search box element. Ex: ` [inputCss]="'custom-css-1 custom-css-2'"`

[optionCss] - Css class names for search results section. Ex: ` [optionCss]="'custom-css-1 custom-css-2'"`

[skipAccents] - This will be a boolean property which is to toggle whether user wants to skip accents while searching or not.

Output

(onItemSelected): Event - change event when user clicks on a search result. 

