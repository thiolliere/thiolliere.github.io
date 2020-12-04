(function() {var implementors = {};
implementors["frame_metadata"] = [{"text":"impl&lt;B, O&gt; Decode for DecodeDifferent&lt;B, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;O: Decode + 'static,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Decode for FunctionMetadata","synthetic":false,"types":[]},{"text":"impl Decode for FunctionArgumentMetadata","synthetic":false,"types":[]},{"text":"impl Decode for OuterEventMetadata","synthetic":false,"types":[]},{"text":"impl Decode for EventMetadata","synthetic":false,"types":[]},{"text":"impl Decode for StorageEntryMetadata","synthetic":false,"types":[]},{"text":"impl Decode for ModuleConstantMetadata","synthetic":false,"types":[]},{"text":"impl Decode for ErrorMetadata","synthetic":false,"types":[]},{"text":"impl Decode for StorageHasher","synthetic":false,"types":[]},{"text":"impl Decode for StorageEntryType","synthetic":false,"types":[]},{"text":"impl Decode for StorageEntryModifier","synthetic":false,"types":[]},{"text":"impl Decode for StorageMetadata","synthetic":false,"types":[]},{"text":"impl Decode for RuntimeMetadataPrefixed","synthetic":false,"types":[]},{"text":"impl Decode for ExtrinsicMetadata","synthetic":false,"types":[]},{"text":"impl Decode for RuntimeMetadata","synthetic":false,"types":[]},{"text":"impl Decode for RuntimeMetadataDeprecated","synthetic":false,"types":[]},{"text":"impl Decode for RuntimeMetadataV12","synthetic":false,"types":[]},{"text":"impl Decode for ModuleMetadata","synthetic":false,"types":[]}];
implementors["frame_system"] = [{"text":"impl&lt;T:&nbsp;Config + Send + Sync&gt; Decode for CheckGenesis&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PhantomData&lt;T&gt;: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;PhantomData&lt;T&gt;: Decode,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config + Send + Sync&gt; Decode for CheckMortality&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PhantomData&lt;T&gt;: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;PhantomData&lt;T&gt;: Decode,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config&gt; Decode for CheckNonce&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Index: HasCompact,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config + Send + Sync&gt; Decode for CheckSpecVersion&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PhantomData&lt;T&gt;: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;PhantomData&lt;T&gt;: Decode,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config + Send + Sync&gt; Decode for CheckTxVersion&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PhantomData&lt;T&gt;: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;PhantomData&lt;T&gt;: Decode,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config + Send + Sync&gt; Decode for CheckWeight&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PhantomData&lt;T&gt;: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;PhantomData&lt;T&gt;: Decode,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Decode for Phase","synthetic":false,"types":[]},{"text":"impl&lt;E:&nbsp;Parameter + Member, T&gt; Decode for EventRecord&lt;E, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Vec&lt;T&gt;: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Vec&lt;T&gt;: Decode,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;AccountId&gt; Decode for RawOrigin&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Decode,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Index, AccountData&gt; Decode for AccountInfo&lt;Index, AccountData&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Index: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Index: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountData: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountData: Decode,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Decode for LastRuntimeUpgradeInfo","synthetic":false,"types":[]},{"text":"impl&lt;AccountId&gt; Decode for RawEvent&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Decode,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config&gt; Decode for Call&lt;T&gt;","synthetic":false,"types":[]}];
implementors["pallet_elections_phragmen"] = [{"text":"impl Decode for Renouncing","synthetic":false,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Decode for Voter&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Vec&lt;AccountId&gt;: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Vec&lt;AccountId&gt;: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Decode,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Decode for SeatHolder&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Decode,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Balance, AccountId&gt; Decode for RawEvent&lt;Balance, AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Vec&lt;(AccountId, Balance)&gt;: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Vec&lt;(AccountId, Balance)&gt;: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Decode,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config&gt; Decode for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Vec&lt;T::AccountId&gt;: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Vec&lt;T::AccountId&gt;: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T::Lookup as StaticLookup&gt;::Source: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T::Lookup as StaticLookup&gt;::Source: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Currency as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: HasCompact,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["primitive_types"] = [{"text":"impl Decode for U128","synthetic":false,"types":[]},{"text":"impl Decode for U256","synthetic":false,"types":[]},{"text":"impl Decode for U512","synthetic":false,"types":[]},{"text":"impl Decode for H128","synthetic":false,"types":[]},{"text":"impl Decode for H160","synthetic":false,"types":[]},{"text":"impl Decode for H256","synthetic":false,"types":[]},{"text":"impl Decode for H512","synthetic":false,"types":[]}];
implementors["sp_application_crypto"] = [{"text":"impl Decode for Public","synthetic":false,"types":[]},{"text":"impl Decode for Signature","synthetic":false,"types":[]},{"text":"impl Decode for Public","synthetic":false,"types":[]},{"text":"impl Decode for Signature","synthetic":false,"types":[]},{"text":"impl Decode for Public","synthetic":false,"types":[]},{"text":"impl Decode for Signature","synthetic":false,"types":[]}];
implementors["sp_arithmetic"] = [{"text":"impl Decode for Percent","synthetic":false,"types":[]},{"text":"impl Decode for PerU16","synthetic":false,"types":[]},{"text":"impl Decode for Permill","synthetic":false,"types":[]},{"text":"impl Decode for Perbill","synthetic":false,"types":[]},{"text":"impl Decode for Perquintill","synthetic":false,"types":[]},{"text":"impl Decode for FixedI64","synthetic":false,"types":[]},{"text":"impl Decode for FixedI128","synthetic":false,"types":[]},{"text":"impl Decode for FixedU128","synthetic":false,"types":[]}];
implementors["sp_core"] = [{"text":"impl Decode for DeriveJunction","synthetic":false,"types":[]},{"text":"impl Decode for AccountId32","synthetic":false,"types":[]},{"text":"impl Decode for KeyTypeId","synthetic":false,"types":[]},{"text":"impl Decode for CryptoTypeId","synthetic":false,"types":[]},{"text":"impl Decode for CryptoTypePublicPair","synthetic":false,"types":[]},{"text":"impl Decode for Public","synthetic":false,"types":[]},{"text":"impl Decode for Signature","synthetic":false,"types":[]},{"text":"impl Decode for LocalizedSignature","synthetic":false,"types":[]},{"text":"impl Decode for Public","synthetic":false,"types":[]},{"text":"impl Decode for Signature","synthetic":false,"types":[]},{"text":"impl Decode for Public","synthetic":false,"types":[]},{"text":"impl Decode for Signature","synthetic":false,"types":[]},{"text":"impl Decode for StorageKind","synthetic":false,"types":[]},{"text":"impl Decode for HttpRequestId","synthetic":false,"types":[]},{"text":"impl Decode for HttpError","synthetic":false,"types":[]},{"text":"impl Decode for HttpRequestStatus","synthetic":false,"types":[]},{"text":"impl Decode for OpaqueNetworkState","synthetic":false,"types":[]},{"text":"impl Decode for OpaqueMultiaddr","synthetic":false,"types":[]},{"text":"impl Decode for Timestamp","synthetic":false,"types":[]},{"text":"impl Decode for Duration","synthetic":false,"types":[]},{"text":"impl Decode for HostError","synthetic":false,"types":[]},{"text":"impl Decode for ExternEntity","synthetic":false,"types":[]},{"text":"impl Decode for Entry","synthetic":false,"types":[]},{"text":"impl Decode for EnvironmentDefinition","synthetic":false,"types":[]},{"text":"impl Decode for ChangesTrieConfiguration","synthetic":false,"types":[]},{"text":"impl Decode for OpaqueMetadata","synthetic":false,"types":[]},{"text":"impl Decode for OpaquePeerId","synthetic":false,"types":[]},{"text":"impl Decode for NeverNativeValue","synthetic":false,"types":[]},{"text":"impl Decode for LogLevel","synthetic":false,"types":[]},{"text":"impl Decode for Void","synthetic":false,"types":[]}];
implementors["sp_inherents"] = [{"text":"impl Decode for Error","synthetic":false,"types":[]},{"text":"impl Decode for InherentData","synthetic":false,"types":[]},{"text":"impl Decode for CheckInherentsResult","synthetic":false,"types":[]}];
implementors["sp_io"] = [{"text":"impl Decode for EcdsaVerifyError","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Encode + Decode&gt; Decode for Crossing&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Decode,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["sp_npos_elections"] = [{"text":"impl&lt;AccountId, P:&nbsp;PerThing&gt; Decode for Assignment&lt;AccountId, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Vec&lt;(AccountId, P)&gt;: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Vec&lt;(AccountId, P)&gt;: Decode,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;AccountId&gt; Decode for StakedAssignment&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Vec&lt;(AccountId, ExtendedBalance)&gt;: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Vec&lt;(AccountId, ExtendedBalance)&gt;: Decode,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["sp_runtime"] = [{"text":"impl&lt;Address, Call, Signature, Extra&gt; Decode for UncheckedExtrinsic&lt;Address, Call, Signature, Extra&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Address: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Signature: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Call: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Extra: SignedExtension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Decode for Era","synthetic":false,"types":[]},{"text":"impl&lt;Number, Hash&gt; Decode for Header&lt;Number, Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Number: HasCompact + Copy + Into&lt;U256&gt; + TryFrom&lt;U256&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: HashT,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash::Output: Decode,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Header, Extrinsic:&nbsp;MaybeSerialize&gt; Decode for Block&lt;Header, Extrinsic&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Header: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Header: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Vec&lt;Extrinsic&gt;: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Vec&lt;Extrinsic&gt;: Decode,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Block&gt; Decode for SignedBlock&lt;Block&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: Decode,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Hash&gt; Decode for Digest&lt;Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Vec&lt;DigestItem&lt;Hash&gt;&gt;: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Vec&lt;DigestItem&lt;Hash&gt;&gt;: Decode,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Decode for ChangesTrieSignal","synthetic":false,"types":[]},{"text":"impl&lt;Hash:&nbsp;Decode&gt; Decode for DigestItem&lt;Hash&gt;","synthetic":false,"types":[]},{"text":"impl Decode for Time","synthetic":false,"types":[]},{"text":"impl&lt;B:&nbsp;BlockNumberProvider&gt; Decode for BlockAndTimeDeadline&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as BlockNumberProvider&gt;::BlockNumber: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as BlockNumberProvider&gt;::BlockNumber: Decode,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Decode for UintAuthorityId","synthetic":false,"types":[]},{"text":"impl Decode for TestSignature","synthetic":false,"types":[]},{"text":"impl&lt;Xt&gt; Decode for ExtrinsicWrapper&lt;Xt&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Xt: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Xt: Decode,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Xt&gt; Decode for Block&lt;Xt&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Vec&lt;Xt&gt;: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Vec&lt;Xt&gt;: Decode,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Call, Extra&gt; Decode for TestXt&lt;Call, Extra&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Option&lt;(u64, Extra)&gt;: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Option&lt;(u64, Extra)&gt;: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Call: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Call: Decode,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Decode for BadOrigin","synthetic":false,"types":[]},{"text":"impl Decode for LookupError","synthetic":false,"types":[]},{"text":"impl Decode for InvalidTransaction","synthetic":false,"types":[]},{"text":"impl Decode for UnknownTransaction","synthetic":false,"types":[]},{"text":"impl Decode for TransactionValidityError","synthetic":false,"types":[]},{"text":"impl Decode for TransactionSource","synthetic":false,"types":[]},{"text":"impl Decode for ValidTransaction","synthetic":false,"types":[]},{"text":"impl&lt;Hashing:&nbsp;Hash&gt; Decode for RandomNumberGenerator&lt;Hashing&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Hashing::Output: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hashing::Output: Decode,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Decode for RuntimeString","synthetic":false,"types":[]},{"text":"impl&lt;AccountId, AccountIndex&gt; Decode for MultiAddress&lt;AccountId, AccountIndex&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountIndex: HasCompact,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Decode for ModuleId","synthetic":false,"types":[]},{"text":"impl Decode for MultiSignature","synthetic":false,"types":[]},{"text":"impl Decode for MultiSigner","synthetic":false,"types":[]},{"text":"impl Decode for AnySignature","synthetic":false,"types":[]},{"text":"impl Decode for DispatchError","synthetic":false,"types":[]},{"text":"impl&lt;Info&gt; Decode for DispatchErrorWithPostInfo&lt;Info&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Info: Eq + PartialEq + Clone + Copy + Encode + Decode + Printable,<br>&nbsp;&nbsp;&nbsp;&nbsp;Info: Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;Info: Decode,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Decode for OpaqueExtrinsic","synthetic":false,"types":[]}];
implementors["sp_storage"] = [{"text":"impl Decode for TrackedStorageKey","synthetic":false,"types":[]}];
implementors["sp_tracing"] = [{"text":"impl Decode for WasmLevel","synthetic":false,"types":[]},{"text":"impl Decode for WasmValue","synthetic":false,"types":[]},{"text":"impl Decode for WasmFieldName","synthetic":false,"types":[]},{"text":"impl Decode for WasmFields","synthetic":false,"types":[]},{"text":"impl Decode for WasmValuesSet","synthetic":false,"types":[]},{"text":"impl Decode for WasmMetadata","synthetic":false,"types":[]},{"text":"impl Decode for WasmEntryAttributes","synthetic":false,"types":[]}];
implementors["sp_trie"] = [{"text":"impl Decode for StorageProof","synthetic":false,"types":[]}];
implementors["sp_version"] = [{"text":"impl Decode for RuntimeVersion","synthetic":false,"types":[]}];
implementors["sp_wasm_interface"] = [{"text":"impl Decode for Value","synthetic":false,"types":[]},{"text":"impl Decode for ReturnValue","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()