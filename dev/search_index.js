var documenterSearchIndex = {"docs":
[{"location":"propositional_logic/#Propositional-Logic","page":"Propositional Logic","title":"Propositional Logic","text":"","category":"section"},{"location":"propositional_logic/","page":"Propositional Logic","title":"Propositional Logic","text":"using Deductive\n\n@symbols a b\n\ntableau(a ∧ b)      # true\ntableau(a ∧ b, ¬a)  # false, because contradiction\n\nprintln(truthtable(a ∧ b))\n#= Outputs:\n Row │ a      b      a ∧ b \n     │ Bool   Bool   Bool  \n─────┼─────────────────────\n   1 │ false  false  false\n   2 │  true  false  false\n   3 │ false   true  false\n   4 │  true   true   true\n=#","category":"page"},{"location":"propositional_logic/","page":"Propositional Logic","title":"Propositional Logic","text":"Several operators are exported and their use is required in defining statements.","category":"page"},{"location":"propositional_logic/","page":"Propositional Logic","title":"Propositional Logic","text":"Symbol Completion Sequence Description\n¬ \\neg Negation\n∧ \\wedge Logical Conjunction\n∨ \\vee Logical Disjunction\n→ \\rightarrow Material Implication\n⟷ \\leftrightarrow Material Equivalence","category":"page"},{"location":"internals/assertion_proofs/#Assertion-Proofs","page":"Assertion Proofs","title":"Assertion Proofs","text":"","category":"section"},{"location":"internals/assertion_proofs/","page":"Assertion Proofs","title":"Assertion Proofs","text":"Assertion proofs are a kind of proof structured in a manner where one starts with a set of statements they would like to prove in terms of another set of statements. Deductive makes this distinction so that a given-goal structure can be defined which describes such a system. These systems are useful for a number of reasons, such as allowing for clear meta-transformations like a contradictory or contrapositive system, better reflecting the underlying form which mathematical proofs usually fall under, and cutting down on search algorithm costs by utilizing inference rules as a means of statement transformation instead of replacement rules, which can be applied recursively to an expression tree rather than just the \"top\".","category":"page"},{"location":"internals/assertion_proofs/","page":"Assertion Proofs","title":"Assertion Proofs","text":"GivenGoal\ngiven\ngoal","category":"page"},{"location":"internals/assertion_proofs/#Deductive.GivenGoal","page":"Assertion Proofs","title":"Deductive.GivenGoal","text":"GivenGoal(given::Set{AbstractExpression}, goal::Set{AbstractExpression})\n\nInitialize a structure representing a proof starting and ending point, with given and goal sets of expressions respectively. This structure on its own isn't enough to conduct a proof, however. A proof requires both a GivenGoal and a logical calculus which defines the allowed elementary operations on expressions. For example, if operating within propositional logic, see the  PropositionalCalculus definition.\n\n\n\n\n\n","category":"type"},{"location":"internals/assertion_proofs/#Deductive.given","page":"Assertion Proofs","title":"Deductive.given","text":"given(gg::GivenGoal)\n\nReturns the given part of a GivenGoal\n\n\n\n\n\n","category":"function"},{"location":"internals/assertion_proofs/#Deductive.goal","page":"Assertion Proofs","title":"Deductive.goal","text":"goal(gg::GivenGoal)\n\nReturns the goal part of a GivenGoal\n\n\n\n\n\n","category":"function"},{"location":"internals/expressions/#Expressions","page":"Expressions","title":"Expressions","text":"","category":"section"},{"location":"internals/expressions/","page":"Expressions","title":"Expressions","text":"Fundamentally software attempting to both define and prove theorems requires an extensive set of utilities surrounding the function of manipulating expressions. The lowest level of abstraction of expressions in this package is AbstractExpression, from which all expression types inherit from. Anything from symbols to sets are expressions, and a good rule for determining whether something is an expression or not is if it would make mathematical sense to write such an expression down as either a statement or a mathematical object. Logical operations are not expressions since on their own they carry no meaning without arguments.","category":"page"},{"location":"internals/expressions/#Logical-Symbols","page":"Expressions","title":"Logical Symbols","text":"","category":"section"},{"location":"internals/expressions/","page":"Expressions","title":"Expressions","text":"LogicalSymbol\n@symbols\nname(::LogicalSymbol)\nmetadata(::LogicalSymbol)","category":"page"},{"location":"internals/expressions/#Deductive.LogicalSymbol","page":"Expressions","title":"Deductive.LogicalSymbol","text":"LogicalSymbol(name::Symbol, metadata::Any=nothing)\n\nRepresent a logical symbolically with a provided name. By default the attached metadata is set to nothing.\n\n\n\n\n\n","category":"type"},{"location":"internals/expressions/#Deductive.@symbols","page":"Expressions","title":"Deductive.@symbols","text":"Define any number of LogicalSymbols with the names provided.\n\nExamples\n\njulia> @symbols a  # defines symbol `a` in the current scope\n\njulia> @symbols b c d  # defines symbols `a`, `b`, and `c`\n\njulia> @symbols α β γ  # defines symbols `α`, `β`, and `γ`\n\n\n\n\n\n","category":"macro"},{"location":"internals/expressions/#Deductive.name-Tuple{LogicalSymbol}","page":"Expressions","title":"Deductive.name","text":"name(sym::LogicalSymbol)\n\nThe name of the symbol provided at instantiation. Equivalent to symbol(sym).\n\n\n\n\n\n","category":"method"},{"location":"internals/expressions/#Deductive.metadata-Tuple{LogicalSymbol}","page":"Expressions","title":"Deductive.metadata","text":"metadata(sym::LogicalSymbol)\n\nThe metadata of the symbol provided at instantiation, if any. Returns nothing if none was provided.\n\n\n\n\n\n","category":"method"},{"location":"#Deductive","page":"Deductive","title":"Deductive","text":"","category":"section"},{"location":"","page":"Deductive","title":"Deductive","text":"Welcome to the Deductive Documentation!","category":"page"},{"location":"","page":"Deductive","title":"Deductive","text":"note: Note\nAs of now these docs are mainly for advanced users, as many of the user-facing features are not ready for release yet. Take a look at Deductive's README for a basic introduction to the stable front-facing user features.","category":"page"},{"location":"#Installation","page":"Deductive","title":"Installation","text":"","category":"section"},{"location":"","page":"Deductive","title":"Deductive","text":"Open up a Julia REPL, press the character ] to enter package manager mode, and type the following command:","category":"page"},{"location":"","page":"Deductive","title":"Deductive","text":"pkg> add Deductive","category":"page"},{"location":"#Basic-Usage","page":"Deductive","title":"Basic Usage","text":"","category":"section"},{"location":"","page":"Deductive","title":"Deductive","text":"The best way to get accustomed to the syntax of Deductive is to start with Propositional Logic.","category":"page"}]
}
