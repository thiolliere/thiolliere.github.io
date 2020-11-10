initSidebarItems({"constant":[["MAX_NOMINATIONS",""],["MAX_UNLOCKING_CHUNKS",""]],"enum":[["Call","Dispatchable calls."],["ElectionCompute","Indicate how an election round was computed."],["ElectionStatus","The status of the upcoming (offchain) election."],["Error","Error for the staking module."],["Forcing","Mode of era-forcing."],["RawEvent","Events for this module."],["RewardDestination","A destination account for payment."],["StakerStatus","Indicates the initial status of the staker."]],"macro":[["log",""]],"mod":[["benchmarking","Staking pallet benchmarking."],["inflation","This module expose one function `P_NPoS` (Payout NPoS) or `compute_total_payout` which returns the total payout for the era given the era duration and the staking rate in NPoS. The staking rate in NPoS is the total amount of tokens staked by nominators and validators, divided by the total token supply."],["offchain_election","Helpers for offchain worker election."],["slashing","A slashing implementation for NPoS systems."],["testing_utils","Testing utils for staking. Provides some common functions to setup staking state, such as bonding validators, nominators, and generating different types of solutions."],["weights","Weights for pallet_staking THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 2.0.0 DATE: 2020-10-27, STEPS: [50, ], REPEAT: 20, LOW RANGE: [], HIGH RANGE: [] EXECUTION: Some(Wasm), WASM-EXECUTION: Compiled, CHAIN: Some(\"dev\"), DB CACHE: 128"]],"struct":[["ActiveEra","The active era information, it holds index and start."],["ActiveEraInfo","Information regarding the active era (era in used in session)."],["Bonded","Map from all locked \"stash\" accounts to the controller account."],["CanceledSlashPayout","The amount of currency given to reporters of a slash event which was canceled by extraordinary circumstances (e.g. governance)."],["CompactAssignments",""],["CurrentEra","The current era index."],["ElectionResult","The result of an election round."],["ElectionSize","Some indications about the size of the election. This must be submitted with the solution."],["EraElectionStatus","Flag to control the execution of the offchain election. When `Open(_)`, we accept solutions to be submitted."],["EraRewardPoints","Reward points of an era. Used to split era total payout between validators."],["ErasRewardPoints","Rewards for the last `HISTORY_DEPTH` eras. If reward hasn't been set or has been removed then 0 reward is returned."],["ErasStakers","Exposure of validator at era."],["ErasStakersClipped","Clipped Exposure of validator at era."],["ErasStartSessionIndex","The session index at which the era start for the last `HISTORY_DEPTH` eras."],["ErasTotalStake","The total amount staked for the last `HISTORY_DEPTH` eras. If total hasn't been set or has been removed then 0 stake is returned."],["ErasValidatorPrefs","Similar to `ErasStakers`, this holds the preferences of validators."],["ErasValidatorReward","The total validator era payout for the last `HISTORY_DEPTH` eras."],["Exposure","A snapshot of the stake backing a single validator in the system."],["ExposureOf","A typed conversion from stash account ID to the active exposure of nominators on that account."],["FilterHistoricalOffences","Filter historical offences out and only allow those from the bonding period."],["ForceEra","Mode of era forcing."],["GenesisConfig","Genesis config for the module, allow to build genesis storage."],["IndividualExposure","The amount of exposure (to slashing) than an individual nominator has."],["Invulnerables","Any validators that may never be slashed or forcibly kicked. It's a Vec since they're easy to initialize and the performance hit is minimal (we expect no more than four invulnerables) and restricted to testnets."],["IsCurrentSessionFinal","True if the current planned session is final. Note that this does not take era forcing into account."],["Ledger","Map from all (unlocked) \"controller\" accounts to the info regarding the staking."],["MinimumValidatorCount","Minimum number of staking participants before emergency conditions are imposed."],["Module",""],["Nominations","A record of the nominations made by a specific account."],["Nominators","The map from nominator stash key to the set of stash keys of all validators to nominate."],["Payee","Where the reward payment should be made. Keyed by stash."],["QueuedElected","The next validator set. At the end of an era, if this is available (potentially from the result of an offchain worker), it is immediately used. Otherwise, the on-chain election is executed."],["QueuedScore","The score of the current [`QueuedElected`]."],["SlashRewardFraction","The percentage of the slash that is distributed to reporters."],["SnapshotNominators","Snapshot of nominators at the beginning of the current election window. This should only have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`."],["SnapshotValidators","Snapshot of validators at the beginning of the current election window. This should only have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`."],["StakingLedger","The ledger of a (bonded) stash."],["StashOf","A `Convert` implementation that finds the stash of the given controller account, if any."],["UnappliedSlash","A pending slash record. The value of the slash has been computed but not applied yet, rather deferred for several eras."],["UnappliedSlashes","All unapplied slashes that are queued for later."],["UnlockChunk","Just a Balance/BlockNumber tuple to encode when a chunk of funds will be unlocked."],["ValidatorCount","The ideal number of staking participants."],["ValidatorPrefs","Preference of what happens regarding validation."],["Validators","The map from (wannabe) validator stash key to the preferences of that validator."]],"trait":[["SessionInterface","Means for interacting with a specialized version of the `session` trait."],["Trait",""],["_","Provides version information about a pallet."]],"type":[["BalanceOf","The balance type of this module."],["ChainAccuracy","Accuracy used for on-chain election."],["EraIndex","Counter for the number of eras that have passed."],["Event","`RawEvent` specialized for the configuration `Trait`"],["NominatorIndex","Data type used to index nominators in the compact type"],["OffchainAccuracy","Accuracy used for off-chain election. This better be small."],["RewardPoint","Counter for the number of \"reward\" points earned by a given validator."],["ValidatorIndex","Data type used to index validators in the compact type."]]});