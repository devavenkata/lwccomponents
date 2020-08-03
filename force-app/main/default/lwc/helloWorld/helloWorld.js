import { LightningElement, wire, track, api } from 'lwc';

export default class HelloWorld extends LightningElement {
    @track dynamicGreeting = 'World';
    @track cityList = ['Hyderabad','Jaipur'];
    
    greetingChangeHandler(event)
    {
        this.dynamicGreeting = event.target.value;
    }
 
}