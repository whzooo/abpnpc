import { Component, OnInit<% if(!!viewEncapsulation) { %>, ViewEncapsulation<% }%><% if(changeDetection !== 'Default') { %>, ChangeDetectionStrategy<% }%> } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { PagedListingComponentBase, PagedResultDto } from '../../../core/abp/components/paged-listing-component-base';
import { PagedRequestDto } from '@core/abp/components';
import { Observable } from 'rxjs';

@Component({
  selector: '<%= selector %>',
  templateUrl: './<%= dasherize(name) %>.component.html',<% if(!inlineStyle) { %><% } else { %>
  styleUrls: ['./<%= dasherize(name) %>.component.less']<% } %><% if(!!viewEncapsulation) { %>,
  encapsulation: ViewEncapsulation.<%= viewEncapsulation %><% } if (changeDetection !== 'Default') { %>,
  changeDetection: ChangeDetectionStrategy.<%= changeDetection %><% } %>
})
export class <%= componentName %> extends PagedListingComponentBase<ListDto> {

  constructor(
    private modalHelper: ModalHelper,
    private Service:ServiceProxy
) {
    super();
}

protected list(request: PagedRequestDto, pageNumber: number): Observable<PagedResultDto> {
    return this.Service.getPaged("","", request.maxResultCount,request.skipCount);
}

protected delete(item: ListDto): void {
    this.Service.delete(item.id).subscribe(() => { this.refresh(); });
}

create(): void {
    this.modalHelper.open(CreateComponent, undefined, 'md', { nzMask: true }).subscribe(result => {
        if (result) {
            this.refresh();
        }
    });
}

edit(item: ListDto): void {
    this.modalHelper.open(EditComponent, { id: item.id }, 'md', { nzMask: true }).subscribe(result => {
        if (result) {
            this.refresh();
        }
    });
}


}
