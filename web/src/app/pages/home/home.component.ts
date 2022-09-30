import {
  Component, OnInit
} from '@angular/core';
import { UserComponent } from '../../shared/user/user.component';

import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

export interface DadosAgenda {
  fim: Date;
  inicio: Date;
  servico: string;
  valor: Number;
  _id: String;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: UserComponent = new UserComponent();
  displayedColumns: string[];
  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<any>(true, []);


  constructor() {

  }


  ngOnInit() {
   
  }



  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: DadosAgenda): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.inicio}`;
  }

  
}

