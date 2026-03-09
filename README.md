# 🏛️ Central Automation Governance

This repository provides shared GitHub Actions for the organization. 

To balance **Agility** with **Security**, we follow these standards:

## 🔒 Security Policy: SHA Pinning
* **Requirement:** All caller repositories MUST pin to a commit SHA, not a branch or tag.
* **Reason:** Ensures immutability and protects against supply chain attacks.
* **Enforcement:** Enforced via Repository/Org Action Policies.

## 📦 Release Strategy: Semantic Versioning (SemVer)
1. **Develop:** Features are merged into `main`.
2. **Release:** A Git Tag (e.g., `v1.2.0`) is created to signal a stable release.
3. **Update:** Dependabot detects the new Tag and proposes a SHA update to all subscriber repos.

## 🤖 Maintenance
We use **Dependabot** to automate the "boring" part of security. It maps our human-friendly tags to the machine-required SHAs automatically.