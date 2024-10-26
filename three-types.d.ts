// three-types.d.ts
declare module 'three/examples/jsm/loaders/FBXLoader' {
    import { Loader } from 'three';
    import { Group } from 'three';
  
    export class FBXLoader extends Loader {
      load(
        url: string,
        onLoad: (object: Group) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void
      ): void;
    }
  }