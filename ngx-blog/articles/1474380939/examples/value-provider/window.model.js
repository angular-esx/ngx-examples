import { OpaqueToken } from '@angular/core';

export var WINDOW = new OpaqueToken('window');

export var WINDOW_PROVIDERS = [
  { provide: WINDOW, useValue: window }
];