import {PackageType} from "./packageType"

export class Package {
  id!:string;
  image!: string;
  label!: string;
  url!: string;
  subPackages!: PackageType[];
}
