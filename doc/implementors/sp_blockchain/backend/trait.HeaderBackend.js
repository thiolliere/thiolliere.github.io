(function() {var implementors = {};
implementors["sc_client_api"] = [{"text":"impl&lt;Block:&nbsp;BlockT&gt; HeaderBackend&lt;Block&gt; for Blockchain&lt;Block&gt;","synthetic":false,"types":[]}];
implementors["sc_client_db"] = [{"text":"impl&lt;Block&gt; HeaderBackend&lt;Block&gt; for LightStorage&lt;Block&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: BlockT,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Block:&nbsp;BlockT&gt; HeaderBackend&lt;Block&gt; for BlockchainDb&lt;Block&gt;","synthetic":false,"types":[]}];
implementors["sc_service"] = [{"text":"impl&lt;B, E, Block, RA&gt; HeaderBackend&lt;Block&gt; for Client&lt;B, E, Block, RA&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Backend&lt;Block&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: CallExecutor&lt;Block&gt; + Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: BlockT,<br>&nbsp;&nbsp;&nbsp;&nbsp;RA: Send + Sync,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;B, E, Block, RA, '_&gt; HeaderBackend&lt;Block&gt; for &amp;'_ Client&lt;B, E, Block, RA&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Backend&lt;Block&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: CallExecutor&lt;Block&gt; + Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: BlockT,<br>&nbsp;&nbsp;&nbsp;&nbsp;RA: Send + Sync,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()