(function() {var implementors = {};
implementors["bitvec"] = [{"text":"impl&lt;O, T, I&gt; BitOrAssign&lt;I&gt; for BitSlice&lt;O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: IntoIterator&lt;Item = bool&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T, I&gt; BitOrAssign&lt;I&gt; for BitBox&lt;O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: IntoIterator&lt;Item = bool&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T, I&gt; BitOrAssign&lt;I&gt; for BitVec&lt;O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: IntoIterator&lt;Item = bool&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["frame_support"] = [{"text":"impl BitOrAssign&lt;WithdrawReasons&gt; for WithdrawReasons","synthetic":false,"types":[]}];
implementors["num_bigint"] = [{"text":"impl BitOrAssign&lt;BigInt&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; BitOrAssign&lt;&amp;'a BigInt&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl BitOrAssign&lt;BigUint&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; BitOrAssign&lt;&amp;'a BigUint&gt; for BigUint","synthetic":false,"types":[]}];
implementors["primitive_types"] = [{"text":"impl&lt;'r&gt; BitOrAssign&lt;&amp;'r H128&gt; for H128","synthetic":false,"types":[]},{"text":"impl BitOrAssign&lt;H128&gt; for H128","synthetic":false,"types":[]},{"text":"impl&lt;'r&gt; BitOrAssign&lt;&amp;'r H160&gt; for H160","synthetic":false,"types":[]},{"text":"impl BitOrAssign&lt;H160&gt; for H160","synthetic":false,"types":[]},{"text":"impl&lt;'r&gt; BitOrAssign&lt;&amp;'r H256&gt; for H256","synthetic":false,"types":[]},{"text":"impl BitOrAssign&lt;H256&gt; for H256","synthetic":false,"types":[]},{"text":"impl&lt;'r&gt; BitOrAssign&lt;&amp;'r H512&gt; for H512","synthetic":false,"types":[]},{"text":"impl BitOrAssign&lt;H512&gt; for H512","synthetic":false,"types":[]}];
implementors["subtle"] = [{"text":"impl BitOrAssign&lt;Choice&gt; for Choice","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()