(function() {var implementors = {};
implementors["bitvec"] = [{"text":"impl&lt;O, T, I&gt; BitXor&lt;I&gt; for BitBox&lt;O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: IntoIterator&lt;Item = bool&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T, I&gt; BitXor&lt;I&gt; for BitVec&lt;O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: IntoIterator&lt;Item = bool&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["ethbloom"] = [{"text":"impl&lt;'l, 'r&gt; BitXor&lt;&amp;'r Bloom&gt; for &amp;'l Bloom","synthetic":false,"types":[]},{"text":"impl BitXor&lt;Bloom&gt; for Bloom","synthetic":false,"types":[]}];
implementors["ethereum_types"] = [{"text":"impl&lt;'l, 'r&gt; BitXor&lt;&amp;'r H32&gt; for &amp;'l H32","synthetic":false,"types":[]},{"text":"impl BitXor&lt;H32&gt; for H32","synthetic":false,"types":[]},{"text":"impl&lt;'l, 'r&gt; BitXor&lt;&amp;'r H64&gt; for &amp;'l H64","synthetic":false,"types":[]},{"text":"impl BitXor&lt;H64&gt; for H64","synthetic":false,"types":[]},{"text":"impl&lt;'l, 'r&gt; BitXor&lt;&amp;'r H128&gt; for &amp;'l H128","synthetic":false,"types":[]},{"text":"impl BitXor&lt;H128&gt; for H128","synthetic":false,"types":[]},{"text":"impl&lt;'l, 'r&gt; BitXor&lt;&amp;'r H264&gt; for &amp;'l H264","synthetic":false,"types":[]},{"text":"impl BitXor&lt;H264&gt; for H264","synthetic":false,"types":[]},{"text":"impl&lt;'l, 'r&gt; BitXor&lt;&amp;'r H520&gt; for &amp;'l H520","synthetic":false,"types":[]},{"text":"impl BitXor&lt;H520&gt; for H520","synthetic":false,"types":[]},{"text":"impl BitXor&lt;U64&gt; for U64","synthetic":false,"types":[]}];
implementors["fake_simd"] = [{"text":"impl BitXor&lt;u32x4&gt; for u32x4","synthetic":false,"types":[]}];
implementors["frame_support"] = [{"text":"impl BitXor&lt;WithdrawReasons&gt; for WithdrawReasons","synthetic":false,"types":[]}];
implementors["hashbrown"] = [{"text":"impl&lt;T, S, '_, '_&gt; BitXor&lt;&amp;'_ HashSet&lt;T, S&gt;&gt; for &amp;'_ HashSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash + Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["num_bigint"] = [{"text":"impl BitXor&lt;BigInt&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; BitXor&lt;BigInt&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; BitXor&lt;&amp;'b BigInt&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; BitXor&lt;&amp;'a BigInt&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl BitXor&lt;BigUint&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; BitXor&lt;BigUint&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; BitXor&lt;&amp;'b BigUint&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; BitXor&lt;&amp;'a BigUint&gt; for BigUint","synthetic":false,"types":[]}];
implementors["primitive_types"] = [{"text":"impl BitXor&lt;U128&gt; for U128","synthetic":false,"types":[]},{"text":"impl BitXor&lt;U256&gt; for U256","synthetic":false,"types":[]},{"text":"impl BitXor&lt;U512&gt; for U512","synthetic":false,"types":[]},{"text":"impl&lt;'l, 'r&gt; BitXor&lt;&amp;'r H160&gt; for &amp;'l H160","synthetic":false,"types":[]},{"text":"impl BitXor&lt;H160&gt; for H160","synthetic":false,"types":[]},{"text":"impl&lt;'l, 'r&gt; BitXor&lt;&amp;'r H256&gt; for &amp;'l H256","synthetic":false,"types":[]},{"text":"impl BitXor&lt;H256&gt; for H256","synthetic":false,"types":[]},{"text":"impl&lt;'l, 'r&gt; BitXor&lt;&amp;'r H512&gt; for &amp;'l H512","synthetic":false,"types":[]},{"text":"impl BitXor&lt;H512&gt; for H512","synthetic":false,"types":[]}];
implementors["subtle"] = [{"text":"impl BitXor&lt;Choice&gt; for Choice","synthetic":false,"types":[]}];
implementors["typenum"] = [{"text":"impl BitXor&lt;B0&gt; for B0","synthetic":false,"types":[]},{"text":"impl BitXor&lt;B0&gt; for B1","synthetic":false,"types":[]},{"text":"impl BitXor&lt;B1&gt; for B0","synthetic":false,"types":[]},{"text":"impl BitXor&lt;B1&gt; for B1","synthetic":false,"types":[]},{"text":"impl&lt;Ur:&nbsp;Unsigned&gt; BitXor&lt;Ur&gt; for UTerm","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned, Bl:&nbsp;Bit, Ur:&nbsp;Unsigned&gt; BitXor&lt;Ur&gt; for UInt&lt;Ul, Bl&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;UInt&lt;Ul, Bl&gt;: PrivateXor&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;PrivateXorOut&lt;UInt&lt;Ul, Bl&gt;, Ur&gt;: Trim,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()