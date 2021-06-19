import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appExampleZipplyContent]'
})
export class ExampleZipplyContentDirective {

  constructor(public templateRef: TemplateRef<unknown>) { }

}
