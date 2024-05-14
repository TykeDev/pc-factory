import { FactorySizes } from "../enums/FactorySizes";
import { UpgradeTiers } from "../enums/UpgradeTiers";

export interface IBaseFactory {
    name: string; // Factory name
    tier: UpgradeTiers; // Upgrade tier (1-4)
    size: FactorySizes; // Factory size
  
    // Methods for upgrading and managing the factory
    upgrade(): void;
    getInventory(): number; // Get current inventory level
    // ... other methods as needed
  }