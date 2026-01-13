# Nimbus — README Notes

This file contains internal notes for maintainers to keep the main README concise.

---

## Purpose

Nimbus is a Base-aligned, read-only validation utility focused on:
- RPC connectivity checks
- Basic chain metadata inspection (block height)
- Safe read-only probes (balance/code presence)

Nimbus does **not** send transactions as part of its default workflows.

---

## Repo Conventions

- Network config lives under `config/`
- Sample outputs belong under `reports/`
- Documentation under `docs/`
- Avoid hardcoding RPC URLs and chain IDs inside scripts

---

## Suggested README Sections

- What Nimbus does (read-only checks)
- Supported networks (Base Sepolia initially)
- Quickstart (install + run validation)
- Configuration (how to override RPC)
- Troubleshooting (where logs live)

---

## Maintenance Checklist

- [ ] Confirm `chainId` is accurate (Base Sepolia: 84532)
- [ ] Confirm default RPC is reachable
- [ ] Keep fallback RPC list short and HTTPS-only
- [ ] Do not commit secrets or private keys
- [ ] Update `reports/snapshot.log` when validation behavior changes

_Last updated: initial scaffold_
