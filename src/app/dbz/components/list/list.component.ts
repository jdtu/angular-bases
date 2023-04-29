import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: "Trunks",
      power: 10
    }
  ];

  // @Output()
  // public onDeleteIndex: EventEmitter<number> = new EventEmitter();
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    console.log(id);
    if (!id) return;
    // this.onDeleteIndex.emit(index);
    this.onDeleteId.emit(id);
  }
}
