import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NoteService {

  private notes: {title: string}[] = [];

  constructor() {  }

  saveNote(note: {title: string}) {
    this.notes.push(note);
  }

  getAllNotes(){
    return [...this.notes];
  }
}
