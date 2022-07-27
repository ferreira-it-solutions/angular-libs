export enum AlertTime {
    VERY_SHORT = 1, //500
    SHORT = 2, //1000
    DEFAULT = 4, //2000
    LONG = 6, //3000
    VERY_LONG = 10 //5000
  }
  
  export enum AlertType {
    SUCCESS = 'success',
    WARNING = 'warning',
    ERROR = 'error',
    INFO = 'info',
    DEFAULT = 'default',
    PRIMARY = 'primary',
    ACCENT = 'accent'
  }
  
  export enum AlertPositionHorizontal {
    // START = 'start',
    CENTER = 'center',
    // END = 'end',
    LEFT = 'left',
    RIGHT = 'right'
  }
  
  export enum AlertPositionVertical {
    TOP = 'top',
    BOTTOM = 'bottom'
  }
  
  export interface IAlert {
    message?: string;
    type?: AlertType;
    duration?: AlertTime;
    pos?: {
        horizontal: AlertPositionHorizontal;
        vertical: AlertPositionVertical;
    };
    action?: {
        text: string;
        onAction: (param: any) => any;
    };
  }
  
  export interface DialogData {
    noClick?: boolean;
    noText?: string;
    okText?: string;
    model?: any;
    title?: string;
    message?: string;
    hasModel?: boolean;
    type?: AlertType;
    innerHTML?: string;
    height?: string;
    width?: string;
    minWidth?: string;
    minHeight?: string;
    maxWidth?: string;
    maxHeight?: string;
    invert?: boolean;
  }
  export interface DialogActionData {
    result: boolean;
    model?: any;
  }
  