/**
 * Be careful when adding to this file or relying on this file.
 * The verification tooling uses the CeloContractName enum as a
 * source of truth for what contracts are considered "core" and
 * need to be checked for backwards compatability and bytecode on
 * an environment.
 */

import { MENTO_PACKAGE } from "../contractPackages"

export const celoRegistryAddress = '0x000000000000000000000000000000000000ce10'

export enum CeloContractName {
  Accounts = 'Accounts',
  Attestations = 'Attestations',
  BlockchainParameters = 'BlockchainParameters',
  DoubleSigningSlasher = 'DoubleSigningSlasher',
  DowntimeSlasher = 'DowntimeSlasher',
  Election = 'Election',
  EpochRewards = 'EpochRewards',
  Escrow = 'Escrow',
  Exchange = 'Exchange',
  ExchangeEUR = 'ExchangeEUR',
  ExchangeBRL = 'ExchangeBRL',
  FederatedAttestations = 'FederatedAttestations',
  FeeCurrencyWhitelist = 'FeeCurrencyWhitelist',
  Freezer = 'Freezer',
  GasPriceMinimum = 'GasPriceMinimum',
  GoldToken = 'GoldToken',
  Governance = 'Governance',
  GovernanceSlasher = 'GovernanceSlasher',
  GovernanceApproverMultiSig = 'GovernanceApproverMultiSig',
  GrandaMento = 'GrandaMento',
  LockedGold = 'LockedGold',
  OdisPayments = 'OdisPayments',
  Random = 'Random',
  Reserve = 'Reserve',
  ReserveSpenderMultiSig = 'ReserveSpenderMultiSig',
  SortedOracles = 'SortedOracles',
  StableToken = 'StableToken',
  StableTokenEUR = 'StableTokenEUR',
  StableTokenBRL = 'StableTokenBRL',
  Validators = 'Validators',
}

export const usesRegistry = [
  CeloContractName.Reserve,
  CeloContractName.StableToken,
]

export const hasEntryInRegistry= [
  {
    contracts:[
      CeloContractName.Accounts,
      CeloContractName.Attestations,
      CeloContractName.BlockchainParameters,
      CeloContractName.DoubleSigningSlasher,
      CeloContractName.DowntimeSlasher,
      CeloContractName.Election,
      CeloContractName.Escrow,
      CeloContractName.FederatedAttestations,
      CeloContractName.FeeCurrencyWhitelist,
      CeloContractName.Freezer,
      CeloContractName.GasPriceMinimum,
      CeloContractName.GoldToken,
      CeloContractName.GovernanceSlasher,
      CeloContractName.OdisPayments,
      CeloContractName.Random,
      CeloContractName.SortedOracles,
    ]
  },
  {
    ...MENTO_PACKAGE,
    // not all Mentro contracts are supposed to be in the Registry
    contracts:[
      CeloContractName.Exchange,
      CeloContractName.GrandaMento,
      CeloContractName.Reserve,
      CeloContractName.StableToken,
    ],
  }
]
