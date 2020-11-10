initSidebarItems({"enum":[["Error","Error occurred when iterating with the tree."],["FinalizationResult","Result of finalizing a node (that could be a part of the tree or not)."]],"struct":[["ForkTree","A tree data structure that stores several nodes across multiple branches. Top-level branches are called roots. The tree has functionality for finalizing nodes, which means that that node is traversed, and all competing branches are pruned. It also guarantees that nodes in the tree are finalized in order. Each node is uniquely identified by its hash but can be ordered by its number. In order to build the tree an external function must be provided when interacting with the tree to establish a node's ancestry."]]});