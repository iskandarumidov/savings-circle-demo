/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

/// <reference types="truffle-typings" />

import * as TruffleContracts from ".";

declare global {
  namespace Truffle {
    interface Artifacts {
      require(name: "ERC20"): TruffleContracts.ERC20Contract;
      require(name: "IERC20"): TruffleContracts.IERC20Contract;
      require(name: "IERC20Token"): TruffleContracts.IERC20TokenContract;
      require(name: "Initializable"): TruffleContracts.InitializableContract;
      require(name: "Migrations"): TruffleContracts.MigrationsContract;
      require(
        name: "MockStableToken"
      ): TruffleContracts.MockStableTokenContract;
      require(name: "Ownable"): TruffleContracts.OwnableContract;
      require(
        name: "ReentrancyGuard"
      ): TruffleContracts.ReentrancyGuardContract;
      require(name: "SavingsCircle"): TruffleContracts.SavingsCircleContract;
    }
  }
}
