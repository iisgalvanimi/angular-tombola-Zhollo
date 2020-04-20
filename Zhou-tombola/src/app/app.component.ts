import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zhou-tombola';
  v =[];
  s=-1;
  Estrai(){
    var x=Math.floor(Math.random() * 10);
    this.v.push(x);
    this.s+=1;
    if (this.s=1){
      document.getElementById("1").innerHTML=this.v[this.s]
    } else if(this.s=1){
      document.getElementById("1").innerHTML=this.v[this.s-1]
      document.getElementById("2").innerHTML=this.v[this.s]
    }else {
      document.getElementById("1").innerHTML=this.v[this.s-2]
      document.getElementById("1").innerHTML=this.v[this.s-1]
      document.getElementById("2").innerHTML=this.v[this.s]
    }
  }
}
