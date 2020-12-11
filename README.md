# Nova Search

Search box for angular 2+ applications which can filter any item set with or without any accent in different languages like Spanish, French etc.

# Features
 - Search dropdown list. 
 - Skip/allow language accents while searching. 
 - Angular reactive forms support. 
 - Angular 2 and above supported.
 - Cross browser support.

 - Check it out [demo](https://stackblitz.com/edit/angular-1tkqwa) 

# Installation
    Run `npm install nova-search`

# Configuration

- Import NovaSearchModule into your app.module.

    `import { NovaSearchModule } from 'nova-search';`

    `@NgModule({ imports: [ ..., NovaSearchModule ], ... })`

- Use nova-search component inside your HTML and pass values for inputs. Example:

    `<nova-search [items]="itemList" [options]="{ key:'value', display:'value' }" [disabled]="false"
    [skipAccents]="false" [inputCss]="'custom-css-1'" [optionCss]="'custom-css-2'"
    [control]="formGroup.controls.search" [elementId]="'nova-search-element'" [skipCharactersCount]="1"
    [placeholder]="'search here'" (onItemSelected)="onItemSelected($event)"></nova-search>`

- Add a css class named 'bold' globally to make matched letters more readable while searching.

    `.bold { font-weight: bold; }`

### Input

| Name | Type | Description | | 
| ------ | ------ |------ |-----|
| items | any[] | Search item list|required|
| options | { key : string, display : string } | 'key' is the property name which will be used to filter item set while 'display' will be the property which will appear in search results|required|
| control | FormControl | Angular form control |required|
| disabled | boolean | Disable/Enable input |optional|
| elementId | string | HTML element id (if you need mutiple nova-search instances in the same page) |optional|
| placeholder | string | Input placeholder|optional|
| inputCss | string | Css class names for search box element Ex: `[inputCss]="'class-1 class-2'"`|optional|
| optionCss | string | Css class names for search results section Ex: `[optionCss]="'class-1 class-2'"` |optional|
| skipAccents | boolean | A boolean property which is to toggle whether user wants to skip accents while searching or not. (default value is set to false) |optional|
| skipCharactersCount | number | Number of characters to skip before start the search |optional|

### Output

| Name | Type | Description |
| ------ | ------ |------ |
|( onItemSelected ) | any | Change event when user clicks on a search result |
|( onClearText ) | void | Change event when user clears input text |

### Services & Methods

- Inject `NovaSearchService` service and call `focus(elementId :string)` method.

- Example: :

    `constructor(private service: NovaSearchService){ }`

    `this.service.focus('element-id');`
