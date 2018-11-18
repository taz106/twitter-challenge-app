import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { AppStorageService } from '../app.storage.service';

@Component({
  selector: 'app-twitt-editor',
  templateUrl: './twitt-editor.component.html',
  styleUrls: ['./twitt-editor.component.css']
})
export class TwittEditorComponent implements OnInit {

  @Input() tableConfig: any;
  @Output() config = new EventEmitter();

  form: FormGroup;
  maxDate = new Date();

  constructor(
    public formBuilder: FormBuilder,
    private storage: AppStorageService
  ) { }

  ngOnInit() {
    this.initForm();

    if (this.tableConfig) {
      this.form.patchValue(this.tableConfig);
    }
  }

  initForm() {
    this.form = this.formBuilder.group({
      items: ['10'],
      skin: [''],
      date_range: ['']
    });
  }

  onSubmit() {
    this.config.emit(this.form.value);
  }

}
