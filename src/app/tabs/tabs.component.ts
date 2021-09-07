import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';

import {TabComponent} from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> | undefined;

  ngAfterContentInit() {

    let activeTabs = this.tabs && this.tabs.filter((tab)=>tab.active);

    if(activeTabs && activeTabs.length === 0) {
      if (this.tabs) {
        this.selectTab(this.tabs.first);
      }
    }
  }

  selectTab(tab: TabComponent){
    this.tabs && this.tabs.toArray().forEach(tab => tab.active = false);
    tab.active = true;
  }
}
