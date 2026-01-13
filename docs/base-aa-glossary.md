# Nimbus — Base AA Glossary

A lightweight glossary for Base account abstraction (AA) terminology.
Useful even for read-only tools because address types can vary.

---

## EOA (Externally Owned Account)

A “regular” wallet address controlled by a private key.
- No bytecode at the address (`eth_getCode` returns `0x`)
- Signs transactions directly

---

## Smart Account (Contract Account)

A contract-based account that can implement custom validation logic.
- Bytecode is present at the address
- May support batching, session keys, recovery, or policy controls

Read-only detection tip:
- Use `eth_getCode(address)` to determine if an address is a contract.

---

## Bundler

A service that aggregates user intents (often “user operations”) and submits them onchain.
- Improves UX by abstracting transaction submission details

---

## Paymaster

A component that can sponsor gas or enforce policy.
- Enables “gasless” UX patterns
- Requires careful policy and security constraints

---

## EntryPoint (Concept)

A common pattern in AA systems for coordinating validation/execution for smart accounts.
- Your tool may never call it directly, but it may appear in logs or docs

---

## Why it matters for Nimbus

Nimbus stays read-only, but it should:
- Never assume an address is EOA
- Treat “address type” as unknown until checked
- Keep network configuration explicit and centralized

_Last updated: initial scaffold_
