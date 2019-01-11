import { Component } from '@angular/core';
import {FormGroup, Validators,FormControl,FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public form:FormGroup;

  constructor(private fb:FormBuilder)
  {

  }

  ngOnInit(){
    this.form = this.fb.group({
      email: ["",Validators.email],
      input: [""],
      checkbox: [""],
      radio: [""],
      slidetoggle: [""],
      select:[""],
      range:[""],
      date:[""]
    });
  }

  ngOnSubmit()
  {
    console.log(this.form.value);
  }

  public getError():string
  {  
    if(this.form.get("email").hasError('email'))
    {
      return `l'email n'est pas valide`
    }
  }
}
