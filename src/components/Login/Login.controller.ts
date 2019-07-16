import { Component, Prop, Vue } from 'vue-property-decorator';

// import Component from 'vue-class-component'

@Component 
export default class Login extends Vue{
    message: string;
    constructor(){
        super();
        this.message = 'Login done';
    
    }
    submit(){
        console.log("hello");
        this.$router.push('listing');
    }
    mounted():void{
        console.log("hello mounted");
    }
}