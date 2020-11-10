initSidebarItems({"constant":[["VERSION","Runtime version."],["WASM_BINARY",""],["WASM_BINARY_BLOATY",""]],"enum":[["BalancesCall","Dispatchable calls."],["Call",""],["Event",""],["OriginCaller",""],["ProxyType","The type used to represent the kinds of proxying allowed."],["StakerStatus","Indicates the initial status of the staker."],["SystemCall","Dispatchable calls."]],"fn":[["native_version","Native version."],["wasm_binary_unwrap","Wasm binary unwrapped. If built with `BUILD_DUMMY_WASM_BINARY`, the function panics."]],"mod":[["api",""],["constants","Constant values used within the runtime. A set of constant values used in substrate runtime."],["impls","Implementations of some helper traits passed into runtime modules as associated types. Some configurable implementations as associated type for the substrate runtime."]],"struct":[["AdjustmentVariable",""],["AnnouncementDepositBase",""],["AnnouncementDepositFactor",""],["AvailableBlockRatio",""],["BasicDeposit",""],["BlockHashCount",""],["BondingDuration",""],["BountyCuratorDeposit",""],["BountyDepositBase",""],["BountyDepositPayoutDelay",""],["BountyUpdatePeriod",""],["BountyValueMinimum",""],["Burn",""],["CandidacyBond",""],["CandidateDeposit",""],["ChallengePeriod",""],["ConfigDepositBase",""],["CooloffPeriod",""],["CouncilMaxMembers",""],["CouncilMaxProposals",""],["CouncilMotionDuration",""],["CurrencyAdapter","Implements the transaction payment for a module implementing the `Currency` trait (eg. the pallet_balances) using an unbalance handler (implementing `OnUnbalanced`)."],["DataDepositPerByte",""],["DealWithFees",""],["DepositBase",""],["DepositFactor",""],["DesiredMembers",""],["DesiredRunnersUp",""],["DisabledValidatorsThreshold",""],["ElectionLookahead",""],["ElectionsPhragmenModuleId",""],["EnactmentPeriod",""],["EpochDuration",""],["ExistentialDeposit",""],["ExpectedBlockTime",""],["FastTrackVotingPeriod",""],["FieldDeposit",""],["FriendDepositFactor",""],["GenesisConfig",""],["ImOnlineUnsignedPriority",""],["IndexDeposit",""],["InstantAllowed",""],["LaunchPeriod",""],["MaxAdditionalFields",""],["MaxFriends",""],["MaxIterations",""],["MaxLockDuration",""],["MaxLocks",""],["MaxNominatorRewardedPerValidator",""],["MaxPending",""],["MaxProposals",""],["MaxProxies",""],["MaxRegistrars",""],["MaxScheduledPerBlock",""],["MaxSignatories",""],["MaxStrikes",""],["MaxSubAccounts",""],["MaxVotes",""],["MaximumBlockLength",""],["MaximumBlockWeight","We allow for 2 seconds of compute with a 6 second average block time."],["MaximumExtrinsicWeight","Assume 10% of weight for average on_initialize calls."],["MaximumReasonLength",""],["MaximumSchedulerWeight",""],["MinSolutionScoreBump",""],["MinVestedTransfer",""],["MinimumDeposit",""],["MinimumMultiplier",""],["MinimumPeriod",""],["OffchainSolutionWeightLimit",""],["OffencesWeightSoftLimit",""],["Origin",""],["PalletInfo","Provides an implementation of `PalletInfo` to provide information about the pallet setup in the runtime."],["PeriodSpend",""],["PreimageByteDeposit",""],["ProposalBond",""],["ProposalBondMinimum",""],["ProxyDepositBase",""],["ProxyDepositFactor",""],["RecoveryDeposit",""],["RentByteFee",""],["RentDepositOffset",""],["RewardCurve",""],["RotationPeriod",""],["Runtime",""],["RuntimeApi",""],["RuntimeApiImpl","Implements all runtime apis for the client side."],["SessionDuration",""],["SessionKeys",""],["SessionsPerEra",""],["SlashDeferDuration",""],["SocietyModuleId",""],["SpendPeriod",""],["StakingUnsignedPriority","We prioritize im-online heartbeats over election solution submission."],["SubAccountDeposit",""],["SurchargeReward",""],["TargetBlockFullness",""],["TargetedFeeAdjustment","A struct to update the weight multiplier per block. It implements `Convert<Multiplier, Multiplier>`, meaning that it can convert the previous multiplier to the next one. This should be called on `on_finalize` of a block, prior to potentially cleaning the weight data from the system module."],["TechnicalMaxMembers",""],["TechnicalMaxProposals",""],["TechnicalMotionDuration",""],["TermDuration",""],["TipCountdown",""],["TipFindersFee",""],["TipReportDepositBase",""],["TombstoneDeposit",""],["TransactionByteFee",""],["TreasuryModuleId",""],["UncleGenerations",""],["Version",""],["VotingBond",""],["VotingPeriod",""],["WrongSideDeduction",""]],"trait":[["BuildStorage","Complex storage builder stuff."]],"type":[["AccountId","Some way of identifying an account on the chain. We intentionally make it equivalent to the public key of our transaction signing scheme."],["Address","The address format for describing accounts."],["AuthorityDiscovery",""],["AuthorityDiscoveryConfig",""],["Authorship",""],["Babe",""],["BabeConfig",""],["Balances",""],["BalancesConfig",""],["Block","Block type as expected by this runtime."],["BlockId","BlockId type as expected by this runtime."],["CheckedExtrinsic","Extrinsic type that has already been checked."],["Contracts",""],["ContractsConfig",""],["Council",""],["CouncilConfig",""],["Democracy",""],["DemocracyConfig",""],["Elections",""],["ElectionsConfig",""],["Executive","Executive: handles dispatch to the various modules."],["Grandpa",""],["GrandpaConfig",""],["Header","Block header type as expected by this runtime."],["Historical",""],["Identity",""],["ImOnline",""],["ImOnlineConfig",""],["Indices",""],["IndicesConfig",""],["Multiplier","Fee multiplier."],["Multisig",""],["Offences",""],["Proxy",""],["RandomnessCollectiveFlip",""],["Recovery",""],["Scheduler",""],["Session",""],["SessionConfig",""],["Signature","Alias to 512-bit hash when used in the context of a transaction signature on the chain."],["SignedBlock","A Block signed with a Justification"],["SignedExtra","The SignedExtension to the basic transaction logic."],["SignedPayload","The payload being signed in transactions."],["Society",""],["SocietyConfig",""],["Staking",""],["StakingConfig",""],["Sudo",""],["SudoConfig",""],["System",""],["SystemConfig",""],["TechnicalCommittee",""],["TechnicalCommitteeConfig",""],["TechnicalMembership",""],["TechnicalMembershipConfig",""],["Timestamp",""],["TransactionPayment",""],["Treasury",""],["TreasuryConfig",""],["UncheckedExtrinsic","Unchecked extrinsic type as expected by this runtime."],["Utility",""],["Vesting",""],["VestingConfig",""]]});