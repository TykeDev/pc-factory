import { FactorySizes } from "../enums/FactorySizes";
import { UpgradeTiers } from "../enums/UpgradeTiers";
import { IWorkshop } from "../interfaces/IWorkshop";

export class Workshop implements IWorkshop {
    name = "Takoowa";
    tier = UpgradeTiers.Tier1;
    size = FactorySizes.SMALL;
    upgrade(): void {
        this.tier += 1;
    }
    getInventory(): number {
        throw new Error("Method not implemented.");
    }
    
}