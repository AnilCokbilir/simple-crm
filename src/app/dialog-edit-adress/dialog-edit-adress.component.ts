import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-adress',
  templateUrl: './dialog-edit-adress.component.html',
  styleUrls: ['./dialog-edit-adress.component.scss']
})
export class DialogEditAdressComponent implements OnInit {
  user: User = new User();
  userId: string;
  loading = false;
  constructor(public dialogRef: MatDialogRef<DialogEditAdressComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.firestore.collection('users').doc(this.userId).update(this.user.toJSON()).then(() => {
      this.loading = false;
      this.dialogRef.close();
    });
  }
}
