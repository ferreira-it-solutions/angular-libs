import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertType, DialogActionData, DialogData } from '../model/ng-mat-alert.model';

@Component({
    selector: 'dialog-component',
    templateUrl: './ng-mat-alert-dialog.component.html',
    styleUrls: ['./ng-mat-alert-dialog.component.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class NgMatAlertDialogComponent {
    model: any;
    splitMessage!: string[];

    constructor(
        public dialogRef: MatDialogRef<NgMatAlertDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
        if (this.data.innerHTML) {
            this.data.innerHTML = this.data.innerHTML.replace(/\n/g, '<br/>');
        }
        if (this.data.message) {
            this.splitMessage = this.data.message.split(/\n/g);
        }
        if (this.data.hasModel) {
            this.model = this.data.model;
        }
    }

    onClick(ok: any) {
        this.dialogRef.close({
            result: ok,
            model: this.model,
        } as DialogActionData);
    }

    getIcon() {
        switch (this.data.type) {
            case AlertType.INFO:
                return 'info';
            case AlertType.ERROR:
                return 'error_outline';
            case AlertType.WARNING:
                return 'warning';
            case AlertType.SUCCESS:
                return 'done';
            default:
                return '';
        }
    }

    getClassButton(noClick = false) {
        return [
            this.data.type,
            noClick
                ? !this.data.invert
                    ? 'mat-stroked-button'
                    : 'mat-flat-button'
                : !this.data.invert
                ? 'mat-flat-button'
                : 'mat-stroked-button',
        ]/* .map((el) => {
            if (el?.includes('color-')) {
                return `mat-${this.data.type}`;
            }
            return el;
        }) */;
    }
}
