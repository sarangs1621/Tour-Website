import {Details} from "./Details";

export class PackageType {
  id!:string;
  image?: string;
  place?: string;
  days?: string;
  description?:string;
  showMore?: boolean;
  details?: Details[];
}
