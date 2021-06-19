import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { ExampleZipplyContentDirective } from 'src/app/directives/example-zipply-content.directive';

@Component({
  selector: 'app-example-zippy-template',
  templateUrl: './example-zippy-template.component.html',
  styleUrls: ['./example-zippy-template.component.scss']
})
export class ExampleZippyTemplateComponent implements OnInit, AfterContentInit {
  contentId = "123456";
  expanded = false;
  @ContentChild(ExampleZipplyContentDirective) content!: ExampleZippyTemplateComponent;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInit() {
    console.log(this.content)
  }

}
