import { Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { DriversComponent } from './drivers/drivers.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { BusRoutesComponent } from './bus-routes/bus-routes.component';
import { AddBusRouteComponent } from './add-bus-route/add-bus-route.component';
import { PlansComponent } from './plans/plans.component';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { EditPlanComponent } from './edit-plan/edit-plan.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'drivers', component: DriversComponent },
      { path: 'addDriver', component: AddDriverComponent },
      { path: 'busRoutes', component: BusRoutesComponent },
      { path: 'addBusRoutes', component: AddBusRouteComponent },
      { path: 'plans', component: PlansComponent },
      { path: 'add-plan', component: AddPlanComponent },
      { path: 'edit-plan/:id', component: EditPlanComponent }
    ],
  },
];
