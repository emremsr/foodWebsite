import { FoodServiceService } from './service/food-service.service';
import { Component ,OnInit} from '@angular/core';
FoodServiceService
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food';

    constructor(private service:FoodServiceService) { }

    foodData:any;
    customerData:any;
    ngOnInit(): void {

      this.foodData=this.service.foodDescription;

      this.customerData=this.service.customerDescription;

    }


}

