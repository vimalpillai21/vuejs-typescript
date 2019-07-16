import { Prop, Component, Vue } from 'vue-property-decorator';
import  axios  from 'axios';
import { LoginModel } from './listing.model';

@Component
export default class Listing extends Vue{
    public loginModel: LoginModel[] = [];
    public showTable = false;
    constructor(){
        super();
    }
    mounted():void{
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then(
            res => {
                // console.log(res.data);
                this.loginModel = <LoginModel[]>res.data;
                this.showTable = true;
                console.log(this.loginModel);
            },
            err => {
                console.log(err);
            }
        )
    }

}