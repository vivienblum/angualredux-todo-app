import { NgRedux, NgReduxModule } from "@angular-redux/store"
import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { IAppState, rootReducer, INITIAL_STATE } from "./stores/store"

import { AppComponent } from "./app.component"
import { TodoOverviewComponent } from "./todo-overview/todo-overview.component"
import { TodoListComponent } from "./todo-list/todo-list.component"

@NgModule({
  declarations: [AppComponent, TodoOverviewComponent, TodoListComponent],
  imports: [BrowserModule, NgReduxModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE)
  }
}
