import Constants from './constants.js';

import Assets from './lib/assets.js';
import Asteroid from './lib/asteroid.js';
import Building from './lib/building.js';
import Crew from './lib/crew.js';
import Crewmate from './lib/crewmate.js';
import Deposit from './lib/deposit.js';
import Dock from './lib/dock.js';
import DryDock from './lib/dryDock.js';
import Exchange from './lib/exchange.js';
import Extractor from './lib/extractor.js';
import Inventory from './lib/inventory.js';
import Nameable from './lib/nameable.js';
import Order from './lib/order.js';
import Process from './lib/process.js';
import Product from './lib/product.js';
import Ship from './lib/ship.js';
import Station from './lib/station.js';

import Address from './utils/address.js';
import AdalianOrbit from './utils/AdalianOrbit.js';
import Merkle from './utils/MerkleTree.js';
import Simplex from './utils/simplex.js';
import Time from './utils/Time.js';

import ethereumContracts from './contracts/ethereum_abis.json' assert { type: 'json' };
import starknetContracts from './contracts/starknet_abis.json' assert { type: 'json' };

// Utility libs
export { AdalianOrbit, Address, Merkle, Simplex, Time };

// Game asset libs
export { Assets, Asteroid, Building, Crew, Crewmate, Deposit, Dock, DryDock, Exchange, Extractor, Inventory, Nameable, Order, Process, Product, Ship, Station };

// Contract ABIs
export { ethereumContracts, starknetContracts };

export const ADALIA_MASS = Constants.ADALIA_MASS;
export const GM_ADALIA = Constants.GM_ADALIA;
export const SIMPLEX_POLY_FIT = Constants.SIMPLEX_POLY_FIT;
