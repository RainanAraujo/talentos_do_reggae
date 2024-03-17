import { Band } from "./band.model";
import { Dancers } from "./dancers.model";
import { DJ } from "./dj.model";

export type Registered = ({ type: 'band' } & Band) | ({ type: 'dancers' } & Dancers) | ({ type: 'dj' } & DJ);