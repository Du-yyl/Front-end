import {
  CombinedComponentInstance,
  VantComponentOptions,
} from '../definitions/index'

declare function VantComponent<Data, Props, Methods> (vantOptions?: VantComponentOptions<Data, Props, Methods, CombinedComponentInstance<Data, Props, Methods>>): void;

export { VantComponent }
