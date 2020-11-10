(function() {var implementors = {};
implementors["hash_db"] = [];
implementors["memory_db"] = [{"text":"impl&lt;H, KF, T, M&gt; AsHashDB&lt;H, T&gt; for MemoryDB&lt;H, KF, T, M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: KeyHasher,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Default + PartialEq&lt;T&gt; + for&lt;'a&gt; From&lt;&amp;'a [u8]&gt; + Clone + Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;KF: KeyFunction&lt;H&gt; + Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: MemTracker&lt;T&gt; + Send + Sync,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["node_bench"] = [{"text":"impl&lt;'a&gt; AsHashDB&lt;Blake2Hasher, Vec&lt;u8&gt;&gt; for SimpleTrie&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["sp_trie"] = [{"text":"impl&lt;'a, DB, H, T&gt; AsHashDB&lt;H, T&gt; for KeySpacedDBMut&lt;'a, DB, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HashDB&lt;H, T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: Hasher,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Default + PartialEq&lt;T&gt; + for&lt;'b&gt; From&lt;&amp;'b [u8]&gt; + Clone + Send + Sync,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()