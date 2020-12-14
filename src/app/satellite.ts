import { truncate } from "fs";

export class Satellite {
    name: string;
    type: string;
    launchDate: string;
    orbitType: string;
    operational: boolean;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational
    }

    shouldShowWarning (): boolean {
        let lowercaseType: string = this.type.toLowerCase();

        if (lowercaseType === "space debris") {
            return true;
        } else {
            return false;
        }
    }
}