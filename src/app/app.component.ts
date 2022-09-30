import { FormControl, FormGroup } from '@angular/forms';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { CommandService } from './command.service';
import file from './commands.json'
import { Command } from './cmdModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CommandService]
})
export class AppComponent implements OnInit {
  token: string = 'pdebbd1b-8aba-434f-9bf6-';
  data: typeof file.items;
  commands: any = [];
  currentCmd: Command = new Command(0,'');
  cmdForm: FormGroup;

  constructor(private cmdService: CommandService) {
    this.data = file.items;
    this.data.forEach(cmd => {
      this.commands.push({ id:cmd.id, value: cmd.name });
    });
    this.cmdForm = new FormGroup<{
      terminalID: FormControl<number|null>,
      command_id: FormControl<number|null>,
      parameter1?: FormControl<string|null>,
      parameter2?: FormControl<string|null>,
      parameter3?: FormControl<string|null>,
    }>({
      terminalID: new FormControl(129),
      command_id: new FormControl(),
      parameter1: new FormControl(),
      parameter2: new FormControl(),
      parameter3: new FormControl(),
    });
  }

  ngOnInit(): void {
    // get token
    // get commands
  }

  onSubmit(): void {
    this.cmdService
        .sendCommand(this.token, this.cmdForm.value)
        .subscribe(responce => {
          var val = responce;
        });
  }

  onChangeCmd(event: any): void {
    this.currentCmd = this.data.find(x => x.id === event.value) as Command;
  }
}
