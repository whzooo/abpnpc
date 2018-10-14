import { Component, OnInit<% if(!!viewEncapsulation) { %>, ViewEncapsulation<% }%><% if(changeDetection !== 'Default') { %>, ChangeDetectionStrategy<% }%> } from '@angular/core';<% if(!modal) { %>
import { ActivatedRoute } from '@angular/router';<% } %>
import { finalize } from 'rxjs/operators';
import { NotifyService } from '@core/abp/notify/notify.service';
import { NzModalRef } from 'ng-zorro-antd';
import { I18NService } from '@core/i18n/i18n.service';


@Component({
  selector: '<%= selector %>',<% if(inlineTemplate) { %>
  template: ``,<% } else { %>
  templateUrl: './<%= dasherize(name) %>.component.html',<% } if(!inlineStyle) { %><% } else { %>
  styleUrls: ['./<%= dasherize(name) %>.component.less']<% } %><% if(!!viewEncapsulation) { %>,
  encapsulation: ViewEncapsulation.<%= viewEncapsulation %><% } if (changeDetection !== 'Default') { %>,
  changeDetection: ChangeDetectionStrategy.<%= changeDetection %><% } %>
})
export class <%= componentName %> implements OnInit {
  saving = false;
  input: CreateOrUpdateInput = new CreateOrUpdateInput();
  dto:  EditDto = new EditDto();
  nodes = [];
  constructor(
    private modal: NzModalRef,
    private i18NService: I18NService,
    private service: ServiceProxy,
    private notifyService: NotifyService,
  ) {}

  ngOnInit() {
    this.input.dto = this.dto;
  }


  save(): void {
    this.saving = true;

    this.service
      .createOrUpdateAsync(dto.???
      )
      .pipe(
        finalize(() => {
          this.saving = false;
        }),
      )
      .subscribe(() => {
        this.notifyService.success(
          this.i18NService.localize('SavedSuccessfully'),
        );
        this.modal.close(true);
      });
  }

  close(): void {
    this.modal.close();
  }
}
