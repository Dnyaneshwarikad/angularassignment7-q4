import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent 
{ 
  public Data ="  ";

  public MyAction()
  {
      this.data="MARVELLOUS INFOSYSTEMS....";
  }

  public data ="  ";

  public myaction()
  {
      this.data="marvellous infosystems....";
  }

}
