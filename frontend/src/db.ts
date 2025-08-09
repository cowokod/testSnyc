import Dexie, { Table } from 'dexie';

export interface Crypto {
  id?: number;
  name: string;
  code: string;
  iconUrl: string;
}

export interface Trading {
  id?: number;
  assetName: string;
  assetId: number;
  type: string;
  plannedQty: number;
  priceMax?: number;
  priceMin?: number;
  subtotal: number;
  filled: boolean;
  filledAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Portfolio {
  id?: number;
  name: string;
  totalAmount: number;
  updatedAt: Date;
  previousTotal: number;
}

export interface Asset {
  id?: number;
  assetName: string;
  assetId: number;
  qty: number;
  totalAmount: number;
  avgPrice: number;
  lastPrice: number;
  lastPriceAt: Date;
}

export interface Transaction {
  id?: number;
  assetName: string;
  assetId: number;
  type: string;
  qty: number;
  price: number;
  subtotal: number;
  tradedAt: Date;
}

export interface Setting {
  key: string;
  value: string;
}

export interface Currency {
  id?: number;
  name: string;
  symbol: string;
  code: string;
  minDecimal: number;
  isDefault: boolean;
}

export class AppDB extends Dexie {
  crypto!: Table<Crypto, number>;
  trading!: Table<Trading, number>;
  portfolio!: Table<Portfolio, number>;
  assets!: Table<Asset, number>;
  transaction!: Table<Transaction, number>;
  setting!: Table<Setting, string>;
  currencies!: Table<Currency, number>;

  constructor() {
    super('appDB');
    this.version(1).stores({
      crypto: '++id, name, code',
      trading: '++id, assetId, type',
      portfolio: '++id, name',
      assets: '++id, assetId',
      transaction: '++id, assetId, type',
      setting: 'key',
      currencies: '++id, code'
    });
  }
}

export const db = new AppDB();
