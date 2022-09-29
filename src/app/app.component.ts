import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommandService } from './command.service';
import file from './commands.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CommandService]
})
export class AppComponent implements OnInit {
  token: string = 'pdebbd1b-8aba-434f-9bf6-';
  commands: typeof file.items;
  cmdForm: FormGroup;

  constructor(private cmdService: CommandService) {
    this.commands = file.items;
    this.cmdForm = new FormGroup<{
      terminalID: FormControl<string|null>,
      cmd: FormControl<string|null>,
      param1?: FormControl<string|null>,
      param2?: FormControl<string|null>,
      param3?: FormControl<string|null>,
    }>({
      terminalID: new FormControl(),
      cmd: new FormControl(),
      param1: new FormControl(),
      param2: new FormControl(),
      param3: new FormControl(),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
  }

}
